const express = require("express");
const app = express();
const PORT = 3000;

const connectDB = require("./db/connect");
require("dotenv").config();


const tasks = require("./routes/tasks");


// middleware
app.use(express.json());


// routes
app.get("/hello", (req, res) => {
  res.status(200).json({ "say hello": "Task Manager App" });
});

app.get("/healthy", (req, res) => {
  res.status(200).json({ "check health": "Server is healthy" });
});

// app.get('/api/v1/tasks')            -- get all the tasks
// app.post('/api/v1/tasks')           -- create a new task
// app.get('/api/v1/tasks/:id')        -- get single task
// app.patch('/api/v1/tasks/:id')      -- update task
// app.delete('/api/v1/tasks/:id')     -- delete task

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      PORT,
      () => console.log(`Server is up and running at port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
