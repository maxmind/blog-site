import React from 'react';

import FaCheckCircle from '../assets/svgs/react-icons/FaCheckCircle.svg';
// eslint-disable-next-line max-len
import FaExclamationTriangle from '../assets/svgs/react-icons/FaExclamationTriangle.svg';
import FaShieldAlt from '../assets/svgs/react-icons/FaShieldAlt.svg';

import * as styles from './SystemsStatusIcons.module.scss';

export const OperationalIcon: React.FC = () => (
  <FaCheckCircle
    className={styles.operational}
  />
);

export const DegradedPerformanceIcon: React.FC = () => (
  <FaExclamationTriangle
    className={styles.degradedPerformance}
  />
);


export const PartialServiceDisruptionIcon: React.FC = () => (
  <FaExclamationTriangle
    className={styles.partialServiceDisruption}
  />
);

export const PlannedMaintenanceIcon: React.FC = () => (
  <FaExclamationTriangle
    className={styles.plannedMaintenance}
  />
);

export const ServiceDisruptionIcon: React.FC = () => (
  <FaExclamationTriangle
    className={styles.serviceDisruption}
  />
);

export const SecurityEventIcon: React.FC = () => (
  <FaShieldAlt
    className={styles.securityEvent}
  />
);
