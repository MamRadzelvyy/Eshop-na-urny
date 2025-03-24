import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUrn } from "../../models/Urn";
import { Form } from "../../components/ui/form.jsx";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function UrnCreateForm() {
  const [formData, setFormData] = useState({});
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const urn = await createUrn(formData);
    if (urn.status === 201) {
      redirectToSuccessPage(urn.payload._id);
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

  const redirectToSuccessPage = (id) => {
    return navigate(`/createdurn/${id}`);
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-2 grid_background min-h-screen">
      <h1 className="text-2xl font-bold">Urn Create Form</h1>
      <div className="flex flex-col gap-2 max-w-xl w-full">
        <Form>
          <Input
            className="w-full"
            type="text"
            name="name"
            required
            placeholder="Název urny"
            onChange={handleChange}
          />
          <Input
            className="w-full"
            type="number"
            name="price"
            required
            placeholder="Cena"
            onChange={handleChange}
          />
          <Input
            className="w-full"
            type="text"
            name="color"
            required
            placeholder="Barva"
            onChange={handleChange}
          />
          <Input
            className="w-full"
            type="text"
            name="imagePath"
            required
            placeholder="Cesta k obrázku nebo URL"
            onChange={handleChange}
          />
          <Textarea
            className="w-full"
            name="description"
            required
            placeholder="Popis"
            onChange={handleChange}
          />

          <select
            name="for"
            required
            className="w-full p-2 border rounded-md"
            defaultValue="Lidská"
            onChange={handleChange}
          >
            <option value="Lidská">Lidská</option>
            <option value="Zvířecí">Zvířecí</option>
            <option value="test">test</option>
          </select>

          <select
            name="top"
            required
            className="w-full p-2 border rounded-md"
            defaultValue=""
            onChange={handleChange}
          >
            <option value="normální">normální</option>
            <option value="TOP">TOP</option>
            <option value="test">test</option>
          </select>

          <select
            name="material"
            required
            className="w-full p-2 border rounded-md"
            defaultValue="test"
            onChange={handleChange}
          >
            <option value="Ekologické urny">Ekologické urny</option>
            <option value="Kovové urny">Kovové urny</option>
            <option value="Keramické urny">Keramické urny</option>
            <option value="Kamenné urny">Kamenné urny</option>
            <option value="Betonové urny">Betonové urny</option>
            <option value="Dřevěné urny">Dřevěné urny</option>
            <option value="Zvířecí urny S">Zvířecí urny S</option>
            <option value="Zvířecí urny M">Zvířecí urny M</option>
            <option value="Zvířecí urny L">Zvířecí urny L</option>
            <option value="test">test</option>
          </select>

          <Button
            onClick={handlePost}
            className="w-full text-white bg-slate-700 hover:bg-slate-800"
          >
            Create Urn
          </Button>
        </Form>
      </div>
      <Link to={"/adminpanel"}>
        <Button variant="outline">Go back</Button>
      </Link>
    </div>
  );
}
