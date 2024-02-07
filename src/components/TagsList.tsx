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
  badge: {
    height: ms(38),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: ms(6),
    flexDirection: 'row',
    borderWidth: 1.6,
  },
  image: {
    width: ms(24),
    height: ms(24),
    borderRadius: 6,
    marginLeft: ms(4),
  },
  title: {
    fontSize: 16,
    paddingHorizontal: ms(10),
  },
});
const TagsList = ({ data, setItem, selectedItem }: Props) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data?.map((item) => (
        <TouchableOpacity
          key={item.Id}
          style={[
            styles.badge,
            {
              borderColor: selectedItem === item ? Colors.red : Colors.shadow,
            },
          ]}
          onPress={() => setItem(item)}
        >
          <Image source={{ uri: item.IconUrl }} style={styles.image} />
          <Text style={styles.title}>{item.Name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default TagsList;
