import React, { Component } from 'react';
import '../styles/App.css';
import earthquakes from '../data/earthquakes'
import moment from "moment";

let earthquake = earthquakes.features;
console.log(earthquakes.features[0].properties);
class EarthquakeList extends Component {
  render() {
    return (
      <div className="quake-list">
        <div className="row">
          {earthquake.map(function(earth){
            return <div className="col-sm-6" key={earth.properties.ids}>
              <div className="card" >
                <div className="card-block">
                  <h4 className="card-title">{earth.properties.place}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earth.properties.mag}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earth.properties.time).format('llll')}</h6>
                  <p className="card-text">Coordinates: {earth.geometry.coordinates}</p>
                  <a href={earth.properties.url} className="card-link">USGS Event Link</a>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
  )
}
}



export default EarthquakeList;
