import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { useRouter } from "expo-router";
import { fetchMovies } from "../services/api";
import useFetch from "../services/useFetch";

export default function Index() {
  const router = useRouter();

  const { 
    data: movies, 
    loading: loading, 
    error: error 
  } = useFetch(()=>fetchMovies({ query: ""}));

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: "100%",
        }}
      >
        <Image source={icons.logo} className="w-12 h-12 mt-20 mb-5 mx-auto" />

        {loading ? (
          <ActivityIndicator 
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : error ? (
          <Text>Error: {error?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
          <SearchBar 
            onPress={()=>router.push("/search")}
            placeholder="Search for a Movie"
          />
          <>
            <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies:</Text>
          </>
        </View>
        )
        }

        
      </ScrollView>
    </View>
  );
}
