import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';

export default function Home({navigation}) {
  const [data, setData] = useState([]);
  
  const getProdutos = async () => {
    fetch("http://localhost/estoque/api/index.php")
      .then((response) => response.json())
      .then((responseJson) => (
        console.log(responseJson),
        setData(responseJson.records)
      ));
  }

  useEffect(() => {
    getProdutos();
  }, [])
  return (
    
    <View style={styles.container}>


        <Button
            style={styles.btn}
            title='Cadastro'
            onPress={() => navigation.navigate('Cadastro')}
        />

      <Text style={styles.txt}>Estoque de Produtos</Text>
      <StatusBar style="auto" />

      <ScrollView style={styles.lista}>
        {Object.values(data).map(produto => (
          <View style={styles.viewLista}>
            
              <Text style={styles.txtLista}>{produto.id}</Text>
              <Text style={styles.txtLista}>Item: <Text style={styles.txtListaValor}>{produto.item}</Text></Text>
              <Text style={styles.txtLista}>Código: <Text style={styles.txtListaValor}>{produto.codigo}</Text></Text>
              <Text style={styles.txtLista}>Estoque: <Text style={styles.txtListaValor}>{produto.estoque}</Text></Text>
              <Text style={styles.txtLista}>Custo: <Text style={styles.txtListaValor}>R$ {produto.custo}</Text></Text>
              <Text style={styles.txtLista}>Valor: <Text style={styles.txtListaValor}>R$ {produto.valor}</Text></Text>

          </View>
        ))}

      </ScrollView>
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
    marginBottom:'20px',
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
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 0

  },

  btn: 
    {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#00467A',
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },

});
