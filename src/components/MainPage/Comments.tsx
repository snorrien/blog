import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { Comment } from '../../models/Comment';

type Props = {
    postId: number;
};

const Comments = ({postId }: Props) => {
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

    const toggleComments = () => {
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
                            <ListGroup.Item>
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