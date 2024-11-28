import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateUrn, getUrn } from "../../models/Urn";

export default function CatUpdateForm() {
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

  const postForm = async () => {
    const urn = await updateUrn(id, formData);
    if (urn.status === 200) {
      navigate(`/urn/${id}`);
    } else {
      setInfo(urn.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  useEffect(() => {
    load();
  }, []);

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
      <h1>Cat update form</h1>
      <p>{id}</p>
      <form>
        <input
          type="text"
          defaultValue={urn.name}
          name="name"
          required
          placeholder="Enter urn name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          defaultValue={urn.legs}
          name="legs"
          required
          placeholder="Enter legs"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          defaultValue={urn.color}
          name="color"
          required
          placeholder="Enter color"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update urn</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
