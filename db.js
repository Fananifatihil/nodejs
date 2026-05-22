const mysql = require('mysql2/promise');
let sql;

const buatKoneksi = async () => {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'nama_db',
        password: 'password_db',
        database: 'nama_db'
    })
}

const tambahBackup = async (id, Nama, channel) => {
    const db = await buatKoneksi();
    sql = `INSERT INTO backup VALUES ('${id}', '${Nama}', '${channel}',NOW())`;
    try {
        await db.execute(sql);
        return "1";
    } catch (err) {
        return "0";
    }
}

const tambahTransaksi = async (IDx, id, waktux, nominalx, jenisx, deskripsix) => {
    const db = await buatKoneksi();
    sql = `INSERT INTO transaksi VALUES ('${IDx}', '${id}', '${waktux}', '${nominalx}', '${jenisx}', '${deskripsix}')`;
    try {
        await db.execute(sql);
        return "1";
    } catch (err) {
        return "0";
    }
}

module.exports = {buatKoneksi, tambahBackup, tambahTransaksi}