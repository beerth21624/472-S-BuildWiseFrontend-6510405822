import { axiosAPI } from "@/utils/axios";

export interface CreateMaterialResponse {
  data: Data;
  message: string;
}

export interface Data {
  material_id: string;
  name: string;
  unit: string;
}

export type CreateMaterialProps = {
  name: string;
  unit: string;
};

const createMaterial = async (props?: CreateMaterialProps) => {
  try {
    const res = await axiosAPI.post<CreateMaterialResponse>(
      "/materials",
      props,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default createMaterial;
