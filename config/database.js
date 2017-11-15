// config/database.js
module.exports = {
    'connection': {
        'host': 'mna97msstjnkkp7h.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        'user': 'mzojztfzqeb1t44h',
        'password': 'woxc0lt5dsuttc1j'
    },
	'database': 'e0a737o4nssgt75u',
    'users_table': 'users'
};

// var connection;
// if(process.env.JAWSDB_URL) {
//   //Heroku deployment
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   //local host
//     connection = mysql.createConnection({
//         root: 3000,
//         host: "127.0.0.1",
//         user: "prodUser",
//         password: "password",
//         database: "eatup",
//     });
// };
// sequelize code below
/*
{

    "development": {

        "username": "root",

        "password": null,

        "database": "sequelize_passport",

        "host": "127.0.0.1",

        "dialect": "mysql"

    },

    "test": {

        "username": "",

        "password": null,

        "database": "",

        "host": "",

        "dialect": "mysql"

    },

    "production": {

        "username": "",

        "password": null,

        "database": "",

        "host": "127.0.0.1",

        "dialect": "mysql"

    }

}
*/
