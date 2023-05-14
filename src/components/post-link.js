import React from "react";
import { Link } from "gatsby";
import {
    SiFirebase,
    SiGraphql,
    SiMysql,
    SiNodedotjs,
    SiReact,
    SiSass,
    SiTailwindcss,
} from "react-icons/si";
import { BsDatabaseLock } from "react-icons/bs";

const tagIcons = {
    react: <SiReact />,
    nodejs: <SiNodedotjs />,
    mysql: <SiMysql />,
    graphql: <SiGraphql />,
    firebase: <SiFirebase />,
    scss: <SiSass />,
    tailwind: <SiTailwindcss />,
    idb: <BsDatabaseLock />,
};

const PostLink = ({ post, displayIcons }) => (
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
                <div className={displayIcons ? "post-icons" : "display-none"}>
                    {post.frontmatter.tags
                        .split(",")
                        .map((tag) => tagIcons[tag.trim()])}
                </div>
            </div>
        </div>
    </article>
);
export default PostLink;
