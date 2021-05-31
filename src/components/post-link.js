import React from 'react';
import { Link } from 'gatsby';

const PostLink = ({ post }) => (
    <Link to={post.frontmatter.path}>
        <article className="card ">
            {!!post.frontmatter.thumbnail && (
                <img
                    src={post.frontmatter.thumbnail}
                    alt={post.frontmatter.title + '- Featured Shot'}
                />
            )}

            <header>
                <h2 className="post-title">
                    <Link to={post.frontmatter.path} className="post-link">
                        {post.frontmatter.title}
                    </Link>
                </h2>
                <div className="post-meta">{post.frontmatter.tagline}</div>
                <div className="post-tags">
                    {post.frontmatter.tags
                        ? post.frontmatter.tags.split(',').map((tag) => (
                              <span className="post-tag" key={tag}>
                                  {tag}
                              </span>
                          ))
                        : null}
                </div>
            </header>
        </article>
    </Link>
);
export default PostLink;
