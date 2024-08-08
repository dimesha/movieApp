import React from 'react';
import { View, Text } from 'react-native';

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
  

export default function TvShows() {
    const [data, SetData] = useState([]);

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 21, textAlign: "center",fontWeight:'700', color:'#000000', fontFamily:'Open Sans' }}>Tv Shows</Text>
      _{data && (
      <FlatList
        style={{ flex: 1 }}
        data={data}
        renderItem={(item) => {
          <Item item={item} />;
        }}
        keyExtractor={item => item.id}
      />
      )}
    </View>
  );
}
