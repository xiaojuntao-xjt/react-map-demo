var express = require("express");
var app = express();

// var allowCrossDomain = function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   res.header("Access-Control-Allow-Credentials", "true");
// };
// app.use(allowCrossDomain);
var bodyParser = require("body-parser");
app.use(bodyParser.json()); //body-parser 解析json格式数据
app.use(
  bodyParser.urlencoded({
    //此项必须在 bodyParser.json 下面,为参数编码
    extended: true,
  })
);

var router = express.Router();

app.get("/", function (req, res) {
  res.send("hello world");
});

router.use("/", require("./test"));

app.use("/api", router);

app.listen(3001);
