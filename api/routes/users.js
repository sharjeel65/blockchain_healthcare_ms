import { Router } from 'express';
import { createUser, loginUser, getUserProfile, updateUserProfile } from '../../server/controllers/userController';

const router = Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/profile', getUserProfile);
router.put('/profile', updateUserProfile);

export default router;
