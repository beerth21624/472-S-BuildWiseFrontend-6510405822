import { axiosAPI } from "@/utils/axios";
import _ from "lodash";

export interface UpdateGeneralCostBoqResponse {
  message: string;
}

export type UpdateGeneralCostBoqProps = {
    g_id: string;
  estimated_cost: number;
};

const updateGeneralCostBoq = async (props?: UpdateGeneralCostBoqProps) => {
  try {
    const data = _.omit(props, ["general_cost_id"]);
    const res = await axiosAPI.put<UpdateGeneralCostBoqResponse>(
      `/general-costs/${props?.g_id}`,
      data,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default updateGeneralCostBoq;
