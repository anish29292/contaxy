<!-- markdownlint-disable -->

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L0"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

# <kbd>module</kbd> `contaxy.managers.deployment.docker`






---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L25"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>class</kbd> `DockerDeploymentPlatform`




<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L28"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `__init__`

```python
__init__() → None
```

Initializes the docker deployment manager. 




---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L177"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `delete_job`

```python
delete_job(project_id: str, job_id: str) → None
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L186"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `delete_jobs`

```python
delete_jobs(project_id: str) → None
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L100"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `delete_service`

```python
delete_service(
    project_id: str,
    service_id: str,
    delete_volumes: bool = False
) → None
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L110"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `delete_services`

```python
delete_services(project_id: str) → None
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L137"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `deploy_job`

```python
deploy_job(
    project_id: str,
    job: Job,
    action_id: Optional[str] = None,
    wait: bool = False
) → Job
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L55"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `deploy_service`

```python
deploy_service(
    project_id: str,
    service: Service,
    action_id: Optional[str] = None,
    wait: bool = False
) → Service
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L233"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `execute_job_action`

```python
execute_job_action(project_id: str, job_id: str, action_id: str) → Any
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L222"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `execute_service_action`

```python
execute_service_action(project_id: str, service_id: str, action_id: str) → Any
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L196"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `get_job_logs`

```python
get_job_logs(
    project_id: str,
    job_id: str,
    lines: Optional[int] = None,
    since: Optional[datetime] = None
) → str
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L167"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `get_job_metadata`

```python
get_job_metadata(project_id: str, job_id: str) → Job
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L118"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `get_service_logs`

```python
get_service_logs(
    project_id: str,
    service_id: str,
    lines: Optional[int] = None,
    since: Optional[datetime] = None
) → str
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L84"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `get_service_metadata`

```python
get_service_metadata(project_id: str, service_id: str) → Service
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L160"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `list_deploy_job_actions`

```python
list_deploy_job_actions(project_id: str, job: JobInput) → List[ResourceAction]
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L79"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `list_deploy_service_actions`

```python
list_deploy_service_actions(
    project_id: str,
    service: ServiceInput
) → List[ResourceAction]
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L230"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `list_job_actions`

```python
list_job_actions(project_id: str, job_id: str) → List[ResourceAction]
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L131"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `list_jobs`

```python
list_jobs(project_id: str) → List[Job]
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L217"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `list_service_actions`

```python
list_service_actions(project_id: str, service_id: str) → List[ResourceAction]
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L37"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `list_services`

```python
list_services(
    project_id: str,
    deployment_type: Literal[<SERVICE: 'service'>, <EXTENSION: 'extension'>] = <DeploymentType.SERVICE: 'service'>
) → List[Service]
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L227"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `suggest_job_config`

```python
suggest_job_config(project_id: str, container_image: str) → JobInput
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L212"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `suggest_service_config`

```python
suggest_service_config(project_id: str, container_image: str) → ServiceInput
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L90"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `update_service`

```python
update_service(
    project_id: str,
    service_id: str,
    service: ServiceUpdate
) → Service
```





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/docker.py#L96"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `update_service_access`

```python
update_service_access(project_id: str, service_id: str) → None
```








---

_This file was automatically generated via [lazydocs](https://github.com/ml-tooling/lazydocs)._
