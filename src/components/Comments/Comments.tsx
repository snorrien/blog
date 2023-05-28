import { ListGroup, Button, Image, Container } from 'react-bootstrap';
import { Comment } from '../../models/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { useState } from 'react';
import { getComments } from '../../redux/actions/actionCreator';
import Loader from '../Loader/Loader';

type Props = {
    postId: number;
};

const Comments = ({ postId }: Props) => {
    const dispatch = useDispatch();
    const [showComments, setShowComments] = useState(false);

    const comments: Comment[] = useSelector(
        (state: RootState) => state.comments.comments
    );

    const toggleComments = () => {
        if (!showComments) {
            dispatch(getComments(postId));
        }
        setShowComments((prevState) => !prevState);
    };

    const loading: boolean = useSelector(
        (state: RootState) => state.comments.loading
    );

    return (
        <Container>
            <Button variant="light" onClick={toggleComments}>
                <Image className='pe-2' src="imgs/comment.png" alt="comments" />
                Коментарии
            </Button>
            {
                showComments && !loading && (
                    <ListGroup className="mt-3">
                        {comments.filter(c => postId === c.postId).map((comment) => (
                            <ListGroup.Item key={comment.id}>
                                <h5>{comment.email}</h5>
                                <p>{comment.body}</p>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )
            }
            {loading && (<Loader />)}
        </Container>
    )
}
export default Comments;