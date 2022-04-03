require('dotenv-safe').config();

module.exports = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: "mysql",
  define: {
    timestamps: false,
    underscored: true

  }
}
