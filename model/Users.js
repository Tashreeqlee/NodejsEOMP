import { connection as db } from "../config/index.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../middleware/AuthenticateUser.js";
class Users {
  fetchUsers(req, res) {
    const qry = `
    SELECT userID, firstName, lastName,
    userAge, gender, emailAdd, userPass, userRole, userProfile
    FROM Users;
        `
    db.query(qry, (err, results) => {
      if (err) throw err
      res.json({
        status: res.statusCode,
        results
      })
    })
  }
  fetchUser(req, res) {
    const qry = `
    SELECT userID, firstName, lastName,
    userAge, gender, emailAdd, userPass, userRole, userProfile
    FROM Users
        WHERE userID = ${req.params.id};
        `
    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  async createUser(req, res) {
    // Payload
    let data = req.body
    data.userPass = await hash(data?.userPass, 8);
    let user = {
      emailAdd: data.emailAdd,
      userPass: data.userPass,
    };
    const qry = `
        INSERT INTO Users
        SET ?;
        `;
    db.query(qry, [data], (err) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: "email address already exists",
        });
      } else {
        // Create a token
        let token = createToken(user);
        res.json({
          status: res.statusCode,
          token,
          msg: "You're registered",
        });
      }
    });
  }
  async updateUser(req, res) {
    const data = req.body;
    if (data?.userPass) {
      data.userPass = await hash(data?.userPass, 8);
    }

    const qry = `
        UPDATE Users
        SET ?
        WHERE userID = ${req.params.id};
        `;
    db.query(qry, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The user information is updated",
      });
    });
  }
  deleteUser(req, res) {
    const qry = `
        DELETE FROM Users
        WHERE userID = ${req.params.id};
        `;
    db.query(qry, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The user information has been removed",
      });
    });
  }
  login(req, res) {
    const { emailAdd, userPass } = req.body;
    const qry = `
        SELECT userID, firstName, lastName,
        userAge, gender, emailAdd, userPass, userRole, userProfile
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `;
    db.query(qry, async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "You provided an invalid email address",
        });
      } else {
        //VALIDATE PASSWORD
        const validPass = await compare(userPass, result[0].userPass);
        if (validPass) {
          const token = createToken({
            emailAdd,
            userPwd,
          });
          res.json({
            status: res.statusCode,
            msg: "You're logged in",
            token,
            result: result[0],
          });
        } else {
          res.json({
            status: res.statusCode,
            msg: "Please provide the correct password",
          });
        }
      }
    });
  }
}

export { Users };
