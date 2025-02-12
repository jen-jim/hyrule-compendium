import { NavLink } from "react-router";
import "./Header.css";

const navLinks = [
    { to: "/creatures", label: "Creatures" },
    { to: "/monsters", label: "Monsters" },
    { to: "/materials", label: "Materials" },
    { to: "/equipment", label: "Equipment" },
    { to: "/treasure", label: "Treasure" }
];

export default function Header() {
    return (
        <header>
            <h1>Hyrule Compendium</h1>
            <nav>
                <ul>
                    {navLinks.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink to={to}>{label}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
