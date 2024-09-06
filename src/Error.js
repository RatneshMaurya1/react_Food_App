import { data } from "browserslist"
import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError()
    console.error(error)
    return (
        <>
        <h1>Opps!</h1>
        <h1>something went wrong</h1>
        <p>
        <h3>{error.status }</h3>
        <h4>{error.data}</h4>
      </p>
        </>
    )
}

export default Error