import { useState } from "react";
import Input from "../../components/ui/input/Input";
import Styles from "./add.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !title || !description || !price) {
      return setError(true);
    }

    const product = {
      image: image,
      title: title,
      description: description,
      price: price,
    };

    const { data } = await axios.post(
      "https://express-crud-three.vercel.app/api/products",
      product
    );
    navigate("/");
  };

  return (
    <section className={Styles.add}>
      <div className="container">
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
          <span>{error ? "Iltimos Barcha Bo'limlarni To'ldiring" : null}</span>
          <Input
            label={"Image Url"}
            state={image}
            setState={setImage}
            error={error}
          />
          <Input
            label={"Product Title"}
            state={title}
            setState={setTitle}
            error={error}
          />
          <Input
            label={"Product Description"}
            state={description}
            setState={setDescription}
            error={error}
          />
          <Input
            label={"Product Price"}
            state={price}
            setState={setPrice}
            error={error}
          />
          <button>Create Product</button>
        </form>
      </div>
    </section>
  );
}

export default Add;
