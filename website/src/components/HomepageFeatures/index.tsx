import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

 
type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'EASY TO USE',
    Svg:require('@site/static/img/robot-brain.svg').default,
    description: (
      <>
        This comprehensive textbook was designed from the ground up to be easily 
        understood and applied. Start building intelligent physical systems with 
        clear, step-by-step guidance and hands-on examples.
      </>
    ),
  },
  {
    title: 'FOCUS ON WHAT MATTERS',
    Svg: require('@site/static/img/humanoid-robot.svg').default,
    description: (
      <>
        Learn the core concepts of Physical AI and Humanoid Robotics. 
        We cover everything from neural networks to vision-language-action models, 
        so you can focus on building the future of intelligent machines.
      </>
    ),
  },
  {
    title: 'PRODUCTION READY',
    Svg: require('@site/static/img/vision-ai.svg').default,
    description: (
      <>
        Built with modern tools and frameworks used in industry. Learn to create 
        AI systems that are not just prototypes, but production-ready solutions 
        for real-world robotics applications.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIconWrapper}>
          <div className={styles.iconGlow}></div>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
        {/* Tech corners */}
        <div className={styles.cornerTopLeft}></div>
        <div className={styles.cornerBottomRight}></div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            CORE FEATURES
          </Heading>
          <div className={styles.titleUnderline}></div>
          <p className={styles.sectionSubtitle}>
            Master the fundamentals of building intelligent physical AI systems
          </p>
        </div>
        
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}