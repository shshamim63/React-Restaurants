import axios from "axios"
import { Backend } from "../config/backend.config"

interface MessageBody {
    email: string;
    context: string;
}

export const receiveComment = async (body: MessageBody) => {
    await axios.post(`${Backend.baseURL}/email/send`, {...body})
}