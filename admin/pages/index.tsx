import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import Products from "@/components/Products";
import TopCards from "@/components/TopCards";

export default function Home() {
  return (
    <main className="bg-gray-500">
      <Header />
      <TopCards />
      <div className=" p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
        <Products />
      </div>
    </main>
  );
}
