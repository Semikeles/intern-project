import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../config/Color';

export default function Header({ navigation, title = 'Users' }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: colors.primary, // senin primary neon mavi
    height: 80,
  },
  backButton: {
    marginRight: 16,
  },
  backText: {
    color: colors.textPrimary,
    fontSize: 18,
    fontFamily: 'Sora_400Regular', // Sora fontu
  },
  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Sora_700Bold', // Sora bold fontu
  },
});
