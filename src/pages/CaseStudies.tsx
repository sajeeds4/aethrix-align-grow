import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowRight, CheckCircle, TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Global Manufacturing ERP Transformation",
      company: "Leading Automotive Parts Manufacturer",
      industry: "Manufacturing",
      size: "500+ employees, $50M+ revenue",
      challenge: "Complex multi-location manufacturing operations were hampered by disconnected legacy systems, leading to production delays, inventory inaccuracies, and compliance reporting challenges across three facilities.",
      solution: "Comprehensive Odoo ERP implementation with custom manufacturing modules, real-time inventory tracking, quality management system, and integrated financial reporting across all locations.",
      technologies: ["Odoo ERP", "PostgreSQL", "Python", "IoT Integration", "Business Intelligence"],
      timeline: "12 months",
      results: [
        "45% reduction in production cycle time",
        "60% improvement in inventory accuracy",
        "30% decrease in operational costs",
        "99.9% system uptime achieved",
        "100% regulatory compliance maintained"
      ],
      metrics: {
        roi: "340%",
        payback: "14 months",
        efficiency: "45%",
        cost_savings: "$2.1M annually"
      },
      testimonial: "Aethrix Systems transformed our operations completely. The integrated ERP solution eliminated our data silos and provided real-time visibility across all our manufacturing processes.",
      detailed_implementation: {
        phase1: "Discovery & Requirements Analysis (2 months) - Comprehensive business process mapping, stakeholder interviews, technical architecture design, and project roadmap development.",
        phase2: "System Configuration & Customization (4 months) - Core ERP modules setup, custom manufacturing workflows, integration development, and initial testing phases.",
        phase3: "Data Migration & Testing (3 months) - Legacy data cleansing and migration, comprehensive system testing, user acceptance testing, and performance optimization.",
        phase4: "Training & Go-Live (2 months) - End-user training programs, phased rollout across facilities, go-live support, and initial optimization.",
        phase5: "Post-Implementation Support (1 month) - Performance monitoring, issue resolution, additional training, and continuous improvement initiatives."
      },
      technical_challenges: [
        "Legacy system data integration from multiple disparate sources including AS/400, Oracle, and various Excel-based systems",
        "Real-time IoT sensor integration for production line monitoring and predictive maintenance scheduling",
        "Complex multi-location inventory synchronization with real-time visibility across all facilities",
        "Custom reporting requirements for regulatory compliance including FDA, ISO 9001, and automotive industry standards",
        "High-availability requirements with 99.9% uptime SLA and disaster recovery capabilities"
      ],
      business_outcomes: {
        operational_efficiency: "Manufacturing cycle time reduced by 45% through optimized production scheduling and real-time inventory management",
        cost_reduction: "Annual operational cost savings of $2.1M achieved through reduced manual processes, improved inventory turnover, and optimized resource allocation",
        quality_improvement: "Defect rates decreased by 65% through integrated quality management system and automated inspection processes",
        compliance_enhancement: "100% regulatory compliance maintained with automated audit trails and real-time compliance monitoring",
        scalability_gains: "System architecture designed to support 200% business growth without major infrastructure changes"
      }
    },
    {
      title: "Digital Banking Platform Modernization",
      company: "Regional Credit Union",
      industry: "Financial Services",
      size: "50+ employees, $200M+ assets",
      challenge: "Legacy core banking system was limiting growth potential with slow transaction processing, limited mobile capabilities, and compliance reporting inefficiencies, leading to customer attrition.",
      solution: "Modern cloud-native banking platform with mobile-first design, automated compliance reporting, real-time fraud detection, and seamless third-party integrations.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "AI/ML", "Blockchain"],
      timeline: "18 months",
      results: [
        "75% faster transaction processing",
        "90% increase in mobile banking adoption",
        "50% reduction in compliance reporting time",
        "Zero fraud incidents post-implementation",
        "35% growth in new customer acquisitions"
      ],
      metrics: {
        roi: "280%",
        payback: "18 months",
        efficiency: "60%",
        cost_savings: "$850K annually"
      },
      testimonial: "The new platform has revolutionized our member experience. We've seen unprecedented growth in digital adoption and member satisfaction scores have reached all-time highs.",
      detailed_implementation: {
        phase1: "Strategic Planning & Regulatory Compliance (3 months) - Detailed regulatory analysis, compliance framework design, security architecture planning, and stakeholder alignment.",
        phase2: "Core Platform Development (8 months) - Cloud infrastructure setup, core banking modules development, API integration framework, and security implementation.",
        phase3: "Mobile Application Development (4 months) - iOS and Android app development, user experience optimization, accessibility compliance, and app store deployment.",
        phase4: "Integration & Testing (2 months) - Third-party service integration, comprehensive security testing, load testing, and regulatory compliance validation.",
        phase5: "Migration & Launch (1 month) - Data migration from legacy systems, staff training, customer communication, and phased platform launch."
      },
      technical_challenges: [
        "Legacy mainframe integration requiring custom API development and real-time data synchronization",
        "Advanced fraud detection system implementation using machine learning algorithms and behavioral analytics",
        "Multi-factor authentication system with biometric integration for enhanced security",
        "Real-time compliance monitoring and automated regulatory reporting capabilities",
        "High-performance architecture supporting 100,000+ concurrent users with sub-second response times"
      ],
      business_outcomes: {
        customer_experience: "Member satisfaction scores increased by 45% due to improved digital banking capabilities and faster transaction processing",
        operational_efficiency: "Staff productivity improved by 60% through automated processes and streamlined workflows",
        security_enhancement: "Zero security incidents recorded with advanced fraud detection preventing $2.3M in potential losses",
        regulatory_compliance: "Automated compliance reporting reduced manual effort by 80% and eliminated regulatory violations",
        market_growth: "35% increase in new member acquisitions attributed to superior digital banking experience"
      }
    },
    {
      title: "Healthcare Network Integration",
      company: "Multi-Specialty Medical Group",
      industry: "Healthcare",
      size: "200+ providers, 15 locations",
      challenge: "Fragmented patient data across multiple EHR systems, inefficient appointment scheduling, and manual insurance verification were impacting patient care quality and operational efficiency.",
      solution: "Integrated healthcare management platform with unified patient records, intelligent scheduling system, automated insurance verification, and HIPAA-compliant patient portal.",
      technologies: ["HL7 FHIR", "Cloud Infrastructure", "AI Scheduling", "Secure APIs", "Mobile Apps"],
      timeline: "15 months",
      results: [
        "40% reduction in appointment scheduling time",
        "85% decrease in patient data errors",
        "60% improvement in provider productivity",
        "95% patient portal adoption rate",
        "25% increase in patient satisfaction scores"
      ],
      metrics: {
        roi: "310%",
        payback: "16 months",
        efficiency: "50%",
        cost_savings: "$1.2M annually"
      },
      testimonial: "Patient care has significantly improved since implementation. Our providers now have complete patient histories at their fingertips, and our scheduling efficiency has never been better.",
      detailed_implementation: {
        phase1: "Healthcare Compliance & Planning (3 months) - HIPAA compliance assessment, clinical workflow analysis, interoperability planning, and provider training strategy.",
        phase2: "EHR Integration Development (6 months) - HL7 FHIR standard implementation, legacy system integration, data mapping, and clinical decision support systems.",
        phase3: "Patient Portal & Mobile Apps (4 months) - Patient-facing portal development, mobile application creation, telehealth integration, and accessibility compliance.",
        phase4: "Testing & Validation (1.5 months) - Clinical workflow testing, security penetration testing, HIPAA compliance validation, and user acceptance testing.",
        phase5: "Training & Deployment (0.5 months) - Provider and staff training, phased rollout across locations, go-live support, and performance optimization."
      },
      technical_challenges: [
        "Complex EHR system integration across multiple vendors including Epic, Cerner, and AllScripts",
        "HIPAA-compliant data encryption and secure communication channels implementation",
        "AI-powered clinical decision support system development with evidence-based recommendations",
        "Real-time insurance eligibility verification integration with major insurance providers",
        "Telehealth platform integration with video conferencing and remote monitoring capabilities"
      ],
      business_outcomes: {
        clinical_efficiency: "Provider productivity increased by 60% through streamlined workflows and automated documentation",
        patient_engagement: "Patient portal adoption rate of 95% with significant improvement in patient communication and self-service capabilities",
        operational_savings: "Annual cost savings of $1.2M achieved through reduced administrative overhead and improved scheduling efficiency",
        quality_metrics: "Patient safety indicators improved by 40% through automated clinical alerts and decision support systems",
        compliance_excellence: "100% HIPAA compliance maintained with zero security incidents and successful regulatory audits"
      }
    },
    {
      title: "E-Commerce Platform Optimization",
      company: "Multi-Brand Retail Corporation",
      industry: "Retail & E-Commerce",
      size: "1000+ employees, $100M+ revenue",
      challenge: "Inconsistent customer experience across multiple brands, fragmented inventory management, and poor mobile performance were limiting online growth and increasing operational costs.",
      solution: "Unified headless commerce platform with personalized customer experiences, real-time inventory synchronization, and advanced analytics for all brand portfolios.",
      technologies: ["Headless Commerce", "React", "Microservices", "AI Personalization", "CDN"],
      timeline: "10 months",
      results: [
        "55% increase in online conversion rates",
        "80% improvement in page load speeds",
        "40% reduction in inventory carrying costs",
        "300% increase in mobile sales",
        "25% growth in average order value"
      ],
      metrics: {
        roi: "420%",
        payback: "8 months",
        efficiency: "65%",
        cost_savings: "$3.5M annually"
      },
      testimonial: "The unified platform has transformed our digital presence. We're now able to provide consistent, personalized experiences across all our brands while significantly reducing operational complexity.",
      detailed_implementation: {
        phase1: "Digital Strategy & Architecture (2 months) - Brand consolidation strategy, technical architecture design, performance optimization planning, and integration roadmap.",
        phase2: "Platform Development (5 months) - Headless commerce implementation, microservices architecture, API development, and third-party integrations.",
        phase3: "Personalization & Analytics (2 months) - AI-powered recommendation engine, customer behavior analytics, A/B testing framework, and conversion optimization.",
        phase4: "Testing & Optimization (0.5 months) - Performance testing, security validation, load testing, and mobile optimization.",
        phase5: "Launch & Migration (0.5 months) - Brand migration, customer data migration, staff training, and go-live support."
      },
      technical_challenges: [
        "Legacy system integration across multiple e-commerce platforms and inventory management systems",
        "Real-time inventory synchronization across 50+ locations with accurate stock levels",
        "AI-powered personalization engine development using machine learning algorithms",
        "High-performance CDN implementation for global content delivery and fast page loads",
        "Advanced analytics and reporting system with real-time business intelligence dashboards"
      ],
      business_outcomes: {
        revenue_growth: "Online revenue increased by 85% within first year through improved conversion rates and mobile optimization",
        customer_experience: "Customer satisfaction scores improved by 50% due to faster page loads and personalized shopping experiences",
        operational_efficiency: "Inventory management costs reduced by 40% through real-time synchronization and automated reorder processes",
        market_expansion: "Mobile sales grew by 300% enabling expansion into new demographics and markets",
        brand_consolidation: "Unified platform reduced operational complexity by 60% while maintaining brand distinctiveness"
      }
    },
    {
      title: "Supply Chain Digitization Initiative",
      company: "Fortune 500 Distribution Company",
      industry: "Logistics & Supply Chain",
      size: "2500+ employees, $500M+ revenue",
      challenge: "Manual supply chain processes, limited visibility across distribution network, and inefficient route optimization were causing delays, increasing costs, and reducing customer satisfaction.",
      solution: "End-to-end supply chain digitization with IoT tracking, AI-powered route optimization, predictive analytics, and integrated supplier portal.",
      technologies: ["IoT Sensors", "AI/ML", "Blockchain", "Real-time Analytics", "Mobile Apps"],
      timeline: "24 months",
      results: [
        "35% reduction in delivery times",
        "50% improvement in route efficiency",
        "25% decrease in fuel costs",
        "90% increase in shipment visibility",
        "40% reduction in customer complaints"
      ],
      metrics: {
        roi: "385%",
        payback: "20 months",
        efficiency: "55%",
        cost_savings: "$15.2M annually"
      },
      testimonial: "This transformation has revolutionized our entire supply chain operation. We now have complete visibility from supplier to customer, and our efficiency gains have exceeded all expectations.",
      detailed_implementation: {
        phase1: "Supply Chain Analysis (4 months) - Current state mapping, bottleneck identification, supplier assessment, and digital transformation strategy development.",
        phase2: "IoT Infrastructure Deployment (8 months) - Sensor installation across fleet and warehouses, connectivity setup, data collection systems, and monitoring dashboards.",
        phase3: "AI Analytics Platform (6 months) - Machine learning algorithm development, predictive analytics implementation, route optimization engine, and demand forecasting.",
        phase4: "Blockchain Implementation (4 months) - Supply chain transparency platform, smart contracts for suppliers, provenance tracking, and automated payments.",
        phase5: "Integration & Optimization (2 months) - System integration, performance tuning, staff training, and continuous improvement processes."
      },
      technical_challenges: [
        "IoT sensor integration across 500+ vehicles and 25 warehouse facilities with real-time data transmission",
        "AI-powered route optimization considering traffic, weather, delivery windows, and vehicle capacity constraints",
        "Blockchain-based supply chain transparency with immutable transaction records and smart contracts",
        "Predictive analytics for demand forecasting and inventory optimization using historical and real-time data",
        "Integration with 100+ supplier systems and customer portals for end-to-end visibility"
      ],
      business_outcomes: {
        delivery_performance: "On-time delivery rates improved from 75% to 96% through optimized routing and predictive scheduling",
        cost_optimization: "Annual operational savings of $15.2M achieved through fuel efficiency, route optimization, and reduced manual processes",
        customer_satisfaction: "Customer complaints reduced by 40% and satisfaction scores increased by 35% due to improved delivery reliability",
        supplier_relations: "Supplier onboarding time reduced by 60% through automated portal and blockchain-based verification processes",
        operational_visibility: "Real-time supply chain visibility increased from 20% to 90% enabling proactive issue resolution"
      }
    },
    {
      title: "Educational Technology Platform",
      company: "Large School District",
      industry: "Education",
      size: "50,000+ students, 5,000+ staff",
      challenge: "Fragmented educational systems, limited remote learning capabilities, and inefficient administrative processes were hindering educational outcomes and operational efficiency.",
      solution: "Comprehensive educational technology platform with learning management system, student information system, virtual classrooms, and parent engagement portal.",
      technologies: ["Learning Management", "Video Conferencing", "Cloud Infrastructure", "Mobile Apps", "Analytics"],
      timeline: "20 months",
      results: [
        "95% student engagement in remote learning",
        "60% improvement in administrative efficiency",
        "40% increase in parent participation",
        "25% improvement in student outcomes",
        "80% reduction in paperwork processes"
      ],
      metrics: {
        roi: "240%",
        payback: "24 months",
        efficiency: "45%",
        cost_savings: "$2.8M annually"
      },
      testimonial: "This platform has transformed education delivery in our district. Students, teachers, and parents are more engaged than ever, and our administrative processes are dramatically more efficient.",
      detailed_implementation: {
        phase1: "Educational Assessment (4 months) - Current system evaluation, stakeholder needs analysis, curriculum alignment, and technology infrastructure assessment.",
        phase2: "Platform Development (10 months) - LMS implementation, student information system integration, virtual classroom setup, and mobile application development.",
        phase3: "Content Migration (3 months) - Curriculum digitization, assessment tool creation, resource library development, and accessibility compliance.",
        phase4: "Training & Rollout (2 months) - Teacher training programs, student orientation, parent engagement, and phased deployment across schools.",
        phase5: "Support & Optimization (1 month) - Technical support, performance monitoring, user feedback integration, and continuous improvement."
      },
      technical_challenges: [
        "Scalable cloud infrastructure supporting 50,000+ concurrent users during peak usage periods",
        "Integration with existing student information systems and grade book applications",
        "Accessibility compliance with WCAG 2.1 standards and support for students with disabilities",
        "Advanced analytics and reporting for student performance tracking and administrative insights",
        "Secure parent portal with FERPA compliance and multi-language support"
      ],
      business_outcomes: {
        student_engagement: "Student participation in online learning increased to 95% with improved learning outcomes across all grade levels",
        teacher_productivity: "Teacher administrative time reduced by 50% through automated grading and streamlined communication tools",
        parent_involvement: "Parent engagement increased by 40% through real-time access to student progress and school communication",
        cost_efficiency: "Annual savings of $2.8M achieved through reduced paper usage, streamlined processes, and improved resource allocation",
        educational_outcomes: "Student test scores improved by 25% due to personalized learning paths and enhanced educational resources"
      }
    },
    {
      title: "Energy Management Optimization",
      company: "Municipal Utilities Authority",
      industry: "Energy & Utilities",
      size: "300+ employees, 150,000+ customers",
      challenge: "Aging infrastructure, inefficient energy distribution, limited smart grid capabilities, and manual meter reading processes were increasing operational costs and reducing service reliability.",
      solution: "Smart grid implementation with IoT sensors, automated meter reading, predictive maintenance, and customer self-service portal.",
      technologies: ["Smart Grid", "IoT Sensors", "Predictive Analytics", "Mobile Apps", "Customer Portal"],
      timeline: "36 months",
      results: [
        "30% reduction in energy waste",
        "50% decrease in maintenance costs",
        "95% accuracy in demand forecasting",
        "40% improvement in service reliability",
        "60% reduction in customer service calls"
      ],
      metrics: {
        roi: "290%",
        payback: "30 months",
        efficiency: "40%",
        cost_savings: "$8.5M annually"
      },
      testimonial: "The smart grid transformation has modernized our entire utility operation. We can now predict and prevent issues before they affect our customers, and our operational efficiency has never been higher.",
      detailed_implementation: {
        phase1: "Infrastructure Assessment (6 months) - Grid analysis, equipment evaluation, customer usage patterns, and modernization planning.",
        phase2: "Smart Meter Deployment (18 months) - AMI infrastructure installation, meter replacement across service area, and communication network setup.",
        phase3: "Analytics Platform (8 months) - Data collection systems, predictive analytics development, demand forecasting algorithms, and operational dashboards.",
        phase4: "Customer Portal (3 months) - Self-service portal development, mobile app creation, billing system integration, and usage analytics.",
        phase5: "Optimization (1 month) - Performance tuning, staff training, customer education, and continuous improvement processes."
      },
      technical_challenges: [
        "Smart meter infrastructure deployment across 150,000 service locations with reliable communication networks",
        "Real-time grid monitoring and control systems with automated fault detection and isolation",
        "Predictive analytics for equipment maintenance using historical data and IoT sensor readings",
        "Customer portal integration with legacy billing systems and real-time usage data",
        "Cybersecurity implementation for critical infrastructure protection and data privacy"
      ],
      business_outcomes: {
        operational_efficiency: "Energy distribution losses reduced by 30% through real-time monitoring and automated grid optimization",
        maintenance_optimization: "Predictive maintenance reduced equipment failures by 65% and maintenance costs by 50%",
        customer_satisfaction: "Customer satisfaction scores increased by 45% due to improved service reliability and self-service options",
        revenue_protection: "Revenue protection improved by $3.2M annually through accurate metering and theft detection",
        environmental_impact: "Carbon footprint reduced by 25% through optimized energy distribution and renewable energy integration"
      }
    },
    {
      title: "Real Estate Technology Platform",
      company: "National Property Management Company",
      industry: "Real Estate",
      size: "500+ employees, 100,000+ units",
      challenge: "Fragmented property management systems, manual lease processing, limited tenant communication, and inefficient maintenance coordination were affecting operational efficiency and tenant satisfaction.",
      solution: "Integrated property management platform with automated leasing, tenant portal, maintenance management, and financial reporting.",
      technologies: ["Property Management", "Mobile Apps", "Automation", "Analytics", "Cloud Infrastructure"],
      timeline: "14 months",
      results: [
        "70% reduction in lease processing time",
        "85% increase in tenant portal usage",
        "45% improvement in maintenance response",
        "50% decrease in vacancy rates",
        "35% increase in operational efficiency"
      ],
      metrics: {
        roi: "360%",
        payback: "16 months",
        efficiency: "50%",
        cost_savings: "$4.2M annually"
      },
      testimonial: "This platform has revolutionized how we manage properties. Our tenants are happier, our operations are more efficient, and our bottom line has improved significantly.",
      detailed_implementation: {
        phase1: "Property Analysis (3 months) - Portfolio assessment, operational workflow analysis, technology requirements, and integration planning.",
        phase2: "Core Platform (6 months) - Property management system implementation, lease automation, financial module setup, and reporting framework.",
        phase3: "Tenant Portal (3 months) - Self-service portal development, mobile app creation, payment processing integration, and communication tools.",
        phase4: "Maintenance System (1.5 months) - Work order management, vendor portal, maintenance scheduling, and asset tracking.",
        phase5: "Analytics & Training (0.5 months) - Business intelligence setup, staff training, tenant onboarding, and performance optimization."
      },
      technical_challenges: [
        "Legacy system integration across multiple property management platforms and accounting systems",
        "Automated lease processing with electronic signature integration and document management",
        "Multi-property maintenance coordination with vendor management and scheduling optimization",
        "Real-time financial reporting across 100,000+ units with automated rent collection and expense tracking",
        "Tenant portal with payment processing, maintenance requests, and community features"
      ],
      business_outcomes: {
        leasing_efficiency: "Lease processing time reduced from 5 days to 1.5 days through automation and digital workflows",
        tenant_satisfaction: "Tenant satisfaction scores increased by 40% due to improved communication and faster issue resolution",
        operational_costs: "Operating costs reduced by $4.2M annually through streamlined processes and reduced manual work",
        occupancy_rates: "Vacancy rates decreased by 50% through improved tenant retention and faster unit turnaround",
        maintenance_performance: "Maintenance response times improved by 45% through automated work order routing and vendor management"
      }
    }
  ];

  const additionalCaseStudies = [
    {
      title: "Fintech Payment Processing Revolution",
      company: "Emerging Payment Solutions Provider",
      industry: "Financial Technology",
      size: "150+ employees, $25M+ revenue",
      challenge: "Legacy payment infrastructure couldn't handle growing transaction volumes, lacked real-time fraud detection, and had limited international expansion capabilities.",
      solution: "Modern payment processing platform with real-time transaction monitoring, AI-powered fraud detection, multi-currency support, and API-first architecture.",
      technologies: ["Microservices", "Real-time Processing", "AI/ML", "Blockchain", "API Gateway"],
      timeline: "16 months",
      results: [
        "1000% increase in transaction processing capacity",
        "99.99% transaction success rate",
        "85% reduction in fraudulent transactions",
        "60% faster international payment processing",
        "300% increase in API adoption by partners"
      ],
      metrics: {
        roi: "450%",
        payback: "12 months",
        efficiency: "75%",
        cost_savings: "$5.8M annually"
      },
      business_impact: "Platform now processes over $1B in monthly transactions with industry-leading security and performance metrics."
    },
    {
      title: "Pharmaceutical R&D Digital Transformation",
      company: "Mid-Size Pharmaceutical Company",
      industry: "Pharmaceuticals",
      size: "800+ employees, $200M+ revenue",
      challenge: "Manual clinical trial management, fragmented research data, regulatory compliance inefficiencies, and slow drug development cycles were impacting competitiveness.",
      solution: "Integrated R&D platform with clinical trial management, regulatory compliance automation, research data analytics, and collaborative research tools.",
      technologies: ["Clinical Trial Management", "Data Analytics", "Regulatory Compliance", "Collaboration Tools", "AI/ML"],
      timeline: "22 months",
      results: [
        "40% reduction in drug development time",
        "90% improvement in regulatory submission accuracy",
        "60% increase in clinical trial efficiency",
        "50% faster data analysis and reporting",
        "100% regulatory compliance maintained"
      ],
      metrics: {
        roi: "320%",
        payback: "20 months",
        efficiency: "45%",
        cost_savings: "$12.5M annually"
      },
      business_impact: "Accelerated time-to-market for new drugs while maintaining highest regulatory standards and improving research collaboration."
    },
    {
      title: "Agricultural Technology Innovation",
      company: "Large-Scale Farming Operation",
      industry: "Agriculture",
      size: "200+ employees, 50,000+ acres",
      challenge: "Manual farming processes, limited crop monitoring capabilities, inefficient resource utilization, and unpredictable yield outcomes were affecting profitability.",
      solution: "Precision agriculture platform with IoT sensors, drone monitoring, predictive analytics, and automated irrigation systems.",
      technologies: ["IoT Agriculture", "Drone Technology", "Predictive Analytics", "Automation", "Satellite Imagery"],
      timeline: "18 months",
      results: [
        "25% increase in crop yields",
        "35% reduction in water usage",
        "40% decrease in fertilizer costs",
        "90% accuracy in pest prediction",
        "50% improvement in resource efficiency"
      ],
      metrics: {
        roi: "280%",
        payback: "18 months",
        efficiency: "40%",
        cost_savings: "$3.8M annually"
      },
      business_impact: "Transformed traditional farming into data-driven precision agriculture with sustainable practices and improved profitability."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Case Studies</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Success Stories That Drive Results
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Discover how leading organizations across industries have transformed their operations, 
              improved efficiency, and achieved measurable business outcomes through strategic 
              technology implementations with Aethrix Systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/consultation" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Schedule Your Consultation
              </a>
              <a 
                href="/services" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold mb-6">Measurable Business Impact</h2>
            <p className="text-lg text-gray-700">
              Our case studies demonstrate consistent, quantifiable results across diverse industries and project types.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">13</div>
              <div className="text-gray-600">Months Avg Payback</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">$7.6M</div>
              <div className="text-gray-600">Total Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableCaption>Summary of key performance indicators across our most impactful client engagements.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/5">Project</TableHead>
                  <TableHead className="w-1/5">Industry</TableHead>
                  <TableHead className="w-1/5">Timeline</TableHead>
                  <TableHead className="w-1/5">ROI Achieved</TableHead>
                  <TableHead className="w-1/5">Annual Savings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">ERP Transformation</TableCell>
                  <TableCell>Manufacturing</TableCell>
                  <TableCell>12 months</TableCell>
                  <TableCell className="text-green-600 font-semibold">340%</TableCell>
                  <TableCell className="font-semibold">$2.1M</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Banking Modernization</TableCell>
                  <TableCell>Financial Services</TableCell>
                  <TableCell>18 months</TableCell>
                  <TableCell className="text-green-600 font-semibold">280%</TableCell>
                  <TableCell className="font-semibold">$850K</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Healthcare Integration</TableCell>
                  <TableCell>Healthcare</TableCell>
                  <TableCell>15 months</TableCell>
                  <TableCell className="text-green-600 font-semibold">310%</TableCell>
                  <TableCell className="font-semibold">$1.2M</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">E-Commerce Optimization</TableCell>
                  <TableCell>Retail</TableCell>
                  <TableCell>10 months</TableCell>
                  <TableCell className="text-green-600 font-semibold">420%</TableCell>
                  <TableCell className="font-semibold">$3.5M</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center">Detailed Success Stories</h2>
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <Card key={study.title} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                        <CardDescription className="text-lg">
                          {study.company} | {study.industry} | {study.size}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-white">
                        {study.timeline}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-red-600 flex items-center gap-2">
                            🎯 Challenge
                          </h4>
                          <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 text-blue-600 flex items-center gap-2">
                            ⚡ Solution
                          </h4>
                          <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-green-600 flex items-center gap-2">
                            🚀 Results Achieved
                          </h4>
                          <ul className="space-y-2">
                            {study.results.map((result, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-700">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-green-50 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-green-600">{study.metrics.roi}</div>
                            <div className="text-sm text-green-700">ROI Achieved</div>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-blue-600">{study.metrics.payback}</div>
                            <div className="text-sm text-blue-700">Payback Period</div>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-purple-600">{study.metrics.efficiency}</div>
                            <div className="text-sm text-purple-700">Efficiency Gain</div>
                          </div>
                          <div className="bg-orange-50 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-orange-600">{study.metrics.cost_savings}</div>
                            <div className="text-sm text-orange-700">Annual Savings</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold mb-2 text-gray-800">Client Testimonial</h4>
                      <p className="text-gray-700 italic leading-relaxed">"{study.testimonial}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Methodology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">Our Proven Implementation Methodology</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableCaption>Structured approach ensuring consistent project success and measurable outcomes.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/6">Phase</TableHead>
                    <TableHead className="w-1/6">Duration</TableHead>
                    <TableHead className="w-1/3">Key Activities</TableHead>
                    <TableHead className="w-1/3">Deliverables</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Discovery</TableCell>
                    <TableCell>2-4 weeks</TableCell>
                    <TableCell>Stakeholder interviews, process mapping, technical assessment, requirements gathering</TableCell>
                    <TableCell>Business requirements document, technical architecture, project roadmap</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Design</TableCell>
                    <TableCell>3-6 weeks</TableCell>
                    <TableCell>Solution architecture, UI/UX design, integration planning, security design</TableCell>
                    <TableCell>System architecture, design mockups, integration specifications, security framework</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Development</TableCell>
                    <TableCell>8-16 weeks</TableCell>
                    <TableCell>Agile development, continuous testing, stakeholder reviews, iterative refinement</TableCell>
                    <TableCell>Working system, test results, documentation, training materials</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Deployment</TableCell>
                    <TableCell>2-4 weeks</TableCell>
                    <TableCell>User acceptance testing, data migration, go-live preparation, rollout execution</TableCell>
                    <TableCell>Production system, migrated data, user training, go-live support</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Support</TableCell>
                    <TableCell>Ongoing</TableCell>
                    <TableCell>System monitoring, performance optimization, user support, continuous improvement</TableCell>
                    <TableCell>System maintenance, performance reports, enhancement recommendations</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Case Studies with Interactive Elements */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Detailed Case Study Analysis</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Dive deep into our most impactful client transformations. Each case study provides 
                comprehensive insights into challenges, solutions, implementation details, and quantifiable results.
              </p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <Card key={index} className="shadow-2xl bg-white">
                  <CardHeader className="pb-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                        <CardDescription className="text-lg">
                          {study.company} • {study.industry} • {study.size}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline">{study.industry}</Badge>
                        <Badge variant="secondary">{study.timeline}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-8">
                    {/* Challenge & Solution */}
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                        <h4 className="font-bold text-red-800 mb-3">The Challenge</h4>
                        <p className="text-red-700 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-bold text-green-800 mb-3">Our Solution</h4>
                        <p className="text-green-700 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-3">Technologies & Platforms</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-blue-100 text-blue-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                        <CardContent className="p-6 text-center">
                          <div className="text-2xl font-bold mb-1">{study.metrics.roi}</div>
                          <div className="text-green-100 text-sm">Return on Investment</div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                        <CardContent className="p-6 text-center">
                          <div className="text-2xl font-bold mb-1">{study.metrics.payback}</div>
                          <div className="text-blue-100 text-sm">Payback Period</div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                        <CardContent className="p-6 text-center">
                          <div className="text-2xl font-bold mb-1">{study.metrics.efficiency}</div>
                          <div className="text-purple-100 text-sm">Efficiency Improvement</div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                        <CardContent className="p-6 text-center">
                          <div className="text-2xl font-bold mb-1">{study.metrics.cost_savings}</div>
                          <div className="text-orange-100 text-sm">Annual Cost Savings</div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Detailed Results */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold mb-4">Key Results Achieved</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Client Testimonial */}
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl text-blue-500">"</div>
                        <div>
                          <p className="text-blue-700 italic leading-relaxed mb-3">{study.testimonial}</p>
                          <div className="text-sm text-blue-600 font-medium">— {study.company} Leadership Team</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Across Industries</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our proven methodologies deliver consistent results across diverse industry verticals, 
                with deep expertise in sector-specific challenges and requirements.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Manufacturing Excellence</CardTitle>
                    <CardDescription>Production optimization and supply chain transformation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Projects Completed</span>
                        <span className="font-bold text-blue-600">150+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Average ROI</span>
                        <span className="font-bold text-green-600">340%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Efficiency Gains</span>
                        <span className="font-bold text-purple-600">35-55%</span>
                      </div>
                      <div className="mt-4">
                        <h5 className="font-semibold mb-2">Key Focus Areas:</h5>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">ERP Integration</Badge>
                          <Badge variant="outline">IoT Implementation</Badge>
                          <Badge variant="outline">Quality Management</Badge>
                          <Badge variant="outline">Supply Chain Optimization</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Healthcare Innovation</CardTitle>
                    <CardDescription>Patient care and operational efficiency improvements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Healthcare Providers Served</span>
                        <span className="font-bold text-blue-600">85+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Patient Satisfaction Increase</span>
                        <span className="font-bold text-green-600">28%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Cost Reduction</span>
                        <span className="font-bold text-purple-600">25-35%</span>
                      </div>
                      <div className="mt-4">
                        <h5 className="font-semibold mb-2">Key Focus Areas:</h5>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">EHR Integration</Badge>
                          <Badge variant="outline">HIPAA Compliance</Badge>
                          <Badge variant="outline">Telemedicine</Badge>
                          <Badge variant="outline">AI Diagnostics</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Financial Services</CardTitle>
                    <CardDescription>Digital banking and fintech transformation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Financial Institutions</span>
                        <span className="font-bold text-blue-600">45+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Processing Speed Improvement</span>
                        <span className="font-bold text-green-600">75%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Compliance Success Rate</span>
                        <span className="font-bold text-purple-600">100%</span>
                      </div>
                      <div className="mt-4">
                        <h5 className="font-semibold mb-2">Key Focus Areas:</h5>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Core Banking</Badge>
                          <Badge variant="outline">Mobile Banking</Badge>
                          <Badge variant="outline">Fraud Detection</Badge>
                          <Badge variant="outline">RegTech</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Retail & E-Commerce</CardTitle>
                    <CardDescription>Omnichannel experiences and operational optimization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Retail Brands Served</span>
                        <span className="font-bold text-blue-600">120+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Conversion Rate Increase</span>
                        <span className="font-bold text-green-600">45%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Mobile Sales Growth</span>
                        <span className="font-bold text-purple-600">250%</span>
                      </div>
                      <div className="mt-4">
                        <h5 className="font-semibold mb-2">Key Focus Areas:</h5>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">E-Commerce Platforms</Badge>
                          <Badge variant="outline">Inventory Management</Badge>
                          <Badge variant="outline">Personalization</Badge>
                          <Badge variant="outline">Omnichannel</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Methodologies Deep Dive */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">
            <h2 className="text-4xl font-semibold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Proven Implementation Methodologies
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="shadow-2xl border-0 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Agile-DevOps Hybrid Methodology</h3>
                  <p className="text-blue-100">Our proprietary approach combining Agile development with DevOps automation for enterprise-scale implementations.</p>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="text-lg font-semibold mb-2 text-blue-700">Phase 1: Strategic Foundation (Weeks 1-4)</h4>
                      <div className="space-y-3 text-sm text-gray-700">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="font-medium mb-2">Executive Alignment Workshop</div>
                          <p>Comprehensive stakeholder alignment sessions involving C-suite executives, department heads, and key technical leaders. Includes business case development, ROI projections, risk assessment, and success metrics definition. Average duration: 3 days intensive workshop with 2 weeks of follow-up documentation and refinement.</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="font-medium mb-2">Technical Architecture Deep Dive</div>
                          <p>Detailed current-state analysis including legacy system inventory, data flow mapping, integration point identification, security assessment, and scalability evaluation. Includes cloud readiness assessment, performance benchmarking, and infrastructure optimization recommendations.</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="font-medium mb-2">Business Process Optimization</div>
                          <p>End-to-end process mapping using BPMN 2.0 standards, identifying automation opportunities, bottleneck analysis, compliance requirements review, and future-state process design. Includes change management impact assessment and user journey optimization.</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="text-lg font-semibold mb-2 text-green-700">Phase 2: Foundation Development (Weeks 5-12)</h4>
                      <div className="space-y-3 text-sm text-gray-700">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="font-medium mb-2">Core Platform Setup</div>
                          <p>Infrastructure provisioning using Infrastructure as Code (IaC) principles, container orchestration setup, CI/CD pipeline configuration, monitoring and alerting implementation, backup and disaster recovery setup, and security baseline establishment including encryption at rest and in transit.</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="font-medium mb-2">Data Architecture Implementation</div>
                          <p>Master data management setup, data warehouse design and implementation, ETL/ELT process development, data quality framework establishment, data governance policy implementation, and real-time analytics platform configuration.</p>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <div className="font-medium mb-2">Security Framework Deployment</div>
                          <p>Multi-factor authentication implementation, role-based access control (RBAC) setup, API security gateway deployment, vulnerability scanning automation, compliance monitoring implementation, and incident response procedure establishment.</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-6">
                      <h4 className="text-lg font-semibold mb-2 text-purple-700">Phase 3: Feature Development (Weeks 13-24)</h4>
                      <div className="space-y-3 text-sm text-gray-700">
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="font-medium mb-2">Sprint-Based Development Cycles</div>
                          <p>2-week sprint iterations with daily standups, sprint planning, retrospectives, and demo sessions. Each sprint includes feature development, automated testing, code review, documentation updates, and stakeholder feedback integration. Average velocity: 40-60 story points per sprint.</p>
                        </div>
                        <div className="bg-teal-50 p-4 rounded-lg">
                          <div className="font-medium mb-2">Continuous Integration & Deployment</div>
                          <p>Automated build processes, comprehensive test suite execution (unit, integration, performance, security), automated deployment to staging and production environments, feature flag implementation, and blue-green deployment strategies for zero-downtime releases.</p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg">
                          <div className="font-medium mb-2">Quality Assurance Integration</div>
                          <p>Automated testing frameworks including API testing, UI automation, performance testing, security scanning, accessibility testing, and cross-browser compatibility validation. Test coverage maintained above 85% with automated reporting and trend analysis.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-2xl border-0 overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Enterprise Change Management Framework</h3>
                  <p className="text-green-100">Comprehensive organizational transformation approach ensuring 95%+ user adoption and sustained business value realization.</p>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="border-l-4 border-orange-500 pl-6">
                      <h4 className="text-lg font-semibold mb-2 text-orange-700">Stakeholder Engagement Strategy</h4>
                      <div className="space-y-3 text-sm text-gray-700">
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <div className="font-medium mb-2">Executive Sponsorship Program</div>
                          <p>Dedicated executive sponsor identification and engagement, regular steering committee meetings, executive dashboard development with key performance indicators, escalation path establishment, and change champion network development across all organizational levels.</p>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <div className="font-medium mb-2">Department Representative Network</div>
                          <p>Cross-functional representative identification from each business unit, regular feedback sessions, requirements validation workshops, user story development collaboration, and peer-to-peer training program establishment to ensure organic knowledge transfer.</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-6">
                      <h4 className="text-lg font-semibold mb-2 text-indigo-700">Training & Knowledge Transfer</h4>
                      <div className="space-y-3 text-sm text-gray-700">
                        <div className="bg-indigo-50 p-4 rounded-lg">
                          <div className="font-medium mb-2">Multi-Modal Learning Approach</div>
                          <p>Comprehensive training program including instructor-led sessions, self-paced e-learning modules, hands-on workshops, video tutorials, documentation wikis, and mobile learning applications. Customized content for different user roles and proficiency levels.</p>
                        </div>
                        <div className="bg-cyan-50 p-4 rounded-lg">
                          <div className="font-medium mb-2">Competency Assessment & Certification</div>
                          <p>Skills assessment testing before and after training, certification programs for power users, ongoing competency monitoring, refresher training schedules, and performance analytics to identify knowledge gaps and optimization opportunities.</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-pink-500 pl-6">
                      <h4 className="text-lg font-semibold mb-2 text-pink-700">Communication & Feedback Loops</h4>
                      <div className="space-y-3 text-sm text-gray-700">
                        <div className="bg-pink-50 p-4 rounded-lg">
                          <div className="font-medium mb-2">Multi-Channel Communication Strategy</div>
                          <p>Regular newsletter updates, town hall meetings, project portal with real-time updates, mobile notifications, digital signage updates, and leadership communication cascades to ensure consistent messaging and transparency throughout the implementation.</p>
                        </div>
                        <div className="bg-rose-50 p-4 rounded-lg">
                          <div className="font-medium mb-2">Continuous Feedback Collection</div>
                          <p>User feedback surveys, focus groups, suggestion boxes, real-time support chat, usage analytics monitoring, and regular pulse surveys to measure adoption rates, satisfaction levels, and identify areas for improvement and optimization.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-12 rounded-2xl shadow-2xl">
              <h3 className="text-3xl font-semibold mb-8 text-center">Advanced Implementation Techniques</h3>
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-center">Parallel Development Streams</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Our advanced project management approach enables multiple development streams to run in parallel, reducing overall implementation time by 35-50% while maintaining quality and integration integrity.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Frontend and backend development in parallel tracks</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Database optimization concurrent with application development</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Integration testing during feature development</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>User training preparation alongside system build</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-gradient-to-br from-green-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-white text-2xl">🔄</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-center">Zero-Downtime Migration</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Proprietary migration techniques ensuring business continuity during system transitions. Our approach has achieved 99.99% uptime during critical system cutovers for enterprise clients.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Blue-green deployment strategies for seamless transitions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Real-time data synchronization during migration</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Automated rollback capabilities within 30 seconds</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Comprehensive pre-migration validation testing</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-center">AI-Driven Optimization</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Machine learning algorithms continuously analyze system performance, user behavior, and business metrics to provide automated optimization recommendations and predictive maintenance insights.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Predictive performance monitoring and alerts</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Automated resource scaling based on usage patterns</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>User behavior analysis for UX optimization</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Anomaly detection for proactive issue resolution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Technology Assessment Framework */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">
            <h2 className="text-4xl font-semibold mb-16 text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Technology Assessment & Selection Framework
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <CardTitle className="text-2xl">Enterprise Architecture Evaluation</CardTitle>
                    <CardDescription className="text-blue-100">
                      Comprehensive assessment of current technology landscape and future-state architecture design
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Current State Analysis</h4>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="font-medium mb-2">Infrastructure Assessment</div>
                              <ul className="space-y-1 text-gray-700">
                                <li>• Server capacity and performance analysis</li>
                                <li>• Network architecture evaluation</li>
                                <li>• Storage systems assessment</li>
                                <li>• Cloud readiness evaluation</li>
                                <li>• Disaster recovery capabilities</li>
                              </ul>
                            </div>
                            <div>
                              <div className="font-medium mb-2">Application Portfolio Review</div>
                              <ul className="space-y-1 text-gray-700">
                                <li>• Legacy system inventory</li>
                                <li>• Integration complexity mapping</li>
                                <li>• Technical debt assessment</li>
                                <li>• Security vulnerability scanning</li>
                                <li>• Performance bottleneck identification</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Future State Design</h4>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Scalability Planning</span>
                              <Badge variant="outline" className="bg-green-100 text-green-700">Enterprise Ready</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Integration Architecture</span>
                              <Badge variant="outline" className="bg-blue-100 text-blue-700">API-First Design</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Security Framework</span>
                              <Badge variant="outline" className="bg-red-100 text-red-700">Zero Trust Model</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Cloud Strategy</span>
                              <Badge variant="outline" className="bg-purple-100 text-purple-700">Hybrid Multi-Cloud</Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Risk Assessment Matrix</h4>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="bg-green-100 p-2 rounded text-center">
                              <div className="font-medium text-green-800">Low Risk</div>
                              <div className="text-green-700">Standard implementations</div>
                            </div>
                            <div className="bg-yellow-100 p-2 rounded text-center">
                              <div className="font-medium text-yellow-800">Medium Risk</div>
                              <div className="text-yellow-700">Custom integrations</div>
                            </div>
                            <div className="bg-red-100 p-2 rounded text-center">
                              <div className="font-medium text-red-800">High Risk</div>
                              <div className="text-red-700">Legacy migrations</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                    <CardTitle className="text-2xl">Vendor & Technology Selection</CardTitle>
                    <CardDescription className="text-green-100">
                      Multi-criteria decision analysis for optimal technology stack selection
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Evaluation Criteria Framework</h4>
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">Technical Fit</span>
                              <span className="text-2xl font-bold text-green-600">35%</span>
                            </div>
                            <div className="text-sm text-gray-700">
                              Feature completeness, performance capabilities, scalability, integration ease, technical architecture alignment
                            </div>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">Financial Impact</span>
                              <span className="text-2xl font-bold text-blue-600">25%</span>
                            </div>
                            <div className="text-sm text-gray-700">
                              Total cost of ownership, implementation costs, ongoing maintenance, ROI potential, budget alignment
                            </div>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">Vendor Stability</span>
                              <span className="text-2xl font-bold text-purple-600">20%</span>
                            </div>
                            <div className="text-sm text-gray-700">
                              Company financial health, product roadmap, support quality, market presence, reference clients
                            </div>
                          </div>
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">Implementation Risk</span>
                              <span className="text-2xl font-bold text-orange-600">20%</span>
                            </div>
                            <div className="text-sm text-gray-700">
                              Complexity assessment, timeline feasibility, resource requirements, change management impact
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Proof of Concept Framework</h4>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                              <div>
                                <div className="font-medium">Requirements Validation</div>
                                <div className="text-gray-700">Core use case testing with real data</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                              <div>
                                <div className="font-medium">Performance Benchmarking</div>
                                <div className="text-gray-700">Load testing and scalability validation</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                              <div>
                                <div className="font-medium">Integration Testing</div>
                                <div className="text-gray-700">API compatibility and data flow validation</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                              <div>
                                <div className="font-medium">User Experience Validation</div>
                                <div className="text-gray-700">Stakeholder feedback and usability testing</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-12 rounded-2xl">
              <h3 className="text-3xl font-semibold mb-8 text-center">Technology Specialization Matrix</h3>
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">🔧</span>
                  </div>
                  <h4 className="font-semibold mb-4 text-blue-700">ERP Solutions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>SAP S/4HANA</span>
                      <Badge variant="outline">Expert</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Oracle NetSuite</span>
                      <Badge variant="outline">Expert</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Odoo ERP</span>
                      <Badge variant="outline">Certified Partner</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Microsoft Dynamics</span>
                      <Badge variant="outline">Gold Partner</Badge>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">☁️</span>
                  </div>
                  <h4 className="font-semibold mb-4 text-green-700">Cloud Platforms</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>AWS</span>
                      <Badge variant="outline">Advanced Partner</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Microsoft Azure</span>
                      <Badge variant="outline">Gold Partner</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Google Cloud</span>
                      <Badge variant="outline">Premier Partner</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>IBM Cloud</span>
                      <Badge variant="outline">Business Partner</Badge>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">🔐</span>
                  </div>
                  <h4 className="font-semibold mb-4 text-purple-700">Security & Compliance</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>ISO 27001</span>
                      <Badge variant="outline">Certified</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>SOC 2 Type II</span>
                      <Badge variant="outline">Compliant</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>HIPAA</span>
                      <Badge variant="outline">Compliant</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>PCI DSS</span>
                      <Badge variant="outline">Level 1</Badge>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <h4 className="font-semibold mb-4 text-orange-700">Development Frameworks</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>React Ecosystem</span>
                      <Badge variant="outline">Expert</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Node.js Platform</span>
                      <Badge variant="outline">Expert</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Python/Django</span>
                      <Badge variant="outline">Advanced</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>.NET Framework</span>
                      <Badge variant="outline">Certified</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Implementation Insights */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">
            <h2 className="text-4xl font-semibold mb-16 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Industry-Specific Implementation Insights
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card className="shadow-2xl border-0 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Manufacturing Excellence</h3>
                  <div className="text-blue-100">Smart manufacturing and Industry 4.0 implementations</div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-700">IoT Integration Challenges</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Manufacturing environments require seamless integration of IoT sensors, PLCs, and legacy equipment 
                        with modern ERP systems while maintaining real-time data accuracy and system reliability.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Sensor Integration Points</span>
                          <span className="font-bold text-blue-600">500+ per facility</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Real-time Data Processing</span>
                          <span className="font-bold text-green-600">&lt; 100ms latency</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Equipment Uptime</span>
                          <span className="font-bold text-purple-600">99.5% achieved</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-700">Quality Management Systems</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Implementation of comprehensive quality control workflows with automated testing protocols, 
                        statistical process control, and regulatory compliance tracking across production lines.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <Badge variant="outline">ISO 9001 Compliance</Badge>
                        <Badge variant="outline">SPC Implementation</Badge>
                        <Badge variant="outline">Defect Tracking</Badge>
                        <Badge variant="outline">Audit Trails</Badge>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-purple-700">Supply Chain Optimization</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Advanced demand forecasting, supplier integration, and inventory optimization using 
                        machine learning algorithms and predictive analytics for optimal resource allocation.
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span>Demand forecast accuracy: 95%+</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span>Inventory reduction: 25-40%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span>Supplier lead time optimization</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-2xl border-0 overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Healthcare Innovation</h3>
                  <div className="text-green-100">Patient-centric technology solutions and regulatory compliance</div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-700">Interoperability Solutions</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        HL7 FHIR-compliant integration between multiple EHR systems, laboratory information systems, 
                        and third-party medical devices ensuring seamless data exchange and patient record continuity.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>EHR Systems Integrated</span>
                          <span className="font-bold text-green-600">Epic, Cerner, AllScripts</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Data Exchange Standard</span>
                          <span className="font-bold text-blue-600">HL7 FHIR R4</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Patient Record Accuracy</span>
                          <span className="font-bold text-purple-600">99.8%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-700">Telehealth Platform Development</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        HIPAA-compliant telehealth solutions with video consultation, remote patient monitoring, 
                        prescription management, and integrated billing systems for comprehensive virtual care delivery.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <Badge variant="outline">HIPAA Compliant</Badge>
                        <Badge variant="outline">Video Quality HD</Badge>
                        <Badge variant="outline">RPM Integration</Badge>
                        <Badge variant="outline">E-Prescribing</Badge>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-purple-700">Clinical Decision Support</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        AI-powered clinical decision support systems providing evidence-based recommendations, 
                        drug interaction alerts, and diagnostic assistance integrated directly into clinical workflows.
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span>Clinical alerts: 98% accuracy</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span>Drug interaction detection</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span>Evidence-based protocols</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-2xl border-0 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Financial Services</h3>
                  <div className="text-purple-100">Secure, compliant, and scalable financial technology solutions</div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-purple-700">Regulatory Compliance Automation</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Automated compliance monitoring and reporting systems ensuring adherence to SOX, GDPR, PCI-DSS, 
                        and other financial regulations with real-time audit trails and exception handling.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Compliance Standards</span>
                          <span className="font-bold text-purple-600">SOX, GDPR, PCI-DSS</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Audit Trail Retention</span>
                          <span className="font-bold text-blue-600">7+ Years</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Compliance Score</span>
                          <span className="font-bold text-green-600">100%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-orange-700">Fraud Detection Systems</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Machine learning-based fraud detection with behavioral analysis, pattern recognition, 
                        and real-time transaction monitoring to prevent financial crimes and protect customer assets.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <Badge variant="outline">ML Algorithms</Badge>
                        <Badge variant="outline">Real-time Analysis</Badge>
                        <Badge variant="outline">Behavioral Patterns</Badge>
                        <Badge variant="outline">Risk Scoring</Badge>
                      </div>
                    </div>

                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-teal-700">Digital Banking Platforms</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Next-generation digital banking solutions with omnichannel customer experience, 
                        mobile-first design, and integrated financial management tools for enhanced user engagement.
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span>Mobile adoption: 90%+</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span>Transaction speed: &lt;1 second</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span>Customer satisfaction: 95%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-12 rounded-2xl shadow-2xl">
              <h3 className="text-3xl font-semibold mb-8 text-center">Cross-Industry Success Metrics</h3>
              <div className="grid lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">95%</span>
                  </div>
                  <h4 className="font-semibold mb-2">Project Success Rate</h4>
                  <p className="text-sm text-gray-700">
                    Consistently delivering projects on time, within budget, and exceeding performance expectations 
                    across all industries and project complexities.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">68%</span>
                  </div>
                  <h4 className="font-semibold mb-2">Average Efficiency Gain</h4>
                  <p className="text-sm text-gray-700">
                    Significant operational efficiency improvements through process optimization, automation, 
                    and streamlined workflows resulting in measurable productivity increases.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">14mo</span>
                  </div>
                  <h4 className="font-semibold mb-2">Average ROI Payback</h4>
                  <p className="text-sm text-gray-700">
                    Rapid return on investment achievement through strategic implementation approach and 
                    continuous value optimization throughout the project lifecycle.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">99%</span>
                  </div>
                  <h4 className="font-semibold mb-2">Client Retention Rate</h4>
                  <p className="text-sm text-gray-700">
                    Long-term partnerships and ongoing engagement through exceptional service delivery, 
                    continuous support, and sustained business value creation.
                  </p>
                </div>
              </div>

              <div className="mt-12 grid lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4 text-blue-700">Implementation Timeline Analysis</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Small-Scale Projects (1-50 users)</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-blue-200 h-2 rounded-full overflow-hidden">
                          <div className="w-1/3 bg-blue-600 h-full"></div>
                        </div>
                        <span className="text-sm font-medium">3-6 months</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Medium Enterprise (50-500 users)</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-green-200 h-2 rounded-full overflow-hidden">
                          <div className="w-2/3 bg-green-600 h-full"></div>
                        </div>
                        <span className="text-sm font-medium">6-12 months</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Large Enterprise (500+ users)</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-purple-200 h-2 rounded-full overflow-hidden">
                          <div className="w-full bg-purple-600 h-full"></div>
                        </div>
                        <span className="text-sm font-medium">12-24 months</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4 text-green-700">Value Realization Timeline</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Quick Wins (Month 1-3)</span>
                        <span className="text-sm font-medium">15-25% improvement</span>
                      </div>
                      <div className="w-full bg-green-200 h-2 rounded-full">
                        <div className="w-1/4 bg-green-600 h-full rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Substantial Gains (Month 3-12)</span>
                        <span className="text-sm font-medium">40-60% improvement</span>
                      </div>
                      <div className="w-full bg-blue-200 h-2 rounded-full">
                        <div className="w-1/2 bg-blue-600 h-full rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Full Optimization (Year 1+)</span>
                        <span className="text-sm font-medium">70-100% improvement</span>
                      </div>
                      <div className="w-full bg-purple-200 h-2 rounded-full">
                        <div className="w-4/5 bg-purple-600 h-full rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Project Portfolio Analysis */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-zinc-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">
            <h2 className="text-4xl font-semibold mb-16 text-center bg-gradient-to-r from-slate-600 to-zinc-600 bg-clip-text text-transparent">
              Comprehensive Project Portfolio & Detailed Analysis
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="shadow-2xl border-0 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Advanced Manufacturing Transformation</h3>
                  <div className="grid grid-cols-2 gap-4 text-emerald-100">
                    <div>Industry: Heavy Manufacturing</div>
                    <div>Timeline: 18 months</div>
                    <div>Investment: $3.2M</div>
                    <div>ROI: 385%</div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-emerald-700">Executive Summary</h4>
                      <div className="bg-emerald-50 p-4 rounded-lg text-sm text-gray-700">
                        <p className="mb-3">
                          Global aerospace components manufacturer with 2,500+ employees across 8 facilities faced critical challenges 
                          with outdated ERP systems, manual quality control processes, and disconnected supply chain management. 
                          The existing infrastructure consisted of legacy AS/400 systems, standalone MRP modules, and Excel-based 
                          reporting that created significant operational inefficiencies and compliance risks.
                        </p>
                        <p>
                          Our comprehensive digital transformation initiative integrated advanced manufacturing execution systems (MES), 
                          IoT-enabled production monitoring, AI-driven quality control, and unified supply chain orchestration platform 
                          resulting in unprecedented operational excellence and substantial cost savings.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700">Detailed Implementation Phases</h4>
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h5 className="font-medium text-blue-800">Phase 1: Infrastructure Modernization (Months 1-4)</h5>
                            <Badge variant="outline" className="bg-blue-100 text-blue-700">Completed</Badge>
                          </div>
                          <div className="text-sm text-gray-700 space-y-2">
                            <p>
                              <strong>Cloud Infrastructure Setup:</strong> Hybrid cloud architecture deployment using AWS and on-premise 
                              infrastructure for sensitive manufacturing data. Implementation included redundant data centers, 
                              disaster recovery sites, and real-time backup systems with RPO &lt; 15 minutes.
                            </p>
                            <p>
                              <strong>Network Modernization:</strong> Plant-wide fiber optic network installation with industrial-grade 
                              Wi-Fi 6 deployment, ensuring 99.9% uptime and &lt;10ms latency for critical manufacturing systems.
                            </p>
                            <p>
                              <strong>Security Framework:</strong> Zero-trust security model implementation with multi-factor authentication, 
                              endpoint detection and response (EDR), and industrial cybersecurity protocols compliant with NIST standards.
                            </p>
                            <div className="grid grid-cols-3 gap-2 mt-3">
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-blue-600">99.9%</div>
                                <div className="text-xs">Network Uptime</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-green-600">&lt;10ms</div>
                                <div className="text-xs">Latency</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-purple-600">24/7</div>
                                <div className="text-xs">Monitoring</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h5 className="font-medium text-green-800">Phase 2: ERP Core Implementation (Months 3-10)</h5>
                            <Badge variant="outline" className="bg-green-100 text-green-700">Completed</Badge>
                          </div>
                          <div className="text-sm text-gray-700 space-y-2">
                            <p>
                              <strong>SAP S/4HANA Deployment:</strong> Complete ERP transformation with custom manufacturing modules, 
                              integrated financial management, advanced analytics, and real-time reporting capabilities across all facilities.
                            </p>
                            <p>
                              <strong>Data Migration Strategy:</strong> Phased migration of 15TB+ historical data from legacy systems 
                              with comprehensive data cleansing, validation, and integrity verification processes ensuring 99.95% accuracy.
                            </p>
                            <p>
                              <strong>Integration Development:</strong> Custom API development for seamless integration with existing 
                              CAD/CAM systems, PLCs, SCADA systems, and third-party logistics providers using RESTful APIs and EDI protocols.
                            </p>
                            <div className="grid grid-cols-4 gap-1 mt-3 text-xs">
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-green-600">15TB</div>
                                <div>Data Migrated</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-blue-600">99.95%</div>
                                <div>Data Accuracy</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-purple-600">50+</div>
                                <div>Integrations</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-orange-600">8</div>
                                <div>Facilities</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h5 className="font-medium text-purple-800">Phase 3: IoT & Smart Manufacturing (Months 6-14)</h5>
                            <Badge variant="outline" className="bg-purple-100 text-purple-700">Completed</Badge>
                          </div>
                          <div className="text-sm text-gray-700 space-y-2">
                            <p>
                              <strong>IoT Sensor Network:</strong> Deployment of 2,500+ industrial IoT sensors across production lines 
                              for real-time monitoring of temperature, pressure, vibration, and quality parameters with edge computing 
                              capabilities for immediate response to anomalies.
                            </p>
                            <p>
                              <strong>Predictive Maintenance:</strong> Machine learning algorithms analyzing sensor data to predict 
                              equipment failures 30-45 days in advance, reducing unplanned downtime by 75% and maintenance costs by 40%.
                            </p>
                            <p>
                              <strong>Digital Twin Implementation:</strong> Virtual replicas of critical production assets enabling 
                              simulation, optimization, and predictive modeling for continuous improvement and capacity planning.
                            </p>
                            <div className="grid grid-cols-3 gap-2 mt-3">
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-purple-600">2,500+</div>
                                <div class="text-xs">IoT Sensors</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-green-600">75%</div>
                                <div class="text-xs">Downtime Reduction</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-blue-600">45 days</div>
                                <div className="text-xs">Failure Prediction</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h5 className="font-medium text-orange-800">Phase 4: Quality & Compliance Systems (Months 8-16)</h5>
                            <Badge variant="outline" className="bg-orange-100 text-orange-700">Completed</Badge>
                          </div>
                          <div className="text-sm text-gray-700 space-y-2">
                            <p>
                              <strong>Automated Quality Control:</strong> Computer vision systems and automated inspection processes 
                              identifying defects with 99.8% accuracy, reducing manual inspection time by 80% while improving quality consistency.
                            </p>
                            <p>
                              <strong>Regulatory Compliance Management:</strong> Comprehensive compliance tracking system ensuring 
                              adherence to AS9100, ISO 9001, and FAA regulations with automated audit trails and real-time compliance monitoring.
                            </p>
                            <p>
                              <strong>Statistical Process Control:</strong> Real-time SPC implementation with automated control charts, 
                              capability studies, and process optimization recommendations based on Six Sigma methodologies.
                            </p>
                            <div className="grid grid-cols-3 gap-2 mt-3">
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-orange-600">99.8%</div>
                                <div className="text-xs">Quality Accuracy</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-green-600">80%</div>
                                <div className="text-xs">Inspection Time Saved</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-purple-600">100%</div>
                                <div className="text-xs">Compliance Rate</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-teal-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h5 className="font-medium text-teal-800">Phase 5: Training & Optimization (Months 14-18)</h5>
                            <Badge variant="outline" className="bg-teal-100 text-teal-700">Completed</Badge>
                          </div>
                          <div className="text-sm text-gray-700 space-y-2">
                            <p>
                              <strong>Comprehensive Training Program:</strong> Multi-modal training approach including VR-based equipment 
                              training, online learning modules, hands-on workshops, and certification programs for 2,500+ employees 
                              achieving 98% user adoption rate.
                            </p>
                            <p>
                              <strong>Change Management:</strong> Structured change management program with executive sponsorship, 
                              change champion network, and continuous communication strategy ensuring smooth transition and sustained adoption.
                            </p>
                            <p>
                              <strong>Performance Optimization:</strong> Continuous monitoring and optimization of system performance, 
                              user workflows, and business processes resulting in additional 15% efficiency improvements post-implementation.
                            </p>
                            <div className="grid grid-cols-3 gap-2 mt-3">
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-teal-600">98%</div>
                                <div className="text-xs">User Adoption</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-green-600">2,500+</div>
                                <div className="text-xs">Trained Users</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-purple-600">15%</div>
                                <div className="text-xs">Additional Efficiency</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-red-700">Critical Challenges Overcome</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-red-50 p-4 rounded-lg text-sm">
                          <h5 className="font-medium mb-2 text-red-800">Legacy System Integration</h5>
                          <p className="text-gray-700 mb-2">
                            Integrating 30+ year old AS/400 mainframe systems with modern ERP while maintaining production continuity 
                            required custom middleware development and careful data mapping strategies.
                          </p>
                          <div className="flex items-center gap-2 text-xs">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span>Zero production downtime during cutover</span>
                          </div>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg text-sm">
                          <h5 className="font-medium mb-2 text-red-800">Multi-site Coordination</h5>
                          <p className="text-gray-700 mb-2">
                            Coordinating implementation across 8 global facilities with different time zones, languages, and 
                            regulatory requirements while maintaining consistent processes and data integrity.
                          </p>
                          <div className="flex items-center gap-2 text-xs">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span>Synchronized go-live across all facilities</span>
                          </div>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg text-sm">
                          <h5 className="font-medium mb-2 text-red-800">Regulatory Compliance</h5>
                          <p className="text-gray-700 mb-2">
                            Meeting strict aerospace industry regulations (AS9100, FAA) while implementing new processes and 
                            maintaining existing certifications throughout the transition period.
                          </p>
                          <div className="flex items-center gap-2 text-xs">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span>100% regulatory compliance maintained</span>
                          </div>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg text-sm">
                          <h5 className="font-medium mb-2 text-red-800">Change Resistance</h5>
                          <p className="text-gray-700 mb-2">
                            Overcoming significant resistance from experienced workforce accustomed to legacy processes through 
                            comprehensive change management and involvement in system design decisions.
                          </p>
                          <div className="flex items-center gap-2 text-xs">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span>98% final user acceptance achieved</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-green-700">Measurable Business Impact</h4>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                          <div className="space-y-3">
                            <div className="flex justify-between items-center border-b pb-1">
                              <span className="font-medium">Manufacturing Efficiency</span>
                              <span className="font-bold text-green-600">+52%</span>
                            </div>
                            <div className="flex justify-between items-center border-b pb-1">
                              <span className="font-medium">Quality Defect Rate</span>
                              <span className="font-bold text-green-600">-78%</span>
                            </div>
                            <div className="flex justify-between items-center border-b pb-1">
                              <span className="font-medium">Inventory Carrying Cost</span>
                              <span className="font-bold text-green-600">-35%</span>
                            </div>
                            <div className="flex justify-between items-center border-b pb-1">
                              <span className="font-medium">Order Fulfillment Time</span>
                              <span className="font-bold text-green-600">-45%</span>
                            </div>
                            <div className="flex justify-between items-center border-b pb-1">
                              <span className="font-medium">Unplanned Downtime</span>
                              <span className="font-bold text-green-600">-75%</span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center border-b pb-1">
                              <span className="font-medium">Annual Cost Savings</span>
                              <span className="font-bold text-blue-600">$4.8M</span>
                            </div>
                            <div className="flex justify-between items-center border-b pb-1">
                              <span className="font-medium">Revenue Increase</span>
                              <span className="font-bold text-purple-600">$12.3M</span>
                            </div>
                            <div className="flex justify-between items-center border-b pb-1">
                              <span className="font-medium">Compliance Incidents</span>
                              <span className="font-bold text-green-600">Zero</span>
                            </div>
                            <div className="flex justify-between items-center border-b pb-1">
                              <span className="font-medium">Employee Satisfaction</span>
                              <span className="font-bold text-orange-600">+40%</span>
                            </div>
                            <div className="flex justify-between items-center border-b pb-1">
                              <span className="font-medium">Customer Satisfaction</span>
                              <span className="font-bold text-teal-600">+38%</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 p-4 bg-white rounded-lg">
                          <h5 className="font-medium mb-3 text-center">Long-term Value Creation</h5>
                          <div className="grid grid-cols-3 gap-4 text-center text-sm">
                            <div>
                              <div className="text-2xl font-bold text-green-600 mb-1">Year 1</div>
                              <div className="text-gray-700">ROI: 125%</div>
                              <div className="text-gray-600">Payback achieved</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-blue-600 mb-1">Year 2</div>
                              <div className="text-gray-700">ROI: 285%</div>
                              <div className="text-gray-600">Full optimization</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-purple-600 mb-1">Year 3</div>
                              <div className="text-gray-700">ROI: 385%</div>
                              <div className="text-gray-600">Continuous improvement</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-2xl border-0 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Healthcare Network Digital Transformation</h3>
                  <div className="grid grid-cols-2 gap-4 text-indigo-100">
                    <div>Industry: Multi-Specialty Healthcare</div>
                    <div>Timeline: 20 months</div>
                    <div>Investment: $4.5M</div>
                    <div>ROI: 420%</div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-indigo-700">Executive Summary</h4>
                      <div className="bg-indigo-50 p-4 rounded-lg text-sm text-gray-700">
                        <p className="mb-3">
                          Comprehensive digital transformation of a regional healthcare network serving 250,000+ patients across 
                          25 locations with 800+ healthcare providers. The legacy infrastructure included multiple incompatible 
                          EHR systems, fragmented billing processes, manual appointment scheduling, and limited telemedicine capabilities.
                        </p>
                        <p>
                          Our solution integrated advanced EHR interoperability, AI-powered clinical decision support, 
                          comprehensive telemedicine platform, automated revenue cycle management, and real-time analytics 
                          dashboard resulting in improved patient outcomes and operational excellence.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-blue-700">Key Technology Components</h4>
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h5 className="font-medium text-blue-800 mb-2">Epic EHR Unification & Interoperability</h5>
                          <div className="text-sm text-gray-700 space-y-2">
                            <p>
                              Consolidated five disparate EHR systems (Epic, Cerner, AllScripts, and custom solutions) into 
                              unified Epic platform with comprehensive HL7 FHIR R4 interoperability framework enabling 
                              seamless data exchange with external laboratories, pharmacies, and specialist networks.
                            </p>
                            <div className="grid grid-cols-4 gap-2 mt-3">
                              <div className="text-center bg-white p-2 rounded text-xs">
                                <div className="font-bold text-blue-600">5</div>
                                <div>Systems Unified</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded text-xs">
                                <div className="font-bold text-green-600">2.8M</div>
                                <div>Patient Records</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded text-xs">
                                <div className="font-bold text-purple-600">FHIR R4</div>
                                <div>Compliance</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded text-xs">
                                <div className="font-bold text-orange-600">99.9%</div>
                                <div>Uptime</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <h5 className="font-medium text-green-800 mb-2">AI-Powered Clinical Decision Support</h5>
                          <div className="text-sm text-gray-700 space-y-2">
                            <p>
                              Machine learning algorithms analyzing patient data, medical history, and clinical guidelines to provide 
                              real-time decision support, drug interaction alerts, and evidence-based treatment recommendations 
                              directly integrated into clinical workflows.
                            </p>
                            <div className="grid grid-cols-3 gap-2 mt-3">
                              <div className="text-center bg-white p-2 rounded text-xs">
                                <div className="font-bold text-green-600">98.5%</div>
                                <div>Alert Accuracy</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded text-xs">
                                <div className="font-bold text-blue-600">35%</div>
                                <div>Faster Diagnosis</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded text-xs">
                                <div className="font-bold text-purple-600">15%</div>
                                <div>Cost Reduction</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h5 className="font-medium text-purple-800 mb-2">Comprehensive Telemedicine Platform</h5>
                          <div className="text-sm text-gray-700 space-y-2">
                            <p>
                              HIPAA-compliant telemedicine solution with HD video consultations, remote patient monitoring, 
                              digital prescription management, and seamless integration with existing EHR systems enabling 
                              continuity of care regardless of patient location.
                            </p>
                            <div className="grid grid-cols-3 gap-2 mt-3">
                              <div className="text-center bg-white p-2 rounded text-xs">
                                <div className="font-bold text-purple-600">25,000+</div>
                                <div>Monthly Visits</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded text-xs">
                                <div className="font-bold text-green-600">95%</div>
                                <div>Patient Satisfaction</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded text-xs">
                                <div className="font-bold text-blue-600">40%</div>
                                <div>Cost Savings</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h5 className="font-medium text-orange-800 mb-2">Automated Revenue Cycle Management</h5>
                          <div className="text-sm text-gray-700 space-y-2">
                            <p>
                              End-to-end revenue cycle automation including eligibility verification, prior authorization management, 
                              automated coding assistance, claim submission, denial management, and patient billing with 
                              integrated payment processing and collections management.
                            </p>
                            <div className="grid grid-cols-4 gap-1 mt-3 text-xs">
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-orange-600">95%</div>
                                <div>Clean Claims</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-green-600">30%</div>
                                <div>Faster Payment</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-blue-600">60%</div>
                                <div>Denial Reduction</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-purple-600">$2.8M</div>
                                <div>Annual Savings</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-red-700">Complex Implementation Challenges</h4>
                      <div className="space-y-3">
                        <div className="bg-red-50 p-4 rounded-lg text-sm">
                          <h5 className="font-medium mb-2 text-red-800">HIPAA Compliance & Data Security</h5>
                          <p className="text-gray-700 mb-2">
                            Ensuring full HIPAA compliance during data migration of 2.8M patient records while maintaining 
                            end-to-end encryption, audit trails, and access controls across all systems and user roles.
                          </p>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="flex items-center gap-2 text-xs">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                              <span>Zero compliance violations</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                              <span>AES-256 encryption throughout</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg text-sm">
                          <h5 className="font-medium mb-2 text-red-800">Provider Workflow Integration</h5>
                          <p className="text-gray-700 mb-2">
                            Seamlessly integrating new systems into existing clinical workflows while minimizing disruption 
                            to patient care and maintaining provider productivity throughout the transition period.
                          </p>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="flex items-center gap-2 text-xs">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                              <span>Phased rollout by specialty</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                              <span>24/7 support during transition</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 p-4 rounded-lg text-sm">
                          <h5 className="font-medium mb-2 text-red-800">Interoperability Complexity</h5>
                          <p className="text-gray-700 mb-2">
                            Establishing seamless data exchange with 150+ external healthcare entities including hospitals, 
                            laboratories, imaging centers, and specialty clinics using various standards and protocols.
                          </p>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="flex items-center gap-2 text-xs">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                              <span>150+ external connections</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                              <span>Real-time data synchronization</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-green-700">Patient & Provider Benefits</h4>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                          <div className="space-y-3">
                            <div className="border-b pb-2">
                              <div className="font-medium text-green-800 mb-1">Patient Experience Improvements</div>
                              <div className="space-y-1">
                                <div className="flex justify-between">
                                  <span>Appointment Scheduling Time</span>
                                  <span className="font-bold text-green-600">-65%</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Patient Portal Adoption</span>
                                  <span className="font-bold text-blue-600">88%</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Wait Times</span>
                                  <span className="font-bold text-green-600">-45%</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Patient Satisfaction Score</span>
                                  <span className="font-bold text-purple-600">4.7/5</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="border-b pb-2">
                              <div className="font-medium text-blue-800 mb-1">Provider Efficiency Gains</div>
                              <div className="space-y-1">
                                <div className="flex justify-between">
                                  <span>Documentation Time</span>
                                  <span className="font-bold text-green-600">-40%</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Patients per Day Capacity</span>
                                  <span className="font-bold text-blue-600">+25%</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Clinical Decision Time</span>
                                  <span className="font-bold text-green-600">-30%</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Provider Satisfaction</span>
                                  <span className="font-bold text-purple-600">4.5/5</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-12 rounded-2xl shadow-2xl">
              <h3 className="text-3xl font-semibold mb-8 text-center">Advanced Analytics & Performance Insights</h3>
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4 text-blue-700">Real-Time Performance Monitoring</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">System Performance</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Excellent</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="text-center bg-white p-2 rounded">
                          <div className="font-bold text-green-600">99.98%</div>
                          <div className="text-xs text-gray-600">Uptime</div>
                        </div>
                        <div className="text-center bg-white p-2 rounded">
                          <div className="font-bold text-blue-600">&lt;200ms</div>
                          <div className="text-xs text-gray-600">Response Time</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">User Adoption Metrics</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">High</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="text-center bg-white p-2 rounded">
                          <div className="font-bold text-purple-600">96%</div>
                          <div className="text-xs text-gray-600">Active Users</div>
                        </div>
                        <div className="text-center bg-white p-2 rounded">
                          <div className="font-bold text-orange-600">8.5/10</div>
                          <div className="text-xs text-gray-600">User Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4 text-green-700">Business Impact Metrics</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Financial Performance</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Outstanding</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Cost Reduction</span>
                          <span className="font-bold text-green-600">$7.6M annually</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Revenue Increase</span>
                          <span className="font-bold text-blue-600">$14.2M annually</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Operational Efficiency</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Improved</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Process Automation</span>
                          <span className="font-bold text-purple-600">75%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Error Reduction</span>
                          <span className="font-bold text-orange-600">68%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4 text-purple-700">Future Scalability Index</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Growth Capacity</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">High</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="text-center bg-white p-2 rounded">
                          <div className="font-bold text-purple-600">500%</div>
                          <div className="text-xs text-gray-600">User Capacity</div>
                        </div>
                        <div className="text-center bg-white p-2 rounded">
                          <div className="font-bold text-green-600">300%</div>
                          <div className="text-xs text-gray-600">Data Volume</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Technology Readiness</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Future-Ready</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="text-center bg-white p-2 rounded">
                          <div className="font-bold text-blue-600">AI/ML</div>
                          <div className="text-xs text-gray-600">Ready</div>
                        </div>
                        <div className="text-center bg-white p-2 rounded">
                          <div className="font-bold text-orange-600">IoT</div>
                          <div className="text-xs text-gray-600">Enabled</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-8">
                <h4 className="text-xl font-semibold mb-6 text-center">Long-Term Partnership Success Indicators</h4>
                <div className="grid lg:grid-cols-5 gap-4 text-center text-sm">
                  <div className="bg-gradient-to-b from-blue-100 to-blue-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                    <div className="text-blue-800 font-medium">Client Retention</div>
                    <div className="text-blue-600 text-xs mt-1">3+ Year Partnerships</div>
                  </div>
                  <div className="bg-gradient-to-b from-green-100 to-green-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                    <div className="text-green-800 font-medium">Expansion Projects</div>
                    <div className="text-green-600 text-xs mt-1">Per Client Average</div>
                  </div>
                  <div className="bg-gradient-to-b from-purple-100 to-purple-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                    <div className="text-purple-800 font-medium">Support Coverage</div>
                    <div className="text-purple-600 text-xs mt-1">Global Time Zones</div>
                  </div>
                  <div className="bg-gradient-to-b from-orange-100 to-orange-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-2">92%</div>
                    <div className="text-orange-800 font-medium">Referral Rate</div>
                    <div className="text-orange-600 text-xs mt-1">New Client Source</div>
                  </div>
                  <div className="bg-gradient-to-b from-teal-100 to-teal-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-teal-600 mb-2">&lt;4h</div>
                    <div className="text-teal-800 font-medium">Response Time</div>
                    <div className="text-teal-600 text-xs mt-1">Critical Issues</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Join the growing list of organizations that have transformed their operations and 
              achieved exceptional results through strategic technology partnerships with Aethrix Systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/consultation" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center justify-center gap-2"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/services" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
