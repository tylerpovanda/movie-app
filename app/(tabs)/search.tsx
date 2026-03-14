import { images } from "@/constants/images";
import React, { useState } from "react";
import { Text, Image, View, FlatList, ActivityIndicator } from "react-native";
import MovieCard from "../components/MovieCard";
import { useRouter } from "expo-router";
import useFetch from "../services/useFetch";
import { fetchMovies } from "../services/api";
import SearchBar from "../components/SearchBar";
import { icons } from "@/constants/icons";

const Search = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const { 
    data: movies, 
    loading: loading, 
    error: error 
  } = useFetch(()=>fetchMovies({ query: searchQuery}), false);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} 
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      />
      <FlatList 
        data={movies}
        renderItem={({ item })=> (
          <MovieCard {...item}/>
        )}
        keyExtractor={(item)=>item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          gap: 16,
          marginVertical: 16,
          justifyContent: "center"
        }}
        contentContainerStyle={{
          paddingBottom: 100
        }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20">
              <Image source={icons.logo} />
            </View>
            <View className="my-5">
              <SearchBar 
                placeholder="Search for a Movie"
                value={searchQuery} 
                onChangeText={(text: string)=>setSearchQuery(text)}
              />
            </View>

            {loading && (
              <ActivityIndicator size="large" color="#0000ff"/>
            )}

            {error && (
              <Text className="text-red-500 px-5 my-3">Error: {error.message}</Text>
            )}

            {!loading && !error && "searchQuery".trim() && movies?.length > 0 && (
              <Text className="text-white text-xl font-bold">
                Search Results for{" "}
                <Text className="text-accent">{searchQuery}</Text>
              </Text>
            )}
          </>
        }
      />
    </View>
  );
};

export default Search;
