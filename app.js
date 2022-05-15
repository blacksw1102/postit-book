const express = require("express");
const app = express();
const basic_port = 3000;

app.set("port", process.env.PORT || basic_port);

app.use(express.static("public"));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

const api = require("./routers");
app.use("/api", api);

const { swaggerUi, specs } = require("./swagger/swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(function (err, req, res, next) {
  res.status(500).json({ statusCode: res.statusCode, errMessage: err.message }); // 상태코드, 에러 메시지 전달
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/list", function (req, res) {
  res.sendFile(__dirname + "/html/list.html");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/html/about.html");
});

app.listen(basic_port, () => {
  console.log(`Server started. port ${basic_port}.`);
});
