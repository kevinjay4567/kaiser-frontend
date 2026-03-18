import type { Appointment } from "./Appointment";

export interface Service {
  id: string;
  name: string;
  price: string;
  state: boolean;
  duration: number;
  urlImage?: string;
  discount: string;
  description: string;
  appointments: Appointment[];
}

export const blankService: Service = {
  id: "",
  name: "",
  price: "",
  state: false,
  duration: 0,
  discount: "",
  description: "",
  appointments: [],
};

export interface ServiceQueryResponse {
  results: ServiceQueryResult[];
  total: number;
  query: string;
}

export interface ServiceQueryResult {
  id: string;
  label: string;
  type: string;
  score: number;
  meta: ServiceQueryResultMetaInfo;
}

export interface ServiceQueryResultMetaInfo {
  price: string;
  duration: number;
  discount: string;
  urlImage: string;
}
