import { useParams } from "react-router";
import { useCategory } from "../api/compendium";
import EntryLink from "../components/EntryLink";

export default function Category() {
    const { category } = useParams();
    const { data: entries, error, isLoading } = useCategory(category);

    if (error) {
        return <p>{error.message}</p>;
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

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
