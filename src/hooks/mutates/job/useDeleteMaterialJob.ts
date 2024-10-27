import deleteMaterialJob from "@/services/job/deleteMaterialJob.service";
import { useMutation } from "@tanstack/react-query";

const useDeleteMaterialJob = () => {
  return useMutation({
    mutationFn: deleteMaterialJob,
  });
};

export default useDeleteMaterialJob;
