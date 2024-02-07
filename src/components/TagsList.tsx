import React from 'react';
import { ScrollView, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import { Colors } from '../theme/Colors.ts';

export type TagItem = {
  Id: string;
  Name: string;
  IconUrl: string;
  Rank: string;
};

type Props = {
  data: Array<TagItem>;
  setItem: Function;
  selectedItem: TagItem | undefined;
};

const styles = StyleSheet.create({
  image: {
    width: ms(24),
    height: ms(24),
    borderRadius: 6,
  },
});
const TagsList = ({ data, setItem, selectedItem }: Props) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data?.map((item) => (
        <TouchableOpacity
          key={item.Id}
          style={{
            height: ms(42),
            borderRadius: 10,
            paddingHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: ms(6),
            flexDirection: 'row',
            borderColor: selectedItem === item ? Colors.red : Colors.shadow,
            borderWidth: 1.6,
          }}
          onPress={() => setItem(item)}
        >
          <Image source={{ uri: item.IconUrl }} style={styles.image} />
          <Text style={{ paddingHorizontal: ms(6) }}>{item.Name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default TagsList;
