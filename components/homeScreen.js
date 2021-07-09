import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Dimensions
  } from 'react-native';
  import FontAwesome from 'react-native-vector-icons/FontAwesome5'

  const { height, width } = Dimensions.get('screen');

  const Homescreen = (navigation) => {
      return(
          <View style={styles.container}>
             <View style={styles.header}>
         
             </View>
             <Text style={styles.headerText}>Welcome !</Text>

             <View style={styles.search}
             placeHolder="hello"
             >
                <ScrollView contentContainerStyle={styles.scrollMenu} horizontal> 
                    <TouchableOpacity>
                        <Text>Playlist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Tracks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Albums</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Artist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Playlist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Tracks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Albums</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Artist</Text>
                    </TouchableOpacity>
                     </ScrollView>
             </View>
          </View>
      );
  };
 const styles = StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:'#f8fcff'
   },
   header:{
height:height*0.13,
width:width,
backgroundColor:'green'
   },
   headerText:{
      marginLeft:width*0.1,
      fontSize:30
   },
   search:{
    height:height*0.13,
    backgroundColor:'red'
   },
   scrollMenu:{
       justifyContent:'space-between'
       
   }
 });
  export default Homescreen;