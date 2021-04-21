import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    image:{
        width: '100%',
        aspectRatio: 16/9,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    match: {
        fontWeight: '600',
        color: '#709F6E',
        marginRight: 5,
    },
    year: {
        color: '#bfbfbf',
        marginRight: 5,
    },
    ageContainer: {
        backgroundColor: '#e6e229',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        paddingHorizontal: 3,
        marginRight: 5,
    },
    age: {
        color: 'black',
        fontWeight: '500',
    },
    playButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    playText:{

    },
    
})

export default styles;