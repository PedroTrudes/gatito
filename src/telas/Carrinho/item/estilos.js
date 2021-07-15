import { StyleSheet } from 'react-native';
import { cores } from '../../../estilos';

export default StyleSheet.create({

    informacao: {
        padding: 24,
    },

    nome: {
        color: cores.laranja,
        fontWeight: 'bold',
        fontSize: 20,
    },

    calculo: {
        color: cores.escuro,
        fontSize: 14,
        marginVertical: 8,
    },

    preco: {
        color: cores.escuro,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
        marginLeft: 10,
    },

    divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: cores.cinza,
    },

    carrinho: {
        paddingHorizontal: 24,
        paddingBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    descricao: {
        color: cores.escuro,
        fontWeight: 'bold',
        fontSize: 16,
    },
    valor: {
        color: cores.escuro,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        flexDirection: 'row',
        padding: 5,
    },
    quantidade: {
        color: cores.escuro,
        fontSize: 18,
        fontWeight: 'bold',
        flexDirection: 'column',
    },
    btnRemove:{
        paddingLeft: 25,
    }

})