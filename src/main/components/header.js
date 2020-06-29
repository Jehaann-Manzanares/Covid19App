import React from 'react';

import {
    Text,
    View,
    Image,
    SafeAreaView,
    StyleSheet,
} from 'react-native';

function Header ( props ) {
    return (
        <SafeAreaView>
            <View style = { styles.container}>
                <View style = { styles.Header}>
                        {props.children}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: "transparent",
    },
    Header:{
        flexDirection:'row',
        paddingVertical: 10,
        justifyContent:'space-between'
    },
    icon:{
        width: 30,
        height: 30,
        resizeMode: 'contain'
    }
})

export default Header;