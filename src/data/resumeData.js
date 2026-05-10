// ─────────────────────────────────────────────
// RESUME DATA — Single source of truth
// No graduation year included anywhere.
// Update this file to update the whole site.
// ─────────────────────────────────────────────

export const personal = {
  name: 'Mounika Veeramachaneni',
  initials: 'MV',
  taglines: [
    'Data Analyst',
    'BI Engineer',
    'ITSM Analytics',
    'ML Practitioner',
    'Azure & Snowflake',
  ],
  summary:
    '3+ years delivering end-to-end analytics for Fortune 500 clients. I bridge raw operational data and business decisions — from SQL to ML to boardroom-ready dashboards.',
  location: 'Irving, TX · Hybrid-Ready',
  email: 'mounikav991@gmail.com',
linkedin: 'https://linkedin.com/in/mounika-veeramachaneni', // update with real URL
  github: '', // add if applicable
}

// ─────────────────────────────────────────────
// SKILLS — grouped by domain
// ─────────────────────────────────────────────
export const skillDomains = [
  {
    id: 'analytics',
    label: 'Analytics & BI',
    color: 'teal',
    icon: 'BarChart2',
    skills: ['Power BI', 'Tableau', 'Looker', 'SSRS', 'Excel (Advanced)', 'DAX', 'M Query'],
  },
  {
    id: 'itsm',
    label: 'ITSM & IT Ops',
    color: 'amber',
    icon: 'Activity',
    skills: [
      'ServiceNow',
      'Splunk (Basics)',
      'Incident Management',
      'Event Management',
      'Change Management',
      'Event Pipeline Optimization',
      'Noise Reduction',
      'Alert De-duplication',
      'SLA / KPI Tracking',
    ],
  },
  {
    id: 'engineering',
    label: 'Data Engineering',
    color: 'teal',
    icon: 'GitBranch',
    skills: [
      'Azure Data Factory',
      'Apache Airflow',
      'AWS Glue',
      'Apache Spark',
      'PySpark',
      'dbt',
      'Informatica',
      'Talend',
      'Great Expectations',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Databases',
    color: 'amber',
    icon: 'Cloud',
    skills: [
      'Azure Synapse',
      'ADLS',
      'AWS S3',
      'Redshift',
      'Lambda',
      'GCP BigQuery',
      'Snowflake',
      'PostgreSQL',
      'MySQL',
      'SQL Server',
      'Oracle',
      'MongoDB',
    ],
  },
  {
    id: 'languages',
    label: 'Languages & Query',
    color: 'teal',
    icon: 'Code2',
    skills: ['SQL (Advanced)', 'Python', 'Pandas', 'NumPy', 'PySpark', 'DAX', 'M Query'],
  },
  {
    id: 'ml',
    label: 'AI & ML',
    color: 'amber',
    icon: 'Cpu',
    skills: [
      'XGBoost',
      'Random Forest',
      'Logistic Regression',
      'K-Means Clustering',
      'Anomaly Detection',
      'Time-Series (Prophet, ARIMA)',
      'NLP Basics',
      'Scikit-learn',
    ],
  },
]

// ─────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────
export const experience = [
  {
    id: 'citibank',
    role: 'Data Analyst — IT Operations & ITSM Analytics',
    company: 'Citibank',
    location: 'Irving, TX',
    period: 'Jul 2025 – Present',
    type: 'Full-time',
    color: 'teal',
    highlights: [
      'Analyzed incident data from 5 core banking IT systems; built 15+ live Power BI dashboards on Azure Synapse — reduced reporting cycle from 3 days to 4 hours.',
      'Designed ITSM optimization roadmap tracking 20+ active improvement items covering event source tuning, alert de-duplication, and pipeline noise reduction.',
      'Built PySpark + Azure Data Factory pipelines normalizing 50M+ daily event records, eliminating redundant alerts and improving signal-to-noise ratio.',
      'Applied Random Forest and Logistic Regression anomaly detection to flag high-risk incidents before downstream propagation — improved detection precision by 18%.',
      'Standardized KPI definitions across 8 business units via dbt on Snowflake, reducing ad-hoc data requests by 35%.',
      'Cut dashboard load times from 3–5 min to under 30 sec via query rewrites and data model restructuring.',
    ],
    stack: ['Power BI', 'Azure Synapse', 'PySpark', 'dbt', 'Snowflake', 'Python', 'ADF'],
  },
  {
    id: 'kroger',
    role: 'Data Analyst — Operations & Self-Healing Automation',
    company: 'Kroger',
    location: 'Cincinnati, OH',
    period: 'Sept 2024 – Jun 2025',
    type: 'Full-time',
    color: 'amber',
    highlights: [
      'Built Power BI and Tableau dashboards providing live operational visibility across 2,700+ store locations for supply chain and merchandising teams.',
      'Automated weekly data pulls from Oracle and SQL Server with Python ETL + Great Expectations in Airflow DAGs — achieved 99.7% pipeline accuracy.',
      'Implemented self-healing automation logic to auto-correct data anomalies and schema drift — reduced downstream incident tickets by 40%.',
      'Used K-Means clustering to segment operational event data, enabling targeted optimization of high-frequency incident sources and lifting campaign response rates by 12%.',
      'Rebuilt merchandising data model in Snowflake (star schema) — reduced ad-hoc data requests by 35%.',
    ],
    stack: ['Power BI', 'Tableau', 'Python', 'Airflow', 'Snowflake', 'Oracle', 'SQL Server', 'Scikit-learn'],
  },
  {
    id: 'cloudpolitan',
    role: 'BI Developer',
    company: 'CloudPolitan Technologies',
    location: 'Hyderabad, India',
    period: 'Jan 2022 – Jul 2023',
    type: 'Full-time',
    color: 'teal',
    highlights: [
      'Built AWS Glue and Lambda pipelines processing structured and semi-structured operational event data into Amazon Redshift for incident trend analysis and SLA reporting.',
      'Developed SSRS and Power BI reports surfacing real-time KPIs on incident volume, change request status, and event pipeline health.',
      'Wrote complex SQL queries and stored procedures across PostgreSQL and MySQL for incident and change management reporting workflows.',
      'Built dimensional data models and documented data lineage for three client data warehouse implementations.',
    ],
    stack: ['AWS Glue', 'Lambda', 'Redshift', 'Power BI', 'SSRS', 'PostgreSQL', 'MySQL', 'SQL'],
  },
]

// ─────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────
export const projects = [
  {
    id: 'itsm-dashboard',
    title: 'ITSM Incident Analytics Dashboard',
    problem: 'Five core banking IT systems with no unified view — leadership relied on 3-day-old manual spreadsheet exports for incident KPIs.',
    solution: 'Connected all source systems through Azure Synapse and built live Power BI dashboards with dbt-enforced metric definitions.',
    impact: 'Reporting cycle: 3 days → 4 hours. Single source of truth across credit, market, and operational risk views.',
    metric: '3 days → 4 hours',
    metricLabel: 'Reporting Cycle',
    stack: ['Power BI', 'Azure Synapse', 'dbt', 'Snowflake', 'SQL'],
    color: 'teal',
    icon: 'LayoutDashboard',
  },
  {
    id: 'anomaly-detection',
    title: 'Event Noise Reduction & Anomaly Detection',
    problem: 'High false-positive alert volume masking real incidents — operational data had 18 months of unleveraged signal.',
    solution: 'Engineered features from 18 months of transaction data and trained an XGBoost classifier (AUC 0.87) to detect anomalous events pre-escalation.',
    impact: 'Model-fed alerting workflows reduced false-positive volume and protected ~$2M in estimated annual revenue via earlier intervention.',
    metric: 'AUC 0.87',
    metricLabel: 'Model Performance',
    stack: ['Python', 'XGBoost', 'Scikit-learn', 'SQL', 'AWS S3'],
    color: 'amber',
    icon: 'AlertTriangle',
  },
  {
    id: 'data-mart',
    title: 'Self-Serve IT Operations Data Mart',
    problem: 'IT operations analysts had no reliable self-serve layer — every insight required back-channel requests to engineering.',
    solution: 'Designed a modular dbt project (40+ models across staging, intermediate, and mart layers) with full lineage documentation and ITSM-aligned KPI definitions.',
    impact: 'Eliminated recurring ad-hoc engineering requests. Operations teams query a documented, tested data mart directly.',
    metric: '40+ dbt Models',
    metricLabel: 'Modular Architecture',
    stack: ['dbt', 'Snowflake', 'SQL', 'Python'],
    color: 'teal',
    icon: 'Database',
  },
]

// ─────────────────────────────────────────────
// CERTIFICATIONS
// ─────────────────────────────────────────────
export const certifications = [
  {
    id: 'powerbi',
    name: 'Power BI Data Analyst Associate',
    issuer: 'Microsoft',
    code: 'PL-300',
    color: 'amber',
    icon: 'BarChart2',
  },
  {
    id: 'aws',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    code: 'CCP',
    color: 'teal',
    icon: 'Cloud',
  },
  {
    id: 'dbt',
    name: 'dbt Fundamentals',
    issuer: 'dbt Labs',
    code: 'Fundamentals',
    color: 'amber',
    icon: 'GitBranch',
  },
  {
    id: 'tableau',
    name: 'Tableau Desktop Specialist',
    issuer: 'Tableau',
    code: 'TDS',
    color: 'teal',
    icon: 'PieChart',
  },
]

// ─────────────────────────────────────────────
// EDUCATION — No graduation year
// ─────────────────────────────────────────────
export const education = [
  {
    degree: 'Master of Science, Information Systems and Technologies',
    institution: 'University of North Texas',
    location: 'Denton, TX',
  },
  {
    degree: 'Bachelor of Technology, Computer Science & Engineering',
    institution: 'VelTech University',
    location: 'India',
  },
]
