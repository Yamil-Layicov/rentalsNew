import { useQuery } from "@tanstack/react-query";
import api from '../../api/posts';

export function useFloorOne(year, month, floorId ) {
  const queryKey = ["floorList", year, month];

  
  const queryFn = () => {
    let url = `map/rooms?options[company_id]=01J678FWHY7A2C7MJDMRCF91KZ&options[floor_id]=${floorId}`;

    if (year) {
      url += `&options[year]=${year}`;
    }
    if (month) {
      url += `&options[month]=${month}`;  
    }

    console.log(url);
    

    return api.get(url);
  };

  const {
    isLoading,
    data: floorOne,
    error,
  } = useQuery({
    queryKey,
    queryFn,
  });
 
  return { isLoading, error, floorOne };
}