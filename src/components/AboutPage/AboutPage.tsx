import { Container, Card, Image, Button } from 'react-bootstrap';
import "./AboutPage.css";

const AboutPage = () => {
    return (
        <Container d-flex justify-content-center>
            <Card className="rounded-4 m-2 d-flex w-100 justify-content-center">
                <Card.Header>
                    <Card.Subtitle className="m-2 text-muted">
                        Пользователь подтвержден
                    </Card.Subtitle>
                </Card.Header>
                <Card.Img className="banner" variant="top" src="../../../imgs/Banner.png" />
                <Card.Body className="p-10">
                    <Container className="d-flex-column text-center">
                        <Image className="user-avatar" src="imgs/woman-big.png" alt="avatar" />
                        <Card.Title className="mt-2 mb-0">
                            Алена Шаповалова
                        </Card.Title>
                        <Card.Subtitle className="m-2 text-muted">
                            Frontend-developer
                        </Card.Subtitle>
                    </Container>
                    <Container>
                        <Card.Text>
                            Я начинающий frontend разработчик с годом практического опыта и страстью к созданию веб-интерфейсов. Я прошла курс от Udemy по <b>React</b> и активно применяю <b>JavaScript/TypeScript</b>, <b>Bootstrap5</b>, <b>CSS</b> и <b>HTML5</b> в своих проектах. Мой опыт включает работу с инструментами и библиотеками, такими как <b>React Bootstrap</b>, <b>React Router</b>, <b>Redux</b>, <b>Redux Saga</b> и <b>SASS</b>. <br/>
                            Я сильно мотивирована начать свою профессиональную карьеру в области frontend разработки. Уверена в своем выборе и в своих силах. Я всегда готова к новым вызовам и с радостью занимаюсь освоением новых технологий и инструментов, чтобы стать еще более квалифицированным разработчиком.<br/><br/>
                            В дальнейшем я планирую изучить UX/UI дизайн, так как верю в важность создания привлекательных и удобных пользовательских интерфейсов. Кроме того, я стремлюсь получить высшее образование в сфере IT, чтобы расширить свои знания и быть конкурентноспособной на европейском рынке.
                            Я осознаю, что непрерывное образование и постоянное обновление знаний являются ключевыми факторами успеха в быстро развивающейся индустрии информационных технологий, и готова вкладываться в свое развитие.
                        </Card.Text>
                    </Container>
                    <Container className="d-flex-column text-center pt-4">
                        <a href="https://github.com/snorrien" >
                            <Button className="btn btn-primary px-4 ms-3" >
                                GitHub
                            </Button>
                        </a>
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default AboutPage;