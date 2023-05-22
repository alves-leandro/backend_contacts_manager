import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TClientUpdateRequest } from "../../interfaces/client.interfaces";
import { TClient } from "../../interfaces/client.interfaces";
import { Client } from "../../entities/client.entitie";
import { clientSchema } from "../../schemas/client.schema";

const updateClientService = async (clientData: TClientUpdateRequest, idClient: string): Promise<TClient> => {
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

  const oldClientData = await clientRepository.findOneBy({
    id: idClient,
  });

  const client = clientRepository.create({
    ...oldClientData,
    ...clientData,
  });

  await clientRepository.save(client);

  const updatedClient = clientSchema.parse(client);

  return updatedClient;
};

export default updateClientService;