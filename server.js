import express from 'express';
import 'dotenv/config';
import 'colors';
import cors from 'cors';
import connectDatabase from './config/database.js';
import errorMiddleware from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoute.js';
import productRoutes from './routes/productRoute.js';
import categoryRoutes from './routes/categoryRoute.js';
import orderRoutes from './routes/orderRoute.js';
import paymentRoutes from './routes/paymentRoute.js';

const app = express();

connectDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/payments', paymentRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`[server] listening on port ${PORT}`.yellow));