import { Router } from "express"
import { createClientController, deleteClientController, listClientController, updateClientController } from "../controllers/client.controllers"

const clientRoutes = Router()

clientRoutes.get("", listClientController)
clientRoutes.post("", createClientController)
clientRoutes.patch("/:id", updateClientController)
clientRoutes.delete("/:id", deleteClientController)


export {clientRoutes}
