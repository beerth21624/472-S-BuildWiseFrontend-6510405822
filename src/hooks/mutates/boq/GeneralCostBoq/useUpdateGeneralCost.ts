import updateGeneralCostBoq from "@/services/boq/GeneralCostBoq/updateGeneralCostBoq.service";
import { useMutation } from "@tanstack/react-query";

const useUpdateGeneralCost = () => {
  return useMutation({
    mutationFn: updateGeneralCostBoq,
  });
};

export default useUpdateGeneralCost;
