import { Router } from "express";
const router = Router();

import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from "../controller/UserController.js";
import {
  authorizePermission,
  validateUpdateUserInput,
} from "../middleware/validationMiddleware.js";

import { checkForTestUser } from "../middleware/authMiddleware.js";

import upload from "../middleware/multerMiddleware.js";

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", [
  authorizePermission("admin"),
  getApplicationStats,
]);
router.patch(
  "/update-user",
  checkForTestUser,
  upload.single("avatar"),
  validateUpdateUserInput,
  updateUser
);
export default router;
