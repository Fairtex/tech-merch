exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        portfolio: allStrapiPortfolio {
          edges {
            node {
              strapiId
              slug
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    throw result.errors;
  }

  const portfolios = result.data.portfolio.edges;

  const PortfolioTemplate = require.resolve('./src/templates/portfolio.js');

  portfolios.forEach((item, index) => {
    createPage({
      path: `/${item.node.slug}/`,
      component: PortfolioTemplate,
      context: {
        slug: item.node.slug,
      },
    });
  });
};

module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
  const crypto = require(`crypto`);
  const { createNode, createParentChildLink } = actions

  if (node.internal.type === 'StrapiPortfolio') {

    const newNode = {
      id: createNodeId(`StrapiPortfolioContent-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node.content || ' ',
        type: 'StrapiPortfolioContent',
        mediaType: 'text/markdown',
        contentDigest: crypto
          .createHash('md5')
          .update(node.content || ' ')
          .digest('hex'),
      },
    };
    createNode(newNode);
    createParentChildLink({
      parent: node,
      child: newNode,
    });
  }
};
