/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-mock-interview_owner:UQCIOGb3r8AS@ep-morning-pine-a5gwwr12.us-east-2.aws.neon.tech/ai-mock-interview?sslmode=require',
    }
  };