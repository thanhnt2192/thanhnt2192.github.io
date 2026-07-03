function createPath(attributes) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  for (let key in attributes) {
    path.setAttribute(key, attributes[key]);
  }
  path.setAttribute("shape-rendering", "crispEdges");
  return path;
}

function createGroup(attributes, paths) {
  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  for (let key in attributes) {
    group.setAttribute(key, attributes[key]);
  }

  if (Array.isArray(paths)) {
    for (const path of paths) {
      group.appendChild(createPath(path));
    }
  }

  return group;
}
