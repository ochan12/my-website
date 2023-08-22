import { NextApiResponse, NextApiRequest } from 'next'
import { Person } from '../../../interfaces'
import { getConfigEnv } from 'lib/config';
import { NextApiRequestQuery } from 'next/dist/server/api-utils';

type StepsQuery = NextApiRequestQuery & {query: {step: string}} 

const headers = new Headers({
  Authorization: `Basic ${Buffer.from(
    `${process.env.NEXT_PUBLIC_USERNAME}:${process.env.NEXT_PUBLIC_PASSWORD}`
  ).toString("base64")}`,
  "Access-Control-Allow-Origin": "*",
});

export default async function handler(
  req: StepsQuery,
  res: NextApiResponse<Person[]>
) {
    const {step} = req.query
    const resources = await fetch(`${getConfigEnv().apiUrl}/life/${step}`, {headers}).then(res => res.json());
    res.status(200).json(resources)
} 