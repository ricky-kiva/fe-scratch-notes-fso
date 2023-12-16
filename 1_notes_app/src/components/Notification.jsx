const Notification = ({ message }) => {
    if (message === null) ( null )

    return (
        <div className="error">
            {message}
        </div>
    )
}

export default Notification