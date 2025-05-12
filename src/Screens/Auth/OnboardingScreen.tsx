import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Tipagem para os dados de cada slide
type OnboardingData = {
  id: string;
  title: string;
  description: string;
  image: any;
};

// Props do componente, incluindo a navegação
type OnboardingScreenProps = {
  Onboarding: { name: string };
  Login: { name: string };
};

type ProfileScreenProps = NativeStackScreenProps<
  OnboardingScreenProps,
  "Onboarding"
>;

// Dados dos slides
const data: OnboardingData[] = [
  {
    id: "1",
    title: "Organize sua saúde",
    description: "Centralize exames e consultas de toda a família.",
    image: require("../../Assets/onboarding1.png"),
  },
  {
    id: "2",
    title: "Lembretes automáticos",
    description: "Receba notificações personalizadas para check-ups.",
    image: require("../../Assets/onboarding2.png"),
  },
  {
    id: "3",
    title: "Histórico de exames",
    description: "Acesse resultados de exames de forma prática.",
    image: require("../../Assets/onboarding3.png"),
  },
];

const { width } = Dimensions.get("window");

const OnboardingScreen = ({ navigation }: ProfileScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate("Login", { name: "Screen login" });
    }
  };

  const renderItem = ({ item }: { item: OnboardingData }) => (
    <View style={[styles.slide, { width }]}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {currentIndex === data.length - 1 ? "Começar" : "Próximo"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center", // Centraliza o conteúdo verticalmente
  },
  slide: {
    width: 375, // Largura do slide
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30, // Adicionado padding lateral para alinhamento
  },
  image: {
    width: 328,
    height: 320,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  dot: {
    height: 16,
    borderRadius: 8,
    marginHorizontal: 6,
  },
  activeDot: {
    width: 28, // Largura maior para o indicador ativo
    backgroundColor: "#E53935",
  },
  inactiveDot: {
    width: 16, // Indicadores inativos permanecem como círculos
    backgroundColor: "#f5a5a5",
  },
  button: {
    backgroundColor: "#E53935",
    padding: 15,
    borderRadius: 14,
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default OnboardingScreen;
