import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Link href="/sandwich"> Sandwich </Link>
      <Link href="/cheese"> Sandwich </Link>

      {/* Add more components or elements here */}
    </View>
  );
}
