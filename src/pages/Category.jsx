import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCategory } from "../api/compendium";
import EntryLink from "../components/EntryLink";

export default function Category() {
    const { category } = useParams();
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        getCategory(category).then((data) => {
            setEntries(data);
        });
    }, [category]);

    return (
        <ul>
            {entries.map(({ id, name, image }) => (
                <li key={id}>
                    <EntryLink id={id} name={name} image={image} />
                </li>
            ))}
        </ul>
    );
}
