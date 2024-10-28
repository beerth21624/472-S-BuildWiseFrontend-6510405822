import updateGeneralCostBoq from "@/services/boq/GeneralCostBoq/updateGeneralCostBoq";
import { useMutation } from "@tanstack/react-query";

const useUpdateGeneralCost = () => {
  return useMutation({
    mutationFn: updateGeneralCostBoq,
  });
};

export default useUpdateGeneralCost;
