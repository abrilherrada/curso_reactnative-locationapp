import { TouchableOpacity, Image, Text, View } from "react-native";

import { styles } from "./styles";

const PlaceItem = ({ id, title, image, onSelect }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;
