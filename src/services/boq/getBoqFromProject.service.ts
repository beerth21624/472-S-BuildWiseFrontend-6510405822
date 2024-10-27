import { axiosAPI } from "@/utils/axios";

export interface GetBoqFromProjectResponse {
  data: Data;
  message: string;
}

interface Data {
  id: string;
  project_id: string;
  status: string;
  selling_general_cost: number;
  jobs: Job[];
}

interface Job {
  job_id: string;
  name: string;
  description: string;
  unit: string;
  quantity: number;
  labor_cost: number;
}

export type GetBoqFromProjectProps = {
  project_id: string;
};

const getBoqFromProject = async (props?: GetBoqFromProjectProps) => {
  try {
    const res = await axiosAPI.get<GetBoqFromProjectResponse>(
      `/boqs/project/${props?.project_id}`,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default getBoqFromProject;
