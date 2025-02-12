import { useParams } from "react-router";

export default function Category() {
    const { category } = useParams();
    return category;
}
