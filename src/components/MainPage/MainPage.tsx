import React, { useState } from 'react';
import { ListGroup, Card, Container, Button, Accordion } from 'react-bootstrap';

const MainPage = () => {
    const posts = [
        {
            id: 1,
            author: 'Name1',
            title: 'First Post',
            content: 'This is the content of the first post.',
            comments: [
                {
                    commentTitle: 'Name3',
                    commentText: 'Txt, text, text.',
                },
                {
                    commentTitle: 'Name4',
                    commentText: 'Txt, text, text.',
                },
            ]
        },
        {
            id: 2,
            author: 'Name2',
            title: 'Second Post',
            content: 'This is the content of the second post.',
            comments: [
                {
                    commentTitle: 'Name5',
                    commentText: 'Txt, text, text.',
                },
                {
                    commentTitle: 'Name6',
                    commentText: 'Txt, text, text.',
                },
            ]
        },
    ];

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
                                <img src="imgs/woman.png" alt="avatar" />
                                <Card.Subtitle className="m-2 text-muted">{post.author}</Card.Subtitle>
                            </div>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.content}</Card.Text>
                            <Button variant="light" onClick={toggleComments}>
                                <img className='pe-2' src="imgs/comment.png" alt="comments" />
                                Comments
                            </Button>
                            {showComments && (
                                <ListGroup className="mt-3">
                                    {post.comments.map((comment) => (
                                        <ListGroup.Item>
                                            <h5>{comment.commentTitle}</h5>
                                            <p>{comment.commentText}</p>
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