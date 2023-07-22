import ReconnectingWebSocket from 'react-native-reconnecting-websocket';
import { TemporaryMessage } from '../types/Message';
let socket = new ReconnectingWebSocket('ws://192.168.178.3:3006');
const pendingRequests = new Map<string, { resolve: (value: any) => void, reject: (reason?: any) => void }>();


socket.onmessage = ({data}) => {
    // ! Please include a type system here
    const response = JSON.parse(data);

    // Check if this is a response to a pending request
    if (response.requestId && pendingRequests.has(response.requestId)) {
      const request = pendingRequests.get(response.requestId);
      request?.resolve(response);
      pendingRequests.delete(response.requestId);
    }

    // Handle other types of messages here
}

socket.onopen = () => {
    console.log("Created connection to server");
}

socket.onclose = () => {
    // Reconnect
    socket.reconnect()
    console.log("Reconnecting...");
}

socket.onerror = (error) => {
    console.log("Error: ", error.message);
}

export function sendHello()
{
    if(socket.readyState != WebSocket.OPEN) return;
    // socket.send("Hello, server!");
    socket.send(JSON.stringify({ type: "hello" }));
    console.log("Sent hello to server")
}

export async function sendMessageToServer(messageWithRequestId: TemporaryMessage)
{
    if(!socket || socket.readyState !== WebSocket.OPEN)
    {
        console.log(socket);
        throw new Error("Socket not connected");
    }

    const responsePromise = new Promise((resolve, reject) => {
        pendingRequests.set(messageWithRequestId.requestId, { resolve, reject });
    });

    const messageString = JSON.stringify(messageWithRequestId);
    socket.send(messageString);
    return responsePromise;
}