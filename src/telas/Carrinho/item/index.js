import React, { useState } from 'react';
import { Text, View} from 'react-native';
import Botao from '../../../componente/Botao';
import CampoInteiro from '../../../componente/CampoInteiro';
import estilos from './estilos';


export default function Item({nome, preco, descricao, quantidade: quantidadeInicial}) {
    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [total, setTotal] = useState(preco * quantidadeInicial);    
    
    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade)
    }

    const calculaTotal = (total) => {
        setTotal(quantidade * preco);
    }


    return <>
    <View style={estilos.informacao}>
        <Text style={estilos.nome}>{ nome }</Text>
        <Text style={estilos.descricao}>{ descricao }</Text>
        <Text style={estilos.preco}>{ 
        Intl.NumberFormat('pt-BR', {
           style: 'currency', currency: 'BRL'
        }).format(preco)
        }</Text>
    </View>
    <View style={estilos.carrinho}>
        <View>
            <View style={estilos.valor}>
                <Text style={estilos.quantidade}>Quantidade:</Text>
                <CampoInteiro estilos={estilos.quantidade}  valor={quantidade} acao={atualizaQuantidadeTotal} />
            </View>
            <View style={estilos.valor}>
                <Text style={estilos.descricao}>Preço:</Text>
                <Text style={estilos.preco}>{
                Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
                }).format(total)}
                </Text>
            </View>
        </View>
        <View style={estilos.btnRemove}>
        <Botao valor="Remover do carrinho" acao={() => {}} />
        </View>
    </View> 
    
    <View style={estilos.divisor} />
    </>
}