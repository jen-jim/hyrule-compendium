import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Category from "./pages/Category";
import Entry from "./pages/Entry";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/creatures" replace />}
                />
                <Route path="/:category" element={<Category />} />
                <Route path="/entry/:id" element={<Entry />} />
            </Routes>
        </>
    );
}

export default App;
