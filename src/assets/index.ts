import * as React from 'react';

import GeoIPIcon from './svgs/geoip-icon.svg';
import MinFraudIcon from './svgs/minfraud-icon.svg';
import ApiReferenceIcon from './svgs/react-icons/FaBookOpen.svg';
import WebServiceIcon from './svgs/react-icons/FaCloud.svg';
import IntegrationsIcon from './svgs/react-icons/FaCogs.svg';
import DatabaseIcon from './svgs/react-icons/FaDatabase.svg';
import CsvIcon from './svgs/react-icons/FaFileCsv.svg';
import GeolocateIAddressIcon from './svgs/react-icons/FaMapMarkedAlt.svg';

export const Icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  ApiReferenceIcon,
  CsvIcon,
  DatabaseIcon,
  GeoIPIcon,
  GeolocateIAddressIcon,
  IntegrationsIcon,
  MinFraudIcon,
  WebServiceIcon,
};
