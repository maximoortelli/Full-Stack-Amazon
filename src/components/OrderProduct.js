/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { NumericFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const OrderProduct = ({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
  }) => {
    const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    // Push item into redux
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    // Remove the item from basket
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-4 border-b">
      <Image
        className="justify-self-center mb-10"
        src={image}
        height={140}
        width={140}
        objectFit="contain"
      />

      {/* Middle section */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2">{description}</p>
           <NumericFormat value={price} displayType={"text"} prefix={"£"} />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052018/untitled-1_282.png?zBgfG0XEfdsPUq33GRuhu6udfY3Yu_rs&itok=39OQ7JCF"
            />
            <p className="text-xs text-gray-500 ">Free Next-day Delivery</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderProduct;