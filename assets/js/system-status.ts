window.addEventListener('DOMContentLoaded', () => {
  const $headerStatus = <HTMLDivElement>(
    document.querySelector('.header-system-status-container')
  );
  const $headerStatusMessage = <HTMLDivElement>(
    document.querySelector('.header__status-message')
  );

  const $operationalIcons = document.querySelectorAll('.operational');
  const $warningIcons = document.querySelectorAll('.degraded-performance');
  const $allSystemStatusIcons = document.querySelectorAll('.status-icon');

  type SystemStatus = {
    icon: NodeList;
    message: string;
    title: string;
  };

  // https://kb.status.io/developers/status-codes/
  const status: Record<number, SystemStatus> = {
    100: {
      icon: $operationalIcons,
      message: '',
      title: 'Operational',
    },
    200: {
      icon: $warningIcons,
      message: 'We are currently undergoing some scheduled maintenance.',
      title: 'Planned Maintenance',
    },
    300: {
      icon: $warningIcons,
      // eslint-disable-next-line max-len
      message:
        'We are currently experiencing degraded performance in some of our web services.',
      title: 'Degraded Performance',
    },
    400: {
      icon: $warningIcons,
      message: 'Some of our web services are temporarily unavailable.',
      title: 'Partial Service Disruption',
    },
    500: {
      icon: $warningIcons,
      message: 'Our web services are temporarily unavailable.',
      title: 'Service Disruption',
    },
    600: {
      icon: $warningIcons,
      // eslint-disable-next-line max-len
      message:
        'We are currently mitigating issues relating to some of our web services.',
      title: 'Security Event',
    },
  };

  const setSystemStatus = ($status: SystemStatus) => {
    $allSystemStatusIcons.forEach(($systemStatusIcon) => {
      if ($systemStatusIcon) {
        $systemStatusIcon.classList.remove('show-status-icon');
      }
    });

    // This should probably be cleaned up, but the
    // operational icon appears on the
    // page only once, whereas the other icons show twice.
    // All are hidden on page load using display: none;.

    if ($status.icon.length > 1) {
      $headerStatus.classList.add('show-header-system-status');
      $headerStatusMessage.innerText = `${$status.title}: ${$status.message}`;
    } else {
      $headerStatus.classList.remove('show-header-system-status');
    }

    $status.icon.forEach((icon) => {
      (icon as Element).classList.add('show-status-icon');
    });
  };

  const getSystemStatus = () =>
    fetch('https://status.maxmind.com/1.0/status/53fcfbb2ac0c957972000235')
      .then((res) => res.json())
      .then((json) => {
        const status_code = json.result.status_overall.status_code;
        if (!(status_code in status)) {
          throw new TypeError('status_code invalid');
        }
        if (json.result.incidents.length != 0) {
          setSystemStatus({
            icon: $warningIcons,
            message: json.result.incidents[0].name,
            title: status[Number(status_code)].title,
          });
          return;
        } else if (json.result.maintenance.active.length != 0) {
          setSystemStatus({
            icon: $warningIcons,
            message: json.result.maintenance.active[0].name,
            title: status[Number(status_code)].title,
          });
          return;
        }
        setSystemStatus(status[Number(status_code)]);
      })
      .catch(() => {
        /**
         * No-op
         *
         * If something goes wrong, we intentionally want to swallow the error
         * and prevent the UI from knowing
         */
      });

  getSystemStatus();

  setInterval(() => {
    getSystemStatus();
  }, 30 * 1000);
});
