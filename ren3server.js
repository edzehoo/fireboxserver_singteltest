import bodyParser from 'body-parser'
import express from 'express'
import * as https from 'https';
import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const FILEDOWNLOAD_RETRIES = 3


var subprocess;  
var app = express();
var mysqlConnection = null;
const port = 5001;

//Array of all the running processes and their pids
var running_processes = [];

app.use(cors());
app.use(cookieParser());
app.use(express.static('./'));
app.use(express.json());



app.get('/express_backend', (req, res) => {
	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});







app.get('/helloWorld', (req,res) =>{		
		res.send({ success: true, "response" : "Hello there!" });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))



