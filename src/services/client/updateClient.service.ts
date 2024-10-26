import { AddressSchemaType } from "@/schemas/address.schema";
import { axiosAPI } from "@/utils/axios";
import _ from "lodash";

export interface UpdateClientResponse {
  message: string;
}

export type UpdateClientProps = {
  id: string;
  name: string;
  email: string;
  tel: string;
  address: AddressSchemaType;
  tax_id: string;
};

const updateClient = async (props?: UpdateClientProps) => {
  try {
    const data = _.omit(props, ["id"]);
    const res = await axiosAPI.put<UpdateClientResponse>(
      "/clients/" + props?.id,
      data,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default updateClient;
