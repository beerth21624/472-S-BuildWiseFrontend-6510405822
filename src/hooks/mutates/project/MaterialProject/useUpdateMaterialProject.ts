import updateMaterialProject from "@/services/project/MaterialProject/updateMaterialProject.service";
import { useMutation } from "@tanstack/react-query";

const useUpdateMaterialProject = () => {
  return useMutation({
    mutationFn: updateMaterialProject,
  });
};

export default useUpdateMaterialProject;
