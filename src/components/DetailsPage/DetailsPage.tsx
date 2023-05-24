import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import { Link, useLoaderData, useLocation, useParams } from 'react-router-dom';
import { Post } from '../../models/Post';
import Comments from '../MainPage/Comments';
import { User } from '../../models/User';

const DetailsPage = () => {
    const { state } = useLocation();
    const posts: Post[] = state.posts;
    const user: User = state.user;

    return (
        <Container>
            <Card className='rounded-4 bg-white m-2'>
                <Card.Header><Link to=".." relative="path" className="btn btn-primary">Назад</Link></Card.Header>
                <Card.Body className="p-10 text-center">
                        <img src="imgs/woman.png" alt="avatar" />
                    <Card.Title>{ user.name }</Card.Title>
                </Card.Body>
            </Card>
            <ListGroup className='d-flex w-100'>
                {posts.map((post) => (
                    <Card key={post.id} className='rounded-4 bg-white m-2'>
                        <Card.Body className='p-10'>
                            <div className="d-flex align-items-center">
                               <img src="imgs/woman.png" alt="avatar" />
                                <Card.Subtitle className="m-2 text-muted">{user.name}</Card.Subtitle>
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

export default DetailsPage;