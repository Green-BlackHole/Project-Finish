import ProductCard from "@/components/ProductCard";
import { Inter } from "next/font/google";
import ImageCard from "@/components/ImageCard";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { IProduct } from "@/interfaces/product";
import { createContext, useEffect, useState } from "react";
import { useQuery } from "@/hooks/useQuery";
import { useRouter } from "next/router";
import Three from "@/components/Three";
import HomeNavbar from "@/components/Homepage/HomeNavbar";
import SpecialCategory from "@/components/SpecialCategory";
import FacebookCustomerChat from "@/components/FacebookCustomerChat";
import Reason from "@/components/Reason";
import Loading from "@/components/Loading/Loading";
import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";
import Sponser from "@/components/sponser/Sponser";
import ScrollTopButton from "@/components/ScrollTopButton";
import Footer from "@/components/Footer";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const { ordering = "", limit = 15, search = "", page = 0 } = query;
  const response = await axios.get(
    process.env.NEXT_PUBLIC_API_URL +
      `/products?limit=${limit}&search=${search}&ordering${ordering}`
  );
  const { data } = response;
  return {
    props: { data },
  };
}

export default function Home({ data }: { data: IProduct[] }) {
  const [plusProduct, setPlusProduct] = useState<IProduct[]>();
  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + `/products?limit=10&ordering=titleDesc`)
      .then((res) => setPlusProduct(res.data))
      .catch((err) => console.log(err));
  });
  const products = data;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { query } = router;
  const { ordering = "", limit = 15, search = "", page = 0 } = query;
  const { addQuery } = useQuery();
  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, []);

  return  (
    <>
      {/* <Layout title="Ecommerce" description="description"> */}
        <HomeNavbar />
      <Spinner />
      
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <SpecialCategory />

        <div className="bg-white my-24">
          <h2 className="font-bold text-2xl my-10">Сүүлд нэмэгдсэн</h2>

          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
        <Sponser />
        <ImageCard />
        <div className="bg-white my-24">
          <h2 className="font-bold text-2xl my-10">Онцлох бараа</h2>

          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
            {plusProduct?.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
        <Reason />
        </div>
      <Footer />
        <ScrollTopButton />
      {/* </Layout> */}
    </>
  );
}
