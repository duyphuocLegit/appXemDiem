import { StyleSheet } from "react-native";

export default styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#EEEEEE',
        alignItems: 'center',
        paddingTop:50
    },
    table: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    row_item_mamon: {
        padding: 5,
        width: '35%',
        textAlign: 'center',
        borderWidth: 1,
        borderRightWidth: 0
    },
    row_item_tenmon: {
        padding: 5,
        borderWidth: 1,
        width: '65%'
    },
    title: {
        flexDirection: 'row',
        backgroundColor: "#3399FF",
    },
    tile_item_mamon: {
        padding: 5,
        borderWidth: 1,
        width: '35%',
        alignItems: 'center',
        borderRightWidth: 0
    },
    tile_item_tenmon: {
        padding: 5,
        borderWidth: 1,
        width: '65%',
        alignItems: 'center'
    },
    title_text: {
        fontWeight: '500',
        color: 'white'
    }
})