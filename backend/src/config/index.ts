
// TODO: Use env variables 
export const databaseConfig = {
    client: 'mysql2',
    version: '5.7',
    connection: {
        // mysql database service name
        host: 'db',
        port: 3306,
        user: 'admin',
        password: 'psswd',
        database: 'db'
    }
}