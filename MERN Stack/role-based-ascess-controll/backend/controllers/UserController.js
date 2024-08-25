const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { secret } = require("../utils/constants");
const Employee = require("../models/Employee");

const User_register = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      res.status(400).json({
        status: "error",
        message: "Both username and password is required",
      });
    }

    const user = await User.create(req.body);

    const token = jwt.sign({ username, role: user.roles }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({
      status: "success",
      token,
      message: " user created successdully",
    });
  } catch (err) {
    console.log("error white creating user");
  }
};

const User_login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (!user) {
    res.status(403).json({
      status: "error",
      message: "User not found",
    });
  }

  const isMatch = user.password === password;

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ username, role: user.roles }, secret, {
    expiresIn: "1h",
  });

  res.status(200).json({
    status: "success",
    token,
    message: " user login successfull",
  });
};

const Admin_login = async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log(req.body);

    // Find the user with the given username and role 'admin'
    const adminUser = await Employee.findOne({
      username,
      roles: "admin",
      password,
    });

    console.log(adminUser);

    if (!adminUser) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Check if the provided password matches the stored  password

    const isMatch = adminUser.password === password;

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ username, role: adminUser.roles }, secret, {
      expiresIn: "1h",
    });

    res.json({
      status: "success",
      token,
      message: "admin login successfull",
      role: "admin",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const Manager_login = async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log(req.body);

    // Find the user with the given username and role 'admin'
    const managerUser = await Employee.findOne({ username, roles: "manager" });

    if (!managerUser) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Check if the provided password matches the stored password
    const isMatch = managerUser.password === password;

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ username, role: managerUser.roles }, secret, {
      expiresIn: "1h",
    });

    res.json({
      status: "success",
      token,
      message: "manager login successfull",
      role: "admin",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const Employee_login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user with the given username and role 'admin'
    const employeeUser = await Employee.findOne({
      username,
      roles: "employee",
      password,
    });

    if (!employeeUser) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Check if the provided password matches the stored password
    const isMatch = employeeUser.password === password;

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ username, role: employeeUser.roles }, secret, {
      expiresIn: "1h",
    });

    res.json({
      status: "success",
      token,
      message: "employee login successfull",
      role: "admin",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const Employee_register = async (req, res) => {
  const { username, password, roles } = req.body;

  try {
    if (!username || !password || !roles) {
      res.status(400).json({
        status: "error",
        message: "Both username and password is required",
      });
    }

    const employee = await Employee.create(req.body);

    const token = jwt.sign({ username, role: roles }, secret, {
      expiresIn: "1h",
    });

    employee.save();

    res.status(200).json({
      status: "success",
      token,
      message: " employee created successdully",
    });
  } catch (err) {
    console.log("error white creating user");
  }
};

const Manager_register = async (req, res) => {
  const { username, password, roles } = req.body;

  try {
    if (!username || !password || !roles) {
      res.status(400).json({
        status: "error",
        message: "Both username and password is required",
      });
    }

    const manager = await Employee.create(req.body);

    const token = jwt.sign({ username, role: roles }, secret, {
      expiresIn: "1h",
    });

    manager.save();

    res.status(200).json({
      status: "success",
      token,
      message: " manager created successdully",
    });
  } catch (err) {
    console.log("error white creating user");
  }
};

module.exports = {
  User_register,
  User_login,
  Admin_login,
  Manager_login,
  Employee_login,
  Employee_register,
  Manager_register,
};
