const app = require("./src/server.js");

const port = 3002;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
