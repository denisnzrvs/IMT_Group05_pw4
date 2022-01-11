import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://chroniclingamerica.loc.gov/search/titles/results/?terms=election&format=json&limit=50&page=2')
      .then((response) => response.json())
      .then((json) => setData(json.items))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#ccc", padding:10}}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={{marginTop: 5, backgroundColor: "#fff", padding: 14}}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.title}, {item.country}</Text>
              <Text>{item.alt_title}</Text>
              <Text>{item.note}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};
