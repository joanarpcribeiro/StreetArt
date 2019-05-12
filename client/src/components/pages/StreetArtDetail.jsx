import React, { Component } from 'react';
import api from '../../api.js';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

export default class StreetArtDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      streetArt: null
    };
    this.mapRef = React.createRef() // NEW
    this.map = null // NEW
    this.marker = null // NEW
  }
  initMap(lng, lat) {
    // Embed the map where "this.mapRef" is defined in the render
    this.map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 10
    })
    this.map.addControl(new mapboxgl.NavigationControl())
  }
  addMarker(streetArt) {
    this.marker = new mapboxgl.Marker({color: 'red'})
      .setLngLat(streetArt.location.coordinates[1],streetArt.location.coordinates[0])
      .addTo(this.map)
  }
  //returnDetailOfOneArt = () =>{
  //  api.getStreetArt(this.props.match.params.streetArtId)
  //    .then(streetArt => {
  //      console.log("RESPONSE FROM API", streetArt)
  //      this.setState({
  //        streetArt: streetArt
  //      })
  //      let [lng,lat] = streetArt.location.coordinates // NEW
  //      this.initMap(lng,lat)
  //    })
  //    .catch((err)=>{
  //      console.log("The following error is showing", err)
  //    })
  //}
  render() {
    if (!this.state.streetArt) return <div>Loading...</div>
    console.log(this.state.pictureUrl)                
    return (
      <div className="StreetArtDetail">
        <h2><img src={this.state.streetArt.pictureUrl} /></h2>
        <p><strong>Longitude:</strong> {this.state.streetArt.location.coordinates[1]}</p>
        <p><strong>Latitude:</strong> {this.state.streetArt.location.coordinates[0]}</p>
        <div ref={this.mapRef} style={{height: 400}}></div>
      </div>
    );
  }
  componentDidMount(){
    api.getStreetArt(this.props.match.params.streetArtId)
     .then(streetArt => {
       console.log("RESPONSE FROM API", streetArt)
       this.setState({
         streetArt: streetArt
       })
       let [lng,lat] = streetArt.location.coordinates // NEW
       this.initMap(lng,lat) 
     })
    .catch((err)=>{
      console.log("The following error is showing", err)
    })
  }
}