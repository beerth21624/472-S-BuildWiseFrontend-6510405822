import { axiosAPI } from "@/utils/axios";

export interface DeleteMaterialJobResponse {
  message: string;
}

export type DeleteMaterialJobProps = {
  job_id: string;
  material_id: string;
};

const deleteMaterialJob = async (props?: DeleteMaterialJobProps) => {
  try {
    const res = await axiosAPI.delete<DeleteMaterialJobResponse>(
      "/jobs/" + props?.job_id + "/materials/" + props?.material_id,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default deleteMaterialJob;
