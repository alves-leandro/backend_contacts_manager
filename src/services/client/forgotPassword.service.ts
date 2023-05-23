import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entitie";
import AppError from "../../errors/AppErrors";
import nodemailer from "nodemailer"
import crypto from "crypto"
import { hash } from "bcryptjs";


const forgotPasswordSevice = async ({ email }: any) => {
    const clientsRepository = AppDataSource.getRepository(Client)

    const client = await clientsRepository.findOne({
        where: {
            email
        }
    })

    if (!client) {
        throw new AppError("Client not found", 404);
    }

    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "b82737616b3c72",
          pass: "aee924e57b1ed5"
        }
    })

    const newPassword = crypto.randomBytes(4).toString("hex")

    transporter.sendMail({
        from: "Administrador <8d78406dc5-6c2f20@inbox.mailtrap.io>",
        to: email,
        subject: "Recuperação de senha",
        html: `<p>Olá para acessar o sistema utilize a senha: ${newPassword}</p><br /><a href="http://localhost:3000/login">Sistema</a>`
    });

    const hashedPassword = await hash(newPassword, 10);

    await clientsRepository.update(client.id, {
        password: hashedPassword
    });
};

export { forgotPasswordSevice };