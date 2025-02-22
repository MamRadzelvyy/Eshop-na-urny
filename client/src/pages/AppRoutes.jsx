import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import About from "./About/About";
import UrnCreateForm from "./UrnCreateForm/UrnCreateForm";
import UrnUpdateForm from "./UrnUpdateForm/UrnUpdateForm";
import UrnView from "./UrnView/UrnView";
import UrnList from "./UrnList/UrnList";
import CreatedUrn from "./UrnCreateForm/CreatedUrn";
import AdminPanel from "./AdminPanel/AdminPanel";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Cooperation from "./Cooperation/Cooperation";
import UrnsPanel from "./UrnsPanel/UrnsPanel";
import Contact from "./Contact/Contact";
import Blog from "./Blog/Blog";
import AnimalUrns from "./AnimalsUrns/AnimalUrns";
import Form from "./AdminPanel/Form";
import BlogView from "./Blog/BlogView";
import BlogAdmin from "./AdminPanel/Blog";
import BlogUpdateForm from "./AdminPanel/BlogUpdateForm";
import BlogCreateForm from "./AdminPanel/BlogCreateForm";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/*Home*/}
          <Route path="/" element={<MainPage />} />

          {/*Admin Panel*/}
          <Route path="/createurn" element={<UrnCreateForm />} />
          <Route path="/updateurn/:id" element={<UrnUpdateForm />} />
          <Route path="/urn/:id" element={<UrnView />} />
          <Route path="/urns" element={<UrnList />} />
          <Route path="/createdurn/:id" element={<CreatedUrn />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/form" element={<Form />} />
          <Route path="/blogadmin" element={<BlogAdmin />} />
          <Route path="/update-blog/:id" element={<BlogUpdateForm />} />
          <Route path="/create-blog/" element={<BlogCreateForm />} />

          {/*Autentizace*/}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/*Header Panely*/}
          <Route path="/urnspanel" element={<UrnsPanel />} />
          <Route path="/animalurns" element={<AnimalUrns />} />
          <Route path="/about" element={<About />} />
          <Route path="/cooperation" element={<Cooperation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogView />} />
          <Route path="/contact" element={<Contact />} />

          {/*Blog Panely*/}
          
          {/*Footer Panely*/}


        </Routes>
      </BrowserRouter>
    </>
  );
}
