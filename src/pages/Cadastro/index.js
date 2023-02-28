import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Cadastro() {


  const [itemV, item] = useState('');
  const [codigoV, codigo] = useState('');
  const [estoqueV, estoque] = useState('');
  const [custoV, custo] = useState('');
  const [valorV, valor] = useState('');

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })


  const btnSalvar = async ()=> {
 await fetch("http://localhost/estoque/api/cadastrar.php", 
    {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"item": itemV, "codigo": codigoV, "estoque": estoqueV, "custo":custoV, "valor":valorV})
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.erro) {
          setStatus({
            type: 'erro',
            mensagem: responseJson.messagem
            
          });
        } else {
          setStatus({
            type: 'success',
            mensagem: responseJson.messagem
          });
        }
      }).catch(() => {
        setStatus({
          type: 'erro',
          mensagem: 'Produto não cadastro com sucesso, tente mais tarde!'
        });
      });

      certo("Cadastrado com sucesso");
      erro("Erro");

      
      //Limpeza
      item("");
      codigo("");
      estoque("");
      custo("");
      valor("");
    
  }







  return (
    
    <View style={styles.container}>

      <Text style={styles.txt}>Cadastrar produto</Text>

      <View style={styles.lista}>
        
      <Text style={styles.txtLista}>Item</Text>
            <TextInput
              placeholder="Item"
              value={itemV}
              onChangeText={(itemV) => item(itemV)}
              style={styles.viewLista}
            />


          <Text style={styles.txtLista}>Código</Text>
            <TextInput
            value={codigoV}
            onChangeText={(codigoV) => codigo(codigoV)}
              placeholder="Código"
              style={styles.viewLista}
            />

          <Text style={styles.txtLista}>Estoque</Text>
            <TextInput
            value={estoqueV}
            onChangeText={(estoqueV) => estoque(estoqueV)}
              placeholder="Estoque"
              style={styles.viewLista}
            />


          <Text style={styles.txtLista}>Custo</Text>
            <TextInput
            value={custoV}
            onChangeText={(custoV) => custo(custoV)}
              placeholder="Custo"
              style={styles.viewLista}
            />


          <Text style={styles.txtLista}>Valor</Text>
            <TextInput
            value={valorV}
            onChangeText={(valorV) => valor(valorV)}
              placeholder="Valor"
              style={styles.viewLista}
            />

          <Button
            style={styles.btn}
            type='submit'
            onPress={btnSalvar}
            title='CADASTRAR'
        />
     
      </View>
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  txt:
  {
    borderBottomColor:'black',
    borderBottomWidth:'2px',
    marginTop:'40px',
    textAlign:'center',
    color: 'black',
    fontSize: '16pt',
    fontWeight:700,

    textShadowColor: 'rgba(0, 0, 0, .9)',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 10
  },


  lista:
  {
    marginTop:"40px",
    width:'80%',
    margin:'auto',
  },
  viewLista:
  {
    marginBottom:'30px',
    borderBottomWidth:'1px',
    borderColor:'#00467A' ,
  },
  txtLista: 
  {
    color: 'black',
    fontSize: '12pt',
    fontWeight:700,

    textShadowColor: 'rgba(0, 0, 0, .9)',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 10
  },
  txtListaValor:
  {
    color: 'black',
    fontSize: '10pt',
    fontWeight:500,
    textShadowColor: 'none',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 0

  }

});
