import Head from "next/head";
import Layout, { siteTitle } from "components/layout/Layout";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title className="text-3xl font-bold underline">{siteTitle}</title>
      </Head>
      <header className="text-center">
        <Image
          priority
          src="/img/mateo_barcelona.jpeg"
          className={"rounded-full"}
          height={200}
          width={200}
          alt={"Mateo"}
          objectFit={"cover"}
        />

        <section className={"h-5"}>
          <p>
            Hello there! I'm Mateo and for some misterious reason (or maybe not)
            you end up in my website. You might want to check out:
          </p>
          <ul
            role="list"
            className="marker:text-sky-400 list-disc pl-5 space-y-3 list-inside"
          >
            <li className="list-item">
              <Link href={"/experience"}>Where I worked?</Link>
            </li>
            <li className="list-item">
              <Link href={"/travel"}>Where I travelled?</Link>
            </li>
            <li className="list-item">
              <Link href={"/hobbies"}>What do I do while I'm not coding</Link>
            </li>
          </ul>
        </section>
      </header>
    </Layout>
  );
}
