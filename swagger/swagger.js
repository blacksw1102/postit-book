const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "프로젝트 제목",
      description: "프로젝트 설명",
    },
    servers: [
      {
        url: "http://localhost:3000", // 요청 URL
      },
    ],
  },
  apis: ["./routers/*.js", "./routers/user/*.js"], //Swagger 파일 연동
};
const specs = swaggereJsdoc(options);

module.exports = { swaggerUi, specs };
