"use client";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch("https://dummyjson.com/products").then((result) => {
      result.json().then((resp) => {
        console.log("result", resp.products);
        setProduct(resp.products);
      });
    });
  }

  return (
    <div>
      <h1>Product List</h1>
      <table border="1" align="left">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Category</td>
            <td>Price</td>
          </tr>
          {product.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
