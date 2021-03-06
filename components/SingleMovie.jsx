import React from 'react';
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { Button, Card } from "react-native-elements";

import noImage from "../assets/noImage.png";

const SingleMovie = ({movie, goToMovie, smallPage}) => {

    const imagePath = `https://image.tmdb.org/t/p/original${movie.poster_path}`

    return (

        <Card containerStyle={styles.wrapper}>
            <Card.Image source={movie.poster_path != null ? {uri: imagePath} : noImage} resizeMode="contain" style={styles.image} PlaceholderContent={<ActivityIndicator/>}/>
            <Card.Divider/>
            <Card.Title style={styles.title}>{movie.title}</Card.Title>
            {!smallPage && <Text style={{textAlign: 'center'}}>Popularność: {movie.popularity}</Text>}
            {!smallPage && <Text style={styles.text}>Liczba głosów: {movie.vote_count}</Text>}
            <Button title="Zobacz szczegóły" type="clear" onPress={() => goToMovie(movie.id, movie.title)}/>
        </Card>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 240,
        width: 160
    },
    wrapper: {
        padding: 0,
        backgroundColor: '#c8d6e5'
    },
    text: {
        textAlign: 'center',
        marginBottom: 10
    },
    title: {
        width: 160
    }
});

export default SingleMovie;
