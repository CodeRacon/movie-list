import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface BSCardProps {
    title?: string;
    text?: string;
    imageUrl?: string;
}

export function BSMovieCard({title, text, imageUrl}: BSCardProps) {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src="https://picsum.photos/300/200" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}
