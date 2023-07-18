import ReconnectingWebSocket from 'react-native-reconnecting-websocket';
let socket = new ReconnectingWebSocket('ws://192.168.178.3:3006');



socket.onmessage = ({data}) => {
    console.log("Message from server: ", data);
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
    if(socket.readyState != 1) return;
    socket.send("Hello, server!");
    console.log("Sent hello to server")
}