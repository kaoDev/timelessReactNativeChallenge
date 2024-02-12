import {View, Text, StyleSheet} from 'react-native';
import {ITag} from 'src/types';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  text: {
    textTransform: 'uppercase',
  },
});

const Tag = ({backgroundColor, textColor, text}: ITag) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={[styles.text, {color: textColor}]}>{text}</Text>
    </View>
  );
};

export default Tag;
