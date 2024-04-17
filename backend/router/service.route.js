import { Router } from "express";
import { addService, fetchServices } from "../controller/service.controller.js";
const serviceRouter = Router();

serviceRouter.post("/", addService);
serviceRouter.get("/:zipCode", fetchServices);

export default serviceRouter;
