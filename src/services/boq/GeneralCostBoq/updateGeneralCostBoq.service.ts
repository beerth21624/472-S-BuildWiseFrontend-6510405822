import { BaseResponse } from "@/types/BaseResponse.type";
import { axiosAPI } from "@/utils/axios";
import _ from "lodash";

export type UpdateGeneralCostBoqProps = {
  g_id: string;
  estimated_cost: number;
};

const updateGeneralCostBoq = async (props?: UpdateGeneralCostBoqProps) => {
  try {
    const data = _.omit(props, ["general_cost_id"]);
    const res = await axiosAPI.put<BaseResponse<object>>(
      `/general-costs/${props?.g_id}`,
      data,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default updateGeneralCostBoq;
