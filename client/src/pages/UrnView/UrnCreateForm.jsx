import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUrn } from "../../models/Urn";
import { Form } from "../../components/ui/form.jsx";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UrnCreateForm() {
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
    <>
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 grid_background min-h-screen">
        <h1 className="text-2xl">Urn create form</h1>
        <div className="flex flex-col gap-2 max-w-xl w-full">
          <Form>
            <Input
              className="w-full"
              type="text"
              name="name"
              required
              placeholder="Enter cat name"
              onChange={(e) => handleChange(e)}
            />
            <Input
              className="w-full"
              type="number"
              name="legs"
              required
              placeholder="Enter legs"
              onChange={(e) => handleChange(e)}
            />
            <Input
              className="w-full"
              type="text"
              name="color"
              required
              placeholder="Enter color"
              onChange={(e) => handleChange(e)}
            />

            <Button
              onClick={handlePost}
              className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Create Urn
            </Button>
          </Form>
        </div>
        <Link to={"/adminpanel"}>
          <Button variant="outline">Go back</Button>
        </Link>
      </div>
    </>
  );
}
