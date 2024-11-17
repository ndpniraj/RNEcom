import {FC} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

interface Props {}

const SignIn: FC<Props> = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput style={styles.textInput} placeholder="email@example.com" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput style={styles.textInput} placeholder="email@example.com" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput style={styles.textInput} placeholder="email@example.com" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#dedede',
  },
  textInput: {
    fontSize: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.6)',
  },
});

export default SignIn;
