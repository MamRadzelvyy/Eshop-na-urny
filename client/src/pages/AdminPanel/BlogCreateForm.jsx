import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createBlog } from "@/models/Blog.js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form } from "../../components/ui/form.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";

export default function BlogCreateForm() {
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const blogReq = await createBlog(formData);
    if (blogReq.status === 201) {
      navigate(`/blog/${blogReq.payload._id}`);
    } else {
      setInfo(blogReq.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 grid_background min-h-screen">
        <h1 className="text-2xl font-bold">Blog create form</h1>
        <div className="flex flex-col gap-2 max-w-xl w-full">
          <Form>
            <Input
              type="text"
              name="heading"
              required
              placeholder="Nadpis"
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="text"
              name="description"
              required
              placeholder="Popisek"
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="text"
              name="imagePath"
              required
              placeholder="Cesta k obrázku"
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="text"
              name="theme"
              required
              placeholder="Téma"
              onChange={(e) => handleChange(e)}
            />
            <Textarea
              name="content"
              required
              placeholder="Obsah"
              onChange={(e) => handleChange(e)}
            />
            <Button
              onClick={handlePost}
              className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Create Blog
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
