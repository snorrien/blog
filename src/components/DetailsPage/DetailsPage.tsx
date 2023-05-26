import { Card, Container, ListGroup } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Post } from '../../models/Post';
import Comments from '../MainPage/Comments';
import { User } from '../../models/User';
import "./DetailsPage.css";

const DetailsPage = () => {
    const { state } = useLocation();
    const posts: Post[] = state.posts;
    const user: User = state.user;

    return (
        <Container>
            <Card className='rounded-4 bg-white m-2'>
                <Card.Header><Link to=".." relative="path" className="btn btn-dark">Назад</Link></Card.Header>
                <Card.Img className="banner" variant="top" src="../../../imgs/Banner.png" />
                <Card.Body className="p-10">
                    <div className="d-flex-column text-center">
                        <img className="user-avatar" src="imgs/woman-big.png" alt="avatar" />
                        <Card.Title>{user.name}</Card.Title>
                    </div>

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
                </Card.Body>
            </Card>

        </Container>
    )
}

export default DetailsPage;