import React from 'react';
import styles from './ServicesSection.module.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ServicesList from './ServicesList/ServicesList';
import ServicesContent from './ServicesContent/ServicesContent';

const ServicesSection = () => (
    <section className={styles.wrapper}>
        <h2 className={styles.title}>Zakres usług</h2>
        <div className={styles.content}>
          <Router>
              <ServicesList />
              <Switch>
                  <Route path="/:id" children={<ServicesContent />} />
              </Switch>
            
          </Router>
        </div>
    </section>
)

export default ServicesSection;