import { NextApiResponse, NextApiRequest } from "next";
import { Person } from "../../../interfaces";
import { getConfigEnv } from "lib/config";
import { NextApiRequestQuery } from "next/dist/server/api-utils";

type ResourcesQuery = NextApiRequestQuery & { query: { ids: string[] } };

const headers = new Headers({
  Authorization: `Basic ${Buffer.from(
    `${process.env.NEXT_PUBLIC_USERNAME}:${process.env.NEXT_PUBLIC_PASSWORD}`,
  ).toString("base64")}`,
  "Access-Control-Allow-Origin": "*",
  referer: "ochandorena.dev",
});

export default async function handler(
  req: ResourcesQuery,
  res: NextApiResponse<Person[]>,
) {
  const { ids } = req.query;
  const resources = await fetch(
    `${getConfigEnv().apiUrl}/resources?ids=${ids}`,
    { headers },
  ).then((res) => res.json());
  res.status(200).json(resources);
}
