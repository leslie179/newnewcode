import {Text} from 'react-native';
import { Link } from 'expo-router';


export default function Page() { 
    return
    <View>
        <Text>This is a page about sandwiches</Text>
        <h2>Hi</h2>
        <Link href="/cheese"> Cheese</Link>
    </View>
}