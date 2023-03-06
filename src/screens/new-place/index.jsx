import { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { addPlace } from "../../store/place.slice";
import { styles } from "./styles";
import colors from "../../utils/colors";

const NewPlace = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const onHandleSubmit = () => {
    dispatch(addPlace({ title }));
    navigation.goBack();
  };
  const onHandleChange = (text) => {
    setTitle(text);
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
