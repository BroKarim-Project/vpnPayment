import Subscription from './components/Subscription';
import Payment from './components/Payment';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Subscription />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </Router>
      {/* <Subscription /> */}
    </>
  );
}

export default App;
