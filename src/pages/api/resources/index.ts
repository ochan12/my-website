import { NextApiResponse, NextApiRequest } from 'next'
import { Person } from '../../../interfaces'
import { getConfigEnv } from 'lib/config';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Person[]>
) {
    const {ids} = req.query
    const resources = await fetch(`${getConfigEnv().apiUrl}resources?ids=${ids.join(
        ","
      )}`).then(res => res.json());
    res.status(200).json(resources)
}