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
                    <Image
                        source = { require('../../../assets/menu.png')}
                        style = { styles.icon}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: "#ef564f",
    },
    Header:{
        paddingVertical: 10,
    },
    icon:{
        width: 30,
        height: 30,
        resizeMode: 'contain'
    }
})

export default Header;