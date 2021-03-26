import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import Button from '@material-ui/core/Button';

import { useShowAppDialog } from '../../app/AppDialogServiceProvider';
import DeployServiceDialog from '../../components/Dialogs/DeployContainerDialog';
import ServicesContainer from './ServicesContainer';
import GlobalStateContainer from '../../app/store';

import { servicesApi } from '../../services/contaxy-api';
import { useServices } from '../../services/api-hooks';
import showStandardSnackbar from '../../app/showStandardSnackbar';

// const getServiceUrl = (service) => {
//   // TODO: return url under which the service is reachable
//   return service;
// };

const onShowServiceMetadata = async (projectId, serviceId) => {
  // TODO: do something with the service metadata
  const serviceMetadata = await servicesApi.getServiceMetadata(
    projectId,
    serviceId
  );
  console.log(serviceMetadata);
};

const onShowServiceLogs = async (projectId, serviceId) => {
  // TODO: do something with the logs
  const logs = servicesApi.getServiceLogs(projectId, serviceId);
  console.log(logs);
};
function Services(props) {
  const { t } = useTranslation();
  const { activeProject } = GlobalStateContainer.useContainer();
  const showAppDialog = useShowAppDialog();
  const [services, reloadServices] = useServices(activeProject.id);
  const { className } = props;

  const onServiceDeploy = () => {
    showAppDialog(DeployServiceDialog, {
      onDeploy: async (
        { containerImage, deploymentName, deploymentParameters },
        onClose
      ) => {
        const serviceInput = {
          container_image: containerImage,
          display_name: deploymentName,
          parameters: deploymentParameters,
        };
        try {
          await servicesApi.deployService(activeProject.id, serviceInput);
          showStandardSnackbar(`Deployed service '${deploymentName}'`);
          onClose();
        } catch (err) {
          showStandardSnackbar(`Could not deploy service '${deploymentName}'`);
        }
      },
    });
  };

  const onServiceDelete = async (projectId, serviceId) => {
    try {
      await servicesApi.deleteService(projectId, serviceId);
      showStandardSnackbar(`Deleted service '${serviceId}'`);
      reloadServices();
    } catch (err) {
      showStandardSnackbar(`Could not delete service '${serviceId}'`);
    }
  };

  return (
    <div className="pages-native-component">
      <Button
        variant="contained"
        color="primary"
        onClick={onServiceDeploy}
        className={`${className} button`}
      >
        {`${t('add')} ${t('service')}`}
      </Button>
      <ServicesContainer
        data={services}
        onReload={reloadServices}
        onServiceDelete={(rowData) =>
          onServiceDelete(activeProject.id, rowData.id)
        }
        onShowServiceLogs={(rowData) =>
          onShowServiceLogs(activeProject.id, rowData.id)
        }
        onShowServiceMetadata={(rowData) =>
          onShowServiceMetadata(activeProject.id, rowData.id)
        }
      />
    </div>
  );
}

Services.propTypes = {
  className: PropTypes.string,
};

Services.defaultProps = {
  className: '',
};

const StyledServices = styled(Services)`
  &.button {
    margin: 8px 0px;
  }
`;

export default StyledServices;
