import axios from "axios";
import { Post } from "../models/Post";

export async function getPosts(){
    const response = await axios.get<Post[]>(
        'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
}

export async function getComments(postId: number){
    const response = await axios.get<Comment[]>(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    return response.data;
}