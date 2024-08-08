import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";

function Item({ item }) {
  const trimmedTitle = item.original_name.length > 20 ? item.original_name.substring(0, 15) + '...' : item.original_name;
  return (
    <TouchableOpacity onPress={() => alert("hello")}>
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} />
        <Text style={styles.title}>
          {trimmedTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default function TvShows() {
  const [data, setData] = useState([]);
  const auth_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTNmMGRmMDRlMWE3MTBiZmYyNDE0YjJjNjk5ZGI5NSIsInN1YiI6IjY0ZmJmYzc4ZWZlYTdhMDBmZDE5NGQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vjITkPseRhTMClOK1gPcW1AfAK7LGcbDQXbuv-n0FO8";
  
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/tv", {
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
          numColumns={2}
          columnWrapperStyle={styles.row}
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
    marginTop:20,
    marginBottom: 10,
  },
  list: {
    width: Dimensions.get('window').width,
    paddingRight:15,
    paddingLeft:15,
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    width: (Dimensions.get('window').width / 2) - 25, // Adjust width
  },
  image: {
    width: 155,
    height: 184,
    borderTopLeftRadius: 10,
    borderTopRightRadius:10,
    
  },
  title: {
    fontWeight: "400",
    color: "black",
    textAlign: "left",
    marginTop: 5,
    marginBottom:5,
    width: 120, // Fixed width
  },
});
