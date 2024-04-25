const Footer = () => {
    // in React inline styling, use camelCase for the css attributes 
    const footerStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16
    }

    return (
        <div style={footerStyle}>
            <br />
            <em>Notes app, Department of Nuclear Engineering & Engineering Physics, Gadjah Mada University 2023</em>
        </div>
    )
}

export default Footer