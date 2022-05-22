import "./Products.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://fakerapi.it/api/v1/products?_quantity=12";

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        const content = response.data.data;
        setProducts(content);
      } catch (error) {
        setError(error);
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h1 className="loading">Fetching products' list...</h1>;

  if (error) alert(error);

  return (
    <div className="products">
      <div className="card-container">
        {products
          ? products?.map((product) => (
              <div className="card-flex" key={product.id}>
                <div className="card" >
                  <img
                    alt="product card"
                    className="product-img"
                    src={product.image}
                  />
                  <div className="card-body">
                    <h3 className="card-title">{product.name}</h3>
                    <p className="card-text">Net Price: ${product.net_price}</p>
                    <p className="card-text">Taxes: {product.taxes}%</p>
                    <p className="card-text">Price: ${product.price}</p>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Products;
