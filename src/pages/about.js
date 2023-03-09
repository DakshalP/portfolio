import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = ({ data: { site } }) => (
    <Layout>
        <Helmet>
            <title>About Me</title>
            <meta
                name="description"
                content={"About page of " + site.siteMetadata.description}
            />
        </Helmet>
        <div className="two-grids -contact">
            <div className="page-header">About</div>
            <p>
                Hi! I'm Dakshal Panicker, a student at Rutgers University New
                Brunswick. I'm also a Fullstack Software Engineer. You can check
                out some of my work on the <Link to="/">homepage</Link>.
            </p>
        </div>
    </Layout>
);
export default AboutPage;
export const pageQuery = graphql`
    query AboutPageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;
