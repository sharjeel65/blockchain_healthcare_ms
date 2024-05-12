import { Router } from 'express';
import usersRouter from './users';
import recordsRouter from './records';
import contractsRouter from './contracts';

const router = Router();

router.use('/users', usersRouter);
router.use('/records', recordsRouter);
router.use('/contracts', contractsRouter);

export default router;
