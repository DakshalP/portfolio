import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostLink from '../components/post-link';
import HeroHeader from '../components/heroHeader';
import MultiSelect from 'react-multi-select-component';

const IndexPage = ({
    data: {
        site,
        allMarkdownRemark: { edges },
    },
}) => {
    const [selectedTags, setSelectedTags] = useState([
        { label: 'Featured', value: 'featured' },
    ]);

    let Posts = null;
    if (selectedTags.length > 0) {
        Posts = edges
            .filter((edge) => !!edge.node.frontmatter.tags) // You can filter your posts based on some criteri
            .filter((edge) => {
                if (selectedTags.length > 0)
                    for (let obj of selectedTags) {
                        if (edge.node.frontmatter.tags.includes(obj.value))
                            return true;
                    }
                else return true;
                return false;
            })
            .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);
    } else
        Posts = edges.map((edge) => (
            <PostLink key={edge.node.id} post={edge.node} />
        ));

    const tagOptions = [
        { label: 'Featured', value: 'featured' },
        { label: 'React', value: 'react' },
        { label: 'Web', value: 'web' },
        { label: 'Arduino', value: 'arduino' },
    ];

    const customValueRenderer = (selected, _options) => {
        return selected.length
            ? selected.map(({ label }) => (
                  <span className="tag-label">{label}</span>
              ))
            : 'Sort by tags...';
    };
    const CustomItemRenderer = ({ checked, option, onClick, disabled }) => (
        <div className={`item-renderer ${disabled && 'disabled'}`}>
            <input
                type="checkbox"
                onChange={onClick}
                checked={checked}
                tabIndex={-1}
                disabled={disabled}
                style={{ display: 'none' }}
            />
            <span>{option.label}</span>
        </div>
    );
    const Arrow = () => <></>;

    return (
        <Layout>
            <Helmet>
                <title>{site.siteMetadata.title}</title>
                <meta
                    name="description"
                    content={site.siteMetadata.description}
                />
            </Helmet>
            <HeroHeader />
            <h2 id="projects-header">Projects</h2>
            <div className="tag-picker">
                <MultiSelect
                    options={tagOptions}
                    value={selectedTags}
                    onChange={setSelectedTags}
                    labelledBy="Select tags"
                    disableSearch
                    overrideStrings={{
                        allItemsAreSelected: 'All projects.',
                        selectAll: 'All',
                        selectSomeItems: 'Sort by tag...',
                    }}
                    ClearSelectedIcon={<i id="clear">✖</i>}
                    ArrowRenderer={Arrow}
                    ItemRenderer={CustomItemRenderer}
                    valueRenderer={customValueRenderer}
                    hasSelectAll={false}
                />
            </div>

            <div className="grids">{Posts}</div>
        </Layout>
    );
};

export default IndexPage;
export const pageQuery = graphql`
    query indexPageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        tagline
                        path
                        title
                        thumbnail
                        tags
                    }
                }
            }
        }
    }
`;
