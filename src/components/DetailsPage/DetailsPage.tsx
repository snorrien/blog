import { Card, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { User } from '../../models/User';
import "./DetailsPage.css";
import UserPosts from '../UserPosts/UserPosts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import Loader from '../Loader/Loader';
import { getUserPosts } from '../../redux/actions/actionCreator';
import { Post } from '../../models/Post';
import { useEffect } from 'react';

const DetailsPage = () => {
    const { state } = useLocation();
    const user: User = state.user;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserPosts(user.id));
    }, []);

    const loading: boolean = useSelector(
        (state: RootState) => state.userPosts.loading
    );

    const posts: Post[] = useSelector(
        (state: RootState) => state.userPosts.posts
    );

    return (
        <div>
            {!loading && (
                <Container>
                    <Card className='rounded-4 bg-white m-2'>
                        <Card.Header><Link to=".." relative="path" className="btn btn-dark">Назад</Link></Card.Header>
                        <Card.Img className="banner" variant="top" src="../../../imgs/Banner.png" />
                        <Card.Body className="p-10">
                            <div className="d-flex-column text-center">
                                <img className="user-avatar" src="imgs/woman-big.png" alt="avatar" />
                                <Card.Title>{user.name}</Card.Title>
                            </div>
                            <UserPosts user={user} posts={posts} />
                        </Card.Body>
                    </Card>
                </Container>
            )}

            {loading && (<Loader />)}
        </div>
    )
}

export default DetailsPage;