var sql = require('mssql');
var connectionString = "Server=43.229.149.77,1443;Database=Q_ONLINE;User id=q_online;Password=hc0220ed;Encrypt=false"
sql.connect(connectionString);

module.exports = { sql };