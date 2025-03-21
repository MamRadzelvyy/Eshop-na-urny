import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateUrn, getUrn } from "../../models/Urn";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form } from "../../components/ui/form.jsx";
import { Textarea } from "@/components/ui/textarea";

export default function UrnUpdateForm() {
  const { id } = useParams();
  const [urn, setUrn] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const load = async () => {
    const data = await getUrn(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setUrn(data.payload);
      setFormData(data.payload); // předvyplnit formulář
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
    return <p>Urna nenalezena</p>;
  }

  if (!isLoaded) {
    return <p>Načítání...</p>;
  }

  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-2 grid_background min-h-screen">
      <h1 className="text-2xl font-bold">Urn Update Form</h1>
      <div className="flex flex-col gap-2 max-w-xl w-full">
        <p className="font-medium block w-full text-center">
          ID: <span className="text-gray-600 font-light">{id}</span>
        </p>
        <Form>
          <Input
            type="text"
            defaultValue={urn.name}
            name="name"
            required
            placeholder="Název urny"
            onChange={handleChange}
          />
          <Input
            type="number"
            defaultValue={urn.price}
            name="price"
            required
            placeholder="Cena"
            onChange={handleChange}
          />
          <Input
            type="text"
            defaultValue={urn.color}
            name="color"
            required
            placeholder="Barva"
            onChange={handleChange}
          />
          <Input
            type="text"
            defaultValue={urn.imagePath}
            name="imagePath"
            required
            placeholder="Cesta k obrázku nebo URL"
            onChange={handleChange}
          />
          <Textarea
            defaultValue={urn.description}
            name="description"
            required
            placeholder="Popis"
            onChange={handleChange}
          />

          <select
            name="for"
            required
            className="w-full p-2 border rounded-md"
            defaultValue={urn.for}
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
            defaultValue={urn.top}
            onChange={handleChange}
          >
            <option value="">–</option>
            <option value="TOP">TOP</option>
            <option value="test">test</option>
          </select>

          <select
            name="material"
            required
            className="w-full p-2 border rounded-md"
            defaultValue={urn.material}
            onChange={handleChange}
          >
            <option value="Ekologické urny">Ekologické urny</option>
            <option value="Kovové urny">Kovové urny</option>
            <option value="Keramické urny">Keramické urny</option>
            <option value="Kamenné urny">Kamenné urny</option>
            <option value="Betonové urny">Betonové urny</option>
            <option value="Dřevěné urny">Dřevěné urny</option>
            <option value="Dřevěné urny">Zvířecí urny S</option>
            <option value="Dřevěné urny">Zvířecí urny M</option>
            <option value="Dřevěné urny">Zvířecí urny L</option>
            <option value="test">test</option>
          </select>

          <Button
            onClick={handlePost}
            className="w-full text-white bg-slate-700 hover:bg-slate-800"
          >
            Update Urn
          </Button>
        </Form>
      </div>
      <Link to={"/adminpanel"}>
        <Button variant="outline">Go back</Button>
      </Link>
    </div>
  );
}
