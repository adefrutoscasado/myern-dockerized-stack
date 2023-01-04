
// TODO: Use env variables 
export const databaseConfig = {
    client: 'mysql2',
    version: '5.7',
    connection: {
        // Docker service called 'database'
        host: 'database',
        port: 3306,
        user: 'admin',
        password: 'psswd',
        database: 'db'
    }
}