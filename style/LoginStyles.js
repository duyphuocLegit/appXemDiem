import { StyleSheet } from 'react-native'

export default styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#3399FF",
    },
    header: {
        flex: 1,
        justifyContent: "flex-end"
    },
    header__text:{
        fontSize: 20,
        fontWeight: "500",
        color: "white",
        marginLeft: 20,
        marginBottom: 20
    },
    body: {
        flex: 3,
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 50,
        paddingLeft: 30,
        paddingRight: 30,
    },
    image: {
        marginTop: 5,
        width: 15,
        height: 15
    },
    formInput: {
        height: 50,marginLeft:20
        
    },
    body__email: {
        flexDirection: "row",
        marginBottom:35,
        backgroundColor:'#E0E0E0',
        height: 50,width:'100%',
        borderRadius:25,
    },
    body__password: {
        flexDirection: "row",
        marginBottom:35,
        backgroundColor:'#E0E0E0',
        height: 50,width:'100%',
        borderRadius:25
    },
    button: {
        width: "100%",
        height: 50,
        alignItems: "center",
        fontSize: 25,
        justifyContent: "center",
        backgroundColor: "#3399FF",
        marginTop: 20,
        borderRadius: 20,
    },
    button__SignUp: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#E0E0E0"
    }
})