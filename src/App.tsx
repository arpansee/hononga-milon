import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ThemePage from "./pages/ThemePage";
import HistoricalEventsPage from "./pages/HistoricalEventsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/theme" element={<ThemePage />} />
        <Route path="/history" element={<HistoricalEventsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
