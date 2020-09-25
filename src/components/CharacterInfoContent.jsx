import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
 import './CharacterInfoContent.css';


function CharacterInfoContent(props) {


    const {character, comics, stories } = props;
    

    return (
        <div>
            <div>
                <span>Hello I am character &nbsp;</span>
                <h3>{character ? character.name : null}</h3>
            </div>
            

            <Accordion defaultActiveKey="2">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">Link COMICS</Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><a href={comics} target="_blank">Comics</a></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">Link  STORIES</Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body><a href={stories} target="_blank">Stories</a></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Button onClick={props.handleGoBack} variant="danger">Go Back</Button>
        </div>

    )
}


export default CharacterInfoContent;