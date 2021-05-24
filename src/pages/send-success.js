import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const SendSuccess = () => {
    return (
        <Layout>
            <Helmet>
                <title>Form submitted</title>
            </Helmet>
            <div
                style={{
                    textAlign: 'center',
                    padding: '5vh 0',
                    lineHeight: '1.5',
                }}
            >
                <div className="headline">
                    Message sent!{' '}
                    <span role="img" aria-label="mailbox with letter inside">
                        📬
                    </span>
                </div>
                <p>Thanks for getting in touch with me!</p>
                <Link to="/" className="button -primary">
                    Return to homepage
                </Link>
            </div>
        </Layout>
    );
};

export default SendSuccess;
