import React from 'react';
import { graphql } from 'gatsby';
import Layout from "components/layout";
import SEO from "components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { useMediaQuery } from 'react-responsive';
import MarkdownPreview from '@uiw/react-markdown-preview';

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiPortfolio(slug: { eq: $slug }) {
      title
      description
    }
  }
`;

const PortfolioTemplate = ({ data, location }) => {
  const article = data.strapiPortfolio;
  return (
    <Layout isMain>
      <SEO title={article.title} />
      <div className="article-container">
        <section className="article">
          {/* <StaticImage
            src={article.mainImage.id}
            alt="article-image"
            placeholder="tracedSVG"
            layout="fullWidth"
            quality={90}
            style={isMobileOrTablet ? {} : 
              {
                maxHeight: 750,
                minHeight: 750,
              }}
            objectFit="cover"
          /> */}
          <h1 className="article__title">{article.title}</h1>
          {/* <ul className="article__images">
            {article.PortfolioMultipleImages.map((item, index) => (
              <li key={index} className="article__image-wrap">
                <StaticImage
                  src={item.url}
                  alt="article-gallery-image"
                  placeholder="blurred"
                  layout="fullWidth"
                  quality={90}
                  objectFit="fill"
                />
              </li>
            ))}
          </ul> */}
          <article className="article__content">
            <MarkdownPreview 
              className="article__content-wrap"
              skipHtml 
              allowDangerousHtml 
              source={article.description}
            />
          </article>
        </section>
      </div>
    </Layout>
  );
};

export default PortfolioTemplate;
