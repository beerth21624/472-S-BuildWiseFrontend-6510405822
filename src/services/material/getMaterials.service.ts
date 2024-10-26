import { axiosAPI } from "@/utils/axios";

export interface GetMaterialsResponse {
  data: Data;
  message: string;
}

export interface Data {
  materials: Material[];
}

export interface Material {
  material_id: string;
  name: string;
  unit: string;
}

export type GetMaterialsProps = {};

const getMaterials = async (props?: GetMaterialsProps) => {
  try {
    const res = await axiosAPI.get<GetMaterialsResponse>("/materials");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default getMaterials;
