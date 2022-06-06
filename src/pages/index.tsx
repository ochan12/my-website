import Head from "next/head";
import Layout, { siteTitle } from "components/layout/Layout";
import utilStyles from "styles/utils.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title className="text-3xl font-bold underline">{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello there! I'm Mateo and for some misterious reason (or maybe not)
          you end up in my website. You might want to check out:
        </p>
        <ul
          role="list"
          className="marker:text-sky-400 list-disc pl-5 space-y-3list-inside"
        >
          <li>
            <Link href={"/experience"}>Where I worked?</Link>
          </li>
          <li>
            <Link href={"/travel"}>Where I travelled?</Link>
          </li>
          <li>
            <Link href={"/hobbies"}>What do I do while I'm not coding</Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
