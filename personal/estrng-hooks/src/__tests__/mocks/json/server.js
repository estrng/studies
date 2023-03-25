import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("src\\__tests__\\mocks\\json\\db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

/* server.get("/echo", (req, res) => {
  return res.jsonp({
    method: req.method,
    url: req.url,
    query: req.query,
    body: req.body,
  });
}); */

/* server.get("/echo", (req, res) => {
  res.status(400).jsonp({
    code: "BIG_ERROR",
    message: "Something went wrong",
  });
});
 */
server.get("/echo", (req, res) => {
  res.status(500).jsonp({});
});

server.use(router);
server.listen(3333, () => {
  console.log("JSON Server is running");
});
