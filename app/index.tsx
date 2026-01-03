import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const ZEN_BUTTON_COLOR = '#5A8B6F';
const ZEN_BACKGROUND_COLOR = '#E8DCC4';

export default function App() {
  const { width } = useWindowDimensions();
  const [color, setColor] = useState('#5A8B6F');

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
      hex += letters[Math.floor(Math.random() * 16)];
    }
    setColor(hex);
  };

  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  const rgb = hexToRgb(color);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: ZEN_BACKGROUND_COLOR }]}>
      <StatusBar style="dark" />
      <View style={styles.content}>
        <View style={[styles.colorBlock, { width: width * 0.8, height: width * 0.8, backgroundColor: color }]} />
        
        <View style={styles.colorInfo}>
          <Text style={styles.label}>HEX</Text>
          <Text style={styles.value}>{color.toUpperCase()}</Text>
          
          <Text style={[styles.label, styles.marginTop]}>RGB</Text>
          <Text style={styles.value}>{`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={generateRandomColor}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Generate Color</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  colorBlock: {
    borderRadius: 20,
    marginBottom: 30,
  },
  colorInfo: {
    alignItems: 'center',
    marginBottom: 40,
  },
  label: {
    fontSize: 14,
    color: '#8B7355',
    fontWeight: '500',
    letterSpacing: 2,
  },
  marginTop: {
    marginTop: 16,
  },
  value: {
    fontSize: 28,
    color: '#3D3D3D',
    fontWeight: '600',
    marginTop: 4,
    fontFamily: Platform.select({
      ios: 'Menlo',
      android: 'monospace',
      web: 'monospace',
    }),
  },
  button: {
    backgroundColor: ZEN_BUTTON_COLOR,
    paddingHorizontal: 48,
    paddingVertical: 18,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
});
