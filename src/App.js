import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';

import Forum from 'src/pages/Forum';
import ClientProvider from 'src/helper/ClientProvider.js';

export default function App() {
  return (
    <QueryClientProvider client={ClientProvider}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Forum />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
