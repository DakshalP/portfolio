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
                        I'm a senior <strong>Computer Science</strong> major at Rutgers University, specializing in full-stack <strong>software engineering</strong> and minoring in <strong>Data Science</strong>. 
                        </li>
                        <li>
                            I've cultivated a strong foundation in full-stack programming tools and languages, including <strong>React, JavaScript, Node.js, Python, SQL, and AWS</strong>.
                        </li>
                        <li>
                            I am currently an <strong><a href="https://www.credly.com/badges/1a36aa9e-c18d-4471-bde8-e22e96d1857f/public_url">AWS Certified Cloud Practioner</a></strong>.
                        </li>
                        <li>
                            My hobbies include hiking, reading, and applying my
                            coding skill to hardware projects, usually on an Arduino or Raspberry Pi. 
                            <br />
                            <br />I also like nature photography. You can see
                            some of the photos I took below.
                        </li>
                    </ul>
                    <p>View my projects on the <Link to="/">homepage</Link>.</p>
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
                    {[
                        "niagra_river",
                        "beach_rocks",
                        "sailboat",
                        "beach_sunset",
                        "niagra_falls",
                        "snow",
                        "mushroom",
                        "sand",
                        "rapids",
                        "cliff",
                        "mountain_top",
                    ].map((filename) => (
                        <li>
                            <img
                                key={filename}
                                src={`/assets/nature_photos/${filename}.jpg`}
                                alt={filename}
                            />
                            <div class="overlay">
                                <span>{filename.replace("_", " ")}</span>
                            </div>
                        </li>
                    ))}
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
