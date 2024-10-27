import deleteJobBoq from "@/services/boq/deleteJobBoq.service";
import { useMutation } from "@tanstack/react-query";

const useDeleteJobBoq = () => {
  return useMutation({
    mutationFn: deleteJobBoq,
  });
};

export default useDeleteJobBoq;
