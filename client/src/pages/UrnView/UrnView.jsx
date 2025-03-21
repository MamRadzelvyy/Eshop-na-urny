import { Link, useParams, useNavigate } from "react-router-dom";
import { getUrn, deleteUrn } from "../../models/Urn";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UrnView() {
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
        navigate("/adminpanel");
      } else {
        setInfo(data.msg);
      }
    } else {
      setInfo("Chybný vstup! 😡");
    }
  };

  if (isLoaded === null) return <p>Urna nenalezena</p>;
  if (!isLoaded) return <p>Načítání...</p>;

  return (
    <div className="container mx-auto flex flex-col justify-center gap-4 grid_background min-h-screen">
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="text-2xl font-bold mb-2">Urn detail</h1>

        <div className="space-y-2 text-sm">
          <p><strong>ID:</strong> {id}</p>
          <p><strong>Název:</strong> {urn.name}</p>
          <p><strong>Cena:</strong> {urn.price} Kč</p>
          <p><strong>Barva:</strong> {urn.color}</p>
          <p><strong>Materiál:</strong> {urn.material}</p>
          <p><strong>Určeno pro:</strong> {urn.for}</p>
          <p><strong>Top produkt:</strong> {urn.top || "Ne"}</p>
          <p><strong>Popis:</strong> {urn.description}</p>
          <p><strong>Obrázek:</strong> <a href={urn.imagePath} target="_blank" rel="noreferrer" className="text-blue-500 underline">{urn.imagePath}</a></p>
        </div>

        <form className="flex flex-col gap-2 mt-4">
          <Input
            type="text"
            placeholder="Zadej přesný název pro potvrzení smazání"
            onChange={handleChange}
          />
          <Button
            onClick={handleDelete}
            className="bg-red-950 hover:bg-red-900 text-lg py-4 px-6"
          >
            Delete
          </Button>
          {info && (
            <p className="text-red-950 text-center">{info}</p>
          )}
        </form>

        <div className="flex justify-between mt-6 gap-2">
          <Link to={`/updateurn/${id}`} className="w-full">
            <Button className="w-full text-white bg-slate-700 hover:bg-slate-800">
              Update Urn
            </Button>
          </Link>
          <Link to={"/adminpanel"} className="w-full">
            <Button variant="outline" className="w-full">Go back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
