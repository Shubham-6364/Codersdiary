export interface CurriculumModule {
  module: string
  lessons: string[]
}

export interface Course {
  id: string
  slug: string
  title: string
  category: string
  language: 'English' | 'Hindi' | 'English & Hindi'
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  students: number
  price: number
  originalPrice?: number
  currency: string
  description: string
  longDescription: string
  curriculum: CurriculumModule[]
  /** Pre-created Stripe Payment Link URL */
  stripePaymentLink: string
  featured: boolean
  tags: string[]
}

export const courses: Course[] = [
  {
    id: '1',
    slug: 'aws-solutions-architect-bootcamp',
    title: 'AWS Solutions Architect Bootcamp',
    category: 'Cloud Architecture',
    language: 'English',
    level: 'Intermediate',
    duration: '45 hours',
    students: 1240,
    price: 4999,
    originalPrice: 8999,
    currency: '₹',
    description:
      'Master AWS architecture patterns and ace the SAA-C03 exam. 30+ hands-on labs with real AWS accounts included.',
    longDescription:
      'A comprehensive bootcamp covering all domains of the AWS Solutions Architect Associate (SAA-C03) exam. Combines 30+ hands-on labs running on real AWS accounts, real-world architecture case studies from Fortune 500 companies, and a 250-question mock exam bank with full explanations.',
    curriculum: [
      { module: 'AWS Fundamentals & IAM', lessons: ['IAM Users, Roles & Policies', 'Multi-Account Strategy', 'AWS CLI & SDK Setup'] },
      { module: 'Compute & Networking', lessons: ['EC2 Deep Dive', 'VPC Architecture & Subnets', 'Load Balancers & Auto Scaling'] },
      { module: 'Storage & Databases', lessons: ['S3, Glacier & Storage Classes', 'RDS, Aurora & Read Replicas', 'DynamoDB & ElastiCache'] },
      { module: 'Security & Monitoring', lessons: ['KMS & Secrets Manager', 'CloudTrail & Config', 'GuardDuty & Security Hub'] },
      { module: 'Serverless & Microservices', lessons: ['Lambda & API Gateway', 'ECS & EKS Overview', 'EventBridge, SQS & SNS'] },
    ],
    stripePaymentLink: 'https://buy.stripe.com/test_placeholder_aws',
    featured: true,
    tags: ['AWS', 'SAA-C03', 'Cloud', 'Certification'],
  },
  {
    id: '2',
    slug: 'kubernetes-for-production',
    title: 'Kubernetes for Production',
    category: 'Containerization',
    language: 'English',
    level: 'Advanced',
    duration: '40 hours',
    students: 876,
    price: 3999,
    originalPrice: 6999,
    currency: '₹',
    description:
      'From YAML basics to multi-cluster GitOps. Covers cluster networking, security, autoscaling, and ArgoCD.',
    longDescription:
      'A deep-dive into running Kubernetes in production: cluster architecture, networking (CNI with Calico/Cilium), storage (CSI drivers), security (RBAC, PodSecurity, NetworkPolicies), autoscaling (HPA/VPA/Karpenter), and full GitOps workflows with ArgoCD. Includes a capstone project building a complete production platform from scratch.',
    curriculum: [
      { module: 'Kubernetes Architecture', lessons: ['Control Plane Deep Dive', 'etcd & API Server', 'Scheduler & Controllers'] },
      { module: 'Networking & Storage', lessons: ['CNI Plugins (Calico/Cilium)', 'Service Types & Ingress', 'PVs, PVCs & StorageClasses'] },
      { module: 'Security & RBAC', lessons: ['RBAC Best Practices', 'Pod Security Standards', 'Network Policies'] },
      { module: 'Observability', lessons: ['Prometheus Operator', 'Grafana Dashboards', 'Distributed Tracing with Jaeger'] },
      { module: 'GitOps with ArgoCD', lessons: ['ArgoCD Setup & Architecture', 'App-of-Apps Pattern', 'Progressive Delivery'] },
    ],
    stripePaymentLink: 'https://buy.stripe.com/test_placeholder_k8s',
    featured: true,
    tags: ['Kubernetes', 'K8s', 'GitOps', 'ArgoCD', 'Production'],
  },
  {
    id: '3',
    slug: 'rhcsa-certification-prep-hindi',
    title: 'RHCSA Certification Prep (EX200)',
    category: 'Linux Servers',
    language: 'Hindi',
    level: 'Intermediate',
    duration: '30 hours',
    students: 2100,
    price: 2999,
    originalPrice: 4999,
    currency: '₹',
    description:
      'Hindi-medium RHCSA EX200 preparation for working professionals. Pass on your first attempt.',
    longDescription:
      'Complete RHCSA EX200 exam preparation taught entirely in Hindi. Covers all exam objectives hands-on with RHEL 9 lab environments. Includes five full timed mock exams, a private Telegram group for doubt clearing, and a dedicated "exam tips" session covering the most common mistakes candidates make.',
    curriculum: [
      { module: 'Linux Fundamentals', lessons: ['File System Hierarchy', 'User & Group Management', 'Permissions & ACLs'] },
      { module: 'Package & Service Mgmt', lessons: ['DNF & RPM', 'Systemd Services', 'Boot Process & Targets'] },
      { module: 'Storage Management', lessons: ['LVM Deep Dive', 'File Systems & Mounting', 'NFS & Autofs'] },
      { module: 'Networking & Security', lessons: ['nmcli Configuration', 'Firewalld & SELinux', 'SSH Hardening'] },
      { module: 'Exam Simulation', lessons: ['5 Full Mock Exams', 'Time Management Strategies', 'Common Exam Mistakes'] },
    ],
    stripePaymentLink: 'https://buy.stripe.com/test_placeholder_rhcsa',
    featured: true,
    tags: ['RHCSA', 'Linux', 'Red Hat', 'EX200', 'Hindi', 'Certification'],
  },
  {
    id: '4',
    slug: 'terraform-iac-mastery',
    title: 'Terraform & IaC Mastery',
    category: 'Cloud Architecture',
    language: 'English',
    level: 'Intermediate',
    duration: '25 hours',
    students: 654,
    price: 3499,
    originalPrice: 5999,
    currency: '₹',
    description:
      'Write production-grade Terraform. Module design, remote state, Atlantis GitOps, and Terragrunt for large teams.',
    longDescription:
      'Go beyond the basics of Terraform. This course covers enterprise patterns: module composition and reusability, workspace strategies, remote state management with locking, Atlantis for GitOps-driven Terraform workflows, and Terragrunt for DRY configurations across many environments. Includes testing with Terratest and drift detection techniques.',
    curriculum: [
      { module: 'Terraform Fundamentals', lessons: ['Providers & Resources', 'State Management Deep Dive', 'Variables, Outputs & Locals'] },
      { module: 'Module Design', lessons: ['Module Composition Patterns', 'Public Registry Modules', 'Testing with Terratest'] },
      { module: 'Remote State & Teams', lessons: ['S3 + DynamoDB Backend', 'State Locking & Import', 'Workspaces vs Directory Structure'] },
      { module: 'Advanced Patterns', lessons: ['Terragrunt DRY Configuration', 'Atlantis GitOps Workflow', 'Drift Detection & Remediation'] },
    ],
    stripePaymentLink: 'https://buy.stripe.com/test_placeholder_terraform',
    featured: false,
    tags: ['Terraform', 'IaC', 'AWS', 'Terragrunt', 'Atlantis'],
  },
  {
    id: '5',
    slug: 'docker-containers-hindi',
    title: 'Docker & Containers (Hindi)',
    category: 'Containerization',
    language: 'Hindi',
    level: 'Beginner',
    duration: '20 hours',
    students: 3200,
    price: 1999,
    originalPrice: 3499,
    currency: '₹',
    description:
      'Docker से शुरू करें। Container fundamentals, Docker Compose, और real-world deployments — हिंदी में।',
    longDescription:
      'Docker की पूरी दुनिया हिंदी में। इस course में आप Docker images, containers, volumes, networks, Docker Compose, और production deployment patterns सीखेंगे। Beginners के लिए perfect — कोई prior experience ज़रूरी नहीं।',
    curriculum: [
      { module: 'Docker Basics', lessons: ['Installation & Setup', 'Images vs Containers', 'Dockerfile Best Practices'] },
      { module: 'Networking & Storage', lessons: ['Bridge, Host & None Networks', 'Volumes & Bind Mounts', 'Multi-Container Communication'] },
      { module: 'Docker Compose', lessons: ['Compose File Structure', 'Multi-Service Applications', 'Health Checks & Dependencies'] },
      { module: 'Production Patterns', lessons: ['Multi-Stage Builds', 'Security Scanning with Trivy', 'Registry & CI/CD Integration'] },
    ],
    stripePaymentLink: 'https://buy.stripe.com/test_placeholder_docker_hindi',
    featured: false,
    tags: ['Docker', 'Containers', 'Hindi', 'Beginner'],
  },
  {
    id: '6',
    slug: 'cks-exam-preparation',
    title: 'CKS Exam Preparation',
    category: 'Containerization',
    language: 'English',
    level: 'Advanced',
    duration: '35 hours',
    students: 412,
    price: 4499,
    originalPrice: 7999,
    currency: '₹',
    description:
      'Certified Kubernetes Security Specialist. Cluster hardening, runtime security with Falco, supply chain security.',
    longDescription:
      'The most advanced Kubernetes certification. This course covers every CKS domain: cluster hardening against CIS benchmarks, microservice vulnerability mitigation, supply chain security with Falco/OPA Gatekeeper, and system call filtering with Seccomp and AppArmor. Includes three full timed practice exams in an environment mirroring the real CKS exam.',
    curriculum: [
      { module: 'Cluster Hardening', lessons: ['CIS Benchmark for Kubernetes', 'kube-bench Analysis', 'API Server Hardening Flags'] },
      { module: 'Workload Security', lessons: ['Pod Security Standards & Admission', 'OPA Gatekeeper Policies', 'Image Signing with Cosign'] },
      { module: 'Runtime Security', lessons: ['Falco Rules & Custom Alerts', 'Seccomp Profiles', 'AppArmor Integration'] },
      { module: 'Supply Chain Security', lessons: ['Trivy & Grype Scanning', 'SBOM Generation', 'Admission Controllers Deep Dive'] },
      { module: 'Exam Simulation', lessons: ['3 Full Practice Exams', 'Time-Boxed Scenarios', 'kubectl Speed Drills'] },
    ],
    stripePaymentLink: 'https://buy.stripe.com/test_placeholder_cks',
    featured: false,
    tags: ['CKS', 'Kubernetes', 'Security', 'CNCF', 'Certification'],
  },
  {
    id: '7',
    slug: 'ansible-linux-admins-hindi',
    title: 'Ansible for Linux Admins (Hindi)',
    category: 'Linux Servers',
    language: 'Hindi',
    level: 'Intermediate',
    duration: '22 hours',
    students: 1560,
    price: 2499,
    originalPrice: 4499,
    currency: '₹',
    description:
      'Ansible automation हिंदी में। Playbooks, roles, AWX, और enterprise automation patterns — सीखें।',
    longDescription:
      'Linux system administrators के लिए Ansible automation की complete guide हिंदी में। Inventory management, playbook writing, role development, Ansible Vault, और AWX-based enterprise automation — सब कुछ step-by-step।',
    curriculum: [
      { module: 'Ansible Basics', lessons: ['Installation & Inventory', 'Ad-hoc Commands', 'Playbook Structure'] },
      { module: 'Variables & Templates', lessons: ['Variable Precedence', 'Jinja2 Templates', 'Ansible Vault Encryption'] },
      { module: 'Roles & Collections', lessons: ['Role Development Best Practices', 'Ansible Galaxy', 'Testing with Molecule'] },
      { module: 'AWX / Automation Hub', lessons: ['AWX Installation & Setup', 'Job Templates & RBAC', 'Scheduled Automation'] },
    ],
    stripePaymentLink: 'https://buy.stripe.com/test_placeholder_ansible_hindi',
    featured: false,
    tags: ['Ansible', 'Linux', 'Automation', 'Hindi', 'AWX'],
  },
  {
    id: '8',
    slug: 'complete-devops-bootcamp',
    title: 'Complete DevOps Bootcamp',
    category: 'Full Programme',
    language: 'English & Hindi',
    level: 'Beginner',
    duration: '120 hours',
    students: 890,
    price: 7999,
    originalPrice: 15999,
    currency: '₹',
    description:
      'From Linux basics to Kubernetes in production. The complete DevOps career programme — job-ready in 6 months.',
    longDescription:
      'The most comprehensive DevOps programme available — covering the full stack from Linux and Git to Kubernetes, Terraform, AWS, CI/CD, and SRE practices. Includes resume review, 10 mock technical interviews, and placement assistance. Taught in both English and Hindi.',
    curriculum: [
      { module: 'Linux & Networking', lessons: ['Linux CLI Mastery', 'Networking Fundamentals', 'Shell Scripting'] },
      { module: 'Version Control & CI/CD', lessons: ['Git Workflows', 'GitHub Actions', 'Jenkins Pipelines'] },
      { module: 'Containers & Orchestration', lessons: ['Docker Mastery', 'Kubernetes Core', 'Helm & ArgoCD'] },
      { module: 'Cloud & IaC', lessons: ['AWS Core Services', 'Terraform Deep Dive', 'AWS IAM & Security'] },
      { module: 'Monitoring & SRE', lessons: ['Prometheus & Grafana', 'ELK Stack', 'Incident Response'] },
      { module: 'Career Programme', lessons: ['Resume Workshop', '10 Mock Interviews', 'Placement Assistance'] },
    ],
    stripePaymentLink: 'https://buy.stripe.com/test_placeholder_bootcamp',
    featured: false,
    tags: ['DevOps', 'Full Programme', 'Career', 'Bootcamp', 'Linux', 'Kubernetes', 'AWS'],
  },
]

export const courseCategories = ['All', 'Cloud Architecture', 'Containerization', 'Linux Servers', 'Full Programme']
