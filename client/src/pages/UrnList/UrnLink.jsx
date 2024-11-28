import { Link } from "react-router-dom"

export default function UrnLink(props) {
   
    return (
        <>
            <Link to={`/urn/${props._id}`}>
                <p>{props.name}</p>
            </Link>
        </>
    )
}