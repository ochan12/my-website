import Head from "next/head";
import Layout, { siteTitle } from "components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title className="text-3xl font-bold underline">{siteTitle}</title>
      </Head>
      <Grid
        container
        justifyContent="space-between"
        alignContent="center"
        spacing={4}
        className="h-screen"
      >
        <Grid item xs={12} className="text-center">
          <Image
            priority
            src="/img/mateo_barcelona.jpeg"
            className={"rounded-full"}
            height={200}
            width={200}
            alt={"Mateo"}
            objectFit={"cover"}
          />
        </Grid>
        <Grid item xs={12} className="text-center">
          <Typography
            variant="subtitle1"
            className="text-lg text-opacity-50 max-w-lg m-auto"
          >
            Hello there!{" "}
            <Image
              src={"/img/obi_wan.svg"}
              alt="Hello there..."
              title="Hello there..."
              width={20}
              height={20}
            />{" "}
            I&apos;m Mateo and for some misterious reason (or maybe not) you ended
            up in my website. You might want to check out:
          </Typography>
        </Grid>
        <Grid item xs={12} className="text-center">
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
              <Link href={"/hobbies"}>
                What do I do while I&apos;m not coding
              </Link>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Layout>
  );
}
