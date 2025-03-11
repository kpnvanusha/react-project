import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <h1>OOps! Something went wrong</h1>
            <div>{error}</div>
        </>
    )
}
export default ErrorPage;