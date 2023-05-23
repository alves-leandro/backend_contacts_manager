import { z } from "zod";

const contactSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  secondEmail: z.string().email().nullish(),
  phone: z.string(),
  secondPhone: z.string().nullish(),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
});

const contactSchemaUpdate = contactSchema
  .omit({
    id: true,
  })
  .partial();

const contactsSchemaResponse = z.array(contactSchema);

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaUpdate,
  contactsSchemaResponse,
};
