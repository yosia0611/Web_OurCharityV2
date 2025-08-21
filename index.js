const express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const config = {
  user: 'nodeuser',
  password: 'nodepass',
  server: '1000SAUDARA52',
  database: 'CrudDemo',
  options: {
    trustServerCertificate: true,
  }
};

// Koneksi ke database
sql.connect(config).then(pool => {
    if (pool.connected) {
        console.log('Terhubung ke SQL Server!')
    }

    // Get semua user
    app.get('/users', async (req, res) => {
        try {
            const result = await pool.request().query('Select * from Users');
            res.json(result.recordset);
        }   catch (err) {
            res.status(500).send(err.message);
        }
    });
    
    // POST tambah user
    app.post('/users', async (req, res) => {
        const { Name, Email} = req.body;
        try {
        await.pool.request()
            .input('Name', sql.NVarChar, Name)
            .input('Email', sql.NVarChar, Email)
            .query('INSERT INTO Users (Name, Email) VALUES (@Name, @Email)');
        res.sendStatus(201)
        } catch (err) {
        res.status(500).send(err.message);    
        }
    })

    }
)