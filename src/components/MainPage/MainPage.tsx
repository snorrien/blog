import React, { useEffect, useState } from 'react';
import { ListGroup, Card, Container} from 'react-bootstrap';
import axios from 'axios';
import Comments from './Comments';
import { Post } from '../../models/Post';
import { User } from '../../models/User';
import { Link } from 'react-router-dom';


const MainPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const postsResponse = await axios.get<Post[]>(
                'https://jsonplaceholder.typicode.com/posts'
            );
            const usersResponse = await axios.get<User[]>(
                'https://jsonplaceholder.typicode.com/users'
            );

            setPosts(postsResponse.data);
            setUsers(usersResponse.data);
        };
        fetchData();
    }, []);

    return (
        <Container className='d-flex justify-content-center'>
            <ListGroup className='d-flex w-100'>
                {posts.map((post) => (
                    <Card key={post.id} className='rounded-4 bg-white m-2'>
                        <Card.Body className='p-10'>
                            <div className="d-flex align-items-center">
                                <Link to="/details" state={{ user: users.find(u => post.userId === u.id), posts: posts.filter(p => p.userId === post.userId) }}><img src="imgs/woman.png" alt="avatar" /></Link>
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