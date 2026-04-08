export type UserId = string;


export interface chat {
    id: string;
    name: string;
    userId: UserId;
    message: string;
    upvotes: UserId[];
}

export abstract class Store {
    constructor() {

    }
    initRoom(roomId: string){

    }
    getChats(room: string, limit: number, offset: number){

    }
    addChat(userId: UserId, room: string,name: string, message: string) {

    }

    upvote(userId: UserId, room: string, chatId: string) {
        
    }
}