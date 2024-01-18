import { Socket } from "socket.io";

export interface UserSocket {
    userId: string;
    socket: Socket;
    isRemove?: boolean;
}