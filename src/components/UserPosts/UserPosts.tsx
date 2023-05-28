import { ListGroup, Card, Container, Image } from 'react-bootstrap';
import Comments from "../Comments/Comments"
import { Post } from '../../models/Post';
import { User } from '../../models/User';

type Props = {
    user: User;
    posts: Post[];
};

const UserPosts = ({ user, posts }: Props) => {
    return (
        <ListGroup className='d-flex w-100'>
            {posts.map((post) => (
                <Card key={post.id} className='rounded-4 bg-white m-2'>
                    <Card.Body className='p-10'>
                        <Container className="d-flex align-items-center">
                            <Image src="imgs/woman.png" alt="avatar" />
                            <Card.Subtitle className="m-2 text-muted">{user.name}</Card.Subtitle>
                        </Container>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.body}</Card.Text>
                        <Comments postId={post.id} />
                    </Card.Body>
                </Card>
            ))}
        </ListGroup>
    )
}

export default UserPosts;