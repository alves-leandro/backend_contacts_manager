import {Request, Response} from "express"
import { forgotPasswordSevice } from "../services/client/forgotPassword.service"

const forgotPasswordController = async (req: Request, res: Response) => {

    const { email } = req.body
    const mail = await forgotPasswordSevice({ email })

    return res.json({mail})
}

export {forgotPasswordController}