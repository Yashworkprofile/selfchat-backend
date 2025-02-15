'use strict';
const { Server } = require("socket.io"); 
module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    const io = new Server(strapi.server.httpServer, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
      },
    });

    io.on("connection", (socket) => {
      console.log("A user connected:", socket.id);

      // Listen for new messages
      socket.on("sendMessage", async (data) => {
        try {
          // Save the message to Strapi (optional)
          const message = await strapi.entityService.create(
            "api::message.message",
            {
              data: {
                user: data.user,
                message: data.message,
              },
            }
          );

          // Send the message back to the sender
          socket.emit("receiveMessage", {
            user: "Server",
            message: data.message,
          });
        } catch (error) {
          console.error("Error saving message:", error);
        }
      });

      // Handle disconnection
      socket.on("disconnect", () => {
        console.log("A user disconnected:", socket.id);
      });
    });
  },
};
