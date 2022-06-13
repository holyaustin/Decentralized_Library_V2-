import Head from "next/head";
import Layout from "../components/Layout/Layout";
import  MintProfile from "../components/Minter";

const Create = () => (
  <div className="w-full gradient-bg-transactions">
    <Head>
        <title>Create Content </title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>

    <MintProfile />


    </Layout >
  </div>
);

export default Create;
