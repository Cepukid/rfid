import React from "react";
import {
    Image,
    SafeAreaView,
    Text,
    FlatList,
    TouchableOpacity,
    View
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import { heightPercent } from "../../utils";
  import { IMAGES } from "../../configs";
  
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
  
  const Pengumuman = () => {
    const { navigate } = useNavigation();
    const _onClickTrash = (item: number) => {
      navigate("DetailPengumuman",{friends: "aa",})
    };
    const _renderItem = ({ item, index }: any) => (
      <View style={{height:heightPercent(18),
          margin:2,
          borderRadius: 10,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
          elevation: 5}}>
      <TouchableOpacity onPress={() => _onClickTrash(index)}>
          <View style={{flexDirection: "row",justifyContent:"center",}}>
              <Image source={IMAGES.profilk} style={{
                  width: undefined,
                  height:"90%",
                  margin:5,
                  top:4,
                  start:4,
                  alignItems:"center",
                  aspectRatio: 1,
                  borderRadius: 10,
                  }}/>
                  <View style={{marginStart:10,marginTop:5, flex:1,marginEnd:10}}>
                      <Text style={{fontSize:16}}>
                          Ini Pengumuman
                      </Text>
                      <Text numberOfLines={4} style={{fontSize:12,textAlign:"justify"}}>
                          Lorem ipsum dolor sit amet, consectetur asdasasda asdsadsad dipiscing asdsadsa dadasdasdsa delit. Diam sagittis tristique odioaa non sed dui. Neque Lorem ipsum dolor sit amet, consectetur asdasasda asdsadsad dipiscing asdsadsa dadasdasdsa delit. Diam sagittis tristique odioaa non sed dui. Neque
                      </Text>
                      <View style={{justifyContent: 'flex-end', flex: 1,marginBottom:3}}>
                      <View style={{flexDirection: "row",justifyContent: "space-between",start:1}}>
                          <Text style={{fontSize:11}}>
                          25-05-2020
                          </Text>
                          <Text style={{fontSize:11}}>
                          Read more 
                          </Text>
                      </View>
                      </View>
                  </View>
          </View>
      </TouchableOpacity>
      </View>
    );
      return(
        <SafeAreaView>
            <View>
                <FlatList
                    style={{marginTop:5}}
                    showsVerticalScrollIndicator={false}
                    data={DATA}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={_renderItem}/>
            </View>
        </SafeAreaView>
      );

  };
  export default Pengumuman;