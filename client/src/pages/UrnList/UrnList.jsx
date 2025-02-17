import { Link } from "react-router-dom";
import UrnLink from "./UrnLink";
import { useState, useEffect } from "react";
import { getUrns } from "../../models/Urn";
import { Button } from "@/components/ui/button";

export default function UrnList() {
  const [urns, setUrns] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getUrns();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setUrns(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Urns not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Urns are loading...</p>
      </>
    )
  }

  return (
    <>
<div className="container mx-auto flex flex-col items-center justify-center gap-2 grid_background min-h-screen">
      <h1 className="text-2xl font-bold">Urn list</h1>
      <div className="text-gray-600 font-light float-right">
      {
        urns.map((urn, index) => (
          <UrnLink key={index} {...urn} />
        ))
      }
      </div>
      <Link to={"/adminpanel"}>
      <Button variant="outline" >Go back</Button>
      </Link>
      </div>
    </>
  );
}
