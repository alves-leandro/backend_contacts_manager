import { Router } from "express"
import { createClientController, deleteClientController, listClientController, updateClientController } from "../controllers/client.controllers"
import { clientSchemaRequest, clientSchemaUpdate } from "../schemas/client.schema"
import { ensureDataIsValidMiddleware, ensureIsOwnerMiddleware } from "../middlewares"

const clientRoutes = Router()

clientRoutes.get("", listClientController)
clientRoutes.post("", ensureDataIsValidMiddleware(clientSchemaRequest), createClientController)
clientRoutes.patch("/:id", ensureIsOwnerMiddleware, ensureDataIsValidMiddleware(clientSchemaUpdate), updateClientController)
clientRoutes.delete("/:id", ensureIsOwnerMiddleware, deleteClientController)


export {clientRoutes}
