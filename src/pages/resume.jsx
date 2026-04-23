import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';
import SidebarWrapper from '../components/PageLayout/Sidebar';
import SEO from '../components/Seo';

export default function Resume() {
  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <SEO
          title="Resume | Nguyễn Hồng Tín"
          description="Professional resume of Nguyễn Hồng Tín, Backend Developer specializing in Python and FastAPI."
          path="/resume"
        />
        <Header />
        <SidebarWrapper>
          <div className="marginTopTitle">
            <h1 className="titleSeparate">Resume</h1>
          </div>
          <div className="resumeSection">
            <iframe
              title="Resume PDF"
              src="/resume.pdf#navpanes=0"
              width="100%"
              height="900"
              className="resumeViewer"
            />
          </div>
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
}
