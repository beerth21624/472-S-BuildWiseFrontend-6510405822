import { type BaseResponse } from "@/types/BaseResponse.type";
import { axiosAPI } from "@/utils/axios";

interface Data {
  ProjectID: string;
  ProjectName: string;
  Description: string;
  Address: Address;
  ClientName: string;
  ClientAddress: Address;
  ClientEmail: string;
  ClientTel: string;
  ClientTaxID: string;
  QuotationID: string;
  ValidDate: string;
  TaxPercentage: number;
  FinalAmount: FinalAmount;
  Status: string;
  JobDetails: JobDetail[];
}

interface JobDetail {
  Name: string;
  Unit: string;
  Quantity: number;
  SellingPrice: FinalAmount;
  Amount: FinalAmount;
}

interface FinalAmount {
  Float64: number;
  Valid: boolean;
}

interface Address {
  address: string;
  district: string;
  province: string;
  postal_code: string;
  subdistrict: string;
}

export type GetExportQuotationByProjectProps = {
  project_id: string;
};

const getExportQuotationByProject = async (
  props: GetExportQuotationByProjectProps,
) => {
  try {
    const res = await axiosAPI.get<BaseResponse<Data>>(
      `/quotations/projects/${props.project_id}/export`,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default getExportQuotationByProject;
