const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 2020;


app.use(express.static('public'))


app.listen(port, () => console.log('Server running in 2020 port'))


const home = (req,res) => res.sendFile(path.resolve(__dirname, './views','home.html'));
const login = (req,res) => res.sendFile(path.resolve(__dirname, './views','login.html'));
const register = (req,res) => res.sendFile(path.resolve(__dirname, './views','register.html'));
const ayuda = (req,res) => res.sendFile(path.resolve(__dirname, './views','ayuda.html'));
const ofertas = (req,res) => res.sendFile(path.resolve(__dirname, './views','ofertas.html'));
const vender = (req,res) => res.sendFile(path.resolve(__dirname, './views','vender.html'));
const tiendasOficiales = (req,res) => res.sendFile(path.resolve(__dirname, './views','tiendasOficiales.html'));

app.get('/', home)
app.get('/login', login)
app.get('/register', register)
app.get('/ayuda', ayuda)
app.get('/ayuda', ayuda)
app.get('/ofertas', ofertas)
app.get('/vender', vender)
app.get('/tiendasOficiales', tiendasOficiales)
