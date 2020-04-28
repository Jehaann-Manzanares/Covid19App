import React from 'react';

import {
    ScrollView,
    View,
    StyleSheet
} from 'react-native';

function DataItemLayout ( props ) {
    return (
      
        <View style={ styles.container}>
            <ScrollView>
                {props.children}
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
    }
})

export default DataItemLayout;