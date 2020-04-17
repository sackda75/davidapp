import React, { useState } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, ImageBackground, TextInput, Image } from 'react-native'
import PassMeter from 'react-native-passmeter'

const MAX_LEN = 15, MIN_LEN = 6, PASS_LABELS = ["Trop court", "Faible", "Normal", "Fort", "Sécurité maximale"]

function LoginScreen({navigation}) {

  const [email, setEmail] = useState("")
  console.log(email)

  const [password, setPassword] = useState("")
  console.log(password)

    return (
      <SafeAreaView style={{ flex: 1}}>
        <ImageBackground style={styles.container} source={require('../assets/fond4.png')} >

            <Image 
                style={{width: 150, height: 150, position: 'absolute', top: 1, marginTop: 70}}
                source={require('../assets/logo1.png')}
            />

            <Text style={styles.must}>Se connecter</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Saisir votre email"
                    onChangeText={email => setEmail(email)}
                />

                <TextInput 
                    style={styles.input}
                    maxLength={15}
                    secureTextEntry={true}
                    placeholder="Saisir votre mot de passe"
                    onChangeText={password => setPassword(password)}
                />

                <View style={{margin: 10}}>
                <PassMeter
                    showLabels
                    password={password}
                    maxLength={MAX_LEN}
                    minLength={MIN_LEN}
                    labels={PASS_LABELS}
                />
                </View>

                <TouchableOpacity
                    style={styles.botao}
                    activeOpacity = { 0.75 } // number
                    onPress={() => navigation.navigate('HomeApp')}
                >
                    <Text style={styles.botaoText}>VALIDER</Text>
                </TouchableOpacity>

                <View style={{marginTop: 15, marginEnd: 25, alignSelf: 'flex-end'}}>
                    <Text style={styles.must} onPress={() => navigation.navigate('HomeApp')}>Continuer sans s'inscrire</Text>
                </View>

                <View style={{      
                        width: '100%', 
                        height: 50, 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        position: 'absolute',
                        bottom: 10}}>
                    <Text style={styles.vert} onPress={() => navigation.navigate('Register')}>Créer un nouveau compte</Text>
                </View>
        </ImageBackground>
      </SafeAreaView>
    )
}

  // backgroundColor: "#ff6347"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 325,
    height: 40,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 8
  },
  botao: {
    width: 325,
    height: 42,
    backgroundColor: "#9400d3",
    marginTop: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white'
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  must: {
    fontSize: 15,
    color: 'white'
  },
  vert: {
    color: 'white',
    fontSize: 15
  }
})

export default LoginScreen
