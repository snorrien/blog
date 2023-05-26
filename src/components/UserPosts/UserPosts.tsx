import { ListGroup, Card } from 'react-bootstrap';
import Comments from "../Comments/Comments"
import { useSelector } from 'react-redux';
import { Post } from '../../models/Post';
import { RootState } from '../../redux/store/store';
import { User } from '../../models/User';

type Props = {
    user: User;
    
};

const UserPosts = ({ user }: Props) => {

    const posts: Post[] = useSelector(
        (state: RootState) => state.posts.posts
    );

    return (
        <ListGroup className='d-flex w-100'>
            {posts.filter(p => p.userId === user.id).map((post) => (
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
    )
}

export default UserPosts;