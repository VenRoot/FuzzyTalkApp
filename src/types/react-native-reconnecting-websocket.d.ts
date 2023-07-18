// Add a type definition for the javascript library react-native-reconnecting-websocket

declare module 'react-native-reconnecting-websocket' {
    export default class ReconnectingWebSocket extends WebSocket {
        reconnect(): void;
    }
}