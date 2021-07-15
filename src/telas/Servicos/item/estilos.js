import { StyleSheet } from 'react-native';
import { cores } from '../../../estilos';

export default StyleSheet.create({

    informacao: {
        padding: 24,
        
    },

    nome: {
        color: cores.azul,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },

    calculo: {
        color: cores.escuro,
        fontSize: 14,
        marginVertical: 8,
    },

    preco: {
        color: cores.escuro,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 8,
    },
    precoTotal: {
        color: cores.escuro,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 8,
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
        paddingTop: 30,
    },

    descricao: {
        color: cores.escuro,
        fontWeight: 'bold',
        fontSize: 16,
        paddingBottom: 15,
        textAlign: 'center',
        paddingTop: 15,
    },

    descricaoTotal: {
        color: cores.escuro,
        fontWeight: 'bold',
        fontSize: 16,
        paddingBottom: 15,
        textAlign: 'center',
    }, 

    valor: {
        color: cores.azul,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        flexDirection: 'row',
        padding: 5,
    },
    quantidade: {
        color: cores.azul,
        fontSize: 18,
        fontWeight: 'bold',
        flexDirection: 'column',
    }

})