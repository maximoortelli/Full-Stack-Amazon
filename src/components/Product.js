/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { NumericFormat } from 'react-number-format';

function Product({ id, title, price, description, category, image }) {
  const MAX_RATING = 5;
  const MIN_RATING = 1;

  const [rating, setRating] = useState(MIN_RATING);
  const [hasPrime, setHasPrime] = useState(false);

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setHasPrime(Math.random() < 0.5);
  }, []);

  return (
    <div className="relative flex flex-col m-6 my-10 bg-white z-30 p-10 rounded-xl hover:scale-105  transition-transform hover:cursor-pointer">
      <p className="absolute top-3 right-6 text-xs font-bold italic text-gray-400 ">
        {category}
      </p>

      <Image className="m-auto" src={image} height={0} width={150}/>

      <h4 className="my-3 line-clamp-1">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5  text-yellow-500" key="" />
          ))}
      </div>

      <p className="text-xs my-3 line-clamp-3">{description}</p>

      <div className="mb-5 ">
         <NumericFormat value={price} displayType={'text'} prefix={'£'} />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-12"
            src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052018/untitled-1_282.png?zBgfG0XEfdsPUq33GRuhu6udfY3Yu_rs&itok=39OQ7JCF"
            alt=""
          />
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto px-10 button">Add to Basket</button>
    </div>
  );
}

export default Product;
