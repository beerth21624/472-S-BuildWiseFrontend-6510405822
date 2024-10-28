import { type BaseResponse } from "@/types/BaseResponse.type";
import { axiosAPI } from "@/utils/axios";
import _ from "lodash";

export type GetMaterialsProjectProps = {
  boq_id: string;
  material_id: string;
  supplier_id?: string;
  estimated_price?: number;
  actual_price?: number;
};

const updateMaterialProject = async (props: GetMaterialsProjectProps) => {
  try {
    const data = _.omit(props, ["boq_id"]);
    const res = await axiosAPI.get<BaseResponse<object>>(
      `/materials/${props.boq_id}/estimated-price`,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default updateMaterialProject;
