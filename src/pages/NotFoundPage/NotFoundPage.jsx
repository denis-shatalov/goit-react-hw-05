import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NotFoundPage() {
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from || '/movies');

    return (
        <div>
            <p>404 - Неіснуюче посилання</p>
            <Link to={backLinkRef.current}>Go back</Link>
        </div>
    );
}
