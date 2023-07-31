import {View, Text, ScrollView, SafeAreaView} from 'react-native'
import {Stack, useRouter} from 'expo-router'
import { VirtualizedList } from 'react-native-web'
import {COLORS,icons, images,SIZES} from '../constants'
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components'

const Home = () =>{
    const router = useRouter();
    return(
        <SafeAreaView style={{alignItems:'center', flex:1, backgroundColor:COLORS.lightWhite}}>

            <Text style={{alignContent:'center'}}>Home</Text>
        </SafeAreaView>
    )
}

export default Home;