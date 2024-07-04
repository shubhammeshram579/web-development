const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./router/auth.js');
const imageRoutes = require('./router/imageUpload.js');
const cors = require('cors');




dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());






// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


// Routes
app.use('/auth', authRoutes);
app.use('/image', imageRoutes);
    


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
