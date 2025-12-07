import { NextApiResponse } from "next";
import { Person } from "../../../interfaces";
import { getConfigEnv } from "lib/config";
import { NextApiRequestQuery } from "next/dist/server/api-utils";

type ResourcesQuery = NextApiRequestQuery & { query: { ids: string[] } };

const headers = new Headers({
  Authorization: `Basic ${Buffer.from(
    `${process.env.NEXT_PUBLIC_USERNAME}:${process.env.NEXT_PUBLIC_PASSWORD}`,
  ).toString("base64")}`,
  "Access-Control-Allow-Origin": "*",
});

export default async function handler(
  req: ResourcesQuery,
  res: NextApiResponse<Person[]>,
) {
  console.log("Fetching contacts...");
  console.log("Headers:", headers);
  const resources = await fetch(`${getConfigEnv().apiUrl}/contact`, {
    headers,
  }).then((res) => {
    console.log("status", res.status);
    console.log("headers", res.headers);
    console.log("body", res.body);
    return res.json();
  });
  res.status(200).json(resources);
}
