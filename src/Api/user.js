const rootUrl = "http://localhost:4000";

export const UserApi = {
  login: `${rootUrl}/api/v1/login`,
  isLogedIn: `${rootUrl}/api/v1/isloged-in`,
  signup: `${rootUrl}/api/v1/signup`,
  logout: `${rootUrl}/api/v1/logout`,
  verifyUser: `${rootUrl}/api/v1/verify-user`,
  resendVerificationCode: `${rootUrl}/api/v1/resend-verification-code`,
};
