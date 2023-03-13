export const isUserLogin = state => state.auth.isLogin;

export const getUser = state => state.auth.user.name;

export const getToken = state => state.auth.token;

export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};

export const getError = state => state.auth.error;
