import { Router } from "express"
import { createClientController, deleteClientController, listClientController, updateClientController } from "../controllers/client.controllers"
import { clientSchemaRequest, clientSchemaUpdate } from "../schemas/client.schema"
import { ensureDataIsValidMiddleware, ensureauthMiddleware } from "../middlewares"

const clientRoutes = Router()

clientRoutes.get("", listClientController)
clientRoutes.post("", ensureDataIsValidMiddleware(clientSchemaRequest), createClientController)
clientRoutes.patch("/:id", ensureauthMiddleware, ensureDataIsValidMiddleware(clientSchemaUpdate), updateClientController)
clientRoutes.delete("/:id", ensureauthMiddleware, deleteClientController)


export {clientRoutes}
