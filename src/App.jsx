import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import Form from "./Components/Form";
import City from "./Components/City";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Homepage from "./Pages/Homepage";
import AppLayout from "./Pages/AppLayout";
import CityList from "./Components/CityList";
import PageNotFound from "./Pages/PageNotFound";
import ProtectedRoute from "./Pages/ProtectedRoute";
import CountriesList from "./Components/CountriesList";
import { AuthProvider } from "./Contexts/FakeAuthContext";
import { CitiesProvider } from "./Contexts/CitiesContext";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountriesList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
