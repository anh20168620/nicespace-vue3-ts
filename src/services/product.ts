import { fetch } from "@/utils";
import type { ParamFetchAllProduct, Product, Response } from "@/types";

export const fetchProduct = async (params: ParamFetchAllProduct) => {
  const res = await fetch.post<Response<Product[]>>("/filter", params);
  return res.data;
};
