import oracledb from 'oracledb';

const dbConfig = {
    user: 'system',
    password: 'your_password',
    connectString: 'localhost:1521/XE'
};

async function dbConnect() {
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);
        return connection;
    } catch (err) {
        console.error('Database connection error:', err);
        throw err;
    }
}

export default dbConnect;