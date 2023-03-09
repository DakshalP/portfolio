import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import { Link } from "gatsby";

const notFound = () => {
    return (
        <Layout>
            <Helmet>
                <title>Page not found</title>
            </Helmet>
            <div
                style={{
                    textAlign: "center",
                    padding: "5vh 0",
                    lineHeight: "1.5",
                }}
            >
                <div className="page-header">404</div>
                <strong>This page doesn't exist.</strong>
                <img src={"/assets/forest.svg"} alt="Forest" />
                <strong>
                    Lost in the forest? Let's get back <Link to="/">home</Link>{" "}
                    safely.
                </strong>
            </div>
        </Layout>
    );
};

export default notFound;
