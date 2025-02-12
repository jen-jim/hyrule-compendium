import { NavLink } from "react-router";
import "./Header.css";

const navLinks = [
    { to: "/creatures", label: "Creatures" },
    { to: "/equipment", label: "Equipment" },
    { to: "/materials", label: "Materials" },
    { to: "/monsters", label: "Monsters" },
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
