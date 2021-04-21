import React from 'react';
import { Image, Pressable } from 'react-native';
import {Text, View} from '../../components/Themed';
import styles from './styles';
import { MaterialIcons, AntDesign, Entypo, Feather } from '@expo/vector-icons';


import movie from '../../assets/data/movie';
import EpisodeItem from '../../components/EpisodeItem';

const firstEpisode = movie.seasons.items[0].episodes.items[0];

const MovieDetailsScreen = () => {
    return(
        <View>
            <Image style={styles.image} source ={{uri: firstEpisode.poster}}/>
            <View style={{padding: 12}}>
                <Text style={styles.title}>{movie.title}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.match}>98% match</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                    <View style={styles.ageContainer}>
                        <Text style={styles.age}>12+</Text>
                    </View>
                    <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                    <MaterialIcons name="hd" size={24} color="white" />

                </View>

                <Pressable onPress={() => {console.warn('Play')}} style={[styles.playButton, {flexDirection: 'row'}]}>
                    <Entypo name="controller-play" size={20} color="black" style={{marginRight: 4}}/>
                    <Text style={styles.playText}>Play</Text>
                </Pressable>
                <Pressable onPress={() => {console.warn('Download')}} style={[styles.downloadButton, {flexDirection: 'row'}]}>
                    <MaterialIcons name="file-download" size={20} color="white" style={{marginRight: 4}}/>
                    <Text style={styles.downloadText}>Donwload</Text>
                </Pressable>

                <Text style={styles.plotText}>{movie.plot}</Text>
                <Text style={styles.detailsText}>Cast: {movie.cast}</Text>
                <Text style={styles.detailsText}>Creator: {movie.creator}</Text>

                {/* Row with icons */}
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.actionButton}>
                        <AntDesign name="plus" size={24} color="white" style={{paddingBottom: 5}}/>
                        <Text style={styles.detailsText}>My List</Text>
                    </View>
                    <View style={styles.actionButton}>
                        <AntDesign name="like2" size={24} color="white" style={{paddingBottom: 5}}/>
                        <Text style={styles.detailsText}>Rate</Text>
                    </View>
                    <View style={styles.actionButton}>
                        <Feather name="send" size={24} color="white" style={{paddingBottom: 5}}/>
                        <Text style={styles.detailsText}>Share</Text>
                    </View>
                </View>

                <EpisodeItem episode={firstEpisode}></EpisodeItem>
                
            </View>
        </View>
    )
};

export default MovieDetailsScreen;