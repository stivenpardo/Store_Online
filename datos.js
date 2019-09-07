module.exports = class ventas {
    constructor() {
        var pgp = require("pg-promise")(/*options*/);
        this.db = pgp("postgres://postgres:admin@localhost:5432/ventas");
    }
    getClientes() {
        return this.db.any("SELECT * FROM clientes ")
            .then(function (data) { // el them tiene una promesa
                return(data)
            })
            .catch(function (error) {
                return ({ error })
            });
    }
    SetClientes(cliente) {
        return this.db.none("INSERT INTO clientes VALUES ($<cliente.id>,$<cliente.nombre>,$<cliente.telefono>,$<cliente.direccion>)",{cliente})
            .then(function (data) { // el them tiene una promesa
                return(data)
            })
            .catch(function (error) {
                return ({ error })
            });
    }
}