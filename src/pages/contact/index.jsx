import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ContactForm from '../../components/PageFragments/ContactForm';
import SEO from '../../components/Seo';

const Contact = () => (
  <Layout className="outerPadding full-height-layout">
    <Layout className="container">
      <SEO
        title="Contact"
        description="Hello folks, Nguyễn Hồng Tín here. You can contact me through the contact form on this page.
                    Please feel free to contact me"
        path="/contact"
        keywords={[
          'Nguyen',
          'Hồng Tín',
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
          <h1 className="titleSeparate">Contact</h1>
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
