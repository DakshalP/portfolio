import React, { useState } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import HeroHeader from "../components/heroHeader";
import MultiSelect from "react-multi-select-component";

const IndexPage = ({
    data: {
        site,
        allMarkdownRemark: { edges },
    },
}) => {
    const [selectedTags, setSelectedTags] = useState([]);

    const tagOptions = [
        { label: "React", value: "react" },
        { label: "Node JS", value: "nodejs" },
        { label: "MySQL", value: "mysql" },
        { label: "GraphQL", value: "graphql" },
        { label: "SCSS/Sass", value: "scss" },
        { label: "Tailwind CSS", value: "tailwind" },
    ];

    const getPostsByTag = (tagObj) =>
        edges
            .filter((edge) => !!edge.node.frontmatter.tags) //filter by tag
            .filter((edge) =>
                edge.node.frontmatter.tags.includes(tagObj.value)
            );

    const getPostsByTags = (tagObjArr) =>
        edges
            .filter((edge) => !!edge.node.frontmatter.tags)
            .filter((edge) => {
                for (let tag of tagObjArr.map((x) => x.value)) {
                    if (!edge.node.frontmatter.tags.includes(tag)) return false;
                }
                return true;
            });

    const renderPosts = (edges) =>
        edges.map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

    /* Fetch Posts */

    let Posts = null;

    //based on tag
    if (selectedTags.length > 0) {
        let taggedPosts = [];
        // for (let tag of selectedTags)
        //     taggedPosts = taggedPosts.concat(getPostsByTag(tag));
        taggedPosts = taggedPosts.concat(getPostsByTags(selectedTags));
        //remove duplicates from multiple tags
        // taggedPosts = [...new Set(taggedPosts)];

        if (taggedPosts.length > 0)
            Posts = <div className="grids">{renderPosts(taggedPosts)}</div>;
        else
            Posts = (
                <p className="warn-empty">
                    No posts contain this combination of tags. Try selecting
                    different tags above.
                </p>
            );
    } else {
        // no tag selected
        Posts = (
            <>
                <div className="grids">
                    {renderPosts(
                        getPostsByTag({
                            label: "Featured",
                            value: "featured",
                        })
                    )}
                </div>
            </>
        );
    }

    //tag dropdown parameters

    const customValueRenderer = (selected, _options) => {
        return selected.length
            ? selected.map(({ label }) => (
                  <span className="tag-label">{label}</span>
              ))
            : "Filter all...";
    };
    const CustomItemRenderer = ({ checked, option, onClick, disabled }) => (
        <div className={`item-renderer ${disabled && "disabled"}`}>
            <input
                type="checkbox"
                onChange={onClick}
                checked={checked}
                tabIndex={-1}
                disabled={disabled}
                style={{ display: "none" }}
            />
            <span>{option.label}</span>
        </div>
    );
    const Arrow = () => (
        <span id="arrow">{selectedTags.length === 0 ? "▼" : ""}</span>
    );

    return (
        <Layout>
            <Helmet>
                <title>Dakshal's Portfolio</title>
                <meta
                    name="description"
                    content={site.siteMetadata.description}
                />
            </Helmet>
            <HeroHeader />
            <h2 id="projects-header">
                {selectedTags.length > 0 ? "Filtered Projects" : "Projects"}
            </h2>
            <div className="tag-picker">
                <MultiSelect
                    options={tagOptions}
                    value={selectedTags}
                    onChange={setSelectedTags}
                    labelledBy="Select tags"
                    disableSearch
                    //disabled select all for now
                    hasSelectAll={false}
                    // overrideStrings={{
                    //     allItemsAreSelected: 'All projects.',
                    //     selectAll: 'All',
                    // }}

                    ClearSelectedIcon={<i id="clear">✖</i>}
                    ArrowRenderer={Arrow}
                    ItemRenderer={CustomItemRenderer}
                    valueRenderer={customValueRenderer}
                />
            </div>
            {Posts}
            {/* //TODO: Add about section */}
            {/* <h2 id="about-header">About</h2>
            <div className="grids">
                <img
                    class="card"
                    src="/assets/me.png"
                    alt="Dakshal as a drawing"
                />
                <div class="card long">
                    <h1>Hi!</h1>
                </div>
            </div> */}
            {/* //TODO: Add return to top floating button */}
            {/* <Link to="/" id="return-to-top"></Link> */}
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
                        description
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
