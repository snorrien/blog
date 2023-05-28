import axios from "axios";
import { Post } from "../models/Post";
import { User } from "../models/User";

export async function getPosts(){
    const response = await axios.get<Post[]>(
        'https://jsonplaceholder.typicode.com/posts'
    );
    await delay(500);
    return response.data;
}

export async function getUserPosts(userId: number){
    const response = await axios.get<Post[]>(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    await delay(500);
    console.log('userPosts loaded from api')
    return response.data;
}

export async function getComments(postId: number){
    const response = await axios.get<Comment[]>(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    return response.data;
}

export async function getUsers(){
    const response = await axios.get<User[]>(
        'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
}

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }