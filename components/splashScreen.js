import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Dimensions,
  Image

} from 'react-native';
import * as Animatable from 'react-native-animatable'

const { height, width } = Dimensions.get('screen');
const Splashscreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Text style={styles.textHead}
        animation="flipInY"
        
         >WuKi PlaY
        
        </Animatable.Text>
        <Animatable.Image 
        animation="bounceIn"
        duraton="9500"
        source={require('./images/play.png')}
        style={styles.logo}
        resizeMode='stretch'
        />
      </View>

      <Animatable.View style={styles.footer}
      animation="fadeInUpBig"
      >
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <FontAwesome name='music'
            size={25}
            color='#1a92cd'
          />
          <Text style={styles.text}> Get Started</Text>
        </TouchableOpacity>
      </Animatable.View>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fcff'

  },
  header: {
    flex: 2,
    backgroundColor: '#f8fcff',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:-10
    
    // borderBottomRightRadius:40,
    // height:height/1.5


  },
  footer: {
    flex: 1,
    backgroundColor: '#1b96d1',
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    
   
  },

  button: {
    backgroundColor: 'white',
    height: 40,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    flexDirection: 'row'

  },
  text: {
    color: '#1a92cd',
    marginHorizontal: 20
  },
  logo:{
    height:height*0.28,
    width:height*0.28,
    borderRadius:20,
  },
  textHead:{
    color:'black',
    fontSize:height/22,
    marginBottom:20,
  }


});
export default Splashscreen;