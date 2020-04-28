import React from "react";
import {FlatList,SafeAreaView,ScrollView,Text,View,Image} from "react-native";
import styles from "./styles";
import { IMAGES } from "../../configs";
import {Calendar} from 'react-native-calendars';
import { widthPercent } from "../../utils";
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'April 2020',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'April 2021',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'April 2020',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'April 2020',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },{
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },{
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Itegm',
        },
  ];
const Home = () => {
    const _renderItem = ({ item, index }: any) => (
        <View style={[styles.wrapContent,
                      index===0 && {marginLeft:widthPercent(15)},
                      index >=0 && {marginRight:widthPercent(10)},]}>
            <View style={styles.content}>
                <Text style={styles.textwhite}>{item.title}</Text>
          </View>
        </View>
      );
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.wrapImage}>
                    <Image source={IMAGES.profil} style={styles.circleimage} />
                    <View style={styles.container}>
                        <Text>AGUS STIAWAN</Text>
                        <Text style={styles.penjelasan}>SMP 1 Surabaya</Text>
                        <Text style={styles.penjelasan}>Jl. Jepara cuy</Text>
                    </View>
                </View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    pagingEnabled
                    snapToAlignment="center"
                    // snapToInterval={380}
                    
                    data={DATA}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={_renderItem}/>
                <ScrollView 
                showsVerticalScrollIndicator={false}>
                <View style={styles.body}>
                    <View style={styles.coreContent}>
                        <Text style={styles.texttitle}>Sakit</Text>
                        <Text style={styles.textangka}>1</Text>
                    </View>
                    <View style={styles.coreContent}>
                        <Text style={styles.texttitle}>Izin</Text>
                        <Text style={styles.textangka}>30</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.coreContent}>
                            <Text style={styles.texttitle}>Terlambat</Text>
                            <Text style={styles.textangka}>1</Text>
                        </View>
                    <View style={styles.coreContent}>
                        <Text style={styles.texttitle}>Tidak Hadir</Text>
                        <Text style={styles.textangka}>1</Text>
                    </View>
                </View>
                <View style={styles.calender}>
                    <Calendar
                    hideExtraDays={true}
                    current={'2012-03-01'}
                    markedDates={{
                        '2012-03-16': {selected: true, selectedColor: 'red'},
                        '2012-03-17': {selected: true, selectedColor: 'red'},
                        '2012-03-18': {selected: true, selectedColor: 'red'},
                        '2012-03-19': {selected: true, selectedColor: 'red'},
                        '2012-03-20': {selected: true, selectedColor: 'red'},
                        '2012-03-21': {selected: true, selectedColor: 'red'},
                        '2012-03-22': {selected: true, selectedColor: 'red'},
                        '2012-03-23': {selected: true, selectedColor: 'red'},
                    }}
                    theme={{
                        monthTextColor: 'white',
                        disabledArrowColor: '#ffffff',
                        textSectionTitleColor: '#000',
                    }}
                    disableArrowRight={true}
                    disableArrowLeft={true}
                    >

                </Calendar>
                </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};
export default Home;