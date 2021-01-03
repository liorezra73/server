import express from "express";
import adminRouter from "./routes/adminRouter";
import officeRouter from "./routes/officeRouter";
import officeEmployeeRouter from "./routes/officeEmployeeRouter";
import companyRouter from "./routes/companyRouter";
import invoicesIncomeRouter from "./routes/invoicesIncomeRouter";
import customerRouter from "./routes/customerRouter";
import companyEmployeeRouter from "./routes/companyEmployeeRouter";
const routerContainer = express.Router();
routerContainer.use("/api/admin", adminRouter);
routerContainer.use("/api/offices", officeRouter);
routerContainer.use("/api/offices/:officeId/employees", officeEmployeeRouter);
routerContainer.use("/api/offices/:officeId/companies", companyRouter);
routerContainer.use("/api/offices/:officeId/companies/:companyId/employees", companyEmployeeRouter);
routerContainer.use("/api/offices/:officeId/companies/:companyId/customers", customerRouter);
routerContainer.use("/api/offices/:officeId/companies/:companyId/customers/:customerId/invoicesIncome", invoicesIncomeRouter);

export default routerContainer;
