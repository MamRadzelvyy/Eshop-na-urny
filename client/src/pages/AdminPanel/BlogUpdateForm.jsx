import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBlog, updateBlog } from "@/models/Blog.js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form } from "../../components/ui/form.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";

export default function BlogUpdateForm() {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getBlog(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setBlog(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const blogReq = await updateBlog(id, formData);
    if (blogReq.status === 200) {
      navigate(`/blog/${id}`);
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

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Blog nenalezen</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Blog se načítá...</p>
      </>
    );
  }

  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 grid_background min-h-screen">
        <h1 className="text-2xl font-bold">Blog update form</h1>
        <div className="flex flex-col gap-2 max-w-xl w-full">
          <p className="font-medium block w-full text-center">
            ID:{" "}
            <span className="text-gray-600 font-light text-center">{id}</span>
          </p>
          <Form>
            <Input
              type="text"
              defaultValue={blog.heading}
              name="heading"
              required
              placeholder="Nadpis"
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="text"
              defaultValue={blog.description}
              name="description"
              required
              placeholder="Popisek"
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="text"
              defaultValue={blog.imagePath}
              name="imagePath"
              required
              placeholder="Cesta k obrázku"
              onChange={(e) => handleChange(e)}
            />
                                    <Input
              type="text"
              defaultValue={blog.theme}
              name="theme"
              required
              placeholder="Téma"
              onChange={(e) => handleChange(e)}
            />
                        <Textarea
              defaultValue={blog.content}
              name="content"
              required
              placeholder="Obsah"
              onChange={(e) => handleChange(e)}
            />
            <Button
              onClick={handlePost}
              className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Update Blog
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
