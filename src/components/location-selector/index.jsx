import { useState } from "react";
import { View, Button, Text, Alert } from "react-native";
import * as Location from "expo-location";

import MapPreview from "../map-preview";
import colors from "../../utils/colors";
import { styles } from "./styles";

const LocationSelector = ({ onLocationSelection }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("No se pudo acceder.", "Tenés que dar permiso para acceder a la ubicación.", [
        { text: "Aceptar" },
      ]);
      return false;
    }
    return true;
  };

  const onHandleGetLocation = async () => {
    const hasLocationPermission = await verifyPermissions();
    if (!hasLocationPermission) return;
    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });
    const { latitude, longitude } = location.coords;
    setSelectedLocation({ lat: latitude, lng: longitude });
    onLocationSelection({ lat: latitude, lng: longitude });
  };

  return (
    <View style={styles.container}>
      <MapPreview location={selectedLocation} style={styles.preview}>
        <Text style={styles.text}>No hay ninguna ubicación seleccionada.</Text>
      </MapPreview>
      <Button
        title="Seleccionar ubicación actual"
        color={colors.primary}
        onPress={onHandleGetLocation}
      />
      <Button title="Seleccionar desde el mapa" color={colors.tertiary} onPress={() => {}} />
    </View>
  );
};

export default LocationSelector;
