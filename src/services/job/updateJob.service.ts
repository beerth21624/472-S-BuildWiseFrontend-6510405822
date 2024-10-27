import { axiosAPI } from "@/utils/axios";
import _ from "lodash";

export interface UpdateJobResponse {
  message: string;
}

export type UpdateJobProps = {
  id?: string;
  name: string;
  description: string;
  unit: string;
};

const updateJob = async (props?: UpdateJobProps) => {
  try {
    const data = _.omit(props, ["id"]);
    const res = await axiosAPI.put<UpdateJobResponse>(
      "/jobs/" + props?.id,
      data,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default updateJob;
