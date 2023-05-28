import { useEffect } from 'react';
import { ListGroup, Card, Container, Image } from 'react-bootstrap';
import Comments from '../Comments/Comments';
import { Post } from '../../models/Post';
import { User } from '../../models/User';
import { Link } from 'react-router-dom';
import { getPosts, getUsers } from '../../redux/actions/actionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import Loader from '../Loader/Loader';

const MainPage = () => {
    const posts: Post[] = useSelector(
        (state: RootState) => state.posts.posts
    );

    const users: User[] = useSelector(
        (state: RootState) => state.users.users
    );

    const loading: boolean = useSelector(
        (state: RootState) => state.posts.loading
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
        dispatch(getUsers());
    }, []);

    return (
        <Container>
            {!loading && (
                <Container className='d-flex justify-content-center'>
                    <ListGroup className='d-flex w-100  '>
                        {posts.map((post) => (
                            <Card key={post.id} className='rounded-4 bg-white m-2'>
                                <Card.Body className='p-10'>
                                    <Container className="d-flex align-items-center">
                                        <Link to="/details"
                                            state={{
                                                user: users.find(u => post.userId === u.id),
                                                posts: posts.filter(p => p.userId === post.userId)
                                            }}>
                                            <Image src="imgs/woman.png" alt="avatar" />
                                        </Link>
                                        <Card.Subtitle className="m-2 text-muted">{users.find(u => post.userId === u.id)?.name}</Card.Subtitle>
                                    </Container>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>{post.body}</Card.Text>
                                    <Comments postId={post.id} />
                                </Card.Body>
                            </Card>
                        ))}
                    </ListGroup>
                </Container>
            )}
            {loading && (<Loader />)}
        </Container>

    )
}
export default MainPage;