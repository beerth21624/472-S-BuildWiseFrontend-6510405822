import { axiosAPI } from "@/utils/axios";

export interface ApproveBoqResponse {
  message: string;
}

export type ApproveBoqProps = {
  boq_id: string;
};

const approveBoq = async (props?: ApproveBoqProps) => {
  try {
    const res = await axiosAPI.post<ApproveBoqResponse>(
      "/boqs/" + props?.boq_id + "/approve",
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default approveBoq;
