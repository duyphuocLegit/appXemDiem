import { StyleSheet} from "react-native";
export default styles=StyleSheet.create({
container:{flex:1, alignItems: 'center'},

profile:{height:600},
    profile__img:{height:150,width:150,borderRadius:50,marginBottom:30,marginTop:70},
    profile__title:{marginRight:30},
        profile__title__text:{marginBottom:30,opacity:0.4, textDecorationLine: 'underline', fontWeight: '500'},
        profile__detail__text:{marginBottom:30},

logout:{marginTop:30},
    logout__button:{flexDirection: 'row',paddingTop:15, marginBottom: 10,borderTopWidth:0.5},
    logout__text:{fontWeight:'600',fontSize:15},
    logout__text__container:{paddingRight: 10},
    logout__img:{width:30,height:30},

})