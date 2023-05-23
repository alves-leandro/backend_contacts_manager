import { z } from "zod";

const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

const contactSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  secondEmail: z.string().email().nullish(),
  phone: z.string().regex(phoneRegex),
  secondPhone: z
    .string()
    .refine((value) => phoneRegex.test(value), {
      message: "Telefone inválido",
    })
    .nullish(),
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
