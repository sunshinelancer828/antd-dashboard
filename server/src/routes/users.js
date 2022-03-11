import { Router } from "express";
import UsersController from "../controllers/UsersController";
import Authorize from "../middleware/Authorize";

const router = Router();

router.get("/users", Authorize.check, UsersController.index);
router.post("/user/del", Authorize.check, UsersController.remove);
router.post("/user/roleupdate", Authorize.check, UsersController.update);

export default router;
