
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import movementsRouter from './routes/movements.js'

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
//conecting to a BD
app.use('/movements',movementsRouter);
//app.use('/movements', router)

const CONNECTION_URL= 'mongodb+srv://adminuser:DvXJcz9VED8XyEc@cluster0.k84uw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT= process.env.PORT||5500;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=> console.log(`server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message));
// mongoose.set('useFindAndModify', false);
