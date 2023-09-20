import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

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
                <p>This page should redirect you to a PDF copy of my resume. If not, view it on Google Drive with this button:</p>
                <a href="https://drive.google.com/drive/folders/18P6bqMNij-aZldUIwfob87YeUwm_w8GK?usp=sharing" className="button -primary">
                    View my resume
                </a>
            </div>
        </Layout>
    );
};

export default Resume;
