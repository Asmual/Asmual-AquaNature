import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const uri =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Asmual-AquaNature";

const client = new MongoClient(uri, { family: 4 });
const db = client.db("Asmual-AquaNature");

const getBaseUrl = () => {
  if (process.env.BETTER_AUTH_URL) return process.env.BETTER_AUTH_URL;
  if (process.env.NEXT_PUBLIC_BETTER_AUTH_URL) return process.env.NEXT_PUBLIC_BETTER_AUTH_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
};

export const auth = betterAuth({
  database: mongodbAdapter(db),
  secret:
    process.env.BETTER_AUTH_SECRET ||
    "default_asmual_aqua_nature_secret_key_minimum_32_characters",
  baseURL: getBaseUrl(),
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days in seconds
    updateAge: 60 * 60 * 24, // 1 day
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 24 * 7,
    },
  },
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
  user: {
    additionalFields: {
      phoneNumber: {
        type: "string",
        required: false,
        defaultValue: "",
      },
      gender: {
        type: "string",
        required: false,
        defaultValue: "",
      },
      location: {
        type: "string",
        required: false,
        defaultValue: "",
      },
      role: {
        type: "string",
        required: false,
        defaultValue: "user",
      },
    },
  },
});

