import { useParams } from "react-router";

export default function Entry() {
    const { id } = useParams();
    return id;
}
