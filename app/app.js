const io = require("socket.io")(8080, {
    cors: {
      origin: "*",
    },
  });