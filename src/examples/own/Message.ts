import { Message } from "../../types/Message";


const examples: Message[] = [
    // A text message in a private chat from John Doe
    {
      chat: {
        id: 123456789,
        type: "private",
        first_name: "John",
        last_name: "Doe",
        username: "johndoe",
      },
      date: Date.now(),
      text: "Hello, world!",
      message_id: 123,
      from: {
        id: 123456789,
        is_bot: false,
        first_name: "John",
        username: "johndoe",
      },
      status: "read"
    },
  
    // Another message in a  John Doe's chat from the other user
    {
      chat: {
        id: 123456789,
        type: "private",
        first_name: "John",
        last_name: "Doe",
        username: "johndoe",
      },
      date: Date.now(),
      text: "Hello, John!",
      message_id: 124,
      from: {
        id: 987654321,
        is_bot: false,
        first_name: "Jane",
        username: "janedoe",
      },
        status: "delivered"
    },
  
    // Another message in a  John Doe's chat from the other user containing a picture with caption
    {
      chat: {
        id: 123456789,
        type: "private",
        first_name: "John",
        last_name: "Doe",
        username: "johndoe",
      },
      message_id: 125,
      date: Date.now(),
      caption: "This is a picture of me",
      photo: [
        {
          file_id: "AgADBAADq6cxG6XKwVHdQYhjX9YXJQI",
          file_unique_id: "AQADdL5GtF4AA6usRwAB",
          height: 320,
          width: 320,
          file_size: 12345
        }
      ],
      from: {
        id: 987654321,
        is_bot: false,
        first_name: "Jane",
        username: "janedoe",
      },
        status: "sent"
  
    }
  
  ]


