import { AddressSchemaType } from "@/schemas/address.schema";
import { axiosAPI } from "@/utils/axios";

export interface CreateSupplierResponse {
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

export type CreateSupplierProps = {
  name: string;
  email: string;
  tel: string;
  address: AddressSchemaType;
};

const createSupplier = async (props?: CreateSupplierProps) => {
  try {
    const res = await axiosAPI.post<CreateSupplierResponse>(
      "/suppliers",
      props,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default createSupplier;
