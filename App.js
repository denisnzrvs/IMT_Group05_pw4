import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Text,
  FlatList,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./styles";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Bitcoin News" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
      fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=")
      .then((response) => response.json())
      .then((json) => setData(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.photoCont}>
                <Image style={styles.photo} source={item.urlToImage} />
              </View>
              <View>
                <Text href={item.url} style={styles.title}>
                  {item.title}
                </Text>
                <Text style={styles.author}>{item.source.name}</Text>
                <Text style={styles.time}>{item.publishedAt}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default MyStack;
