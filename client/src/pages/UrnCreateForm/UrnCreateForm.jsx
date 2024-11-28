import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUrn } from "../../models/Urn";

export default function CatCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const urn = await createUrn(formData);
    if (urn.status === 201) {
      redirectToSuccessPage(urn.payload._id);
    } else {
      setInfo(urn.msg);
    }
  }
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  
  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  }

  const redirectToSuccessPage = (id) => {
    return navigate(`/createdurn/${id}`)
  }

  return (
    <>
      <h1>Cat create form</h1>
      <form>
        <input type="text" name="name" required placeholder="Enter cat name" onChange={e => handleChange(e)}/>
        <input type="number" name="legs" required placeholder="Enter legs" onChange={e => handleChange(e)}/>
        <input type="text" name="color" required placeholder="Enter color" onChange={e => handleChange(e)}/>
        <button onClick={handlePost}>
          Create cat
        </button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
