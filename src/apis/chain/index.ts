import {apiClient} from "@lib/apiClient";
import {Sample} from "@type/model/sample";

export const SAMPLE_API_BASE_URL = '/v1/samples' as const;

export const get = async (id: number): Promise<ApiResponse<Sample>> => {
  return await apiClient.get<Sample>(`${SAMPLE_API_BASE_URL}/${id}`);
};
