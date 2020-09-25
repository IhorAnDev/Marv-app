import React from 'react';
import './CharacterContent.css';
import { ListGroup, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Character(props) {

    const { character: { name, description, thumbnail, id }, history } = props;

    console.log(props);
    return (
        <div>
            {/* onClick={() => history.push(`/characters/${id}`)} ссылка на клик по  ITEM */}
            <ListGroup.Item onClick={() => history.push(`/characters/${id}`)}>
                <div className='center'>
                    <div className="name_hero">{name}</div>
                    <Image style={{ width: '25%' }} roundedCircle src={`${thumbnail.path}.${thumbnail.extension}`} />
                </div>
                <Link to={`/characters/${id}`}>View information about hero</Link>
                {/* Проверка на пустой дескрипшн */}
                <div className="description_hero">{!description ? 'No description' : description}</div>
            </ListGroup.Item>
        </div>

    )
}
export default Character;