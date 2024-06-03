const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
 
 
// const http = require('http');
const cors = require('cors');
 
const app = express();
const server = require('http').createServer(app);
const db = require('./models');
const errorHandler = require('./middlewares/errorHandler');
// Importing routes
const authRoute = require('./routes/authRoute');
const earningRoute = require('./routes/earningRoutes');
const adminRoute = require('./routes/adminRoute');
const userRoute = require('./routes/userRoutes');


// Use the workerRoute for the /workerinfo route
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth/v1', authRoute);
app.use('/earning/v1', earningRoute);
app.use('/admin/v1', adminRoute);
app.use('/user/v1', userRoute);

app.use(errorHandler); 
// ... (other middleware and routes as needed)

const serverPort = process.env.PORT || 3000;
const syncDb = 0;
if (syncDb) db.sequelize.sync({ alter: true });

server.listen(serverPort, err => {
  if (err) throw err;
  console.log(`Listening on port %d, ${serverPort}`);
});
