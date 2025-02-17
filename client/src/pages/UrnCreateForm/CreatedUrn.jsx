import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CreatedUrn() {
  const { id } = useParams();

  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 grid_background min-h-screen">
        <h1 className="text-2xl font-bold">Created Urn</h1>
        <p className="text-lg">
          <span className="text-gray-800 font-normal">ID:</span>  
          <span className="text-gray-600 font-light ml-2">{id}</span>
        </p>
        <Link to={`/urn/${id}`}>
          <Button className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
            View Urn
          </Button>
        </Link>
        <Link to={"/adminpanel"}>
          <Button variant="outline">Go back</Button>
        </Link>
      </div>
    </>
  );
}
