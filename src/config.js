export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-apps-uploads90"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://gz74hdfum5.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_AciQYwrob",
    APP_CLIENT_ID: "44fa4lkngjfr316ifttn4a3v24",
    IDENTITY_POOL_ID: "us-east-1:6f67e116-abb0-4050-9741-176161548ac5"
  }
};