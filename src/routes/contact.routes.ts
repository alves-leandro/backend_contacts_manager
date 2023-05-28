import { Router } from "express"
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contact.controllers"
import { contactSchemaRequest, contactSchemaUpdate } from "../schemas/contact.schema"
import { ensureauthMiddleware } from "../middlewares/ensureAuth.middleware"
import { ensureIsOwnerMiddlewareContact } from "../middlewares/ensureIsOwnerContact.middleware"
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware"

const contactRoutes = Router()

contactRoutes.use(ensureauthMiddleware)

contactRoutes.get("", listContactController)
contactRoutes.post("", ensureDataIsValidMiddleware(contactSchemaRequest), createContactController)
contactRoutes.patch("/:id", ensureIsOwnerMiddlewareContact, ensureDataIsValidMiddleware(contactSchemaUpdate), updateContactController)
contactRoutes.delete("/:id", ensureIsOwnerMiddlewareContact, deleteContactController)


export {contactRoutes}