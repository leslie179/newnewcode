import {Text} from 'react-native';
import { Link } from 'expo-router';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

export default function Page() { 
    return
    <View>
    <Text>This is a page about sandwiches</Text>
    <h2>Hi</h2>
    </View>
<Link href="/cheese"> Cheese</Link>
}