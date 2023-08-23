import { videoToken } from "./token";

console.log(
  "accountSid: ",
  process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID,
  "apiKey: ",
  process.env.NEXT_PUBLIC_TWILIO_API_KEY,
  "apiSecret: ",
  process.env.NEXT_PUBLIC_TWILIO_APISECRET
);

export default async function getAuthToken(req: any, res: any): Promise<any> {
  const { identity, room } = req.body;
  console.log("__ requerst params", identity, room);

  const token = videoToken(identity, room);

  res.send(
    JSON.stringify({
      token: token.toJwt(),
    })
  );
}
