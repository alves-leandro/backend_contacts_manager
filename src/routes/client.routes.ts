import { Router } from "express"
import { createClientController, deleteClientController, listClientController, updateClientController } from "../controllers/client.controllers"
import { clientSchemaRequest, clientSchemaUpdate } from "../schemas/client.schema"
import { ensureDataIsValidMiddleware, ensureIsOwnerMiddleware, ensureauthMiddleware } from "../middlewares"
import { ensureIsOwnerMiddlewareClient } from "../middlewares/ensureIsOwnerClient.middleware"

const clientRoutes = Router()

clientRoutes.get("", listClientController)
clientRoutes.post("", ensureDataIsValidMiddleware(clientSchemaRequest), createClientController)
clientRoutes.patch("/:id", ensureauthMiddleware, ensureIsOwnerMiddlewareClient, ensureDataIsValidMiddleware(clientSchemaUpdate), updateClientController)
clientRoutes.delete("/:id", ensureauthMiddleware, ensureIsOwnerMiddlewareClient, deleteClientController)


export {clientRoutes}
