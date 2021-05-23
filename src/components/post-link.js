import React from 'react';
import { Link } from 'gatsby';

const PostLink = ({ post }) => (
    <article className="card ">
        <Link to={post.frontmatter.path}>
            {!!post.frontmatter.thumbnail && (
                <img
                    src={post.frontmatter.thumbnail}
                    alt={post.frontmatter.title + '- Featured Shot'}
                />
            )}
        </Link>
        <header>
            <h2 className="post-title">
                <Link to={post.frontmatter.path} className="post-link">
                    {post.frontmatter.title}
                </Link>
            </h2>
            <div className="post-meta">{post.frontmatter.date}</div>
            <div className="post-tags">
                {(post.frontmatter.tags) ? post.frontmatter.tags.split(',').map((tag) => (
                    <span className="post-tag" key={tag}>
                        {tag}
                    </span>
                )): null}
            </div>
        </header>
    </article>
);
export default PostLink;
