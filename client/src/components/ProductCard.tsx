import { IProduct } from "@/interfaces/product";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  // const [products, setProducts] = useState<IProduct[]>([]);
  // const [ordering, setOrdering] = useState<string>("young");
  // const [searchValue, setSearchValue] = useState<string>("");

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:8000/products?limit=12&ordering=${ordering}&q=${searchValue}`
  //     )
  //     .then((response) => {
  //       const data: IProduct[] = response.data;
  //       setProducts(data);
  //     })
  //     .catch((error) => {c
  //       console.error(error);
  //     });
  // }, [ordering, products, searchValue]);

  return (
    // <div className="bg-white">
    //   <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    //     <div className="flex justify-between items-center">
    //       <h2 className="text-2xl font-bold tracking-tight text-gray-900">
    //         Products
    //       </h2>
    //       <div>
    //         <select
    //           value={ordering}
    //           onChange={(e): void => {
    //             setOrdering(e.target.value);
    //           }}
    //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         >
    //           <option value="old">Oldest</option>
    //           <option value="young">Newest</option>
    //           <option value="awardsWinsDesc">Most popular</option>
    //           <option value="titleAsc">A-Z</option>
    //           <option value="titleDesc">Z-A</option>
    //         </select>
    //       </div>
    //     </div>

    // <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
    // {products.map((product) => (
    <Link href={`/products/${product._id}`} key={product._id}>
      <div className="group relative">
        <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
          <Image
            src={product.productImageSrc}
            alt={product.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full aspect-12/8"
            width={1000}
            height={100}
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">₮{product.price}</p>
        </div>
      </div>
    </Link>
    // ))}
  );
};
export default ProductCard;
