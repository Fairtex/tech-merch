import React from 'react';
import { graphql } from 'gatsby';
import Layout from "components/layout";
import SEO from "components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useMediaQuery } from 'react-responsive';
import MarkdownPreview from '@uiw/react-markdown-preview';

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiPortfolio(slug: { eq: $slug }) {
      title
      content
      image {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH 
            quality: 90
            height: 700
            width: 1280
            placeholder: TRACED_SVG
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`;

const PortfolioTemplate = ({ data, location }) => {
  const isMobileOrTablet = useMediaQuery({
    query: '(max-width: 1023px)'
  });
  const article = data.strapiPortfolio;
  const image = getImage(data.strapiPortfolio.image)
  return (
    <Layout>
      <SEO title={article.title} />
        <section className="article">
          <div className="article__img-wrap">
            <GatsbyImage 
              image={image} 
              alt="Фотография работы" 
              layout="fullWidth"
              objectFit="fill"
              style={isMobileOrTablet ? {} : 
                {
                  maxHeight: 750,
                  minHeight: 750,
                }}
            />
          </div>
          <h1 className="article__title">{article.title}</h1>
          <article className="article__content">
            <MarkdownPreview 
              className="article__content-wrap"
              skipHtml 
              allowDangerousHtml 
              source={article.content}
            />
          </article>
        </section>
    </Layout>
  );
};

export default PortfolioTemplate;
