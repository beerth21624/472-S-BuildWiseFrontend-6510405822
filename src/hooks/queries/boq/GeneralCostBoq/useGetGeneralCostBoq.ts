import getGeneralCostBoq, {
  type GetGeneralCostBoqProps,
} from "@/services/boq/GeneralCostBoq/getGeneralCostBoq";
import { useQuery } from "@tanstack/react-query";

const useGetGeneralCostBoq = (props: GetGeneralCostBoqProps) => {
  return useQuery({
    queryKey: ["useGetGeneralCostBoq"],
    queryFn: () => getGeneralCostBoq(props),
  });
};

export default useGetGeneralCostBoq;
