import { Router } from 'express';
const router = Router();

import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from '../controller/UserController.js';
import { authorizePermission, validateUpdateUserInput } from '../middleware/validationMiddleware.js';

router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', [authorizePermission('admin'), getApplicationStats]);
router.patch('/update-user', validateUpdateUserInput, updateUser);
export default router;