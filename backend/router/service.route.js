import { Router } from "express";
import { addService } from "../controller/service.controller.js";
const serviceRouter = Router();

serviceRouter.post("/", addService);

export default serviceRouter;
