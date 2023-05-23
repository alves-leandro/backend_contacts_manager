import { Router } from "express"
import { forgotPasswordController } from "../controllers/forgotPassword.controllets"

const forgotPasswordRoutes = Router()

forgotPasswordRoutes.post("", forgotPasswordController)

export { forgotPasswordRoutes }