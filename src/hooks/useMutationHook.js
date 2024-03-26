import { useMutation } from "@tanstack/react-query";

// export const useMutationHooks = (fnCallback) => {
//   const mutation = useMutation(fnCallback);
//   return mutation;
// };

export const useMutationHooks = (fnCallback) => {
  const mutation = useMutation({
    mutationFn: fnCallback,
  });
  return mutation;
};
