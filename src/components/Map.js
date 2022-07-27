import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import dotenv from 'dotenv';
Geocode.setApiKey("AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0"); // add as environment variable later
Geocode.enableDebug();

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // set in the frontend input
            address: '',
            city: '',
            area: '',
            state: '',
            mapPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            },
            markerPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            }
        }
    }

    // Get the current address from the default map position, and set these values in the state (props)
    componentDidMount() {
        Geocode.fromLatLng(this.state.mapPosition.lat, this.state.mapPosition.lng).then(
            response => {
                const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    city = this.getCity(addressArray),
                    area = this.getArea(addressArray),
                    state = this.getState(addressArray),

                console.log('city', city, area, state);

                this.setState({
                    address: (address) ? address : '',
                    area: (area) ? area: '',
                    city: (city) ? city : '',
                    state: (state) ? state : '',
                })
            },
            error => {
                console.error(error);
            }
        )
    }
}

export default Map;