const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(
  express.json({
    limit: "50mb",
  })
);

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

app.listen(port, () => {
  console.log(`Server started. port ${port}.`);
});
