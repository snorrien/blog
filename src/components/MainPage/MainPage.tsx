import React, { useEffect, useState } from 'react';
import { ListGroup, Card, Container, Button, Accordion } from 'react-bootstrap';
import axios from 'axios';

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}
type Comment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}
type User = {
    id: number,
    name: string
}

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
                            <Button variant="light" onClick={toggleComments}>
                                <img className='pe-2' src="imgs/comment.png" alt="comments" />
                                Comments
                            </Button>
                            {showComments && (
                                <ListGroup className="mt-3">
                                    {comments.filter(c => post.id === c.postId).map((comment) => (
                                        <ListGroup.Item>
                                            <h5>{comment.email}</h5>
                                            <p>{comment.body}</p>
                                        </ListGroup.Item>
                                    ))}

                                </ListGroup>
                            )}
                        </Card.Body>
                    </Card>
                ))}
            </ListGroup>
        </Container>
    )
}
export default MainPage;