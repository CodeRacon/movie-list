import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react';
import './BSMovieCard.style.scss';

interface BSCardProps {
    title?: string;
    text?: string;
    imageUrl?: string;
}

export function BSMovieCard({title, text, imageUrl}: BSCardProps) {
    // State: false = gekürzt, true = vollständig angezeigt
    const [isExpanded, setIsExpanded] = useState(false);

    // Entscheiden, welcher Text angezeigt wird
    const displayText = isExpanded
        ? text
        : text && text.length > 125
        ? text.slice(0, 125) + '...'
        : text;

    // Funktion zum Umschalten zwischen gekürzt und vollständig
    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    // Prüfen, ob der Text lang genug ist, um gekürzt zu werden
    const showButton = text && text.length > 125;

    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{displayText}</Card.Text>
                {showButton && (
                    <Button variant="dark" onClick={toggleText}>
                        {isExpanded ? 'Show less' : 'Read more'}
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}
