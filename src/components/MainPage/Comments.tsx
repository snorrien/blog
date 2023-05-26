import { ListGroup, Button } from 'react-bootstrap';
import { Comment } from '../../models/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { useState } from 'react';
import { getComments } from '../../redux/actions/actionCreator';

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

    return (
        <div>
            <Button variant="light" onClick={toggleComments}>
                <img className='pe-2' src="imgs/comment.png" alt="comments" />
                Comments
            </Button>
            {
                showComments && (
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
        </div>
    )
}
export default Comments;