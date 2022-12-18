const mysql = require("mysql2");
const pool = mysql.createPool({
  host: process.env.HOST || "bkplzvuymmp5cxirqiwq-mysql.services.clever-cloud.com",
  user: process.env.USER || "uosnndjeuvxeuxks",
  port: process.env.PORT || "3306",
  password: process.env.PASSWORD || "ATN1e5AcuNzN9apu4lao",
  database: process.env.DATABASE || "bkplzvuymmp5cxirqiwq",
}).promise();

module.exports = pool;