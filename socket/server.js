import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "*",
  },
});
let onlineUsers = [];
const addNewUser = (username, socketId) => {
 
  //some check condition we write in function with array and return true or false
  !onlineUsers.some((user) => user.username === username) &&
    onlineUsers.push({ username, socketId });
};
const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId != socketId);
};
const getUser = (username) => {
  
  return onlineUsers.find((user) => user.username === username);
};
io.on("connection", (socket) => {
  
  console.log("Some one connected",socket.id);

  //take user info -> add to array
  socket.on("newUser", (username) => addNewUser(username, socket.id));

    socket.on("sendNotification",({senderName,receiverName,type})=>{
       const receiver = getUser(receiverName)
       console.log(onlineUsers)
      console.log(receiver)
        io.to(receiver?.socketId).emit("getNotification",{senderName,type})
    })
  socket.on("disconnect", () => {
    //remove when user leave
    console.log("Some one has left");
    removeUser(socket.id);
  });
});

io.listen(4000);
