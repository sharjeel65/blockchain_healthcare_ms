import { Router } from 'express';
import { authenticateUser } from '../../server/middleware/authMiddleware';
import { getAllRecords, getRecordById, createRecord, updateRecord, deleteRecord } from '../../server/controllers/recordController';

const router = Router();

router.get('/', authenticateUser, getAllRecords);
router.get('/:id', authenticateUser, getRecordById);
router.post('/', authenticateUser, createRecord);
router.put('/:id', authenticateUser, updateRecord);
router.delete('/:id', authenticateUser, deleteRecord);

export default router;
