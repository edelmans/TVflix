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
        borderRadius: 3,
        padding: 6,
        marginVertical: 5,
    },
    playText:{
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
    },
    downloadButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2A2A2A',
        borderRadius: 3,
        padding: 6,
        marginVertical: 5,
    },
    downloadText:{
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    detailsText: {
        color: '#888888',
        marginRight: 5,
        fontSize: 14,
        paddingVertical: 1,
    },
    plotText: {
        color: '#ffffff',
        marginRight: 5,
        fontSize: 14,
        paddingVertical: 9,
    },
    actionButton:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    }
    
})

export default styles;