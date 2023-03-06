import { View, Image, Text, Alert, Button } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import colors from "../../utils/colors";
import { styles } from "./styles";

const ImageSelector = ({ onImageSelection }) => {
  const [selectedUrl, setSelectedUrl] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("No se pudo acceder.", "Tenés que dar permiso para usar la cámara.", [
        { text: "Aceptar" },
      ]);
      return false;
    }
    return true;
  };

  const onHandleGetImage = async () => {
    const hasCameraPermission = await verifyPermissions();
    if (!hasCameraPermission) return;
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });
    setSelectedUrl(image.uri);
    onImageSelection(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!selectedUrl ? (
          <Text>No hay ninguna imagen seleccionada.</Text>
        ) : (
          <Image style={styles.image} source={{ uri: selectedUrl }} />
        )}
      </View>
      <Button title="Seleccionar imagen" color={colors.primary} onPress={onHandleGetImage} />
    </View>
  );
};

export default ImageSelector;
