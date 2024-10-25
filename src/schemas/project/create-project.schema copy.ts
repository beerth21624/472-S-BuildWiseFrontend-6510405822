import { type z } from "zod";
import { projectSchema } from "./project.schema";

export const createProjectSchema = projectSchema;

export type CreateProjectSchemaType = z.infer<typeof createProjectSchema>;
