import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import api from '../../api';
import { Table, Button } from 'reactstrap';

export default class List extends Component {
   constructor(props) {
     super(props)
     this.state = { fullList: [] };
   }

  returnAllStreetArts= () => {
    api.getStreetArts(`http://localhost:5000/api/street-arts`)
    .then(responseFromApi => {
      //console.log("THEN", responseFromApi)
       this.setState({
         fullList: responseFromApi
       })
    })
  } 
     
  componentDidMount() {
    this.returnAllStreetArts();
  }
  render(){
    //console.log(this.state.fullList) 
    return(
      <Table>      
        <thead>
            <tr>
              <th>Picture</th>
              <th>Google Maps Direction</th>
              <th>Detail</th>
            </tr>
        </thead>
        <tbody>
        { this.state.fullList.map( streetArt => { 
          return (
              <tr className="tableBody">
                <td key={streetArt.pictureUrl}><img className="ImageStreetArt" src={streetArt.pictureUrl} alt="Street Art image" height="78vh" width="70vw"/>
                </td>
                <td key={streetArt.location.coordinates}>
                  <a href={`http://www.google.com/maps/dir//${streetArt.location.coordinates[1]},${streetArt.location.coordinates[0]}/@${streetArt.location.coordinates[1]},${streetArt.location.coordinates[0]}`} target="_blank">
                  {streetArt.location.coordinates[0]}, {streetArt.location.coordinates[1]}
                  </a>
                </td>
                  {/* <a href={`http://www.google.com/maps/dir//${streetArt.location.coordinates[1]},${streetArt.location.coordinates[0]}/@${streetArt.location.coordinates[1]},${streetArt.location.coordinates[0]}`} target="_blank">
                      <td key={streetArt.location.coordinates}>
                        {streetArt.location.coordinates[0]}, {streetArt.location.coordinates[1]}
                      </td>
                  </a> */}
                <td><Button color="danger" outline tag={Link} to={"/street-art-detail/"+streetArt._id}>Detail</Button></td>
              </tr>
          )})
        } 
        </tbody>
      </Table>
    )
  }
}