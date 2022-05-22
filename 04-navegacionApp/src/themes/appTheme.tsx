import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  botonGrande: {
    height: 100,
    width: 100,
    // borderColor: 'black',
    // borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  botonGrandeTexto: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  avatarContent: {
    flex: 1,
    marginTop: 20,
    // height: '100%',
    // backgroundColor: 'red',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    borderRadius: 100,
    height: 150,
    width: 150,
  },
  menuOption: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },

  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#072d28',
  },

  menuBotton: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    backgroundColor: '#00baba',
    borderRadius: 10,
    alignItems: 'center',
  },

  menuIcon: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginRight: 10,
  },
  settingImagen: {
    width: 250,
    height: 250,
    borderRadius: 100,
    marginTop: 20,
  },
});
