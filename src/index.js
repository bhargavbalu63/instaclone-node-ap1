const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();
//connect to DB

mongoose.connect('mongodb+srv://instaclone:9848032919@cluster0.615adal.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true },() => {
    console.log('connected to DB')})                                                                         // here blog is the database that is created and conenceted to mongodb


app.listen(3000, () => console.log('Server running......'));

