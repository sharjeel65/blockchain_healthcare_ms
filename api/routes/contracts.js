import { Router } from 'express';
import { authenticateUser } from '../../server/middleware/authMiddleware';
import { deployContract, executeContractMethod, readContractData } from '../../server/controllers/contractController';

const router = Router();

router.post('/deploy', authenticateUser, deployContract);
router.post('/:contractAddress/methods/:methodName', authenticateUser, executeContractMethod);
router.get('/:contractAddress/data', authenticateUser, readContractData);

export default router;
