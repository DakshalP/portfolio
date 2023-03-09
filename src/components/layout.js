import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]');
}

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    );
    return (
        <div className="site-wrapper">
            <header className="site-header">
                <div className="site-title">
                    <Link to="/">{data.site.siteMetadata.title}</Link>
                </div>
                <Navigation />
            </header>
            {children}
            <footer className="site-footer">
                <p>
                    &copy; {new Date().getFullYear()} Dakshal Panicker &bull;{" "}
                    <a href="https://github.com/DakshalP"> Github </a>
                </p>
            </footer>
        </div>
    );
};
