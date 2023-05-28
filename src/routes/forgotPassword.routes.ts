import { Router } from "express"
import { forgotPasswordController } from "../controllers/forgotPassword.controllets"
import { forgotPasswordSchema } from "../schemas/forgotPassword.schema"
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware"

const forgotPasswordRoutes = Router()

forgotPasswordRoutes.post("", ensureDataIsValidMiddleware(forgotPasswordSchema), forgotPasswordController)

export { forgotPasswordRoutes }