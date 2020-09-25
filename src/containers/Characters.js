import React from 'react';
import { Spinner, Form, Button } from 'react-bootstrap';

import '../App.css';
import { apiKey, hash, api} from '../config';
import Character from '../components/Character';



// 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=0fb1dc2e0eeeb965f0977333e073bd40&hash=60b1c058e51daa0303d90a24d75b0631'

class Characters extends React.Component {

  state = {
    characters: [],
    search: '',
    loading: false,
  };

  componentDidMount() {

    this.fetchCharacters()
  }


  fetchCharacters = async (character) => {
    this.setState({
      loading: true
    })
    const query = character ? `nameStartsWith=${character}&` : '';
    const data = await fetch(`${api}characters?${query}ts=1&apikey=${apiKey}&hash=${hash}`);
    const json = await data.json();
    console.log(json);
    this.setState({
      characters: json.data.results,
      loading: false
    });
  }

  handleInputChange = (e) => {
    this.setState({
      search: e.target.value.toUpperCase()
    });
  };

  handleCharacterSearch = () => {
    this.fetchCharacters(this.state.search)
  };




  render() {
    return (
      <div>
        <Form className="row_hero">
          <Form.Control className="input_hero" onChange={this.handleInputChange} value={this.state.search} />
          <Button className="btn_hero" type="button" variant="secondary" onClick={this.handleCharacterSearch}>Search</Button>
        </Form>
        {/* history={this.props.history} - история, добавляем props  в Character.jsx */}
        {!this.state.loading
          ? (this.state.characters.length ? this.state.characters.map(item => <Character character={item} key={item.id} history={this.props.history}/>) : 'No character')
        : <Spinner style={{display: "block", margin: "auto"}}animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        }
        
    </div>
    )
  }

}

export default Characters;
