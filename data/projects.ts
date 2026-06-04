export interface ProjectMetric {
  label: string
  value: string
}

export interface Project {
  id: string
  title: string
  category: string
  categoryColor: 'blue' | 'emerald' | 'amber' | 'purple' | 'rose' | 'indigo'
  description: string
  longDescription: string
  techStack: string[]
  highlights: string[]
  metrics: ProjectMetric[]
  repoUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 'multi-region-eks-platform',
    title: 'Multi-Region EKS Platform',
    category: 'Cloud & Kubernetes',
    categoryColor: 'blue',
    description:
      'Production-grade multi-region Kubernetes platform on AWS EKS with automated cross-region failover, Istio service mesh, and centralised observability.',
    longDescription:
      'Architected a highly available, multi-region Kubernetes platform across AWS EKS clusters in ap-south-1 and us-east-1. The platform uses Istio service mesh for inter-cluster traffic management, mTLS between all microservices, and automated regional failover using Route53 health checks. Infrastructure is fully managed by Terraform with remote state in S3/DynamoDB. Cluster add-ons (Cluster Autoscaler, AWS Load Balancer Controller, ExternalDNS, Cert-Manager) are deployed via Helm charts managed by ArgoCD, enabling zero-touch, GitOps-driven cluster state management.',
    techStack: ['AWS EKS', 'Kubernetes', 'Terraform', 'Istio', 'ArgoCD', 'Helm', 'Route53', 'Prometheus'],
    highlights: [
      'Achieved 99.99% uptime with automated cross-region failover in under 30 seconds',
      'Reduced infrastructure costs by 35% using Spot Instances with Karpenter autoscaler',
      'Deployed 15+ microservices across two regions with zero-downtime rolling updates',
      'Implemented mTLS via Istio for all service-to-service communication',
    ],
    metrics: [
      { label: 'Uptime', value: '99.99%' },
      { label: 'Cost Reduction', value: '35%' },
      { label: 'Services', value: '15+' },
      { label: 'Failover', value: '<30s' },
    ],
    repoUrl: 'https://github.com/shubhamrajawat',
  },
  {
    id: 'gitops-cicd-pipeline',
    title: 'GitOps CI/CD Pipeline',
    category: 'CI/CD & Automation',
    categoryColor: 'emerald',
    description:
      'End-to-end GitOps delivery pipeline with GitHub Actions, ArgoCD, automated security scanning, and Cosign image signing. Zero-touch deployments from commit to production.',
    longDescription:
      'Built a complete GitOps-based delivery pipeline for a microservices application. GitHub Actions handles CI: build, test, SAST with Trivy, image push to ECR, and Helm chart version bump via automated PR. ArgoCD continuously syncs the cluster state to the Git repository, enabling full audit trails and one-click rollbacks. Deployment gates include automated integration tests, Cosign image signing, and Slack approval workflows for production environments. Every production change is traceable to a pull request approved by two engineers.',
    techStack: ['GitHub Actions', 'ArgoCD', 'Trivy', 'Cosign', 'AWS ECR', 'Helm', 'Kustomize', 'Slack API'],
    highlights: [
      'Reduced deployment time from 45 minutes to under 8 minutes end-to-end',
      'Zero critical CVEs reach production — SAST and container scanning mandatory gate',
      'Full audit trail: every production change linked to a PR with mandatory 2-reviewer approval',
      'Automated rollback triggers on Prometheus SLO breach alerts',
    ],
    metrics: [
      { label: 'Deploy Time', value: '8 min' },
      { label: 'Time Saved', value: '82%' },
      { label: 'CVEs in Prod', value: '0' },
      { label: 'Daily Deploys', value: '25+' },
    ],
    repoUrl: 'https://github.com/shubhamrajawat',
  },
  {
    id: 'observability-platform',
    title: 'Full-Stack Observability Platform',
    category: 'Monitoring & SRE',
    categoryColor: 'amber',
    description:
      'Centralised metrics, logs, and distributed traces stack. Custom SLO dashboards, automated incident response, and 13-month data retention via Thanos.',
    longDescription:
      'Designed and implemented a unified observability platform covering metrics (Prometheus + Thanos for long-term storage), logs (Fluent Bit → OpenSearch), and distributed traces (Jaeger / OpenTelemetry). Built 40+ custom Grafana dashboards tracking business KPIs alongside infrastructure health. Created automated PagerDuty alerting rules aligned with SLO/SLA thresholds with runbooks stored as code. MTTR dropped from 45 minutes to under 8 minutes within the first month of rollout.',
    techStack: ['Prometheus', 'Thanos', 'Grafana', 'OpenSearch', 'Jaeger', 'OpenTelemetry', 'Fluent Bit', 'PagerDuty'],
    highlights: [
      'Reduced Mean Time to Resolution (MTTR) by 82% in first month post-rollout',
      'Ingests 500K+ metrics/sec and 2 TB+ logs/day with 13-month retention via Thanos',
      '40+ custom dashboards covering business, infrastructure, and application layers',
      'SLO-based alerting with automated runbook execution for 12 common failure patterns',
    ],
    metrics: [
      { label: 'MTTR Reduction', value: '82%' },
      { label: 'Metrics/sec', value: '500K+' },
      { label: 'Dashboards', value: '40+' },
      { label: 'Log Retention', value: '13 mo' },
    ],
    repoUrl: 'https://github.com/shubhamrajawat',
  },
  {
    id: 'aws-landing-zone',
    title: 'AWS Landing Zone (Terraform)',
    category: 'Cloud & IaC',
    categoryColor: 'purple',
    description:
      'Enterprise-scale multi-account AWS environment using AWS Organizations, Control Tower, and Terraform. Automated account vending with SCPs and security guardrails.',
    longDescription:
      'Designed and implemented an enterprise AWS Landing Zone for a 50+ account environment. Used AWS Control Tower for baseline governance, with custom SCPs enforcing encryption-at-rest, region restrictions, and mandatory tagging across all accounts. A Terraform account vending module provisions new accounts with correct IAM roles, VPCs, security baselines, and centralised logging within 15 minutes of a PR approval. AWS Config rules monitor compliance continuously and report to Security Hub.',
    techStack: ['AWS Organizations', 'Control Tower', 'Terraform', 'AWS Config', 'SCPs', 'IAM', 'CloudTrail', 'Security Hub'],
    highlights: [
      'Manages 50+ AWS accounts with consistent, auditable security baselines',
      'New account provisioning automated from days down to 15 minutes',
      '100% CIS AWS Benchmark compliance score via automated AWS Config rules',
      'Centralised CloudTrail and Security Hub findings across all accounts',
    ],
    metrics: [
      { label: 'Accounts', value: '50+' },
      { label: 'Provision Time', value: '15 min' },
      { label: 'CIS Compliance', value: '100%' },
      { label: 'Cost Visibility', value: '100%' },
    ],
    repoUrl: 'https://github.com/shubhamrajawat',
  },
  {
    id: 'ansible-automation-framework',
    title: 'Ansible Automation Framework',
    category: 'Linux & Config Mgmt',
    categoryColor: 'rose',
    description:
      'Enterprise Ansible framework managing 200+ RHEL servers. Automated patching, CIS Level-2 hardening, and compliance enforcement via AWX with staged rollouts.',
    longDescription:
      'Built a structured Ansible framework following best practices for managing a fleet of 200+ RHEL 8/9 servers across dev, staging, and production. Roles cover baseline OS hardening (CIS Level 2), automated patch management with staged rollouts and rollback capability, user/sudo management via LDAP integration, and application deployment. AWX provides the RBAC-controlled UI and execution scheduling. Every playbook run generates an automated compliance report sent to the security team.',
    techStack: ['Ansible', 'AWX', 'RHEL 8/9', 'Python', 'Jinja2', 'LDAP', 'CIS Benchmarks', 'Git'],
    highlights: [
      'Manages 200+ RHEL servers with 100% idempotent, version-controlled playbooks',
      'Automated OS patching with staged rollout: dev → staging → prod with approval gates',
      'Achieved CIS Level-2 hardening compliance across the entire server fleet',
      'Reduced manual server configuration effort by 90%',
    ],
    metrics: [
      { label: 'Servers', value: '200+' },
      { label: 'Effort Saved', value: '90%' },
      { label: 'Patch Success', value: '99.8%' },
      { label: 'CIS Level', value: '2' },
    ],
    repoUrl: 'https://github.com/shubhamrajawat',
  },
  {
    id: 'microservices-k8s-migration',
    title: 'Microservices Kubernetes Migration',
    category: 'Migration & Architecture',
    categoryColor: 'indigo',
    description:
      'Zero-downtime migration of a 12-service application from bare-metal to AWS EKS using the strangler-fig pattern. 67% infrastructure cost reduction post-migration.',
    longDescription:
      'Led the end-to-end migration of a legacy e-commerce application serving 200K daily users from bare-metal servers to AWS EKS. Used a strangler-fig pattern — services were extracted and containerised one at a time, with feature flags controlling traffic splits. Database migration used AWS DMS for zero-downtime PostgreSQL migration with under one minute replication lag during cutover. The project spanned six months with zero unplanned downtime during the migration windows.',
    techStack: ['AWS EKS', 'Docker', 'AWS DMS', 'PostgreSQL', 'Nginx', 'Terraform', 'GitHub Actions', 'Datadog'],
    highlights: [
      'Migrated 12 services and 200K daily users with zero unplanned downtime',
      'Infrastructure cost reduced from $18K/month to $6K/month — a 67% saving',
      'Database cutover achieved with under 1 minute replication lag using AWS DMS',
      'Post-migration p99 API latency improved from 2.1s to 420ms',
    ],
    metrics: [
      { label: 'Cost Reduction', value: '67%' },
      { label: 'p99 Latency', value: '420ms' },
      { label: 'Daily Users', value: '200K' },
      { label: 'Downtime', value: '0 min' },
    ],
    repoUrl: 'https://github.com/shubhamrajawat',
  },
]
