import React, { useEffect, useState } from 'react';
import { ListGroup, Card, Container, Button} from 'react-bootstrap';
import axios from 'axios';
import Comments from './Comments';
import { Post } from '../../models/Post';
import { User } from '../../models/User';


const MainPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [comments, setComments] = useState<Comment[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const postsResponse = await axios.get<Post[]>(
                'https://jsonplaceholder.typicode.com/posts'
            );
            const commentsResponse = await axios.get<Comment[]>(
                'https://jsonplaceholder.typicode.com/comments'
            );
            const usersResponse = await axios.get<User[]>(
                'https://jsonplaceholder.typicode.com/users'
            );

            setPosts(postsResponse.data);
            setComments(commentsResponse.data);
            setUsers(usersResponse.data);
        };
        fetchData();
    }, []);




    const [showComments, setShowComments] = useState(false);

    const toggleComments = () => {
        setShowComments((prevState) => !prevState);
    };

    return (
        <Container className='d-flex justify-content-center'>
            <ListGroup className='d-flex w-100'>
                {posts.map((post) => (
                    <Card key={post.id} className='rounded-4 bg-white m-2'>
                        <Card.Body className='p-10'>
                            <div className="d-flex align-items-center">
                                <a href="/detailspage"><img src="imgs/woman.png" alt="avatar" /></a>
                                <Card.Subtitle className="m-2 text-muted">{users.find(u => post.userId === u.id)?.name}</Card.Subtitle>
                            </div>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.body}</Card.Text>
                           <Comments postId={post.id} />
                        </Card.Body>
                    </Card>
                ))}
            </ListGroup>
        </Container>
    )
}
export default MainPage;