import express from "express";
import routerContainer from "./src/api/routerContainer";
import { MyCustomError } from "./src/errors/MyCustomError";

const app: express.Application = express();

app.use(express.json());
app.use(routerContainer);

app.use(
  (
    err: MyCustomError,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (err.code < 500) {
      res.status(err.code).end(err.message);
    } else {
      res.status(500).send("try again later");
    }
  }
);

app.listen(3000, function () {
  console.log("App is listening on port 3000!");
});
