import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  Button,
} from "react-native";

const BottomPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View>
      <Modal
        visible={isVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ backgroundColor: "black", padding: 20 }}>
            <Text style={{ color: "#FFF" }}>
              Solicite acesso a um administrador resposável para acessar a
              plataforma de acompanhamento do projeto.
            </Text>
            <Button title="Fechar" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BottomPopup;
