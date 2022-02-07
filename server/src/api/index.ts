import express from 'express';
import gameListingsRouter from './gameListings';

const apiRouter = express.Router();

apiRouter.use('/gameListings', gameListingsRouter);

export default apiRouter;
