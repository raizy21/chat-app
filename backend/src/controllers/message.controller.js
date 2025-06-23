import User from "../models/user.model.js";
import Message from "../models/message.model.js";

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

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;

    const messages = await Message.find({
      $or: [
        { sender: myId, receiver: userToChatId },
        { sender: userToChatId, receiver: myId },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    console.error("error fetching messages:", error);
    res.status(500).json({ error: "internal server error" });
  }
};
