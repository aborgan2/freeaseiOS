import * as React from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import Coffee from '../Assets/Coffee_Marker.png';
import Candy from '../Assets/Candy_Marker.png';
import Food from '../Assets/Food_Marker.png';
import Generic from '../Assets/Generic_Marker.png';

export class FreebMarker extends React.Component {

    selectMarker(type) {
        switch(type) {
            case 1:
                return Coffee;
            case 2:
                return Candy;
            case 3:
                return Food;
            default:
                return Generic;
        }
    }

    render() {
        const { name, latitude, longitude, markerType, imageUrl, description } = this.props;
        return (
            <Marker 
                title={name}
                coordinate={{
                latitude: latitude,
                longitude: longitude,
                }}
            >
                <Image source={this.selectMarker(markerType)} style={styles.image} />
                <Callout>
                    <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100 }}/>
                    <Text>{name}</Text>
                    <Text>{description}</Text>
                </Callout>
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