import { AddressSchemaType } from "@/schemas/address.schema";
import { axiosAPI } from "@/utils/axios";

export interface GetProjectsResponse {
  data: Data;
  message: string;
}

export interface Data {
  projects: Project[];
  total: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  address: AddressSchemaType;
  status: string;
  client_id: string;
  client: Client;
  created_at: string;
  updated_at: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  tel: string;
  address: AddressSchemaType;
  tax_id: string;
  created_at: string;
  updated_at: string;
}

export type GetProjectsProps = {};

const getProjects = async (props?: GetProjectsProps) => {
  try {
    const res = await axiosAPI.get<GetProjectsResponse>("/projects");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default getProjects;
