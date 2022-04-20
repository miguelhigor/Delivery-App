import { Router } from "express";
import { UserAuthenticationController } from "./modules/account/authentication/UserAuthenticationController";
import { CreateClientController } from "./modules/clients/CreateClientController";
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

export { routes };