require("dotenv").config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const mongoose = require('mongoose');
const http = require("http");
const socketIo = require("socket.io");
const checkoutRoute = require('./routes/createCheckoutSession');
const MY_KEY = require("./mongodb.js");

mongoose
  .connect(MY_KEY)
  .then(() => console.log("✅ Databáze připojena"))
  .catch((err) => console.log(err));

var indexRouter = require('./routes/index');
var urnsRouter = require('./routes/urns');
var formRouter = require('./routes/form');
var blogRouter = require("./routes/blog");
var poptavkaRouter = require("./routes/poptavka");
const adminRouter = require("./routes/admin");
var adminLoginRouter = require("./routes/adminLogin");
var authRouter = require("./routes/auth");
var userRouter = require('./routes/userRoutes');
const orderRouter = require('./routes/orderRoutes');
var app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:5173"], // Oba frontend servery
    methods: ["GET", "POST", "DELETE"],
    credentials: true
  }
});

// Nastavení view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Middleware
app.use(logger('dev'));
app.use(cors({ origin: ["http://localhost:3000", "http://localhost:5173"], credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Socket.io připojení
io.on("connection", (socket) => {
  console.log(`⚡ Nové připojení: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log("❌ Uživatel odpojen");
  });
});

// Uložíme Socket.io do aplikace, aby byl dostupný v controllerech
app.set("socketio", io);

// Přidání routerů
app.use('/', indexRouter);
app.use('/urns', urnsRouter);
app.use('/form', formRouter);
app.use('/blog', blogRouter);
app.use('/poptavka', poptavkaRouter);
app.use("/auth", authRouter);
app.use("/admin", adminLoginRouter);
app.use("/admin", adminRouter);
app.use('/api', checkoutRoute);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);



// Chytání 404 chyb
app.use((req, res, next) => next(createError(404)));

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// Spuštění serveru
const PORT = 4000;
server.listen(PORT, () => console.log(`🚀 Server běží na portu ${PORT}`));

module.exports = app;
