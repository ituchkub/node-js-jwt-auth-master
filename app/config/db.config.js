module.exports = {
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "root",
  DB: "it_authen",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
