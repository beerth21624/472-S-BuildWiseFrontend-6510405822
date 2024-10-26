import { AddressSchemaType } from "@/schemas/address.schema";
import { axiosAPI } from "@/utils/axios";

export interface DeleteSupplierResponse {
  message: string;
}

export type DeleteSupplierProps = {
  supplier_id: string;
};

const deleteSupplier = async (props?: DeleteSupplierProps) => {
  try {
    const res = await axiosAPI.delete<DeleteSupplierResponse>(
      "/suppliers/" + props?.supplier_id,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default deleteSupplier;
