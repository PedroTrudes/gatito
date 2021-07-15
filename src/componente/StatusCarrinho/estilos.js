import  { StyleSheet } from 'react-native';
import { cores } from '../../estilos';

export default StyleSheet.create ({
    conteudo: {
        backgroundColor: cores.escuro,
        flexDirection: 'row',
      //  justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 24,
    },
    total: {
        alignItems: 'center',
        paddingLeft: 110,
    },
    descricao: {
        fontSize: 16,
        color: cores.claro,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    valor: {
        fontSize: 18,
        fontWeight: 'bold',
        color: cores.laranja,
       
    },

    botao: {
        paddingLeft: 25,
        paddingTop: 10,
    }
})