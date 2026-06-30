const app = document.getElementById("app");

app.appendChild(createGroup({}, [
  {
    "fill": "red",
    "d": "M10,20 H80 V30 H10 Z"
  }
]));

app.appendChild(createPath({
  "fill": "#000000",
  "d": "M1,16 h10 v-2 h-1 v1 h-8 v-1 h-1 Z m1,-2 h8 v-3 h-1 v2 h-6 v-1 h-1 z m1,-2 h1 v-1 h-1 z m1,-1 h1 v-1 h-1 z m1,-1 h1 v-2 h-3 v1 h2 z m-4,0 h2 v-1 h-2 z m0,-1 v-2 h-1 v2 z m0,-2 h1 v-1 h-1 z m1,-1 h1 v-1 h-1 z m1,-1 h1 v-1 h-1 z m0,-1 v-1 h3 v-1 h-4 v2 z m3,0 h3 v-1 h-3 z m3,0 h1 v1 h-1 z m1,1 v6 h1 v-6 z m-3,2 v1 h-1 v-1 z"
}));
