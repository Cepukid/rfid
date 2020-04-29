import React from "react";
import {
    SafeAreaView,
    Text,
    ScrollView,
    View,
    Image,
    TouchableOpacity,
  } from "react-native";
  import { SliderBox } from "react-native-image-slider-box";
  import { IMAGES } from "../../configs";
  import { useNavigation } from "@react-navigation/native";
  import { widthPercent } from "../../utils";
  import HTML from 'react-native-render-html';
  const Pengumuman = () => {
    const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
      ]
    };
    
    // const itemId = Route().params.friends[0];
    // const itemId = getParam('friends','aa');
    const itemId = useNavigation().getParam('friends', {});
    const {goBack,getParam} = useNavigation();
      return(
        <SafeAreaView>
            <ScrollView >
              <SliderBox images={this.state.images} />
              <View style={{margin:10}}>
                <View style={{justifyContent:"space-between",flexDirection:"row"}}>
                  <Text style={{fontSize:20,marginBottom:5}}>Pengumuman</Text>
                  <Text style={{fontSize:10}}>itemId</Text>
                </View>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                  }}
                />
                
                  <HTML html={htmlContent} imagesMaxWidth={widthPercent(100)-20} />
              </View>

            </ScrollView>
            <TouchableOpacity onPress={() => goBack()} style={{position:"absolute",marginTop:15,marginStart:10}}>
              <Image source={IMAGES.back} style={{height:25,width:25}}/>
            </TouchableOpacity>
        </SafeAreaView>
      );

  };
  export default Pengumuman;