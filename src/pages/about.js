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
            <div className="about-section">
                <div className="page-header">About</div>
                <p>Hi! I'm Dakshal Panicker. Here's a bit about me:</p>
                <ul>
                    <li>
                        I'm a full stack developer with experience in using{" "}
                        <strong>Javascript</strong> on the frontend and backend.
                        You can see some examples of my projects on the{" "}
                        <Link to="/">homepage</Link>.
                    </li>
                    <li>
                        I'm a student at{" "}
                        <strong>Rutgers University New Brunswick</strong>.
                    </li>
                    <li>
                        I'm majoring in <strong>Computer Science</strong> and
                        minoring in <strong>Data Science</strong>.
                    </li>
                    <li>
                        My hobbies include hiking, reading, and applying my
                        coding skill to small hardware projects using Arduino.
                    </li>
                </ul>
            </div>
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
