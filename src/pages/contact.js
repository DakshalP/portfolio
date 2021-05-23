import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const ContactPage = ({ data: { site } }) => {
    return (
        <Layout>
            <Helmet>
                <title>Contact — {site.siteMetadata.title}</title>
                <meta
                    name="description"
                    content={'Contact page of ' + site.siteMetadata.description}
                />
            </Helmet>
            <div className="two-grids -contact">
                <div
                    className="post-thumbnail"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1601436155198-2ebfea8117b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')`,
                        marginBottom: 0,
                    }}
                >
                    <h1 className="post-title">Get in Touch</h1>
                    <p>You can use this form to get in touch with me!</p>
                </div>
                <div>
                    <form className="form-container" method="post" netlify>
                        <div>
                            <label htmlFor="Name">Name</label>
                            <input
                                required
                                type="text"
                                name="name"
                                id="w3lName"
                            />
                        </div>
                        <div>
                            <label htmlFor="Sender">Email</label>
                            <input
                                required
                                type="email"
                                name="name"
                                id="w3lSender"
                            />
                        </div>
                        <div>
                            <label htmlFor="Message">Message</label>
                            <textarea
                                required
                                name="message"
                                id="w3lMessage"
                            ></textarea>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <input
                                type="submit"
                                className="button -primary"
                                style={{ marginRight: 0 }}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};
export default ContactPage;
export const pageQuery = graphql`
    query ContactPageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;
