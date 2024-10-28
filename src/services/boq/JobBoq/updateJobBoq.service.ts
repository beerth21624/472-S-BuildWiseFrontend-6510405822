import { axiosAPI } from "@/utils/axios";
import _ from "lodash";

export interface UpdateJobBoqResponse {
  message: string;
}

export type UpdateJobBoqProps = {
  boq_id: string;
  job_id: string;
  quantity: number;
  labor_cost: number;
};

const updateJobBoq = async (props?: UpdateJobBoqProps) => {
  try {
    const data = _.omit(props, ["boq_id"]);
    const res = await axiosAPI.put<UpdateJobBoqResponse>(
      "/boqs/" + props?.boq_id + "/jobs",
      data,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default updateJobBoq;
