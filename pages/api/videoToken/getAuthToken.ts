import { videoToken } from "./token";

export default async function getAuthToken(req: any, res: any): Promise<any> {
  const { identity, room } = req.body;

  const token = videoToken(identity, room);

  res.send(
    JSON.stringify({
      token: token.toJwt(),
    })
  );
}
