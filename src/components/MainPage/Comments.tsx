import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { Comment } from '../../models/Comment';
import { increment } from '../../store/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

type Props = {
    postId: number;
};

const Comments = ({ postId }: Props) => {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        const fetchData = async () => {

            const commentsResponse = await axios.get<Comment[]>(
                'https://jsonplaceholder.typicode.com/comments'
            );
            setComments(commentsResponse.data);
        };
        fetchData();
    }, []);

    const [showComments, setShowComments] = useState(false);

    const counter: number = useSelector(
        (state: RootState) => state.counter.value
    );
    const dispatch = useDispatch();

    const toggleComments = () => {
        setShowComments((prevState) => !prevState);
        dispatch(increment());
        console.log(counter);
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