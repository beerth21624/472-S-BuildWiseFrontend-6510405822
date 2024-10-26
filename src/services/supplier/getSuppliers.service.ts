import { AddressSchemaType } from "@/schemas/address.schema";
import { axiosAPI } from "@/utils/axios";

export interface GetSuppliersResponse {
  data: Data;
  message: string;
}

export interface Data {
  suppliers: Supplier[];
  total: number;
}

export interface Supplier {
  id: string;
  name: string;
  email: string;
  tel: string;
  address: AddressSchemaType;
}

export type GetSuppliersProps = {};

const getSuppliers = async (props?: GetSuppliersProps) => {
  try {
    const res = await axiosAPI.get<GetSuppliersResponse>("/suppliers");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default getSuppliers;
