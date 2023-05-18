const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnect = require('./config/dbConnect');
const reviewRoute = require('./routes/reviewRoutes');
const Review = require('./models/Review');
const { Socket,Server} = require('socket.io');

const { notFound, mainErrorHanlder } = require('./middleware/errorHandlers');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

dbConnect();
app.use((req, res, next) => {
  //  console.log(req);
    console.log(req.baseUrl);
    next();
})

app.use(cors());
app.use(reviewRoute);


app.use(notFound);
app.use(mainErrorHanlder);

const server = app.listen(8080, () => {
    //  console.log(PORT);
    console
        .log(`sever is running at ${PORT}`);
});


const io = new Server(server, {
    pingTimeout: 60000,
    cors: {
        origin: 'http://localhost:3000',
    },
});








