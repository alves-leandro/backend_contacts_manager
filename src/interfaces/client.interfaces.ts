import { z } from "zod"
import { clientSchema, clientSchemaRequest, clientSchemaResponse, clientsManySchema } from "../schemas/client.schema"
import { DeepPartial } from "typeorm"

type TClient = z.infer<typeof clientSchema>
type TClientRequest = z.infer<typeof clientSchemaRequest>
type TClientResponse = z.infer<typeof clientSchemaResponse>
type TClientsMany = z.infer<typeof clientsManySchema>
type TClientUpdateRequest = DeepPartial<TClientRequest>

export { TClient, TClientRequest, TClientResponse, TClientUpdateRequest, TClientsMany }