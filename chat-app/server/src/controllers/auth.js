const crypto = require("crypto");
const StreamChat = require("stream-chat").StreamChat;
const bcrypt = require("bcrypt");
const { connect } = require("getstream");

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    //connect stream
    const serverClient = connect(
      process.env.STREAM_API_KEY,
      process.env.STREAM_API_SECRET,
      process.env.STREAM_APP_ID
    );
    const client = StreamChat.getInstance(
      process.env.STREAM_API_KEY,
      process.env.STREAM_API_SECRET
    );
    //check user in database;
    const { users } = await client.queryUsers({ name: username });

    if (!users) return res.status(400).json({ message: "User not found" });
    const success = await bcrypt.compare(password, users[0].hashedPassword);
    const token = serverClient.createUserToken(users[0].id);
    if (success) {
      return res.status(401).json({
        message: "Invalid password",
      });
    } else {
      return res.status(200).json({
        success: true,
        token,
        fullName: users[0].fullName,
        username,
        userId: users[0].id,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};
const signUp = async (req, res) => {
  try {
    const { username, password, fullName, phoneNumber, avatarURL } = req.body;
    //create random id for each user
    const userId = crypto.randomBytes(16).toString("hex");
    //connect stream
    const serverClient = connect(
      process.env.STREAM_API_KEY,
      process.env.STREAM_API_SECRET,
      process.env.STREAM_APP_ID
    );
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = serverClient.createUserToken(userId);
    res.status(200).json({
      success: true,
      token,
      username,
      userId,
      hashedPassword,
      fullName,
      avatarURL,
      phoneNumber,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

module.exports = { signIn, signUp };
