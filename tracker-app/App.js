import React, { useState } from 'react';
import { AuthProvider } from './app/features/auth/AuthContext';
// import AppLoading from 'expo-app-loading';
// import * as Font from 'expo-font';
import AppNavigation from './app/navigation/AppNavigation';

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./app/assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./app/assets/fonts/OpenSans-Bold.ttf'),
//   });
// };

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  // if (!fontLoaded)
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onError={console.warn}
  //       onFinish={() => setFontLoaded(true)}
  //     />
  //   );

  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
};

export default App;
