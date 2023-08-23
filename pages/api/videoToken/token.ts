import twilio from "twilio";

const AccessToken = twilio.jwt.AccessToken;
const { VideoGrant } = AccessToken;

interface Config {
  twilio: {
    accountSid: string;
    apiKey: string;
    apiSecret: string;
  };
}
const config = {
  twilio: {
    accountSid: process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID,
    apiKey: process.env.NEXT_PUBLIC_TWILIO_API_KEY,
    apiSecret: process.env.NEXT_PUBLIC_TWILIO_API_SECRET,
  },
};

const generateToken = (config: Config) => {
  console.log("====== twilio conifg", config);
  return new AccessToken(
    config.twilio.accountSid,
    config.twilio.apiKey,
    config.twilio.apiSecret
  );
};

const videoToken = (identity: string, room?: string) => {
  let videoGrant;
  if (typeof room !== "undefined") {
    videoGrant = new VideoGrant({ room });
  } else {
    videoGrant = new VideoGrant();
  }
  const token = generateToken(config as Config); // Use the "!" non-null assertion operator if you're sure config is not undefined
  token.addGrant(videoGrant);
  token.identity = identity;
  return token;
};

export { videoToken };
