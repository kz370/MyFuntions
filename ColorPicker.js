import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, Dimensions,Platform,Image } from 'react-native';
import Slider from '@react-native-community/slider';
import img from './bg.png'

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

let DEFAULT_IMAGE
if (Platform.OS == 'web') {
  DEFAULT_IMAGE = Image.resolveAssetSource = () => { uri: "./bg.png" }
} else {
  DEFAULT_IMAGE = Image.resolveAssetSource(img).uri;
}

const ColorPicker = () => {
    const [red, setred] = useState(255)
    const [green, setgreen] = useState(255)
    const [blue, setblue] = useState(255)
    const [alpha, setalpha] = useState(1)

    // console.log(red,green,blue,alpha)
    return (
        <View style={[s.container]}>
            <View style={[s.colorPicker, { flexDirection: 'row' }]}>
                <View>
                    <Text style={{ textAlign: 'center' }}>
                        Red
                    </Text>
                    <Slider
                        style={{ width: 200, height: 40 }}
                        minimumValue={0}
                        maximumValue={255}
                        value={red}
                        minimumTrackTintColor={`rgba(${red},0,0,1)`}
                        maximumTrackTintColor="black"
                        onValueChange={(e) => setred(e)}
                    />
                    <Text style={{ textAlign: 'center' }}>
                        Green
                    </Text>
                    <Slider
                        style={{ width: 200, height: 40 }}
                        minimumValue={0}
                        maximumValue={255}
                        value={green}
                        minimumTrackTintColor={`rgba(0,${green},0,1)`}
                        maximumTrackTintColor="black"
                        onValueChange={(e) => setgreen(e)}
                    />
                    <Text style={{ textAlign: 'center' }}>
                        Blue
                    </Text>
                    <Slider
                        style={{ width: 200, height: 40 }}
                        minimumValue={0}
                        maximumValue={255}
                        value={blue}
                        minimumTrackTintColor={`rgba(0,0,${blue},1)`}
                        maximumTrackTintColor="black"
                        onValueChange={(e) => setblue(e)}
                    />
                </View>
                <View style={{ transform: [{ rotateZ: "-90deg" }] }}>
                    <Slider
                        style={{ width: 130, height: 40 }}
                        minimumValue={0}
                        maximumValue={1}
                        value={1}
                        minimumTrackTintColor="red"
                        maximumTrackTintColor="black"
                        onValueChange={(e) => setalpha(e)}
                    />
                    <Text style={{ textAlign: 'center', transform: [{ rotateZ: "90deg" }] }} >
                        Alpha
                    </Text>
                </View>
            </View>
            <View style={{}}>
                <ImageBackground source={{uri:DEFAULT_IMAGE}} resizeMode="cover" style={[{ justifyContent: "center", width: '100%'}]}>
                    <View style={[s.color,{ backgroundColor: `rgba(${red},${green},${blue},${alpha})` }]}>
                        <Text>
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </View >
    );
};

const s = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 30
    },
    colorPicker: {
        alignItems: 'center',
    },
    color: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 40
    },
    titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: 'bold',
    },
    box: {
        height: 150,
        width: 150,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
});

export default ColorPicker;