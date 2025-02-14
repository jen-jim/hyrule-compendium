import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getEntry } from "../api/compendium";

export default function Entry() {
    const { id } = useParams();
    const [entry, setEntry] = useState(null);

    useEffect(() => {
        getEntry(id).then((data) => {
            setEntry(data);
        });
    }, [id]);

    if (!entry) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{entry.name}</h2>
            <img src={entry.image} alt={entry.name} />
            <p>{entry.description}</p>
        </div>
    );
}
