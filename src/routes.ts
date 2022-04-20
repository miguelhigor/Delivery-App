import { Router } from "express";
import { CreateClientController } from "./modules/clients/CreateClientController";

const routes = Router();

// Clients
const createClientController = new CreateClientController();
routes.post("/client", createClientController.handle);

export { routes };