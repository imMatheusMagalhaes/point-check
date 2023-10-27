import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';
import { AuthProvider } from './src/contexts/auth';
import { LoaderProvider } from './src/contexts/loader';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <LoaderProvider>
          <Router />
        </LoaderProvider>
      </AuthProvider>
    </NavigationContainer>

  );
}
