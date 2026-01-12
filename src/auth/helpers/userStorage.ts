export const getUserStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const setUserStorage = (user: { id: number; name: string }) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserStorage = () => {
  localStorage.removeItem("user");
};
