import { StyleSheet } from 'react-native';
import { cores } from '../../estilos';

export default (pequeno, invertido) => StyleSheet.create({
    botao: {
        width: 300,
        paddingVertical: pequeno ? 3 : 9,
        paddingHorizontal: 25,
        backgroundColor: invertido ? cores.bl : cores.branco,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    valor: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: invertido ? cores.escuro : cores.bl,
    }
});