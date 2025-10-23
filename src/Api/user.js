const rootUrl = "http://localhost:4000";

export const UserApi = {
  login: `${rootUrl}/api/v1/login`,
  signup: `${rootUrl}/api/v1/signup`,
  verifyUser: `${rootUrl}/api/v1/verify-user`,
  resendVerificationCode: `${rootUrl}api/v1/resend-verification-code`,
};
