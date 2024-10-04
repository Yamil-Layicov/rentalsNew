import api from "../../api/posts";
import { useQuery } from "@tanstack/react-query";

export function useBuildings() {
  const {
    isLoading,
    data: buildings,
    error,
  } = useQuery({
    queryKey: ["buildings"],
    queryFn: () =>
      api.get("buildings?options[company_id]=01J678FWHY7A2C7MJDMRCF91KZ"),
  });

  return { isLoading, error, buildings };
}
