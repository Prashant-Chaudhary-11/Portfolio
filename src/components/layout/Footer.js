export const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <>
            <div className="footer text-center p-2 small">
                Copyright &copy; {year} | Created by Prashant Chaudhary
            </div>
        </>
    )
}