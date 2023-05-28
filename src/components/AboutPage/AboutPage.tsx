import { Container, Card, Image, Button } from 'react-bootstrap';
import "./AboutPage.css";

const AboutPage = () => {
    return (
        <Container className='d-flex justify-content-center '>
            <Card className='rounded-4 m-2 d-flex w-100 justify-content-center'>
                <Card.Header>
                    <Card.Subtitle className="m-2 text-muted">
                        Пользователь подтвержден
                    </Card.Subtitle>
                </Card.Header>
                <Card.Img className="banner" variant="top" src="../../../imgs/Banner.png" />
                <Card.Body className="card p-10 py-4">
                    <Container className="text-center">
                        <Image className="user-avatar" src="imgs/woman-big.png" alt="avatar" />
                    </Container>
                    <Container className="text-center mt-3">
                        <Card.Title className="mt-2 mb-0">Алена Шаповалова</Card.Title>
                        <Card.Subtitle className="m-2 text-muted">Frontend-developer</Card.Subtitle>
                        <Container className="px-4 mt-1">
                            <Card.Text className="fonts">Свой путь во frontend-разработку я начала больше года назад.
                            </Card.Text>
                        </Container>
                        <Container className=" pt-3 ">
                            <a href="https://github.com/snorrien">
                                <Button className="btn btn-primary px-4 ms-3">
                                    GitHub
                                </Button>
                            </a>
                        </Container>
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default AboutPage;