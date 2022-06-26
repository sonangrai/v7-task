interface Iauth {
  isAuthenticated: boolean;
  token: any;
  authenticating: boolean;
  authenticationError: [];

  user: object;

  signing: boolean;
  signupError: [];
}
