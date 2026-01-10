const app = document.getElementById("app");

function createPath(attributes) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  for (let key in attributes) {
    path.setAttribute(key, attributes[key]);
  }
  app.appendChild(path);
  return path;
}
