'use strict';
const { Server } = require("socket.io"); 
module.exports = {
 
  register(/*{ strapi }*/) {},

 
  bootstrap({ strapi }) {
    const io = new Server(strapi.server.httpServer, {
      cors: {
        origin: "https://sage-churros-eb2321.netlify.app/",
        methods: ["GET", "POST"],
      },
    });

    io.on("connection", (socket) => {
      console.log("A user connected:", socket.id);

     
      socket.on("sendMessage", async (data) => {
        try {
          
          const message = await strapi.entityService.create(
            "api::message.message",
            {
              data: {
                user: data.user,
                message: data.message,
              },
            }
          );

         
          socket.emit("receiveMessage", {
            user: "Server",
            message: data.message,
          });
        } catch (error) {
          console.error("Error saving message:", error);
        }
      });

      
      socket.on("disconnect", () => {
        console.log("A user disconnected:", socket.id);
      });
    });
  },
};
