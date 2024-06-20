---
title: 'Certified Kubernetes Administration - 1'
subtitle: 'Kubernetes Cluster Architecture'
date: '2024-06-19'
tags: [Kubernetes, Cloud]
---


### Kubernetes 클러스터 아키텍처 개요

1. **고수준 아키텍처 개요**:
   
   - Kubernetes 클러스터는 컨테이너 형태로 애플리케이션을 호스팅하여 자동으로 여러 인스턴스를 배포하고 서비스 간의 통신을 쉽게 할 수 있게 합니다.
   
   - 클러스터는 물리적 또는 가상 노드로 구성되며, 온프레미스 또는 클라우드에서 호스팅될 수 있습니다.

2. **노드 종류**:
   
   - **작업 노드(Worker Nodes)**: 컨테이너를 호스팅하는 역할을 하며, 이들은 화물선에 비유될 수 있습니다.
   
   - **마스터 노드(Master Nodes)**: 작업 노드를 관리하고 모니터링하는 역할을 하며, 이들은 관리선에 비유될 수 있습니다.

3. **마스터 노드 구성 요소**:
   
   - **etcd**: 클러스터 정보(노드, 컨테이너 등)를 저장하는 고가용성 키-값 저장소입니다.
   
   - **스케줄러(Scheduler)**: 컨테이너를 배치할 적절한 노드를 선택합니다.
   
   - **컨트롤러(Controllers)**: 다양한 영역을 관리하는 역할을 합니다.
     
     - **노드 컨트롤러(Node Controller)**: 새로운 노드를 클러스터에 추가하고, 노드가 사용할 수 없게 되면 처리합니다.
     
     - **복제 컨트롤러(Replication Controller)**: 항상 원하는 수의 컨테이너가 실행 중인지 확인합니다.
   
   - **Kube API 서버(Kube API Server)**: 클러스터 내 모든 작업을 조정하는 주요 관리 구성 요소입니다. Kubernetes API를 노출하여 외부 사용자 및 내부 구성 요소들이 클러스터를 관리할 수 있게 합니다.

4. **작업 노드 구성 요소**:
   
   - **Kubelet**: 각 노드에 실행되며, Kube API 서버로부터 지시를 받아 컨테이너를 배포하거나 삭제합니다.
   
   - **Kube 프록시(Kube Proxy)**: 노드 간 통신을 가능하게 하며, 서비스 간의 네트워크 규칙을 관리합니다.

5. **컨테이너 런타임 엔진**:
   
   - 컨테이너를 실행하기 위해 Docker 또는 ContainerD와 같은 런타임 엔진이 필요합니다. 이는 마스터 노드와 작업 노드 모두에 설치되어야 합니다.

6. **통신 및 관리**:
   
   - **Kubelet**: 노드와 컨테이너의 상태를 Kube API 서버에 보고하고, 지시를 받아 작업을 수행합니다.
   
   - **Kube Proxy**: 노드 간의 네트워크 통신을 가능하게 하며, 필요한 네트워크 규칙을 설정합니다.

7. **요약**:
   
   - **마스터 노드**: etcd, 스케줄러, 컨트롤러들, Kube API 서버로 구성되어 있습니다.
   
   - **작업 노드**: Kubelet과 Kube Proxy로 구성되어 있습니다.
   
   - 각 구성 요소는 클러스터의 원활한 운영을 위해 서로 통신하고 협력합니다.