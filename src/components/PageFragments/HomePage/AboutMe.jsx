import React from 'react';
import { domHtml, stripTags } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne:
    'I am Nguyễn Hồng Tín, a backend developer with 2+ years of experience building reliable and scalable APIs for web applications using Python and FastAPI.',
  paraTwo: 'I have hands-on experience delivering product features, optimizing performance, and integrating third-party services. I also build AI-integrated systems with LLMs and LangChain for practical business use cases.',
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <div style={{ lineHeight: '180%' }}>
      <div>
        <SEO
          title="Nguyễn Hồng Tín | Backend Developer & AI Engineer"
          description={description}
          path="/"
          keywords={[
            'Nguyễn Hồng Tín',
            'Nguyen Hong Tin',
            'Backend developer',
            'FastAPI',
            'Python',
            'LangChain',
            'LLM',
            'RAG',
            'AI Engineer',
          ]}
        />
        <h1 className="titleSeparate">Nguyễn Hồng Tín</h1>
        <p style={{ fontSize: '1.2rem', fontWeight: '500', color: '#555', marginBottom: '20px' }}>
          Backend Developer & AI Engineer specializing in Python & FastAPI
        </p>
        <p>{pageText.paraOne}</p>
        {/* eslint-disable-next-line react/no-danger */}
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
    </div>
  );
};
export default AboutMe;
