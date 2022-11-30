import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("-----------");
    console.log(data);
    console.log("-----------");
    return res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (error) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("./test/about.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(">>> message: ", message);
  return res.send("post crud from server");
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  console.log(">>>data: ", data);
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

// key: value
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
};
