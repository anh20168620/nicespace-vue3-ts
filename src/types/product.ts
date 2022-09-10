export interface Product {
  category_id: number;
  chosen_option_url: string;
  colors: Array<Color>;
  count_version: number;
  id: number;
  images: Array<string>;
  label_type: string | null;
  mobile_direct: boolean;
  name: string;
  price: number;
  promo_tags: PromoTag;
  sale_price: number;
  status: string | null;
}

export interface PromoTag {
  discount: boolean;
  gift: boolean;
}

export interface Color {
  code: string;
  color_group: object;
  color_group_id: number;
  description: string | null;
  id: number;
  name: string;
}

export interface ParamFetchAllProduct {
  search: string;
  cur_page: number;
  per_page: number;
  sort: number;
  filters: object;
}

export interface Category {
  queryValue: Array<number>;
}

export interface Filters {
  category: Category;
}
