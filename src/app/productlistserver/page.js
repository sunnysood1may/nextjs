import Product from "./product";

async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function Page() {
  let products = await productList();
  console.log(products);

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
            <td>Action</td>
          </tr>
          {products.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>
                <Product price={item.price}></Product>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
