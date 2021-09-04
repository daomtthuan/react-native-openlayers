export type Message = {
  name: string;
  payload: any;
};

export type PostMessage = (message: Message) => void;
