import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
export default () => (
    <StaticQuery
        query={graphql`
            query HeadingQuery {
                site {
                    siteMetadata {
                        home {
                            title
                            description
                        }
                    }
                }
            }
        `}
        render={(data) => (
            <div className="hero-header">
                <div className="headline">
                Hello! I'm <a href="https://www.linkedin.com/in/dakshalp/" id="name">Dakshal Panicker</a>. Here
                    you can browse some of my{' '}
                    <Link id="projects" to="/#projects-header">projects</Link> or write a {' '}
                    <Link to="/contact" id="contact">message</Link> to me. 
                </div>
                <div
                    className="primary-content"
                    // dangerouslySetInnerHTML={{
                    //     __html: data.site.siteMetadata.home.description,
                    // }}
                />
                <a href="https://www.linkedin.com/in/dakshalp/" className="button -primary"> LinkedIn </a>
                <a href="https://github.com/DakshalP" className="button -primary"> Github </a>

            </div>
        )}
    />
);
