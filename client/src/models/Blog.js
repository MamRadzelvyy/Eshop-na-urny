export const getBlogs = async () => {
  const req = await fetch("http://localhost:3000/blog", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};

export const getNewestBlogs = async () => {
  const req = await fetch("http://localhost:3000/blog/newest", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
export const getBlog = async (id) => {
  const req = await fetch(`http://localhost:3000/blog/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
export const getBlogByTheme = async (themeQuery) => {
  const req = await fetch(`http://localhost:3000/blog?theme=${encodeURIComponent(themeQuery)}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
  export const createBlog = async (formData) => {
    const req = await fetch(`http://localhost:3000/blog`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  };
  export const updateBlog = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/blog/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(formData),
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  };
  export const deleteBlog = async (id) => {
    const req = await fetch(`http://localhost:3000/blog/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  };
  