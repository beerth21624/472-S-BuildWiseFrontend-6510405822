import { AddressSchemaType } from "@/schemas/address.schema";
import { axiosAPI } from "@/utils/axios";

export interface CreateClientResponse {
  data: Data;
  message: string;
}

export interface Data {
  id: string;
  name: string;
  email: string;
  tel: string;
  address: AddressSchemaType;
}

export type CreateClientProps = {
  name: string;
  email: string;
  tel: string;
  address: AddressSchemaType;
  tax_id: string;
};

const createClient = async (props?: CreateClientProps) => {
  try {
    const res = await axiosAPI.post<CreateClientResponse>("/clients", props);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default createClient;
