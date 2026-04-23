/* Vendor imports */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
/* App imports */
import Config from '../../../config';
import Utils from '../../utils/pageUtils';

const detailsQuery = graphql`
    query DefaultSEOQuery {
        file(name: { eq: "facebook-icon" }) {
            childImageSharp {
                fixed(width: 600) {
                    ...GatsbyImageSharpFixed_noBase64
                }
            }
        }
    }
`;

function SEO({
  title,
  description,
  path,
  lang,
  keywords,
  contentType,
  imageUrl,
  meta,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaKeywords = keywords && keywords.length > 0
          ? {
            name: 'keywords',
            content: keywords.join(', '),
          }
          : [];
        const pageUrl = Utils.resolvePageUrl(
          Config.siteUrl,
          Config.pathPrefix,
          path,
        );
        const profileImageUrl = `${Config.siteUrl}${Config.profileImage}`;
        const metaImageUrl = path === '/'
          ? profileImageUrl
          : Utils.resolveUrl(
            Config.siteUrl,
            imageUrl || data.file.childImageSharp.fixed.src,
          );

        const personSchema = {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: Config.author,
          alternateName: 'Nguyen Hong Tin',
          url: Config.siteUrl,
          jobTitle: 'Backend Developer',
          gender: 'Male',
          nationality: {
            '@type': 'Country',
            name: 'Vietnam',
          },
          image: profileImageUrl,
          sameAs: [
            Config.social.github,
            Config.social.linkedin,
            Config.social.facebook,
          ].filter(Boolean),
          description: description || Config.siteDescription,
          knowsAbout: ['Python', 'FastAPI', 'LangChain', 'LLM', 'RAG', 'Backend Development', 'AI Engineering'],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Ho Chi Minh City',
            addressCountry: 'VN',
          },
        };

        const websiteSchema = {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: Config.siteTitle,
          url: Config.siteUrl,
          description: Config.siteDescription,
          author: {
            '@type': 'Person',
            name: Config.author,
            url: Config.siteUrl,
          },
        };

        const contactSchema = {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: `Contact ${Config.author}`,
          url: `${Config.siteUrl}/contact`,
          description: `Contact ${Config.author} for backend development and AI engineering opportunities.`,
          image: profileImageUrl,
          author: {
            '@type': 'Person',
            name: Config.author,
            url: Config.siteUrl,
          },
        };

        const resumeSchema = {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `Resume - ${Config.author}`,
          url: `${Config.siteUrl}/resume`,
          description: `Professional resume of ${Config.author}, Backend Developer specializing in Python, FastAPI and AI engineering.`,
          image: profileImageUrl,
          author: {
            '@type': 'Person',
            name: Config.author,
            url: Config.siteUrl,
          },
        };

        const schema = [];
        if (path === '/') {
          schema.push(personSchema);
          schema.push(websiteSchema);
        } else if (path === '/contact') {
          schema.push(contactSchema);
        } else if (path === '/resume') {
          schema.push(resumeSchema);
        }

        return (
          <Helmet
            htmlAttributes={{
              lang: lang || 'vi',
            }}
            title={title} // Page title
            titleTemplate={path === '/' ? '%s' : `%s | ${Config.siteTitle}`}
            meta={
              [
                {
                  name: 'description',
                  content: description,
                }, // Page description
                {
                  name: 'author',
                  content: Config.author,
                },
                {
                  name: 'robots',
                  content: 'index, follow',
                },
                {
                  name: 'google-site-verification',
                  content: Config.googleSiteVerification,
                },
                /* Open Graph */
                {
                  property: 'og:title',
                  content: title,
                },
                {
                  property: 'og:type',
                  content: contentType || 'website',
                },
                {
                  property: 'og:url',
                  content: pageUrl,
                },
                {
                  property: 'og:description',
                  content: description,
                },
                {
                  property: 'og:image',
                  content: metaImageUrl,
                },
                {
                  property: 'og:image:alt',
                  content: description,
                },
                {
                  property: 'og:image:width',
                  content: '1200',
                },
                {
                  property: 'og:image:height',
                  content: '630',
                },
                {
                  property: 'og:site_name',
                  content: Config.siteTitle,
                },
                {
                  property: 'og:locale',
                  content: lang || 'vi_VN',
                },
                /* Twitter card */
                {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                },
                {
                  name: 'twitter:title',
                  content: title,
                },
                {
                  name: 'twitter:description',
                  content: description,
                },
                {
                  name: 'twitter:image',
                  content: metaImageUrl,
                },
                {
                  name: 'twitter:image:alt',
                  content: description,
                },
                {
                  name: 'twitter:site',
                  content: Config.author,
                },
                {
                  name: 'twitter:creator',
                  content: Config.author,
                },
              ]
                .concat(metaKeywords) // Keywords
                .concat(meta || []) // Other provided metadata
            }
            link={[
              {
                rel: 'canonical',
                href: pageUrl,
              }, // Canonical url
            ]}
          >
            {schema.length > 0 && (
              <script type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            )}
          </Helmet>
        );
      }}
    />
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  lang: PropTypes.string,
  contentType: PropTypes.oneOf(['article', 'website']),
  imageUrl: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      property: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

SEO.defaultProps = {
  lang: 'vi',
  contentType: 'website',
  imageUrl: null,
  keywords: [],
  meta: [],
};

export default SEO;
