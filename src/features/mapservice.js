import { base_url } from "../utils/baseUrl";

const getMaps = async () => {
  const response = await axios.get(`${base_url}map/rooms?options[company_id]=01J678FWHY7A2C7MJDMRCF91KZ&options[floor_id]=1`);
  return response.data;
};

const mapService = {
  getMaps,
};

export default mapService;
