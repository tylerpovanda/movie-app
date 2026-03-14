import { icons } from "@/constants/icons";
import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";

interface SearchBarProps {
  placeholder: string,
  onPress?: () => void,
  value: string,
  onChangeText: (text: string) => void;
}

const SearchBar = ({ placeholder, onPress, value, onChangeText}: SearchBarProps) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <View className="flex-row items-center bg-background">
      <Image 
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />
      <TextInput 
        onPress={onPress}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="white"   
        className="flex-1 ml-2 text-white"
      >

      </TextInput>
    </View>
  );
};

export default SearchBar;
