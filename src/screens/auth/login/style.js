import { StyleSheet } from 'react-native';
import { colors} from '../../../constants/colors'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    formContainer:{
        
    },
    headerTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: colors.secondary,
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    buttonContainer:{
        backgroundColor: colors.secondary,
        alignItems: 'center',
        padding: 10,
        marginTop: 30,
    },
    buttonText:{
        color: colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
    }
});