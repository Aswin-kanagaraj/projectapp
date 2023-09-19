const { upload } = require("../helpers/fileHelper");
const { isAuthenticatedUser } = require("../middlewares/authenticate");

module.exports = (app) => {
  const dbDataFunction = require("../controller/fileController");
  isAuthenticatedUser
  let router = require("express").Router();
// isAuthenticatedUser
  router.post("/",upload.single('file'), dbDataFunction.postFile);
  router.get("/", dbDataFunction.getFile);
  router.get("/:id", dbDataFunction.getFileId);
  app.use("/api/file", router);
};
