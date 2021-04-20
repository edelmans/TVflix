import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        padding: 20,
        //backgroundColor: 'white'
      },
      image:{
          width: 100,
          height: 170,
          resizeMode: 'cover',
          borderRadius: 5,
          margin: 5,
      },
      title: {
        fontSize: 24,
        fontWeight: '700',
      }
});

export default styles;