import { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { savePlace } from "../../store/place.slice";
import { ImageSelector, LocationSelector } from "../../components";
import { styles } from "./styles";
import colors from "../../utils/colors";

const NewPlace = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [coords, setCoords] = useState(null);
  const dispatch = useDispatch();

  const onHandleSubmit = () => {
    dispatch(savePlace(title, image, coords));
    navigation.goBack();
  };
  const onHandleChange = (text) => {
    setTitle(text);
  };
  const onImageSelection = (uri) => {
    setImage(uri);
  };

  const onLocationSelection = (location) => {
    setCoords(location);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Lugar</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribí el nombre del lugar"
          onChangeText={onHandleChange}
          value={title}
        />
        <ImageSelector onImageSelection={onImageSelection} />
        <LocationSelector onLocationSelection={onLocationSelection} />
        <Button
          disabled={title.length === 0}
          title="Guardar"
          color={colors.secondary}
          onPress={onHandleSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
