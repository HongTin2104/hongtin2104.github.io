import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ContactForm from '../../components/PageFragments/ContactForm';
import SEO from '../../components/Seo';

const Contact = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Contact Nguyễn Hồng Tín"
        description="Contact Nguyễn Hồng Tín for backend development, AI engineering, or collaboration opportunities."
        path="/contact"
        keywords={[
          'Nguyễn Hồng Tín',
          'Nguyen Hong Tin',
          'Contact',
          'Backend developer',
          'Python',
          'FastAPI',
          'LangChain',
          'LLM',
          'RAG',
        ]}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Contact Nguyễn Hồng Tín</h1>
        </div>
        <Row gutter={[40, 20]}>
          <Col sm={24} md={24} lg={12}>
            <img
              src="../../contact.png"
              alt="contact"
              className="widthFull contactImgBorder"
            />
          </Col>
          <ContactForm />
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Contact;
