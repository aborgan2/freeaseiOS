import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Marker } from 'react-native-maps';
import Coffee from '../Assets/Coffee_Marker.png';
import Candy from '../Assets/Candy_Marker.png';
import Food from '../Assets/Food_Marker.png';
import Generic from '../Assets/Generic_Marker.png';

export class FreebMarker extends React.Component {

    selectMarker(type) {
        switch(type) {
            case '0':
                return Coffee;
            case '1':
                return Candy;
            case '2':
                return Food;
            default:
                return Generic;
        }
    }

    render() {
        const { title, latitude, longitude, type } = this.props;
        return (
            <Marker 
                title={title}
                coordinate={{
                latitude: latitude,
                longitude: longitude,
                }}
            >
                <Image source={this.selectMarker(type)} style={styles.image} />
            </Marker>
        );
    }
}

const styles = StyleSheet.create({
    image: {
      aspectRatio: 361/531,
      width: 75,
      height: 75,
    },
  });