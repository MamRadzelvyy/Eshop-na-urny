import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateUrn, getUrn } from "../../models/Urn";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form } from "../../components/ui/form.jsx";

export default function UrnUpdateForm() {
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
        <p>Urny nenalezeny</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Urny se načítají...</p>
      </>
    );
  }

  return (
    <>
    <div className="container mx-auto flex flex-col items-center justify-center gap-2 grid_background min-h-screen">
      <h1 className="text-2xl font-bold">Urn update form</h1>
      <div className="flex flex-col gap-2 max-w-xl w-full">
      <p className="text-gray-600 font-light float-right ">{id}</p>
      <Form>
        <Input
          type="text"
          defaultValue={urn.name}
          name="name"
          required
          placeholder="Enter urn name"
          onChange={(e) => handleChange(e)}
        />
        <Input
          type="number"
          defaultValue={urn.legs}
          name="legs"
          required
          placeholder="Enter legs"
          onChange={(e) => handleChange(e)}
        />
        <Input
          type="text"
          defaultValue={urn.color}
          name="color"
          required
          placeholder="Enter color"
          onChange={(e) => handleChange(e)}
        />
        <Button onClick={handlePost} className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                Update Urn
              </Button>
      </Form></div>
      <Link to={"/adminpanel"}>
      <Button variant="outline">Go back</Button>
      </Link>
      </div>
    </>
  );
}
