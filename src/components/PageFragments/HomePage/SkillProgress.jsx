import React from 'react';
import { Row, Col } from 'antd';
import style from './skillprogress.module.less';

const SkillsProgress = () => (
  <div>
    <h2 className="titleSeparate">Skills Progress</h2>
    <div className={style.statsContainer}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={12} lg={12}>
          <img
            src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=HongTin2104&theme=default"
            alt="GitHub Stats"
            className={style.statCard}
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <img
            src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=HongTin2104&theme=default"
            alt="Most Commit Language"
            className={style.statCard}
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <img
            src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=HongTin2104&theme=default"
            alt="Repos Per Language"
            className={style.statCard}
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <img
            src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=HongTin2104&theme=default"
            alt="Productive Time"
            className={style.statCard}
          />
        </Col>
        <Col xs={24}>
          <img
            src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=HongTin2104&theme=default"
            alt="Profile Details"
            className={style.statCardFull}
          />
        </Col>
      </Row>
    </div>
  </div>
);

export default SkillsProgress;
