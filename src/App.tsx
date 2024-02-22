import { Routes, Route } from "react-router-dom";

import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignupForm from "@/_auth/forms/SignupForm";
import SigninForm from "@/_auth/forms/SigninForm";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";
import Invoices from "./_root/pages/Invoices";
import Clients from "./_root/pages/Clients";
import Contractors from "./_root/pages/Contractors";
import Users from "./_root/pages/Users";
import AddClient from "./_root/pages/AddClient";
import UserProfile from "./_root/pages/UserProfile";
import Schedule from "./_root/pages/Schedule";
import Assets from "./_root/pages/Assets";
import SubContractors from "./_root/pages/SubContractors";
import Estimates from "./_root/pages/Estimates";
import PurchaseOrders from "./_root/pages/PurchaseOrders";
import Expenses from "./_root/pages/Expenses";
import Documents from "./_root/pages/Documents";
import Requests from "./_root/pages/Requests";
import TimeSheet from "./_root/pages/TimeSheet";
import Reports from "./_root/pages/Reports";
import Hub from "./_root/pages/Hub";
import Projects from "./_root/pages/Projects";
import Home from "./_root/pages/Home";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          {/* iPro Suite Routes */}
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/users" element={<Users />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/contractors" element={<Contractors />} />
          <Route path="/sub-contractors" element={<SubContractors />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/estimates" element={<Estimates />} />
          <Route path="/purchase-orders" element={<PurchaseOrders />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/time-sheet" element={<TimeSheet />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/hub" element={<Hub />} />
          <Route path="/add-client" element={<AddClient />} />
          <Route path="/user-profile/:id" element={<UserProfile />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
