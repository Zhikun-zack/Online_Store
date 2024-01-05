import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import MasterView from './Views/MasterView.tsx';
import DetailView from './Views/DetailView.tsx';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<MasterView/>}></Route>
            <Route path = "/:productid" element = {<DetailView/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
