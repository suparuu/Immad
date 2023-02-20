const { createPool } = require('mysql');

const pool = createPool({
    host: "svc.sel3.cloudtype.app",
    user: "root",
    password: "1234",
    database: "test",
    port: 30605,
})

pool.getConnection(() => {
    console.log('success')
});

const executeQuery = async (query, arraParms) => {
    return await new Promise((resolve) => {
        pool.query(query, arraParms, (err, data) => {
            resolve(data)
        });
    })

}//db와 연결 해주는 곳

module.exports = { executeQuery };