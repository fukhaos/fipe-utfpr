import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        height: 40,
        borderColor: Colors.border,
        borderRadius: 8,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        backgroundColor: Colors.card
    },
    item: {
        flexDirection: 'row',
        height: 60,
        borderBottomWidth: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.card,
        borderColor: Colors.border,
    },
    textDetail: {
        fontWeight: 'bold',
        color: Colors.text
    }

})

export default styles;