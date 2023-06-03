import  { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    margin: 30,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingTop: 10
  },
    btn : {
    width:'100%',
    height: 50,
    backgroundColor: '#000000',
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 2,

  },

  btnSair : {
    width:'100%',
    height: 20,
    position: 'absolute',
    top: -20,
    left: -140
  }
 
});

export default styles