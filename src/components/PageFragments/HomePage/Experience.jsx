import React from 'react';
import { Col, Row } from 'antd';

const Experience = () => (
  <div style={{ lineHeight: '180%' }}>
    <div>
      <h2 className="titleSeparate">Work Experience</h2>
      <p style={{ marginBottom: '1em' }}>
        <Row>
          <Col xs={24}>
            <h3 style={{ marginBottom: '0.3em' }}>PDH INFORMATION TECHNOLOGY LTD</h3>
            <span><strong>Backend Developer (focus chatbot)</strong> | April 2025 - Present</span>
          </Col>
        </Row>
        <li style={{ marginLeft: '1rem' }}>Collaborated with the frontend team to design and integrate a real-time chatbot interface, reducing development time by 20% and ensuring smooth interaction between backend services and the web platform.</li>
        <li style={{ marginLeft: '1rem' }}>Designed and implemented an intelligent chatbot solution utilizing LLMs through LangChain, incorporating Retrieval-Augmented Generation (RAG) to deliver personalized, real-time consultation services for a healthcare clinic in Ho Chi Minh City, handling over 1,500+ patient inquiries during pilot testing.</li>
        <li style={{ marginLeft: '1rem' }}>Processed and integrated both structured and unstructured internal data (e.g., service FAQs, schedules) into the RAG-based AI system, achieving approximately 90% response relevance based on internal validation.</li>
        <li style={{ marginLeft: '1rem' }}>Built backend services using FastAPI, enabling real-time data processing and prompt routing.</li>
        <li style={{ marginLeft: '1rem' }}>Integrated the chatbot into the clinic's CodeIgniter-based web platform.</li>
        <li style={{ marginLeft: '1rem' }}><strong>Technology:</strong> LangChain, RAG, Python, FastAPI, CodeIgniter, RESTful API, Docker, MySQL</li>
      </p>

      <p style={{ marginBottom: '1em' }}>
        <Row>
          <Col xs={24}>
            <h3 style={{ marginBottom: '0.3em' }}>ADHIGHTECH</h3>
            <span><strong>Fullstack Developer (focus backend)</strong> - BRANDSMETRIC.COM | August 2024 - December 2024</span>
          </Col>
        </Row>
        <li style={{ marginLeft: '1rem' }}>Collaborated with a cross-functional team including a mentor and technical contributors to develop an automated data collection system using Python, Selenium, and BeautifulSoup, processing over 100,000 product reviews from Amazon and integrating CAPTCHA solving with pydub and EasyOCR.</li>
        <li style={{ marginLeft: '1rem' }}>Contributed to the design and implementation of NLP pipelines leveraging PhoBERT for sentiment classification and LangChain-powered LLMs for keyword extraction and summarization, achieving over 85% accuracy in analyzing unstructured user feedback.</li>
        <li style={{ marginLeft: '1rem' }}>Co-developed and deployed a modular backend using FastAPI, incorporating RESTful APIs, asynchronous task handling, and LangChain prompt routing, reducing response latency by approximately 30% during batch processing.</li>
        <li style={{ marginLeft: '1rem' }}>Worked with frontend collaborators to deliver a Laravel-based dashboard that visualizes sentiment trends and keyword insights across multiple product categories.</li>
        <li style={{ marginLeft: '1rem' }}>Participated in deployment and production setup using aaPanel, contributing to server configuration, scheduled automation, and secure access management.</li>
        <li style={{ marginLeft: '1rem' }}><strong>Technology:</strong> Python, Selenium, LangChain, FastAPI, PhoBERT, EasyOCR, BeautifulSoup, pydub, Laravel, MySQL, Docker</li>
      </p>

      <p style={{ marginBottom: '1em' }}>
        <Row>
          <Col xs={24}>
            <span><strong>Fullstack Developer (Freelance)</strong> | July 2024 - Present</span>
          </Col>
        </Row>
        <li style={{ marginLeft: '1rem' }}>Developed two supervised machine learning models (classification and regression) using a structured dataset provided by Monash University, focusing on data preprocessing, model selection, and performance evaluation.</li>
        <li style={{ marginLeft: '1rem' }}>Built an end-to-end automation system to collect and monitor e-commerce data, including price fluctuation tracking, leveraging web scraping and scheduling techniques.</li>
        <li style={{ marginLeft: '1rem' }}>Created a question bank generation tool for pilot aptitude tests, sourcing and processing structured content from the Vietjet Air official website, enabling randomized test creation and export.</li>
        <li style={{ marginLeft: '1rem' }}>Currently collaborating with a doctoral researcher in Hanoi to develop a medical diagnostic system that assists physicians in analyzing fetal brain MRI cross-sectional images, aiming to support early anomaly detection and clinical decision-making.</li>
        <li style={{ marginLeft: '1rem' }}><strong>Technology:</strong> Python, scikit-learn, Selenium, BeautifulSoup</li>
      </p>
    </div>
  </div>
);

export default Experience;
