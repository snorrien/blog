import { Card, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { User } from '../../models/User';
import "./DetailsPage.css";
import UserPosts from '../UserPosts/UserPosts';

const DetailsPage = () => {
    const { state } = useLocation();
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
                    <UserPosts user={user}></UserPosts>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default DetailsPage;