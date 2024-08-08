import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

function Item({ item }) {
  return (
    <TouchableOpacity onPress={alert("hello")}>
      <View>
        <Image style={{ width: 10, height: 15 }} sourcr={{ uri: item.uri }} />
        <Text
          style={{
            fontWeight: "400",
            color: "blak",
            justifyContent: "flex-end",
            alignContent: "flex-start",
          }}
        >
          {item.original_title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default function Movies() {
  const [data, SetData] = useState([]);
  const auth_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTNmMGRmMDRlMWE3MTBiZmYyNDE0YjJjNjk5ZGI5NSIsInN1YiI6IjY0ZmJmYzc4ZWZlYTdhMDBmZDE5NGQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vjITkPseRhTMClOK1gPcW1AfAK7LGcbDQXbuv-n0FO8";
  const fetchdata = async () => {
    try {
      const resp = await fetch("https://api.themoviedb.org/3/discover/movie", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${auth_token}`, // notice the Bearer before your token
        },
      });
      const data = (await resp).json();
      console.log(data);
      SetData[data];
    } catch (err) {
      console.log(err);
    }
  };
  useEffect((()=>
    fetchdata()
  ),[])
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 21,
          textAlign: "center",
          fontWeight: "700",
          color: "#000000",
          fontFamily: "Open Sans",
        }}
      >
        Movies
      </Text>
      _
      {data && (
        <FlatList
          style={{ flex: 1 }}
          data={data}
          renderItem={(item) => {
            <Item item={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}
