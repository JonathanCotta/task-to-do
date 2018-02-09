const sequelize = require("sequelize");
let db = {};

const con = new sequelize('mysql://root:kilo1234@localhost:3306/teste',{operatorsAliases: false});

db.task = con.import("task");
db.sequelize = sequelize;
db.connection = con;