import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [carItem, setCartItem] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/hasibimamhridoy/books-store-reward/main/public/product.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCart(data);
      });
  }, []);

  // console.log(cart);

  const handleClickBtn = (product) => {
    setCartItem([...carItem, product]);
  };

  // console.log(carItem);

  return (
    <>
      <h3 className="text-3xl font-bold text-teal-400 mb-10 ">
        Jhankar Mahbub Books Store
      </h3>

      <section className="flex justify-between gap-5 ">
        <div className="grid grid-cols-3 gap-8">
          {/* Loop chalano every product */}
          {cart.map((product) => {
            // console.log(product);
            const { name, image, originalPrice, rating, discountPrice } = product;
            return (
              <div
                key={name}
                className="border-2 w-72 text-left  pl-10 py-5 rounded-lg"
              >
                <img className="w-52 h-44 rounded-lg" src={image} alt="" />
                <h1 className="text-xl font-medium mt-3">{name}</h1>
                <div className="flex font-bold">
                <p >{originalPrice}TK.___</p>
                <p>{discountPrice}TK</p>
                </div>
                <p>rating {rating}</p>
                <div className="mt-4">
                  <button
                    onClick={() => handleClickBtn(product)}
                    className="w-32 h-10   rounded-md bg-teal-400 text-white text-xs font-bold"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="w-full border-2 rounded-lg bg-slate-100 ">
          <h1 className="text-3xl font-bold mb-8 text-teal-400 ">Total Cart Item</h1>
          </div>
          <div className="bg-gray-50  mt-2">
            <table className="table-auto w-80 border-2 text-center ">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {carItem.map((cart) => {
                  console.log(cart);

                  return (
                    <tr key={cart.inx}>
                      <td>{cart.name}</td>
                      <td>${cart.discountPrice}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
