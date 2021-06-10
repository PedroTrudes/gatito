import React from 'react';
import { Text , View, SafeAreaView, StatusBar, FlatList} from 'react-native';
import Item from './item';

const servicos = [
    {
        id: 1,
        nome: "Carlos",
        preco: 79.9,
        descricao: "Não de Banho no seu gato, mas se precisar nos damos",
    },
    {
        id: 2,
        nome: "V4",
        preco: 88.9,
        descricao: "Uma dose da vacina V4, Seu gato vai precisar de duas.",
    },
    {
        id: 3,
        nome: "Vacina para raiva.",
        preco: 99.9,
        descricao: "apenas uma dose por ano.",
    }
]

export default function Servicos () {
    return  <SafeAreaView>
            <StatusBar />
            <Text>* Serviços! </Text>
            <FlatList 
                data={servicos}
                renderItem={({item}) => <Item {...item} />} 
                keyExtractor={(id) => String(id)}   
            />
        </SafeAreaView>
    
}