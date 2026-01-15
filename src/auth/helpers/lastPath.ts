export const getLastPathStorage = () => {
  const lastPath = localStorage.getItem("lastPath");
  console.log(lastPath);
  return lastPath ? lastPath : "/";
};

export const setLastPathStorage = (lastPath: string) => {
  localStorage.setItem("lastPath", lastPath);
};

export const removeLastPathStorage = () => {
  localStorage.removeItem("lastPath");
};
