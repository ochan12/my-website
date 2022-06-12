import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "components/layout/Layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Mateo | About me</title>
      </Head>
      <h1>This is me!</h1>
      <Link href={"/"}>Back home</Link>
    </Layout>
  );
}
