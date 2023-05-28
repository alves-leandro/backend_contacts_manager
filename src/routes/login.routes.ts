import { Router } from "express"
import { createTokenController } from "../controllers/login.controller"
import { ensureDataIsValidMiddleware } from "../middlewares"
import { loginSchema } from "../schemas/login.schema"

const loginRoutes = Router()

loginRoutes.post("", ensureDataIsValidMiddleware(loginSchema), createTokenController)

export { loginRoutes }