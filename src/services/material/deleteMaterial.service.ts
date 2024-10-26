import { axiosAPI } from "@/utils/axios";

export interface DeleteMaterialResponse {
  message: string;
}

export type DeleteMaterialProps = {
  material_id: string;
};

const deleteMaterial = async (props?: DeleteMaterialProps) => {
  try {
    const res = await axiosAPI.delete<DeleteMaterialResponse>(
      "/materials/" + props?.material_id,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default deleteMaterial;
