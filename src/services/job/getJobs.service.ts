import { axiosAPI } from "@/utils/axios";

interface GetJobsResponse {
  data: Data;
  message: string;
}

interface Data {
  jobs: Job[];
}

interface Job {
  job_id: string;
  name: string;
  description: string;
  unit: string;
}

export type GetJobsProps = {};

const getJobs = async (props?: GetJobsProps) => {
  try {
    const res = await axiosAPI.get<GetJobsResponse>("/jobs");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default getJobs;
