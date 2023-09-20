import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { Link } from 'gatsby';


const Resume = () => {
    return (
        <Layout>
            <Helmet>
                <title>Dakshal Panicker's Resume</title>
            </Helmet>
            <div
                style={{
                    textAlign: 'center',
                    padding: '5vh 0',
                    lineHeight: '1.5',
                }}
            >
                <div className="headline">
                    Dakshal's Resume{' '}
                    <span role="img" aria-label="document page emoji">
                        📄
                    </span>
                </div>
                <p>View and download a PDF copy of my resume using the button below:</p>
                <Link to="/assets/resume.pdf" className="button -primary">
                    View my resume
                </Link>
            </div>
        </Layout>
    );
};

export default Resume;
