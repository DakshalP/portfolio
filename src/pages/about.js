import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
// import {
//     SiJavascript,
//     SiReact,
//     SiSass,
//     SiTailwindcss,
//     SiGraphql,
//     SiHeroku,
//     SiNetlify,
//     SiPython,
//     SiNodedotjs,
//     SiMysql,
//     SiMongodb,
//     SiFirebase,
//     SiGatsby,
//     SiOcaml,
//     SiPandas,
//     SiNumpy,
//     SiR,
//     SiTensorflow,
// } from "react-icons/si";

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
                <div className="about-text">
                    <p>Hi! I'm Dakshal Panicker. Here's a bit about me:</p>
                    <ul>
                        <li>
                            I'm a full stack developer with experience in using{" "}
                            <strong>Javascript</strong> on the frontend and
                            backend. You can see some of my projects on the{" "}
                            <Link to="/">homepage</Link>.
                        </li>
                        <li>
                            I'm a student at{" "}
                            <strong>Rutgers University New Brunswick</strong>.
                        </li>
                        <li>
                            I'm majoring in <strong>Computer Science</strong>{" "}
                            and minoring in <strong>Data Science</strong>.
                        </li>
                        <li>
                            My hobbies include hiking, reading, and applying my
                            coding skill to small hardware projects using
                            Arduino.
                            <br />
                            <br />I also like nature photography. You can see
                            some of the photos I took below.
                        </li>
                    </ul>
                </div>
                {/* <br />
                <br />
                <br />
                <h2>Frontend</h2>
                <div className="icons">
                    <SiJavascript />
                    <SiReact />
                    <SiSass />
                    <SiTailwindcss />
                    <SiGraphql />
                    <SiGatsby />
                </div>
                <h2>Backend</h2>
                <div className="icons">
                    <SiNodedotjs />
                    <SiMysql />
                    <SiMongodb />
                    <SiFirebase />
                    <SiNetlify />
                    <SiHeroku />
                    <SiOcaml />
                </div>
                <h2>Data Science</h2>
                <div className="icons">
                    <SiPython />
                    <SiPandas />
                    <SiNumpy />
                    <SiR />
                </div> */}
            </div>
            <div className="image-container">
                <h2>My Photography</h2>
                <ul className="gallery">
                    <li>
                        <img src="/assets/nature_photos/1.jpg" alt="" />
                        <div class="overlay">
                            <span>Image title</span>
                        </div>
                    </li>
                    <li>
                        <img src="/assets/nature_photos/2.jpg" alt="" />
                        <div class="overlay">
                            <span>Image title</span>
                        </div>
                    </li>
                    <li>
                        <img src="/assets/nature_photos/3.jpg" alt="" />
                        <div class="overlay">
                            <span>Image title</span>
                        </div>
                    </li>
                    <li>
                        <img src="/assets/nature_photos/4.jpeg" alt="" />
                        <div class="overlay">
                            <span>Image title</span>
                        </div>
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
