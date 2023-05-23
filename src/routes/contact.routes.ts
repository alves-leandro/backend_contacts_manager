import { Router } from "express"
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contact.controllers"
import { ensureDataIsValidMiddleware, ensureIsOwnerMiddleware, ensureauthMiddleware } from "../middlewares"
import { contactSchemaRequest, contactSchemaUpdate } from "../schemas/contact.schema"

const contactRoutes = Router()

contactRoutes.use(ensureauthMiddleware)

contactRoutes.get("", listContactController)
contactRoutes.post("", ensureDataIsValidMiddleware(contactSchemaRequest), createContactController)
contactRoutes.patch("/:id", ensureIsOwnerMiddleware, ensureDataIsValidMiddleware(contactSchemaUpdate), updateContactController)
contactRoutes.delete("/:id", ensureIsOwnerMiddleware, deleteContactController)


export {contactRoutes}