import { NavLink } from "react-router";

export default function EntryLink({ id, name, image }) {
    const entryId = `${id}`.padStart(3, "0");

    return (
        <NavLink className="entryLink" to={`/entry/${entryId}`}>
            <img src={image} alt={name} />
            <div className="name">{name}</div>
            <div className="id">{entryId}</div>
        </NavLink>
    );
}
