import { Router } from "express";
import RoomsController from "../controllers/RoomsController";
import Authorize from "../middleware/Authorize";

const router = Router();

router.get("/rooms", Authorize.check, RoomsController.index);
router.post("/room/add", Authorize.check, RoomsController.addroom);
router.post("/room/del", Authorize.check, RoomsController.remove);


export default router;
