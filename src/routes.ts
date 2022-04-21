import { Router } from "express";
import { authCheck } from "./middleware/authCheck";
import { UserAuthenticationController } from "./modules/account/authentication/UserAuthenticationController";
import { CreateClientController } from "./modules/clients/CreateClientController";
import { CreateDeliveryController } from "./modules/deliveries/createDelivery/CreateDeliveryController";
import { FindOpenDeliveryRequestsController } from "./modules/deliveries/findOpenDeliveryRequests/FindOpenDeliveryRequestsController";
import { CreateDeliverymanController } from "./modules/deliveryman/CreateDeliverymanController";

const routes = Router();

// Authentication
const userAuthenticationController = new UserAuthenticationController();
routes.post("/auth", userAuthenticationController.handle);

// Clients
const createClientController = new CreateClientController();
routes.post("/client", createClientController.handle);

// Deliveryman
const createDeliverymanController = new CreateDeliverymanController();
routes.post("/deliveryman", createDeliverymanController.handle);

// Deliveries
const createDeliveryController = new CreateDeliveryController();
routes.post("/delivery", authCheck, createDeliveryController.handle);

const findOpenDeliveryRequestsController = new FindOpenDeliveryRequestsController();
routes.get("/delivery/open-delivery-requests", authCheck, findOpenDeliveryRequestsController.handle);

export { routes };