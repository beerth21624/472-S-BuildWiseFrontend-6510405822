import { axiosAPI } from "@/utils/axios";

export interface DeleteJobResponse {
  message: string;
}

export type DeleteJobProps = {
  job_id: string;
};

const deleteJob = async (props?: DeleteJobProps) => {
  try {
    const res = await axiosAPI.delete<DeleteJobResponse>(
      `/jobs/${props?.job_id}`,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default deleteJob;
