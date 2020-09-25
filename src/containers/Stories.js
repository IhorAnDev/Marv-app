import React from 'react';
import StoriesContent from '../components/StoriesContent.jsx';
import { apiKey, hash } from '../config';
import { Spinner} from 'react-bootstrap';


const api = 'http://gateway.marvel.com/v1/public/';

class Stories extends React.Component{
    state ={
stories:[],
loading: false,
    }

componentDidMount(){
this.fetchStories()
}

fetchStories = async () => {
    this.setState({
        loading: true
      })
    const data = await fetch(`${api}stories?ts=1&apikey=${apiKey}&hash=${hash}`);
const json = await data.json();
console.log(json);
this.setState({
    stories:json.data.results,
    loading: false
});
}


    render(){
        return(
            <>
               {!this.state.loading ? (this.state.stories.map(item => <StoriesContent story={item} key={item.id}/>)): <Spinner style={{display: "block", margin: "auto"}} animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>}
            </>
        )
    }

}
export default Stories;