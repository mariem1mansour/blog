import { userModel } from "../../../models/user.model.js";
import bcrypt from "bcrypt";
const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    return res.json({
      message: "user already exists ⚠️",
    });
  } else {
    const hash = bcrypt.hashSync(password, 8);
    await userModel.insertMany({ name, email, password: hash });
    res.json({ message: "success 🟩" });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });

  if (user && bcrypt.compareSync(password, user.password)) {
    res.json({ message: "connected with token ✅" });
  } else {
    res.json({ message: "email or password incorrect ❌" });
  }
};
export { signUp , signIn};
