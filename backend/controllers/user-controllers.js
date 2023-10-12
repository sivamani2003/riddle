import User from "../database/user-data-base.js"
export const getAllUsers = async(req,res,next)=>{
    let users;
    try {
        users = await User.find()
    } catch (err) {
        return console.log(err);
    }
    if(!users){
        return res.status(500).json({message:"unexcepeted error was happended"})
    }
    return res.status(200).json({users})
}
export const signup = async (req, res, next) => {
    const { name, application_number} = req.body;
    if (!name || !application_number) {
      return res.status(422).json({ message: "Invalid inputs" });
    }
    let user;
    try {
      user = new User({ name, application_number});
      user = await user.save();
    } catch (err) {
      return console.log(err);
    }
  
    if (!user) {
      return res.status(500).json({ message: "Unexpected error occurred" });
    }
  
    return res.status(201).json({ id: user._id ,message:"user create successfully"});
  };
  