export const personalInfo = {
  name: "Lukesh Kharkar",
  roleTitle: "B.Tech Graduate (Minor in Data Science)",
  tagline: "Fresher interested in Data Analytics, Business Intelligence, SQL, and Cloud Data Engineering. Focused on learning and delivering practical work.",
  status: "🟢 Looking for Entry-Level Roles (Pune / Remote)",
  location: "Amravati / Pune, Maharashtra, India",
  email: "lukeshkharkar@gmail.com",
  linkedin: "https://www.linkedin.com/in/lukeshkharkar/",
  github: "https://github.com/lukeshkharkar",
  education: {
    institution: "MIT Academy of Engineering",
    degree: "B.Tech Electronics Engineering (Minor in Data Science)",
    duration: "Nov 2022 – Jun 2026",
    growthHighlight: "Completed B.Tech degree with a Minor in Data Science, building practical experience in analytics and visualization."
  }
};

export const metricsData = [
  {
    value: "2",
    label: "Internships",
    subtext: "Flobi Tech India & Brose India"
  },
  {
    value: "2",
    label: "Hands-on Projects",
    subtext: "Excel Analytics & ML Web App"
  },
  {
    value: "MITAOE",
    label: "B.Tech Graduate",
    subtext: "Minor in Data Science"
  },
  {
    value: "Fresher",
    label: "Open to Learn",
    subtext: "Ready for entry-level tasks"
  }
];

export const experienceData = [
  {
    id: "flobi-tech",
    company: "Flobi Tech India",
    role: "Software Engineer Intern",
    duration: "16 Feb 2026 – 14 Jun 2026",
    location: "Pune, Maharashtra",
    type: "Data Visualization & SQL Reporting",
    description: "Worked on recreating Power BI dashboards in Apache Superset using SQL Server to help the organization reduce licensing costs.",
    highlights: [
      "Built SQL queries and created dashboard visualizations in Apache Superset to replicate existing Power BI reports and verify data accuracy.",
      "Deployed and configured Apache Superset locally using Docker containers.",
      "Explored Azure Data Factory, Azure Databricks, and PySpark to learn cloud data engineering fundamentals.",
      "Researched Model Context Protocol (MCP) to understand how AI tools can connect with design files like Figma."
    ],
    tools: ["Apache Superset", "SQL Server", "Docker", "Power BI", "Azure Data Factory", "MCP"]
  },
  {
    id: "brose-india",
    company: "Brose India Automotive Systems Pvt. Ltd.",
    role: "Power BI Intern",
    duration: "09 Jun 2025 – 09 Sep 2025",
    location: "Pune, Maharashtra",
    type: "Power BI & Workflow Automation",
    description: "Assisted the team in updating Power Query ETL logic and automating internal paper-based approval processes.",
    highlights: [
      "Updated Power Query transformation logic to reflect new business cost center allocations, helping automate Excel reporting in Power BI.",
      "Cleaned and appended SAP cost data files to support quarterly department reporting.",
      "Developed an online Override Authorization workflow using Power Apps, SharePoint, and Power Automate to replace paper forms with digital approvals and status tracking.",
      "Automated email notifications for training invites and extracted non-confidential test metrics from PDFs into customer templates."
    ],
    tools: ["Power BI", "Power Query", "Power Apps", "Power Automate", "SharePoint", "Excel"]
  }
];

export const projectsData = [
  {
    id: "geetanjali-retail",
    title: "Retail Sales Data Analysis Dashboard",
    category: "Data Analytics & Excel",
    tools: ["Excel", "Pivot Tables", "Power Query", "Data Cleaning", "Slicers"],
    githubUrl: "https://github.com/lukeshkharkar/retail-data-analysis-dashboard",
    tagline: "Course project analyzing retail sales transactions and customer demographics in Excel.",
    summary: "Cleaned raw sales data by filling missing values, removing outliers, and formatting data rows. Created Pivot Tables and interactive slicers to summarize key sales trends.",
    keyInsights: [
      "Women accounted for ~65% of total fashion purchases.",
      "Customers aged 30–49 represented the largest buying group.",
      "Maharashtra, Karnataka, and Uttar Pradesh were the top-selling states.",
      "Amazon and Flipkart served as the main sales channels with over 90% delivery completion."
    ],
    process: [
      "Cleaned raw transactional dataset in Excel (null handling, deduplication, formatting).",
      "Created Pivot Tables to analyze sales by month, gender, age group, state, and sales channel.",
      "Added interactive slicers for quick filtering and visual reporting."
    ]
  },
  {
    id: "diabetes-prediction",
    title: "Diabetes Prediction Web Application",
    category: "Machine Learning & Web Deployment",
    tools: ["Python", "Scikit-Learn (SVM)", "Flask", "StandardScaler", "HTML/CSS", "Render"],
    githubUrl: "https://github.com/lukeshkharkar/diabetes-prediction-web-app",
    tagline: "Machine learning web app predicting diabetes risk from patient health inputs.",
    summary: "Built a machine learning project independently from data preprocessing and Support Vector Machine (SVM) training to creating a Flask API and deploying the web app on Render.",
    keyInsights: [
      "Achieved ~77% accuracy on test diagnostic data using Support Vector Classifier.",
      "Used StandardScaler to normalize user inputs before passing them to the saved model.",
      "Created a RESTful API endpoint (`/predict`) to process user inputs and return predictions."
    ],
    process: [
      "Cleaned and standardized medical diagnostic dataset features.",
      "Trained an SVM classifier and exported model artifacts.",
      "Built Flask web application backend and simple frontend form.",
      "Deployed application to Render for public access."
    ]
  }
];

export const skillsCategories = [
  {
    id: "bi-vis",
    name: "BI & Visualization",
    skills: [
      { name: "Power BI", level: "Internship Work", desc: "Building reports, Power Query transformations, DAX basics" },
      { name: "Apache Superset", level: "Internship Work", desc: "SQL-based dashboards, Docker setup, report migration" },
      { name: "Excel", level: "Coursework & Work", desc: "Pivot Tables, Power Query, Data Cleaning, Slicers" }
    ]
  },
  {
    id: "data-eng",
    name: "Databases & Cloud Exposure",
    skills: [
      { name: "SQL", level: "Practical Use", desc: "Queries, joins, data extraction, matching dashboard metrics" },
      { name: "Azure Data Factory", level: "Basic Exposure", desc: "Understanding pipelines, datasets, and ETL concepts" },
      { name: "Docker", level: "Practical Use", desc: "Setting up Apache Superset environment locally" }
    ]
  },
  {
    id: "automation",
    name: "Process Automation",
    skills: [
      { name: "Power Apps", level: "Internship Work", desc: "Building digital approval app forms" },
      { name: "Power Automate", level: "Internship Work", desc: "Automating email reminders and status updates" },
      { name: "SharePoint Lists", level: "Internship Work", desc: "Storing form data and tracking request statuses" }
    ]
  },
  {
    id: "programming",
    name: "Languages & Tools",
    skills: [
      { name: "Python", level: "Project Practice", desc: "Data cleaning, Machine Learning (Scikit-Learn), Flask API" },
      { name: "C++", level: "Academic", desc: "Basic programming concepts and data structures" },
      { name: "Git & GitHub", level: "Regular Use", desc: "Version control for projects and code repositories" }
    ]
  }
];

export const growthHighlights = [
  {
    title: "Independent Machine Learning Project",
    description: "Chose to work individually on the Diabetes Prediction project to gain hands-on experience in every step—from data preprocessing and model training to API creation and cloud deployment."
  },
  {
    title: "Course Project Collaboration",
    description: "Led a group in an Electromagnetic Theory course project to recreate paper results, earning faculty appreciation for structured teamwork and consistency."
  }
];
