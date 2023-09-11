const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getEmail = state => state.auth.user.email;
const getIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getEmail,
  getIsRefreshing,
};

export default authSelectors;
