import {View,Text,StyleSheet} from 'react-native'

interface Props{
    Label:string
}
const Button=(props:Props) => {
    const {Label}= props
    return(
            <View style={styles.button}>
              <Text style={styles.buttonLabel}>{Label}</Text>
            </View>
    )
}

const styles=StyleSheet.create({
    button:{
        backgroundColor:'#467FD3',
        borderRadius:4,
        alignSelf:'flex-start',
        marginBottom:24
    },
    buttonLabel:{
        fontSize:16,
        lineHeight:32,
        color:'#ffffff',
        paddingVertical:8,
        paddingHorizontal:24,
        
    },
})

export default Button