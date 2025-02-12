import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Category from "./pages/Category";
import Entry from "./pages/Entry";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/creatures" replace />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/entry/:id" element={<Entry />} />
        </Routes>
    );
}

export default App;
