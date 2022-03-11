import RoomModel from "../models/Room";
import TryCatchErrorDecorator from "../decorators/TryCatchErrorDecorator";

class RoomsController {
  @TryCatchErrorDecorator
  static async index(req, res) {
    const rooms = await RoomModel.find().select("_id title state creator");
    res.json(rooms);
  }
  @TryCatchErrorDecorator
  static async addroom(req, res) {
    const room = new RoomModel({
      title: req.body.title,
      creator: req.userId
    });
    const newRoom = await room.save();
    res.json({ status: "success", newRoom: newRoom });
  }
  @TryCatchErrorDecorator
  static async remove(req, res) {
    await RoomModel.findByIdAndDelete(req.body.id);
    res.json(req.body);  
  }
}

export default RoomsController;
