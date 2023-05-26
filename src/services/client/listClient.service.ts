import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TClientsMany } from "../../interfaces/client.interfaces";
import { clientsManySchema } from "../../schemas/client.schema";
import { Client } from "../../entities/client.entitie";
import AppError from "../../errors/AppErrors";

const listClientService = async (): Promise<TClientsMany> => {
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

  const findClients: Array<Client> = await clientRepository.find();

  const client = clientsManySchema.parse(findClients);

  return client;
};

export default listClientService;