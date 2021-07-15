import React from 'react';
import {FlatList} from 'react-native';
import Item from './item';
import TelaPadrao from '../../componente/TelaPadrao';
import StatusCarrinho from '../../componente/StatusCarrinho';

const servicos = [
    {
        id: 1,
        nome: "Óculos de Sol",
        preco: 50.9,
        descricao: "Óculos perfeito para praia",
        quantidade: 1,
    },
    {
        id: 2,
        nome: "Óculos de leitura-social",
        preco: 125.9,
        descricao: "Óculos leve e suave, perfeito para uma festa social ou para uma boa leitura",
        quantidade: 2,
    },
    {
        id: 3,
        nome: "Óculos de Sol",
        preco: 99.9,
        descricao: "perfeito para um passeio na rua",
        quantidade: 2,
    },
    {
        id: 4,
        nome: "Óculos Kids",
        preco: 20.9,
        descricao: "Perfeito para o seu filho",
        quantidade: 1,
    },
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