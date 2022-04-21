import { Router } from "express";
import { authCheck } from "./middleware/authCheck";
import { UserAuthenticationController } from "./modules/account/authentication/UserAuthenticationController";
import { CreateClientController } from "./modules/clients/createClient/CreateClientController";
import { FindDeliveriesByClientController } from "./modules/clients/findDeliveriesByClient/FindDeliveriesByClientController";
import { CreateDeliveryController } from "./modules/deliveries/createDelivery/CreateDeliveryController";
import { DeliveryAssignController } from "./modules/deliveries/deliveryAssign/DeliveryAssignController";
import { FindOpenDeliveryRequestsController } from "./modules/deliveries/findOpenDeliveryRequests/FindOpenDeliveryRequestsController";
import { CreateDeliverymanController } from "./modules/deliveryman/createDeliveryman/CreateDeliverymanController";
import { FindDeliveriesByDeliverymanController } from "./modules/deliveryman/findDeliveriesByDeliveryman/FindDeliveriesByDeliverymanController";

const routes = Router();

/**
 * Authentication
 */
const userAuthenticationController = new UserAuthenticationController();
routes.post("/auth", userAuthenticationController.handle);

/**
 * Clients
 */
const createClientController = new CreateClientController();
routes.post("/client", createClientController.handle);

const findDeliveriesByClient = new FindDeliveriesByClientController();
routes.get("/client/deliveries", authCheck, findDeliveriesByClient.handle);

/**
 * Deliveryman
 */
const createDeliverymanController = new CreateDeliverymanController();
routes.post("/deliveryman", createDeliverymanController.handle);

const findDeliveriesByDeliveryman = new FindDeliveriesByDeliverymanController();
routes.get("/deliveryman/deliveries", authCheck, findDeliveriesByDeliveryman.handle);

/**
 * Deliveries
 */
const createDeliveryController = new CreateDeliveryController();
routes.post("/delivery", authCheck, createDeliveryController.handle);

const findOpenDeliveryRequestsController = new FindOpenDeliveryRequestsController();
routes.get("/delivery/open-delivery-requests", authCheck, findOpenDeliveryRequestsController.handle);

const deliveryAssignController = new DeliveryAssignController();
routes.put("/delivery/assign-delivery/:id", authCheck, deliveryAssignController.handle);

export { routes };