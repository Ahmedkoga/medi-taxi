const path = require('path');

module.exports = {
  dbUrl: 'mongodb+srv://tchatter:tchats@cluster0-khmxt.gcp.mongodb.net/app_taxi?retryWrites=true&w=majority',
  cert: path.join( __dirname, '../ssl/local.crt'),
  key: path.join( __dirname, '../ssl/local.key'),
  portHttp: 3000,
  portHttps: 3001
}