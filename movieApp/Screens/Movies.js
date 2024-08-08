import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";

function Item({ item }) {
  return (
    <TouchableOpacity onPress={() => alert("hello")}>
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={{ uri: "https://image.tmdb.org/t/p/original/"+item.poster_path }} />
        <Text style={styles.title}>{item.original_title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function Movies() {
  const [data, setData] = useState([]);
  const auth_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTNmMGRmMDRlMWE3MTBiZmYyNDE0YjJjNjk5ZGI5NSIsInN1YiI6IjY0ZmJmYzc4ZWZlYTdhMDBmZDE5NGQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vjITkPseRhTMClOK1gPcW1AfAK7LGcbDQXbuv-n0FO8";
  
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/movie", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth_token}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setData(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Movies</Text>
      {data && (
        <FlatList
          style={styles.list}
          data={data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  header: {
    fontSize: 21,
    textAlign: "center",
    fontWeight: "700",
    color: "#000000",
  },
  list: {
    width: Dimensions.get('window').width,
  },
  itemContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 150,
  },
  title: {
    fontWeight: "400",
    color: "black",
    textAlign: "center",
    marginTop: 5,
  },
});
