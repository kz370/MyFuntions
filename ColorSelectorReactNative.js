import React, { useState, useEffect, useRef } from 'react';
import { Modal, Animated } from 'react-native';
import { TriangleColorPicker } from 'react-native-color-picker'

export default function SelectColor(props) {
    const prevColor = props.color ? props.color : 'white'
    const [color, setcolor] = useState(prevColor)
    const zoom = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(zoom, {
            toValue: .8,
            duration: 300,
            useNativeDriver: false
        }).start();
    })

    const onConfirm = (c) => {
        onCancel(c)
    }

    const onCancel = (c = prevColor) => {
        Animated.timing(zoom, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false
        }).start();
        setTimeout(() => {
            props.onHideModal();
            props.onSelectColor(c)
        }, 300)
    }

    return (
        <Modal transparent={true} onRequestClose={() => onCancel()}>
            <Animated.View style={{ flex: 1, padding: 45, backgroundColor: '#212021', transform: [{ scale: zoom }], borderRadius: 40, elevation: 30, }}>
                <TriangleColorPicker
                    oldColor={color}
                    color={color}
                    onColorChange={(c) => { setcolor(c) }}
                    onColorSelected={c => onConfirm(c)}
                    onOldColorSelected={c => onConfirm(c)}
                    style={{ flex: 1 }}
                />
            </Animated.View>
        </Modal>
    )
}