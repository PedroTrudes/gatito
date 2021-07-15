import React from 'react';
import { FlatList} from 'react-native';
import Item from './item';
import TelaPadrao from '../../componente/TelaPadrao';

const servicos = [
    {
        id: 1,
        nome: "Óculos de Sol",
        preco: 50.9,
        descricao: "Óculos perfeito para praia",
    },
    {
        id: 2,
        nome: "Óculos de leitura-social",
        preco: 125.9,
        descricao: "Óculos leve e suave, perfeito para uma festa socia ou para uma boa leitura",
    },
    {
        id: 3,
        nome: "Óculos de Sol",
        preco: 99.9,
        descricao: "perfeito para um passeio na rua",
    },
    {
        id: 4,
        nome: "Óculos Kids",
        preco: 20.9,
        descricao: "Perfeito para o seu filho"
    },
    {
        id: 5,
        nome: "Óculos LGBT",
        preco: 34.5,
        descricao: "Óculos especial para o dia LGBT"

    }

]

export default function Servicos () {
    return  <FlatList 
                data={servicos}
                renderItem={({item}) => <Item {...item} />} 
                keyExtractor={({id}) => String(id)}   
            />

       
    
}