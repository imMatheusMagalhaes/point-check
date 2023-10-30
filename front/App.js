import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';
import { AuthProvider } from './src/contexts/auth';
import { LoaderProvider } from './src/contexts/loader';
import { navigationRef } from './src/router/root';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
        <LoaderProvider>
          <Router />
        </LoaderProvider>
      </AuthProvider>
    </NavigationContainer>

  );
}
