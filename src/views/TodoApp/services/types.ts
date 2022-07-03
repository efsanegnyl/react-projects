export interface ITodo {
  id: number;
  text: string;
  status: boolean;
}

export interface IResponse {
  status: boolean;
  message: string;
  data?: ITodo | ITodo[] | null;
}
