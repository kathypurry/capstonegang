export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:4000"
    : "https://mysterious-spire-49483.herokuapp.com";
};
