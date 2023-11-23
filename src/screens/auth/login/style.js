import { StyleSheet } from 'react-native';
import { colors} from '../../../constants/colors'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    formContainer:{
        marginHorizontal: 10,
        flex: .4,
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: colors.secondary,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
    },
    buttonContainer:{
        backgroundColor: colors.secondary,
        alignItems: 'center',
        padding: 10,
        marginTop: 30,
        borderRadius: 20,
        marginHorizontal: 20,
    },
    buttonText:{
        color: colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
    }
});