import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  Button,
} from "react-native";

const BottomPopup = ({ status, closeModal }) => {

  return (
    <View>
      <Modal
        visible={status}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ backgroundColor: "black", padding: 20 }}>
            <Text style={{ color: "#FFF" }}>
              Solicite acesso a um administrador resposável para acessar a
              plataforma de acompanhamento do projeto.
            </Text>
            <Button title="Fechar" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BottomPopup;
