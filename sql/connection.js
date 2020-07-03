const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: "35.238.193.32",
        user: "root",
        password: "Kinglouie1",
        database: "Admin",
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;