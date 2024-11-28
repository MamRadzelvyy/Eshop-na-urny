import { Link } from "react-router-dom";
import UrnLink from "./UrnLink";
import { useState, useEffect } from "react";
import { getUrns } from "../../models/Urn";

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
      <h1>Urn list</h1>
      {
        urns.map((urn, index) => (
          <UrnLink key={index} {...urn} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
