import { View, Pressable, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Text>This is a page about cheese</Text>
      <Link href="/other" asChild>
        <Pressable>
          <Text>Index</Text>
        </Pressable>
      </Link>
    </View>
  );
}