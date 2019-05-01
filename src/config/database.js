module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'gonodemodulo2',
  port: 15432,
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoreAll: true
  }
}
