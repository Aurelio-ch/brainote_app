import { StatusBar } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from  '@expo-google-fonts/poppins'
import { Notes } from '@screens/Notes';

import theme from '@theme/index';

import { ThemeProvider } from 'styled-components';
import { Loading } from '@components/Loading';


export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent 
      />
      { fontsLoaded ? <Notes /> : <Loading /> }
    </ThemeProvider>
  );


}
