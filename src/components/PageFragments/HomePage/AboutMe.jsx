import React from 'react';
import { domHtml, stripTags } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne:
    'I am Nguyễn Hồng Tín, a Backend Developer & AI Engineer dedicated to building robust server-side architectures and intelligent systems. I specialize in engineering high-performance backend platforms and integrating advanced artificial intelligence to solve real-world business challenges.',
  paraTwo: 'With a strong focus on system reliability and scalability, I deliver robust APIs and optimize backend operations. I am driven by continuous learning, always exploring emerging technologies to bring modern, efficient, and innovative solutions to life.',
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
