import { Link, useParams } from "react-router-dom";

export default function CreatedUrn() {
  const { id } = useParams();  

  return (
    <>
      <p>Created cat: { id }</p>
      <Link to={`/urn/${id}`}>
        <p>View cat</p>
      </Link>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
