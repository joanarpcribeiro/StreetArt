import React, { Component } from 'react';
import api from '../../api.js';

export default class StreetArtDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      streetArt: null
    };
  }
  returnDetailOfOneArt = () =>{
    api.getStreetArt(this.props.match.params.streetArtId)
      .then(streetArt => {
        console.log("RESPONSE FROM API", streetArt)
        this.setState({
          streetArt: streetArt
        })
      })
      .catch((err)=>{
        console.log("The following error is showing", err)
      })
  }
  componentDidMount(){
    this.returnDetailOfOneArt();
  }
  makePictureBig = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:5000/api/projects/${params.id}`)
    .then( () =>{
        this.props.history.push('/projects'); // !!!         
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  render() {
    if (!this.state.streetArt) return <div>Loading...</div>
    console.log(this.state.pictureUrl)                
    return (
      <div className="StreetArtDetail">
        <h2><img onClick={} src={this.state.streetArt.pictureUrl}/></h2>
        <p><strong>Longitude:</strong> {this.state.streetArt.location.coordinates[1]}</p>
        <p><strong>Latitude:</strong> {this.state.streetArt.location.coordinates[0]}</p>

      </div>
    );
  }
}