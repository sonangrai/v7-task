interface Iauth {
  isAuthenticated: boolean;
  token: any;
  authenticating: boolean;
  authenticationError: object;
  user: object;
}
