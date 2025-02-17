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

  if (isLoaded === null) {
    return <p>Urny nenalezeny</p>;
  }

  if (!isLoaded) {
    return <p>Urny se načítají...</p>;
  }

  return (
    <>
      <div className="container mx-auto flex flex-col justify-center gap-4 grid_background min-h-screen">
        <div className="max-w-3xl mx-auto w-full">
          <h1 className="text-2xl font-bold">Urn view</h1>
          <p className="font-medium block w-full">
            ID:{" "}
            <span className="text-gray-600 font-light float-right">{id}</span>
          </p>
          <p className="font-medium block w-full">
            Name:{" "}
            <span className="text-gray-600 font-light float-right">
              {urn.name}
            </span>
          </p>
          <p className="font-medium block w-full">
            Legs:{" "}
            <span className="text-gray-600 font-light float-right">
              {urn.legs}
            </span>
          </p>
          <p className="font-medium block w-full">
            Color:{" "}
            <span className="text-gray-600 font-light float-right">
              {urn.color}
            </span>
          </p>
          <form className="flex flex-col gap-2">
            <Input type="text" placeholder={urn.name} onChange={handleChange} />
            <Button
              onClick={handleDelete}
              className="bg-red-950 hover:bg-red-900 text-lg py-4 px-6"
            >
              Delete
            </Button>
            {info && <p className="text-red-950 text-center">{info}</p>}
          </form>

          {/* Flex container pro tlačítka */}
          <div className="flex justify-between mt-4">
            <Link to={`/updateurn/${id}`}>
              <Button className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                Update Urn
              </Button>
            </Link>
            <Link to={"/adminpanel"}>
              <Button variant="outline">Go back</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
