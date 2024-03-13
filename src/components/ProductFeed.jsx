/* eslint-disable @next/next/no-img-element */
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div
      className="
       grid bg-gray-200 
       grid-flow-row-dense 
       sm:grid-cols-2 md:grid-cols-3 
       lg:grid-cols-3 xl:grid-cols-4 2xl:xl:grid-cols-
       md:-mt-56 mx-auto"
    >
      {products
        .slice(0, 4)
        .map(({ id, title, price, rating, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            rating={rating}
            description={description}
            category={category}
            image={image}
          />
        ))}

      <img
        className="md:col-span-full sm:col-span-full lg:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      <div className="md:col-span-2 ">
        {products
          .slice(4, 5)
          .map(({ id, title, price, rating, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              rating={rating}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>

      {products
          .slice(5, products.length)
          .map(({ id, title, price, rating, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              rating={rating}
              description={description}
              category={category}
              image={image}
            />
          ))}
    </div>
  );
}

export default ProductFeed;
