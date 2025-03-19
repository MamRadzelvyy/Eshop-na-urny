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
import Blog1 from "./Blog/Blog1";
import Blog2 from "./Blog/Blog2";
import Blog3 from "./Blog/Blog3";
import Blog4 from "./Blog/Blog4";
import Blog5 from "./Blog/Blog5";
import Blog6 from "./Blog/Blog6";
import BetonoveUrny from "./UrnsPanel/BetonoveUrny";
import DrevenaUrny from "./UrnsPanel/DrevenaUrny";
import EkologickeUrny from "./UrnsPanel/EkologickeUrny";
import KameneUrny from "./UrnsPanel/KameneUrny";
import KeramickeUrny from "./UrnsPanel/KeramickeUrny";
import KovoveUrny from "./UrnsPanel/KovoveUrny";
import Cart from "./Cart/Cart";
import CasteDotazy from "./FooterPanely/CasteDotazy";
import DobaDodaniZbozi from "./FooterPanely/DobaDodaniZbozi";
import DodatekKeZpracovaniDat from "./FooterPanely/DodatekKeZpracovaniDat";
import DokumentyKeStazeni from "./FooterPanely/DokumentyKeStazeni";
import MoznostiPlatby from "./FooterPanely/MoznostiPlatby";
import MoznostiDoruceni from "./FooterPanely/MoznostiDoruceni";
import ObchodniPodminky from "./FooterPanely/ObchodniPodminky";
import OchranaOsobnichUdaju from "./FooterPanely/OchranaOsobnichUdaju";
import Poptavka from "./FooterPanely/Poptavka";
import VraceniAReklamace from "./FooterPanely/VraceniAReklamace";
import VydejnyEshop from "./FooterPanely/VydejnyEshop";
import MaleZvireciUrny from "./AnimalsUrns/MaleZvireciUrny";
import StredniZvireciUrny from "./AnimalsUrns/StredniZvireciUrny";
import VelkeZvireciUrny from "./AnimalsUrns/VelkeZvireciUrny";
import PoptavkaAdmin from "./AdminPanel/PoptavkaAdmin";

import AuthProvider from "../../src/context/AuthContext";
export default function AppRoutes() {
  return (
    <>
    <AuthProvider>
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
          <Route path="/poptavkaadmin/" element={<PoptavkaAdmin />} />

          {/*Autentizace*/}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />

          {/*Header Panely*/}
          <Route path="/urnspanel" element={<UrnsPanel />} />
          <Route path="/animalurns" element={<AnimalUrns />} />
          <Route path="/about" element={<About />} />
          <Route path="/cooperation" element={<Cooperation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogView />} />
          <Route path="/contact" element={<Contact />} />

          {/*Blog Panely*/}
          <Route path="/pohreb-a-jeho-narizeni" element={<Blog1 />} />
          <Route path="/vyber-urny-a-pece" element={<Blog2 />} />
          <Route path="/umrti-zvirete" element={<Blog3 />} />
          <Route path="/kremace-a-zpusoby-pohrbu" element={<Blog4 />} />
          <Route path="/udalosti-a-zajimavosti" element={<Blog5 />} />
          <Route path="/umrti-a-pravni-zalezitosti" element={<Blog6 />} />

          {/*Footer Panely*/}
          <Route path="/caste-dotazy" element={<CasteDotazy />} />
          <Route path="/doba-dodani-zbozi" element={<DobaDodaniZbozi />} />
          <Route path="/dodatek-ke-zpracovani-dat" element={<DodatekKeZpracovaniDat />} />
          <Route path="/dokumenty-ke-stazeni" element={<DokumentyKeStazeni/>} />
          <Route path="/moznosti-platby" element={<MoznostiPlatby />} />
          <Route path="/moznosti-doruceni" element={<MoznostiDoruceni />} />
          <Route path="/obchodni-podminky" element={<ObchodniPodminky/>} />
          <Route path="/ochrana-osobnich-udaju" element={<OchranaOsobnichUdaju/>} />
          <Route path="/poptavka" element={<Poptavka/>} />
          <Route path="/vraceni-a-reklamace" element={<VraceniAReklamace />} />
          <Route path="/vydejny-eshop" element={<VydejnyEshop />} />

          {/*Urny Panely*/}
          <Route path="/betonove-urny" element={<BetonoveUrny />} />
          <Route path="/drevene-urny" element={<DrevenaUrny />} />
          <Route path="/ekologicke-urny" element={<EkologickeUrny />} />
          <Route path="/kamenne-urny" element={<KameneUrny />} />
          <Route path="/keramicke-urny" element={<KeramickeUrny />} />
          <Route path="/kovove-urny" element={<KovoveUrny />} />

          {/*Zvířecí Urny Panely*/}
          <Route path="/male-zvireci-urny" element={<MaleZvireciUrny />} />
          <Route path="/stredni-zvireci-urny" element={<StredniZvireciUrny />} />
          <Route path="/velke-zvireci-urny" element={<VelkeZvireciUrny />} />

        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}
