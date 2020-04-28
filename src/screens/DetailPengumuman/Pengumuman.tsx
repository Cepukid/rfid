import React from "react";
import {
    SafeAreaView,
    Text,
    ScrollView,
    View
  } from "react-native";
  import { SliderBox } from "react-native-image-slider-box";
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
      return(
        <SafeAreaView>
            <ScrollView >
              <SliderBox images={this.state.images} />
              <View style={{margin:10}}>
                <View style={{justifyContent:"space-between",flexDirection:"row"}}>
                  <Text style={{fontSize:20,marginBottom:5}}>Pengumuman</Text>
                  <Text style={{fontSize:10}}>1 Jam</Text>
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
        </SafeAreaView>
      );

  };
  export default Pengumuman;