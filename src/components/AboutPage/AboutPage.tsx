import { Container, Card } from 'react-bootstrap';

const AboutPage = () => {
    return (
        <Container className='d-flex justify-content-center '>
            <Card className='rounded-4 m-2'>
                <Card.Body className="card p-10 py-4">
                    <div className="text-center">
                        <img src="imgs/woman-big.png" alt="avatar" />
                    </div>
                    <div className="text-center mt-3">
                        <h5 className="mt-2 mb-0">Алена Шаповалова</h5>
                        <span>Frontend-developer</span>
                        <div className="px-4 mt-1">
                            <p className="fonts">Свой путь во frontend-разработку я начала больше года назад.</p>
                        </div>
                        <div className="buttons">
                            <a href ="https://github.com/snorrien"><button className="btn btn-primary px-4 ms-3">
                                GitHub
                            </button></a>
                        </div>
                    </div>

                </Card.Body>

            </Card>


        </Container>
    )
}
export default AboutPage;