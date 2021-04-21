import React from 'react';
import { Text, View } from '../../components/Themed';
import { Image } from 'react-native';

import styles from './styles';

interface EpisodeItemProps {
    episode: {
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot: string,
        video: string,
    }
}

const EpisodeItem = (props: EpisodeItemProps) => {
    const { episode } = props;
    return (
        <View>
            <View style={styles.row}>
                <Image style={styles.image} source={{ uri: episode.poster}}/>
                <View>
                    <Text style={styles.title}>{episode.title}</Text>
                    <Text style={styles.duration}>{episode.duration}</Text>
                    
                </View>
                
            </View>

            <Text style={styles.plot}>{episode.plot}</Text>
        </View>
    );
}

export default EpisodeItem;