import express from "express";
import adminRouter from "./routes/adminRouter";
import officeRouter from "./routes/officeRouter";
import officeEmployeeRouter from "./routes/officeEmployeeRouter";
const routerContainer = express.Router();
routerContainer.use("/api/admin", adminRouter);
routerContainer.use("/api/offices", officeRouter);
routerContainer.use("/api/offices/:officeId/employees", officeEmployeeRouter);

export default routerContainer;
