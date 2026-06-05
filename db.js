const mysql = require('mysql2/promise');
let sql;

const buatKoneksi = async () => {
    return await mysql.createConnection({
        host: '194.233.65.45',
        user: 'utpaxr6t_backup',
        password: 'Mff_180705',
        database: 'utpaxr6t_backup'
    })
}

const getMetode = async () => {
    const db = await buatKoneksi();
    sql = `SELECT * FROM backup`;
    const [rows] = await db.execute(sql);
    return rows.length > 0 ? rows : false;
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

module.exports = {buatKoneksi, getMetode, tambahBackup, tambahTransaksi}