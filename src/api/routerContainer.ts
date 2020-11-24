import express from "express";
import adminRouter from "./routes/adminRouter";
import officeRouter from "./routes/officeRouter";
const routerContainer = express.Router();
routerContainer.use("/api/admin", adminRouter);
routerContainer.use("/api/offices", officeRouter);

export default routerContainer;
