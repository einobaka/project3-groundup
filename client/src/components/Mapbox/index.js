import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2V5bWFzdGVyNjE2IiwiYSI6ImNrZWZ6b3NmdjBvbHIycm16dmVoOHc5c2sifQ.1mzjAjlBuwog0SXrzQxxHw'

class MapBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -112.2721066,
            lat: 33.4227515,
            zoom: 10
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/keymaster616/ckejc52en5n5u19nx3h8a2d8e',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    render() {
        return (
            <div>
                <div className='sidebarStyle'>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        )
    }
}



export default MapBox 