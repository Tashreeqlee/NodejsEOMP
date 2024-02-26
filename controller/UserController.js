import express from "express";
import bodyParser from "body-parser";
import { users } from "../model/index.js";
import { verifyAToken } from "../middleware/AuthenticateUser.js";
const userRouter = express.Router();
// Fetch Users
userRouter.get("/", (req, res) => {
  try {
    users.fetchUsers(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve users",
    });
  }
});
//Fetch User
userRouter.get("/:id", (req, res) => {
  try {
    users.fetchUser(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve a user",
    });
  }
});
// Add a User
userRouter.post("/register", bodyParser.json(), (req, res) => {
  try {
    users.createUser(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to add a new user.",
    });
  }
});

//Update a User
userRouter.patch("/update/:id", bodyParser.json(), (req, res) => {
  try {
    users.updateUser(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to update a user",
    });
  }
});

//Delete a User
userRouter.delete("/delete/:id", (req, res)=>{
    try{
        users.deleteUser(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Unable to change a user",
          });
    }
});

userRouter.post('/login', bodyParser.json(), (req, res)=>{
    try{
        users.login(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to log in"
        })
    }
});

export { userRouter, express };
