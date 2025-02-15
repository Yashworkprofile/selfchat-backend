module.exports = ({ env }) => ({
    io: {
      enabled: true,
      config: {
        cors: {
          origin: "http://localhost:3000", 
          methods: ["GET", "POST"],
        },
      },
    },
  });