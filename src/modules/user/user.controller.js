import { userModel } from "../../../models/user.model.js";

const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    return res.json({
      message: "user already exists ⚠️",
    });
  } else {
    const hash = bcrypt.hashSync(password, 8);
    await userModel.insertMany({ name, email, password:hash });
    res.json({ message: "success 🟩" });
  }
};
export { signUp };
