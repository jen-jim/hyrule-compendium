import { useEffect, useState } from "react";
import { useParams } from "react-router";
import EntryLink from "../components/EntryLink";

export default function Category() {
    const { category } = useParams();
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        fetch(
            `https://botw-compendium.herokuapp.com/api/v3/compendium/category/${category}`
        )
            .then((response) => response.json())
            .then(({ data }) => {
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
