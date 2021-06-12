import React from 'react';
import {FlatList} from 'react-native';
import Item from './item';
import TelaPadrao from '../../componente/TelaPadrao';
import StatusCarrinho from '../../componente/StatusCarrinho';

const servicos = [
    {
        id: 1,
        nome: "Carlos",
        preco: 79.9,
        descricao: "Não de Banho no seu gato, mas se precisar nos damos",
        quantidade: 2,
    },
    {
        id: 2,
        nome: "V4",
        preco: 88.9,
        descricao: "Uma dose da vacina V4, Seu gato vai precisar de duas.",
        quantidade: 3,
    },
    {
        id: 3,
        nome: "Vacina para raiva.",
        preco: 99.9,
        descricao: "apenas uma dose por ano.",
        quantidade: 1,
    }
]

export default function Carrinho () {

    const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

    return  <>
            <StatusCarrinho total={total} />
            <FlatList 
                data={servicos}
                renderItem={({item}) => <Item {...item} />} 
                keyExtractor={({id}) => String(id)}   
            />
        </>
    
}