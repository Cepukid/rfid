import { StyleSheet } from "react-native";
import { COLORS } from "../../configs";
import { heightPercent,widthPercent } from "../../utils";
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    circleimage:{
        height:50,
        width: 50,
        borderRadius: 64,
        borderWidth:1,
        marginRight:10,
        borderColor:'rgba(0,0,0,0.2)',
    },
    wrapImage: {
        flexDirection: "row",
        width: "100%",
        marginTop: 20,
        marginLeft: 20,
      },
    penjelasan:{
        fontSize: 10
    },
    textwhite:{
        color:COLORS.background,
        fontWeight:"bold",
        fontSize:20
    },
    texttitle:{
        flex:1,
        fontSize:18,
    },
    textangka:{
        flex:3,
        alignContent: "center",
        fontSize:58,
        color:COLORS.blue
    },
    wrapContent: {
        width: widthPercent(70),
        marginTop: 20,
        marginBottom:60,
        height: heightPercent(8)
      },
    content: {
        width: "100%",
        backgroundColor: COLORS.blue,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        elevation: 5
      },
      body: {
        marginHorizontal: widthPercent(5),
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 20,
      },
      coreContent: {
        marginHorizontal:widthPercent(4),
        backgroundColor: COLORS.background,
        width: widthPercent(35),
        height: heightPercent(20),
        alignItems: "center",
        borderRadius: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        elevation: 5,
        padding: 15
      },
      calender: {
        marginHorizontal:20,
        marginBottom:20
      },
});

export default styles;