window.addEventListener('DOMContentLoaded', () => {
  const $headerStatus = <HTMLDivElement>(
    document.querySelector('.header-system-status-container')
  );
  const $headerStatusMessage = <HTMLDivElement>(
    document.querySelector('.header__status-message')
  );

  const $operationalIcons = document.querySelectorAll('.operational');
  const $degradedPerformanceIcons = document.querySelectorAll(
    '.degraded-performance'
  );
  const $partialServiceDisruptionIcons = document.querySelectorAll(
    '.partial-service-disruption'
  );
  const $plannedMaintenanceIcons = document.querySelectorAll(
    '.planned-maintenance'
  );
  const $serviceDisruptionIcons = document.querySelectorAll(
    '.service-disruption'
  );
  const $securityEventIcons = document.querySelectorAll('.security-event');
  const $allSystemStatusIcons = document.querySelectorAll('.status-icon');

  type SystemStatus = {
    icons: NodeList;
    message: string;
  };

  // https://kb.status.io/developers/status-codes/
  const status: Record<string, SystemStatus> = {
    DEGRADED_PERFORMANCE: {
      icons: $degradedPerformanceIcons,
      message:
        'Degraded Performance - We are currently experiencing ' +
        'degraded performance in some of our web services.',
    },
    OPERATIONAL: {
      icons: $operationalIcons,
      message: '',
    },
    PARTIAL_SERVICE_DISRUPTION: {
      icons: $partialServiceDisruptionIcons,
      message:
        'Partial Service Disruption - Some of our web services ' +
        'are temporarily unavailable.',
    },
    PLANNED_MAINTENANCE: {
      icons: $plannedMaintenanceIcons,
      message:
        'Planned Maintenance - We are currently undergoing some ' +
        'scheduled maintenance.',
    },
    SECURITY_EVENT: {
      icons: $securityEventIcons,
      message:
        'Security Event - We are currently mitigating issues ' +
        'relating to some of our web services.',
    },
    SERVICE_DISRUPTION: {
      icons: $serviceDisruptionIcons,
      message:
        'Service Disruption - Our web services are temporarily ' +
        'unavailable.',
    },
  };

  const setSystemStatus = ($icons: NodeList, message: string) => {
    $allSystemStatusIcons.forEach(($systemStatusIcon) => {
      if ($systemStatusIcon) {
        $systemStatusIcon.classList.remove('show-status-icon');
      }
    });

    // This should probably be cleaned up, but the
    // operational icon appears on the
    // page only once, whereas the other icons show twice.
    // All are hidden on page load using display: none;.

    if ($icons.length > 1) {
      $headerStatus.classList.add('show-header-system-status');
      $headerStatusMessage.innerText = message;
    } else {
      $headerStatus.classList.remove('show-header-system-status');
    }

    $icons.forEach((icon) => {
      (icon as Element).classList.add('show-status-icon');
    });
  };

  const getSystemStatus = () =>
    fetch('https://status.maxmind.com/1.0/status/53fcfbb2ac0c957972000235')
      .then((res) => res.json())
      .then((json) => {
        const systemStatusCode = json.result.status_overall.status_code;
        switch (systemStatusCode) {
          case 100:
            setSystemStatus(
              status.OPERATIONAL.icons,
              status.OPERATIONAL.message
            );
            break;
          case 200:
            setSystemStatus(
              status.PLANNED_MAINTENANCE.icons,
              status.PLANNED_MAINTENANCE.message
            );
            break;
          case 300:
            setSystemStatus(
              status.DEGRADED_PERFORMANCE.icons,
              status.DEGRADED_PERFORMANCE.message
            );
            break;
          case 400:
            setSystemStatus(
              status.PARTIAL_SERVICE_DISRUPTION.icons,
              status.PARTIAL_SERVICE_DISRUPTION.message
            );
            break;
          case 500:
            setSystemStatus(
              status.SERVICE_DISRUPTION.icons,
              status.SERVICE_DISRUPTION.message
            );
            break;
          case 600:
            setSystemStatus(
              status.SECURITY_EVENT.icons,
              status.SECURITY_EVENT.message
            );
            break;
        }
      })
      .catch(() => {
        throw new Error('There was an error retrieving the status.');
      });
  getSystemStatus();

  setInterval(() => {
    getSystemStatus();
  }, 30 * 1000);
});
