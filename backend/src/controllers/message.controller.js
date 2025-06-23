import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId }, // exclude the logged-in user
    }).select("-password"); // select only necessary fields

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("error fetching users for sidebar:", error);
    res.status(500).json({ error: "internal server error" });
  }
};
