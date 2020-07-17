import * as React from 'react';
import { Marker } from 'react-native-maps';

export class FreebMarker extends React.Component {
    render() {
        const { title, latitude, longitude, type } = this.props;
        return (
            <Marker 
                title={title}
                coordinate={{
                latitude: latitude,
                longitude: longitude,
                }}
            />
        );
    }
}