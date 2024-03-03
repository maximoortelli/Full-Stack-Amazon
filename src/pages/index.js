import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Amazon</title>
      </Head>

      {/* Header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed  />
      </main>
    </div>
  );
}
