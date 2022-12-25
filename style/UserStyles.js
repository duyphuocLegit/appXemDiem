import { StyleSheet} from "react-native";
export default styles=StyleSheet.create({
container:{flex:1},

profile:{height:600},
    profile__img:{height:100,width:100,borderRadius:50,marginBottom:30,marginTop:30},
    profile__title:{marginRight:50},
        profile__title__text:{marginBottom:30,opacity:0.4},
        profile__detail__text:{marginBottom:30},

logout:{borderTopWidth:0.5},
    logout__button:{flexDirection: 'row',marginTop:22,left:250},
    logout__text:{right:15,fontWeight:'600',fontSize:15},
    logout__img:{width:30,height:30},

})