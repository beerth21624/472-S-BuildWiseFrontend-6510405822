import { axiosAPI } from "@/utils/axios";

export interface DeleteJobBoqResponse {
  message: string;
}

export type DeleteJobBoqProps = {
  boq_id: string;
  job_id: string;
};

const deleteJobBoq = async (props?: DeleteJobBoqProps) => {
  try {
    const res = await axiosAPI.delete<DeleteJobBoqResponse>(
      `/boqs/${props?.boq_id}/jobs/${props?.job_id}`,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default deleteJobBoq;
