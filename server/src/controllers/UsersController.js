import UserModel from "../models/User";
import TryCatchErrorDecorator from "../decorators/TryCatchErrorDecorator";

class UsersController {
  @TryCatchErrorDecorator
  static async index(req, res) {
    const users = await UserModel.find().select("_id name email role");
    res.json(users);
  }

  @TryCatchErrorDecorator
  static async remove(req, res) {
    await UserModel.findByIdAndDelete(req.body.id);
    res.json(req.body);  
  }

  @TryCatchErrorDecorator
  static async update(req, res) {
    let user = await UserModel.findById(req.body.id);
    user.role = !user.role
    await UserModel.findByIdAndUpdate(req.body.id, user, {new: true});
    res.json(user);  
  }
}

export default UsersController;
