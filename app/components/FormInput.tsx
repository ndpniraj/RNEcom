import {FC} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

interface Props extends TextInputProps {
  label?: string;
}

const FormInput: FC<Props> = ({label, ...restProps}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput style={styles.textInput} {...restProps} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default FormInput;
