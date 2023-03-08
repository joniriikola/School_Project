import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

const Home = () => {
    return(
        <Container>
            <h2> Welcome to the sandwich app</h2>
            <p>This application allows you to order some really delicious Sandwiches. Our delivery times are
                about 10-15 seconds.
            </p>
            <Image src={process.env.PUBLIC_URL+"sandwich.jpg"} alt="delicious sandwich" fluid rounded/>
        </Container>

    )
  
}
export default Home;