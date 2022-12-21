import { StyleSheet } from 'react-native'

export default styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#009387",
        paddingTop: 40
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
        paddingRight: 30
    },
    image: {
        marginTop: 0,
        width: 25,
        height: 25,
        marginRight:10
    },
    body__email: {
        flexDirection: "row",
        borderBottomWidth: 1,
        height:25,
        marginBottom:20
    },
    body__password: {
        marginBottom:15,
        height:25,
        flexDirection: "row",
        borderBottomWidth: 1,
    },
    button: {
        width: "100%",
        height: 50,
        alignItems: "center",
        fontSize: 20,
        justifyContent: "center",
        backgroundColor: "#009387",
        marginTop: 20,
        borderRadius: 20,
    },
    button__SignUp: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#009387"
    }
})