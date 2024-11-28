import { Link, useParams, useNavigate } from "react-router-dom";
import { getUrn, deleteUrn } from "../../models/Urn";
import { useState, useEffect } from "react";

export default function CatView() {
  const { id } = useParams();
  const [urn, setUrn] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getUrn(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setUrn(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (urn.name === formData) {
      const data = await deleteUrn(id);
      if (data.status === 200) {
        navigate("/");
      } else {
        setInfo(data.msg);
      }
    } else {
      setInfo("Wrong input!");
    }
  };

  if (isLoaded === null) {
    return (
      <>
        <p>Urn not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Urn is loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Urn view</h1>
      <p>{id}</p>
      <p>{urn.name}</p>
      <p>{urn.legs}</p>
      <p>{urn.color}</p>
      <form>
        <input type="text" placeholder={urn.name} onChange={handleChange} />
        <button onClick={handleDelete}>Delete</button>
        <p>{info}</p>
      </form>
      <Link to={`/updateurn/${id}`}>
        <p>Update Urn</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
