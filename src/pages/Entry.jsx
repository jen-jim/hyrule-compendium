import { useParams } from "react-router";
import { useEntry } from "../api/compendium";

export default function Entry() {
    const { id } = useParams();
    const { data: entry, error, isLoading } = useEntry(id);

    if (error) {
        return <p>{error.message}</p>;
    }

    if (isLoading) {
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
