import { useState, useLayoutEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MapView, { Marker } from "react-native-maps";

import { styles } from "./styles";
import colors from "../../utils/colors";

const Maps = ({ navigation, route }) => {
  const { coords } = route.params;
  const [selectedLocation, setSelectedLocation] = useState(null);

  const initialRegion = {
    latitude: coords?.lat,
    longitude: coords?.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const onHandlePickLocation = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const onHandleSaveLocation = () => {
    if (selectedLocation) {
      navigation.navigate("NewPlace", { mapLocation: selectedLocation });
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity disabled={!selectedLocation} onPress={onHandleSaveLocation}>
          <Ionicons
            name="md-save-sharp"
            size={22}
            color={!selectedLocation ? colors.gray : colors.white}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, onHandleSaveLocation]);

  return (
    <MapView
      initialRegion={initialRegion}
      onPress={onHandlePickLocation}
      style={styles.container}
      minZoomLevel={14}>
      {selectedLocation && (
        <Marker
          title="Ubicación seleccionada"
          coordinate={{ latitude: selectedLocation.lat, longitude: selectedLocation.lng }}
        />
      )}
    </MapView>
  );
};

export default Maps;
