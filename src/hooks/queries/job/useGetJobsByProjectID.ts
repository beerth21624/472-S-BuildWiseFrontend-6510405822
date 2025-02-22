import getJobsByProjectID, {
  type getJobsByProjectIDProps,
} from "@/services/job/getJobsByProjectID.service";
import { useQuery } from "@tanstack/react-query";

const useGetJobsByProjectID = (props: getJobsByProjectIDProps) => {
  return useQuery({
    queryKey: ["useGetJobsByProjectID"],
    queryFn: () => getJobsByProjectID(props),
  });
};

export default useGetJobsByProjectID;
