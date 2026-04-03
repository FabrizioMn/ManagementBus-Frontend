import { Routes, Route } from "react-router-dom";
import BusList from "./pages/BusList";
import NavBar from "./components/NavBar";
import BusForm from "./pages/BusForm";
import BusCardDetails from "./pages/BusCardDetails";

function App() {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 ">
        <Routes>
          <Route path="/" element={<BusList />} />
          <Route path="/formulario" element={<BusForm />} />
          <Route path="/bus/:id" element={<BusCardDetails />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
