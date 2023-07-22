import SocketRequest from "../types/SocketRequest";

class RobustWebSocket {
    private url = "ws://192.168.178.3:3006";
    private ws: WebSocket | null = null;
    private reconnectInterval: number;
    private messageQueue: {message: SocketRequest, id: string}[] = [];
    private isConnected: boolean = false;
    private pendingRequests: Map<string, { resolve: (value: any) => void, reject: (reason?: any) => void }> = new Map();

    constructor(reconnectInterval: number = 5000) {
        this.reconnectInterval = reconnectInterval;
        this.connect();
    }

    private connect() {
        this.ws = new WebSocket(this.url);

        this.ws.onopen = () => {
            this.isConnected = true;
            this.processQueue();
        };

        this.ws.onmessage = (message) => {
            const data = JSON.parse(message.data);
            const {id, payload} = data;
            
            const request = this.pendingRequests.get(id);
            if(!request) return;

            request.resolve(payload);
            this.pendingRequests.delete(id);
        };

        this.ws.onclose = () => {
            this.isConnected = false;
            setTimeout(() => this.connect(), this.reconnectInterval);
        };

        this.ws.onerror = error => {
            console.error(`WebSocket error: ${JSON.stringify(error)}`);
        };
    }

    private processQueue() {
        while(this.messageQueue.length > 0 && this.isConnected) {
            const queuedMessage = this.messageQueue.shift();
            if(!queuedMessage) return;
            const {message, id} = queuedMessage;
            this.ws?.send(JSON.stringify(message));
            this.pendingRequests.get(id)?.resolve(message);
        }
    }

    public sendMessageToServer(message: SocketRequest, id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.isConnected && this.ws) {
                this.ws.send(JSON.stringify(message));
                this.pendingRequests.set(id, { resolve, reject });
            } else {
                this.messageQueue.push({message, id});
                this.pendingRequests.set(id, { resolve, reject });
            }
        });
    }
}

export default RobustWebSocket;