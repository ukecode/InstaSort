import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TextInput, Button, TouchableOpacity, FlatList, StatusBar } from 'react-native';


function DataList({ title }) {
  return (
    <View style={styles.dataview}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}


export default function App() {
  const [name, setName] = useState('');
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Kelviny Henrique',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Caio Carnelos',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Kaio Prates',
    },
  ];

  const handleSort = () => {
    alert("Aqui");
  }

  const handleReset = () => {
    alert("Aqui2");
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.navbar}>
        <Text style={styles.text}>InstaSort</Text>
      </View>

      <View style={{
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <TextInput style={styles.inputText} />

        <View style={styles.viewbutton}>
          <TouchableOpacity style={styles.button} onPress={handleSort}>
            <Text style={styles.textbutton}>Sort</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRed} onPress={handleReset} >
            <Text style={styles.textbutton}>Reset</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          renderItem={({ item }) => <DataList title={item.title} />}
          keyExtractor={item => item.id}
        />
      </View>

    </SafeAreaView>
  );
}



var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  navbar: {
    width: width,
    backgroundColor: '#FC4A1A',
    height: 50,
    paddingBottom: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',

  },
  text: {
    marginLeft: 20,
    color: '#fff',
    fontSize: 20,
  },

  dataview: {
    width: width - 50,
    borderWidth: 1,
    borderColor: '#CCC',
    height: 40,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  inputText: {
    marginTop: 50,
    width: 350,
    height: 50,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 35,
  },

  textbutton: {
    color: '#FFF',
    fontSize: 20,
  },

  viewbutton: {
    width: width,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  button: {
    width: 150,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#02D917',
  },

  buttonRed: {
    width: 150,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5E5E',
  }
});
