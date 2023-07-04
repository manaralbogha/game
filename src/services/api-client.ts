import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string|null;
  results: T[];
}

const axiosInstance= axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "04b81be2f3a0494992e840d74b32712a",
  },
});

class APIClient<T>{
  endPoint:string;
  constructor(endPoint:string){
    this.endPoint=endPoint;
  }

  getAll=(config?: AxiosRequestConfig)=>
    axiosInstance.get<FetchResponse<T>>(this.endPoint,config).then((res)=>res.data);


    get=()=>
    axiosInstance.get<T>(this.endPoint).then((res)=>res.data);

  
}
export default APIClient;
