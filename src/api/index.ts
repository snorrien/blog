import axios from "axios";
import { Post } from "../models/Post";

export async function getAllPosts(){
    const response = await axios.get<Post[]>(
        'https://jsonplaceholder.typicode.com/posts'
    );

    return response.data;
}

export async function getComments(){
    const response = await axios.get<Comment[]>(
        'https://jsonplaceholder.typicode.com/comments'
    );

    return response.data;
}