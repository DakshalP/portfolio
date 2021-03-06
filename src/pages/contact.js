import React from 'react';
import Helmet from 'react-helmet';
import { navigate, graphql } from 'gatsby';
import Layout from '../components/layout';

const ContactPage = ({ data: { site } }) => {
    function encode(data) {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(data[key])
            )
            .join('&');
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const inputs = event.target.elements;

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': event.target.getAttribute('name'),
                name: inputs['name'].value,
                email: inputs['email'].value,
                message: inputs['message'].value,
            }),
        })
            .then(() => navigate('/send-success'))
            .catch((error) => alert(error));
    };

    return (
        <Layout>
            <Helmet>
                <title>Contact Me</title>
                <meta
                    name="description"
                    content={'Contact page of ' + site.siteMetadata.description}
                />
            </Helmet>
            <div className="two-grids -contact">
                <div className="contact-header">
                    <img src="/assets/mail.svg" alt="" />
                </div>
                <div>
                    <form
                        name="contact"
                        className="form-container"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <p style={{ position: 'absolute', opacity: '0%' }}>
                            <label>
                                Don???t fill this out if you???re human (bot
                                prevention field): <input name="bot-field" />
                            </label>
                        </p>
                        <div>
                            <label htmlFor="Name">Name</label>
                            <input required type="text" name="name" />
                        </div>
                        <div>
                            <label htmlFor="Sender">Email</label>
                            <input required type="email" name="email" />
                        </div>
                        <div>
                            <label htmlFor="Message">Message</label>
                            <textarea required name="message"></textarea>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <button
                                type="submit"
                                className="button -secondary"
                                style={{
                                    marginRight: 0,
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                Send
                            </button>
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
