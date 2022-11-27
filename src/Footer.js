import React from "react";
const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <>
            <footer>
                <h4>
                copyright © {year}

                </h4>
        </footer>
    </>
    );
}
export default Footer;