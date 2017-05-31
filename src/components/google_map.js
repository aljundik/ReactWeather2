import React, {Component} from 'react';

export default class GoogleMap extends Component {
    //after the component is rendered onto the screen
    componentDidMount(){
        new google.maps.Map(this.refs.map,{
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    render (){
        return (
            <div ref="map" />

            
        )
    }

}