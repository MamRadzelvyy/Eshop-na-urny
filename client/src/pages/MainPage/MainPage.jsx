import "./MainPage.css";
import Content from "../../components/MainPage/Content";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <h1>Main page</h1>
      <Link to={"/createcat"}>
        <p>Create cat</p>
      </Link>
      <Link to={"/cats"}>
        <p>Cats</p>
      </Link>
    </>
  );
}
