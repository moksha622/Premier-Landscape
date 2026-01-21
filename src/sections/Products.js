import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

// Product images
import paversImg from "../assets/products/pavers-stones.jpg";
import plantsImg from "../assets/products/plants-trees-sod.png";
import mulchImg from "../assets/products/mulch-compost.jpg";
import soilImg from "../assets/products/soil-sand.png";
import gardenImg from "../assets/products/garden-edging.jpg";
import outdoorImg from "../assets/products/outdoor-structures.jpg";

const Products = () => {
  const products = [
    { name: "Pavers and Stones", img: paversImg, link: "/pavers-and-stones" },

    { name: "Plants, Trees and Sod", img: plantsImg, link: "/plants-and-trees-and-sod" },
    { name: "Mulch and Compost", img: mulchImg, link: "/mulch-and-compost" },
    { name: "Soil and Sand", img: soilImg, link: "/soil-and-sand" },
    { name: "Garden Edging and Wall Blocks", img: gardenImg, link: "/garden-edging-and-wall-blocks" },
    { name: "Outdoor Structures", img: outdoorImg, link: "/outdoor-structures" },
  ];

  return (
    <section className="products-section" id="products">
      <h2 className="products-heading">Products</h2>

      <div className="products-grid">
        {products.map((product, index) => (
          <Link to={product.link} key={index} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.img} alt={product.name} className="product-image" />
            </div>
            <span className="product-name">{product.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;

