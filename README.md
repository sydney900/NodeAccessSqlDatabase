# Node.js server access PostgreSQL, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift

## 1. additional packages need to be installed

```
npm install pg
npm install sqlite3
npm install mysql
npm install mysql2
npm install oracle
npm install mssql
```

Notes: pg for PostgreSQL and Amazon Redshift, mysql for MySQL or MariaDB

## 2. change configuration file config.json

```

{
    "database": {
        "azureSqlDatabase": {
            "client": "mssql",
            "connection": {
                "server": "myazuresqldb.database.windows.net",
                "user": "myuser",
                "password": "mypassword",
                "database": "mydb",
                "options": {
                    "port": 1433,
                    "encrypt": true
                }
            }

        },
        "sqlServer": {
            "client": "mssql",
            "connection": {
                "server": "mysqlserver",
                "user": "myuser",
                "password": "mypassword",
                "database": "mydb"
            }
        },
        "mySql": {
            "client": "mysql",
            "connection": {
                "host": "127.0.0.1",
                "user": "myuser",
                "password": "mypassword",
                "database": "mydb"
            }
        },
        "postgreSQL": {
            "client": "pg",
            "version": "7.2",
            "connection": {
                "host": "127.0.0.1",
                "user": "myuser",
                "password": "mypassword",
                "database": "mydb"
            }
        },
        "sqlite": {
            "client": "sqlite3",
            "connection": {
                "filename": "./mydb.sqlite"
            }
        },
        "oracle": {
            "client": "oracledb",
            "connection": {
                "host": "localhost",
                "user": "myuser",
                "password": "mypassword",
                "database": "mydb"
            }
        },
        "mariaDB": {
            "client": "mariasql",
            "connection": {
                "host": "127.0.0.1",
                "user": "myuser",
                "password": "mypassword",
                "database": "mydb"
            }
        },
        "redshift": {
            "client": "rs",
            "connection": {
                "endpoint": "mydomain.us-west-2.redshift.amazonaws.com",
                "user": "myuser",
                "password": "mypassword",
                "port": 5439,
                "database": "mydb"
            }
        }
    }
}

```
