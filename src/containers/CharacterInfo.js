import React from 'react';
import { apiKey, hash, api } from '../config';
import CharacterInfoContent from '../components/CharacterInfoContent';




class CharacterInfo extends React.Component {
    state = {
        character: null,
        loading: false,
        
    }



    async componentDidMount() {
        this.setState({
            loading: true
        })

        const data = await fetch(`${api}characters/${this.props.match.params.id}?ts=1&apikey=${apiKey}&hash=${hash}`);
        const json = await data.json();
        console.log(json, 'IDCHARACTERS');
        this.setState({
            character: json.data.results[0]
        })
    }

    handleGoBack = () => {
        this.props.history.goBack();
    }

  

    render() {
        console.log(this.props.match.params.id)

        const comics = `${api}characters/${this.props.match.params.id}/comics?ts=1&apikey=${apiKey}&hash=${hash}`;
        const stories = `${api}characters/${this.props.match.params.id}/stories?ts=1&apikey=${apiKey}&hash=${hash}`;

        return (
            <>
                <CharacterInfoContent character={this.state.character} handleGoBack={this.handleGoBack} comics={comics} stories={stories} />
            </>
        )
    }
}

export default CharacterInfo;