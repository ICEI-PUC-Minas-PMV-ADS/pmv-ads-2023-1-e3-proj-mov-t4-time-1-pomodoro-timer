import  { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingTop: 10
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  buttonCadastro: {
    width:'100%',
    height: 40,
    backgroundColor: '#000000',
    borderRadius: 10,
    justifyContent: 'center'
  }
 
});

export default styles