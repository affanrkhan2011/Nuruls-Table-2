/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerApp from './pages/CustomerApp';
import StaffDashboard from './pages/StaffDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerApp />} />
        <Route path="/staff56789" element={<StaffDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
