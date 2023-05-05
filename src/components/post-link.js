import React from "react";
import { Link } from "gatsby";

const PostLink = ({ post }) => (
    <article className="card ">
        <Link to={post.frontmatter.path}>
            {!!post.frontmatter.thumbnail && (
                <div
                    id="featuredImage"
                    style={{
                        backgroundImage: `url(${post.frontmatter.thumbnail})`,
                    }}
                    // src={post.frontmatter.thumbnail}
                    alt={post.frontmatter.title + "- Featured Shot"}
                />
            )}
        </Link>

        <div className="content">
            <div>
                <h3 className="post-title">
                    <Link
                        to={post.frontmatter.path}
                        className="post-link hover underline"
                    >
                        {post.frontmatter.title}
                    </Link>
                </h3>
                <div
                    className="post-description"
                    dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description,
                    }}
                ></div>
            </div>

            {/* <div className="post-tags">
                {post.frontmatter.tags
                    ? post.frontmatter.tags
                          .split(",")
                          .filter((tag) => tag !== "featured")
                          .map((tag) => (
                              <span className="post-tag" key={tag}>
                                  {tag}
                              </span>
                          ))
                    : null}
            </div> */}
        </div>
    </article>
);
export default PostLink;
