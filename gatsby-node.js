const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage, createRedirect } = actions;

    const projectPostTemplate = path.resolve(`src/templates/postTemplate.js`);

    const result = await graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `);

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    createRedirect({
        fromPath: `/resume`,
        toPath: `/assets/resume.pdf`,
    })

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: projectPostTemplate,
            context: {}, // additional data can be passed via context
        });
    });
};
