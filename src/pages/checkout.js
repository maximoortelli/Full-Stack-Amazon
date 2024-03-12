/* eslint-disable jsx-a11y/alt-text */
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Image from "next/image";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { NumericFormat } from "react-number-format";
import { useSession } from "next-auth/react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

  return (
    <div className="bg-gray-200">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            alt=""
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4 font-semibold text-center">
              {items.length === 0
                ? "Your amazon Basket is empty"
                : "Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-md items-center">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold">
                  <NumericFormat
                    value={total}
                    displayType={"text"}
                    prefix={"£"}
                  />
                </span>
              </h2>

              {session ? (
                <PayPalScriptProvider
                  options={{
                    clientId:
                      "ARVs66tYo0Z-uPltpDpEeVYhCJf15S8TkqpKQSGWybDyzXWpifYSBaxW4y6XT9bfdQKoL_e7T1xBE5MF",
                    locale: "en_US",
                  }}
                >
                  <PayPalButtons
                    createOrder={async () => {
                      try {
                        const res = await axios({
                          url: "http://localhost:3000/api/payment",
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                        });
                        return res.data.id;
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                    onCancel={(data) => console.log("Compra cancelada")}
                    onApprove={async (data, actions) => {
                      console.log(data);
                      actions.order?.capture();
                    }}
                    style={{
                      size: "large",
                      color: "blue",
                    }}
                  />
                </PayPalScriptProvider>
              ) : (
                <button className="button mt-2 from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed">
                  Sign in to checkout.
                </button>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
