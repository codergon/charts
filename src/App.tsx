
import './App.css';
import Home from './pages/index';
import { QueryClient, QueryClientProvider } from 'react-query'


import stores from "./store/stores";
import { Provider as ReduxProvider } from "react-redux";

const queryClient = new QueryClient();

function App() {
  return (
    <ReduxProvider store={stores}>
      
    <QueryClientProvider client={queryClient}>
        <Home />
     </QueryClientProvider>
     </ReduxProvider>
    
  );
}

export default App;
