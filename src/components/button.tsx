import {Text,StyleSheet,TouchableOpacity,Alert} from 'react-native'

interface Props{
    Label:string
    onPress?: () => void
}
const Button=(props:Props) => {
    const {Label, onPress }= props
    return(
            <TouchableOpacity onPress={onPress } style={styles.button}>
              <Text style={styles.buttonLabel}>{Label}</Text>
            </TouchableOpacity>
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