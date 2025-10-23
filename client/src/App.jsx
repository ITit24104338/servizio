import {Route, Routes} from 'react-router-dom';
import {CartProvider} from './Contexts/CartContext';
import AuthProvider from './Contexts/AuthProvider';

import Home from './Pages/Home/Home';
import MainLayout from './layout/MainLayout';

import {Suspense} from 'react';
import DashboardLayout from './layout/DashboardLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';
import Menu from './Pages/Dashboard/Pages/Menu/Menu';
import Orders from './Pages/Dashboard/Pages/Orders/Orders';
import Ingredients from './Pages/Dashboard/Pages/Ingredients/Ingredients';
import Event from './Pages/Dashboard/Pages/Events/Events';
import Customers from './Pages/Dashboard/Pages/Customers/Customers';
import Staff from './Pages/Dashboard/Pages/Staff/Staff';
import Roles from './Pages/Dashboard/Pages/Roles/Roles';
import Login from './Pages/Login/Login';
import EventRequest from './Pages/EventRequest/EventRequest';

// Promotions
import Promotions
  from './Pages/Dashboard/Pages/Promotions/Promotions/Promotions';
import AddPromo from './Pages/Dashboard/Pages/Promotions/Components/AddPromo';
import Tables from './Pages/Dashboard/Pages/Tables/Tables';
import Checkout from './Pages/Checkout/Checkout';
import Successful from './Pages/Successful/Successful';
import EditIngredients
  from './Pages/Dashboard/Pages/Ingredients/EditIngredients';
import AddIngredients from './Pages/Dashboard/Pages/Ingredients/AddIngredients';
import OrderDetails from './Pages/Dashboard/Pages/Orders/OrderDetails';
import EditCustomer from './Pages/Dashboard/Pages/Customers/EditCustomer';
import EditMenu from './Pages/Dashboard/Pages/Menu/EditMenu';
import EditEvent from './Pages/Dashboard/Pages/Events/EditEvent';
import EditStaff from './Pages/Dashboard/Pages/Staff/EditStaff';
import EditPromo from './Pages/Dashboard/Pages/Promotions/Components/EditPromo';
import AddMenu from './Pages/Dashboard/Pages/Menu/AddMenu';
import AddTable from './Pages/Dashboard/Pages/Tables/AddTable';

const App = () => {
  return (
    <Suspense fallback={'Loading ...!'}>
      <Routes>
        {/* Main */}
        <Route
          path="/"
          element={
            <AuthProvider>
              <CartProvider>
                <MainLayout />
              </CartProvider>
            </AuthProvider>
          }
        >
          <Route index element={<Home />} />
          {/* Checkout */}
          <Route path="/checkout" element={<Checkout />} />
          {/* Successful */}
          <Route path="/successful" element={<Successful />} />
          {/* Login */}
          <Route path="/login" element={<Login />} />
          {/* Event Request */}
          <Route path="/event" element={<EventRequest />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Dashboard */}
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders">
            <Route index element={<Orders />} />
            <Route path=":id" element={<OrderDetails />} />
          </Route>
          <Route path="tables">
            <Route index element={<Tables />} />
            <Route path="new" element={<AddTable />} />
          </Route>
          <Route path="menu">
            <Route index element={<Menu />} />
            <Route path="add" element={<AddMenu />} />
            <Route path="edit/:id" element={<EditMenu />} />
          </Route>
          <Route path="ingredients">
            <Route index element={<Ingredients />} />
            <Route path="new" element={<AddIngredients />} />
            <Route path="edit/:id" element={<EditIngredients />} />
          </Route>
          <Route path="events">
            <Route index element={<Event />} />
            <Route path="edit/:id" element={<EditEvent />} />
          </Route>
          <Route path="customers">
            <Route index element={<Customers />} />
            <Route path="edit/:id" element={<EditCustomer />} />
          </Route>
          <Route path="staff">
            <Route index element={<Staff />} />
            <Route path="edit/:id" element={<EditStaff />} />
          </Route>
          <Route path="roles" element={<Roles />} />
          <Route path="promotions">
            <Route index element={<Promotions />} />
            <Route path="new" element={<AddPromo />} />
            <Route path="edit/:id" element={<EditPromo />} />
          </Route>
          <Route
            path="*"
            element={
              <div className="flex justify-center items-center h-screen">
                <h2 className="text-4xl font-bold">Not Found</h2>
              </div>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
