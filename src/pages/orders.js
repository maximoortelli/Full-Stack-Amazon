/* eslint-disable jsx-a11y/alt-text */
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Image from "next/image";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";
import OrderProduct from "../components/OrderProduct";

const Orders = () => {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const { data: session } = useSession();
  
    return (
      <div className="bg-gray-200">
        <Header />
  
        <main className="lg:flex max-w-screen-2xl mx-auto">
          {/* Left */}
          <div className="flex-grow m-5 shadow-sm items-center justify-center">
            <Image
              alt=""
              src="https://links.papareact.com/ikj"
              width={1020}
              height={250}
              objectFit="contain"
              className="m-auto"
            />
  
            <div className="flex flex-col p-5 space-y-10 bg-white rounded-lg">
              <h1 className="text-3xl border-b pb-4 font-semibold text-center">
                {items.length === 0
                  ? "Your order section is empty"
                  : "Here are all your orders:"}
              </h1>
  
              {items.map((item, i) => (
                <OrderProduct
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
        </main>
      </div>
    );
  }

export default Orders;