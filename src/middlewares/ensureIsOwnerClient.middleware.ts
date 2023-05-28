import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entitie";

const ensureIsOwnerMiddlewareClient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clientsRepository = AppDataSource.getRepository(Client);

  const clientId: string = req.params.id;
  const loggedInClientId: string = res.locals.clientId;

  const client = await clientsRepository.findOne({
    where: {
      id: clientId
    }
  });

  if (!client) {
    return res.status(404).json({
      message: "Client not found",
    });
  }

  if (client.id !== loggedInClientId) {
    return res.status(403).json({
      message: "You don`t have permissions",
    });
  }

  return next();
};

export { ensureIsOwnerMiddlewareClient };
