import { StyleSheet} from "react-native";
export default styles=StyleSheet.create({
container:{flex:1, alignItems: 'center'},

profile:{height:600},
    profile__img:{height:150,width:150,borderRadius:50,marginBottom:30,marginTop:70},
    profile__title:{marginRight:30},
        profile__title__text:{marginBottom:30,opacity:0.4, textDecorationLine: 'underline', fontWeight: '500'},
        profile__detail__text:{marginBottom:30},

logout:{marginTop:220,borderTopWidth:0.5},
    logout__button:{flexDirection: 'row',paddingTop:60,paddingLeft:10},
        logout__button__img:{height:25,width:25,marginRight:10},
        logout__button__text:{fontSize:12,fontWeight:'600'},

    logout__row:{paddingTop:25,flexDirection:'row',paddingLeft:5},
        logout__row__img:{width:25,height:25,marginTop:10},

})