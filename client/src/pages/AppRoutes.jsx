import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import About from "./About/About";
import UrnCreateForm from "./UrnCreateForm/UrnCreateForm";
import UrnUpdateForm from "./UrnUpdateForm/UrnUpdateForm";
import UrnView from "./UrnView/UrnView";
import UrnList from "./UrnList/UrnList";
import CreatedUrn from "./UrnCreateForm/CreatedUrn";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/createurn" element={<UrnCreateForm />} />
          <Route path="/updatecat/:id" element={<UrnUpdateForm />} />
          <Route path="/urn/:id" element={<UrnView />} />
          <Route path="/urns" element={<UrnList />} />
          <Route path="/createdurn/:id" element={<CreatedUrn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
