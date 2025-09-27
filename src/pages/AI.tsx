import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Bot, BarChart3, Workflow, Sparkles, ArrowRight, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PageHead = () => {
  useEffect(() => {
    document.title = "AI & Automation | Aethrix Systems";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Practical AI: chatbots, RAG search, analytics/forecasting, and workflow automation to reduce costs and improve speed.");
  }, []);
  return null;
};

const AI = () => {
  const solutions = [
    { icon: Bot, title: "Chatbots & Assistants", description: "Guided experiences for support and sales, integrated with your data." },
    { icon: Workflow, title: "Process Automation", description: "Automate repetitive tasks and approvals with AI-driven workflows." },
    { icon: BarChart3, title: "Analytics & Forecasting", description: "Predict demand, churn, and performance with ML models." },
    { icon: Sparkles, title: "Content & Search", description: "RAG-powered content creation and enterprise search." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHead />
      <Header />
      <main>
        {/* Breadcrumbs */}
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <ChevronRight className="w-4 h-4" />
            <li className="text-foreground">AI & Automation</li>
          </ol>
        </nav>
        {/* Hero */}
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-display mb-6">
                AI & Automation that <span className="text-accent">Delivers</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-subheadline mb-8">
                Practical AI solutions that reduce cost, improve speed, and elevate customer experiences.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                <Button size="lg" variant="hero" asChild>
                  <Link to="/consultation" className="flex items-center gap-2">
                    Explore AI Use Cases
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}>
                    <Card className="h-full bg-card border-border">
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle>{s.title}</CardTitle>
                        <CardDescription>{s.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { q: "How do you identify AI opportunities?", a: "We run a short discovery to map high-ROI use cases aligned to your KPIs." },
                { q: "What about data privacy?", a: "We design solutions that respect privacy, with data controls and auditability." },
                { q: "How fast can we see value?", a: "Pilot sprints typically deliver measurable outcomes in 2–4 weeks." },
              ].map((f) => (
                <Card key={f.q} className="bg-background border-border">
                  <CardHeader>
                    <CardTitle className="text-base">{f.q}</CardTitle>
                    <CardDescription>{f.a}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to automate real work?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">We’ll prioritize high-ROI AI projects and ship value fast.</p>
            <Button size="lg" variant="cta" asChild>
              <Link to="/consultation" className="flex items-center gap-2">
                Plan an AI Sprint
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Use-cases vs Model Types */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">Use-cases and Model Types</h3>
            <Table>
              <TableCaption>Picking the right approach per problem and constraints.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Use-case</TableHead>
                  <TableHead>Model Type</TableHead>
                  <TableHead>Data Needed</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Chat & Q/A</TableCell>
                  <TableCell>LLM + RAG</TableCell>
                  <TableCell>Docs, KBs, embeddings</TableCell>
                  <TableCell>Guardrails, citations</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Forecasting</TableCell>
                  <TableCell>Classical ML/Time-series</TableCell>
                  <TableCell>Historical metrics</TableCell>
                  <TableCell>Feature engineering</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Classification</TableCell>
                  <TableCell>Fine-tuned classifier</TableCell>
                  <TableCell>Labeled dataset</TableCell>
                  <TableCell>Quality labeling</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* RAG Pipeline */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">RAG Pipeline Stages</h3>
            <Table>
              <TableCaption>From ingestion to evaluation.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Stage</TableHead>
                  <TableHead>Purpose</TableHead>
                  <TableHead>Tools</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Ingest</TableCell>
                  <TableCell>Pull and normalize content</TableCell>
                  <TableCell>Loaders, chunking, metadata</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Index</TableCell>
                  <TableCell>Embed and store</TableCell>
                  <TableCell>Vector DB (e.g., pgvector)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Retrieve</TableCell>
                  <TableCell>Find relevant chunks</TableCell>
                  <TableCell>Hybrid search, filters</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Generate</TableCell>
                  <TableCell>Answer with context</TableCell>
                  <TableCell>LLM, prompt templates</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Evaluate</TableCell>
                  <TableCell>Measure and improve</TableCell>
                  <TableCell>Human evals, metrics</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Comprehensive AI Solutions Overview */}
        <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Comprehensive AI & Automation Solutions Portfolio
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
                    <Bot className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Intelligent Chatbots & Virtual Assistants</h3>
                    <p className="text-blue-100">Advanced conversational AI powered by large language models and natural language understanding</p>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Advanced NLP Capabilities</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="font-medium mb-2">Multi-Language Support</div>
                            <div className="text-sm text-gray-700 mb-2">
                              Support for 50+ languages with real-time translation, cultural context awareness, and region-specific 
                              business logic. Includes dialect recognition, sentiment analysis, and intent classification with 95%+ accuracy.
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-xs">
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-blue-600">50+</div>
                                <div>Languages</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-green-600">95%</div>
                                <div>Accuracy</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-purple-600">Real-time</div>
                                <div>Translation</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-green-50 p-4 rounded-lg">
                            <div className="font-medium mb-2">Context-Aware Conversations</div>
                            <div className="text-sm text-gray-700 mb-2">
                              Advanced memory management with conversation history, user preferences, and contextual understanding. 
                              Supports multi-turn dialogues, topic switching, and complex query resolution with personalized responses.
                            </div>
                            <div className="flex flex-wrap gap-1 text-xs">
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Memory Management</span>
                              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Multi-turn Dialogue</span>
                              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">Personalization</span>
                            </div>
                          </div>

                          <div className="bg-purple-50 p-4 rounded-lg">
                            <div className="font-medium mb-2">Enterprise Integration</div>
                            <div className="text-sm text-gray-700 mb-2">
                              Seamless integration with CRM, ERP, helpdesk, and knowledge management systems. Real-time data access, 
                              automated ticket creation, escalation workflows, and comprehensive analytics dashboard.
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                <span>CRM Integration</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span>ERP Connectivity</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                <span>Knowledge Base</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                                <span>Analytics Dashboard</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Implementation Approaches</h4>
                        <div className="space-y-3 text-sm">
                          <div className="border-l-4 border-green-500 pl-4">
                            <div className="font-medium">Rapid Deployment (2-4 weeks)</div>
                            <div className="text-gray-700">Pre-built templates with industry-specific knowledge bases and common use cases</div>
                          </div>
                          <div className="border-l-4 border-blue-500 pl-4">
                            <div className="font-medium">Custom Development (6-12 weeks)</div>
                            <div className="text-gray-700">Fully customized solution with advanced NLP, custom training, and complex integrations</div>
                          </div>
                          <div className="border-l-4 border-purple-500 pl-4">
                            <div className="font-medium">Enterprise Suite (12-24 weeks)</div>
                            <div className="text-gray-700">Multi-channel platform with voice, text, and visual interfaces across all touchpoints</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Performance Metrics</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">89%</div>
                            <div className="text-gray-700">First Response Resolution</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">&lt;2s</div>
                            <div className="text-gray-700">Average Response Time</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">4.7/5</div>
                            <div className="text-gray-700">User Satisfaction</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">24/7</div>
                            <div className="text-gray-700">Availability</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8 text-white">
                    <BarChart3 className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Predictive Analytics & Machine Learning</h3>
                    <p className="text-green-100">Advanced ML models for forecasting, optimization, and intelligent decision-making</p>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Advanced ML Algorithms</h4>
                        <div className="space-y-3">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <div className="font-medium mb-2">Time Series Forecasting</div>
                            <div className="text-sm text-gray-700 mb-2">
                              ARIMA, LSTM, and Transformer-based models for demand forecasting, sales prediction, and capacity planning. 
                              Handles seasonality, trends, and external factors with 85%+ accuracy on 12-month forecasts.
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-xs">
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-green-600">85%+</div>
                                <div>Forecast Accuracy</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-blue-600">12mo</div>
                                <div>Prediction Horizon</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-purple-600">Real-time</div>
                                <div>Model Updates</div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="font-medium mb-2">Classification & Anomaly Detection</div>
                            <div className="text-sm text-gray-700 mb-2">
                              Advanced classification models for customer segmentation, fraud detection, quality control, and risk assessment. 
                              Includes ensemble methods, deep learning, and unsupervised anomaly detection with continuous model improvement.
                            </div>
                            <div className="flex flex-wrap gap-1 text-xs">
                              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Random Forest</span>
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded">XGBoost</span>
                              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">Neural Networks</span>
                              <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded">Isolation Forest</span>
                            </div>
                          </div>

                          <div className="bg-purple-50 p-4 rounded-lg">
                            <div className="font-medium mb-2">Deep Learning & Computer Vision</div>
                            <div className="text-sm text-gray-700 mb-2">
                              Convolutional Neural Networks (CNNs) for image classification, object detection, quality inspection, and OCR. 
                              Includes transfer learning, data augmentation, and edge deployment for real-time processing.
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                <span>Image Classification</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span>Object Detection</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                <span>Quality Inspection</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                                <span>Document Processing</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">MLOps & Model Management</h4>
                        <div className="space-y-3 text-sm">
                          <div className="border-l-4 border-blue-500 pl-4">
                            <div className="font-medium">Automated ML Pipeline</div>
                            <div className="text-gray-700">End-to-end automation from data ingestion to model deployment with continuous monitoring</div>
                          </div>
                          <div className="border-l-4 border-green-500 pl-4">
                            <div className="font-medium">Model Versioning & A/B Testing</div>
                            <div className="text-gray-700">Systematic model versioning, rollback capabilities, and controlled A/B testing for performance validation</div>
                          </div>
                          <div className="border-l-4 border-purple-500 pl-4">
                            <div className="font-medium">Drift Detection & Retraining</div>
                            <div className="text-gray-700">Automatic detection of data drift and model degradation with scheduled retraining workflows</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-orange-700">Business Impact Metrics</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">35%</div>
                            <div className="text-gray-700">Cost Reduction</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">25%</div>
                            <div className="text-gray-700">Revenue Increase</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">60%</div>
                            <div className="text-gray-700">Process Efficiency</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">90%</div>
                            <div className="text-gray-700">Decision Accuracy</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-700 p-8 text-white">
                    <Workflow className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Intelligent Process Automation</h3>
                    <p className="text-purple-100">RPA combined with AI for end-to-end business process automation</p>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Advanced Automation Technologies</h4>
                        <div className="space-y-3">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <div className="font-medium mb-2">Robotic Process Automation (RPA)</div>
                            <div className="text-sm text-gray-700 mb-2">
                              Software robots for repetitive task automation including data entry, report generation, invoice processing, 
                              and system integration. Supports attended and unattended automation with exception handling.
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-xs">
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-purple-600">10K+</div>
                                <div>Tasks/Day</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-green-600">99.5%</div>
                                <div>Accuracy</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-blue-600">24/7</div>
                                <div>Operation</div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="font-medium mb-2">Intelligent Document Processing (IDP)</div>
                            <div className="text-sm text-gray-700 mb-2">
                              AI-powered document extraction, classification, and processing. Handles structured, semi-structured, 
                              and unstructured documents with OCR, NLP, and machine learning validation.
                            </div>
                            <div className="flex flex-wrap gap-1 text-xs">
                              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">OCR/ICR</span>
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Classification</span>
                              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">Data Extraction</span>
                              <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded">Validation</span>
                            </div>
                          </div>

                          <div className="bg-green-50 p-4 rounded-lg">
                            <div className="font-medium mb-2">Business Process Management (BPM)</div>
                            <div className="text-sm text-gray-700 mb-2">
                              End-to-end process orchestration with workflow engines, human task management, SLA monitoring, 
                              and process analytics. Includes dynamic routing and escalation rules.
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                <span>Workflow Engine</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span>Task Management</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                <span>SLA Monitoring</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                                <span>Process Analytics</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Implementation Strategy</h4>
                        <div className="space-y-3 text-sm">
                          <div className="border-l-4 border-blue-500 pl-4">
                            <div className="font-medium">Process Discovery & Analysis</div>
                            <div className="text-gray-700">Comprehensive process mapping, automation potential assessment, and ROI calculation</div>
                          </div>
                          <div className="border-l-4 border-green-500 pl-4">
                            <div className="font-medium">Pilot Implementation</div>
                            <div className="text-gray-700">Start with high-impact, low-risk processes to demonstrate value and build confidence</div>
                          </div>
                          <div className="border-l-4 border-purple-500 pl-4">
                            <div className="font-medium">Scale & Optimize</div>
                            <div className="text-gray-700">Expand automation across departments with continuous optimization and improvement</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Automation ROI</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">70%</div>
                            <div className="text-gray-700">Time Savings</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">45%</div>
                            <div className="text-gray-700">Cost Reduction</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">95%</div>
                            <div className="text-gray-700">Accuracy Improvement</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">6-12</div>
                            <div className="text-gray-700">Months Payback</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-600 to-red-700 p-8 text-white">
                    <Sparkles className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Enterprise AI & RAG Systems</h3>
                    <p className="text-orange-100">Retrieval-Augmented Generation for intelligent content creation and enterprise search</p>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-orange-700">Advanced RAG Architecture</h4>
                        <div className="space-y-3">
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <div className="font-medium mb-2">Semantic Search & Retrieval</div>
                            <div className="text-sm text-gray-700 mb-2">
                              Vector embeddings with semantic similarity search across structured and unstructured enterprise data. 
                              Supports multi-modal retrieval including text, images, and documents with relevance ranking.
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-xs">
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-orange-600">1M+</div>
                                <div>Documents</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-green-600">&lt;100ms</div>
                                <div>Search Time</div>
                              </div>
                              <div className="text-center bg-white p-2 rounded">
                                <div className="font-bold text-purple-600">92%</div>
                                <div>Relevance Score</div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="font-medium mb-2">Knowledge Graph Integration</div>
                            <div className="text-sm text-gray-700 mb-2">
                              Structured knowledge representation with entity relationships, ontologies, and semantic reasoning. 
                              Enables contextual understanding and intelligent information synthesis across domain knowledge.
                            </div>
                            <div className="flex flex-wrap gap-1 text-xs">
                              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Entity Recognition</span>
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Relationship Mapping</span>
                              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">Semantic Reasoning</span>
                              <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded">Ontology Management</span>
                            </div>
                          </div>

                          <div className="bg-green-50 p-4 rounded-lg">
                            <div className="font-medium mb-2">Content Generation & Synthesis</div>
                            <div className="text-sm text-gray-700 mb-2">
                              AI-powered content creation with domain-specific fine-tuning, style consistency, and factual accuracy. 
                              Includes automated summarization, report generation, and personalized content delivery.
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                <span>Automated Summarization</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                <span>Report Generation</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                <span>Content Personalization</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                                <span>Fact Verification</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Enterprise Integration Capabilities</h4>
                        <div className="space-y-3 text-sm">
                          <div className="border-l-4 border-blue-500 pl-4">
                            <div className="font-medium">Multi-Source Data Ingestion</div>
                            <div className="text-gray-700">Connect to databases, file systems, APIs, and third-party applications with real-time synchronization</div>
                          </div>
                          <div className="border-l-4 border-green-500 pl-4">
                            <div className="font-medium">Security & Access Control</div>
                            <div className="text-gray-700">Role-based access, data encryption, audit trails, and compliance with enterprise security policies</div>
                          </div>
                          <div className="border-l-4 border-purple-500 pl-4">
                            <div className="font-medium">Scalable Architecture</div>
                            <div className="text-gray-700">Cloud-native design with auto-scaling, load balancing, and enterprise-grade performance</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Performance & Quality Metrics</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">88%</div>
                            <div className="text-gray-700">Answer Accuracy</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">95%</div>
                            <div className="text-gray-700">User Satisfaction</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">65%</div>
                            <div className="text-gray-700">Time Savings</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">10TB+</div>
                            <div className="text-gray-700">Data Processed</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* AI Industry Applications */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Industry-Specific AI Applications
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <CardTitle className="text-xl">Manufacturing & Supply Chain</CardTitle>
                    <CardDescription className="text-blue-100">AI-driven optimization for production and logistics</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Predictive Maintenance</h4>
                        <div className="bg-blue-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            IoT sensors combined with machine learning models predict equipment failures 15-30 days in advance, 
                            reducing unplanned downtime by 70% and maintenance costs by 25%.
                          </p>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="text-center bg-white p-2 rounded">
                              <div className="font-bold text-blue-600">30 days</div>
                              <div>Failure Prediction</div>
                            </div>
                            <div className="text-center bg-white p-2 rounded">
                              <div className="font-bold text-green-600">70%</div>
                              <div>Downtime Reduction</div>
                            </div>
                            <div className="text-center bg-white p-2 rounded">
                              <div className="font-bold text-purple-600">25%</div>
                              <div>Cost Savings</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Quality Control Automation</h4>
                        <div className="bg-green-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            Computer vision systems inspect products at production speed with 99.8% accuracy, 
                            automatically categorizing defects and triggering corrective actions.
                          </p>
                          <div className="flex flex-wrap gap-1 text-xs">
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Defect Detection</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Classification</span>
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">Auto-sorting</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Supply Chain Optimization</h4>
                        <div className="bg-purple-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            Demand forecasting, inventory optimization, and supplier risk assessment using ML algorithms 
                            that consider market trends, weather, and economic indicators.
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="text-center bg-white p-2 rounded">
                              <div className="font-bold text-purple-600">85%</div>
                              <div>Forecast Accuracy</div>
                            </div>
                            <div className="text-center bg-white p-2 rounded">
                              <div className="font-bold text-orange-600">30%</div>
                              <div>Inventory Reduction</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                    <CardTitle className="text-xl">Healthcare & Life Sciences</CardTitle>
                    <CardDescription className="text-green-100">AI for improved patient outcomes and operational efficiency</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Clinical Decision Support</h4>
                        <div className="bg-green-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            AI-powered diagnostic assistance analyzing medical images, lab results, and patient history 
                            to provide evidence-based recommendations and early warning systems.
                          </p>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="text-center bg-white p-2 rounded">
                              <div className="font-bold text-green-600">94%</div>
                              <div>Diagnostic Accuracy</div>
                            </div>
                            <div className="text-center bg-white p-2 rounded">
                              <div className="font-bold text-blue-600">40%</div>
                              <div>Faster Diagnosis</div>
                            </div>
                            <div className="text-center bg-white p-2 rounded">
                              <div className="font-bold text-purple-600">25%</div>
                              <div>Better Outcomes</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Drug Discovery & Research</h4>
                        <div className="bg-blue-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            Machine learning models accelerate drug discovery by predicting molecular behavior, 
                            identifying drug targets, and optimizing clinical trial design.
                          </p>
                          <div className="flex flex-wrap gap-1 text-xs">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Molecular Modeling</span>
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Target Identification</span>
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">Trial Optimization</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Patient Monitoring & Care</h4>
                        <div className="bg-purple-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            Remote patient monitoring with wearable devices and AI analysis for early intervention, 
                            medication adherence tracking, and personalized treatment plans.
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="text-center bg-white p-2 rounded">
                              <div className="font-bold text-purple-600">24/7</div>
                              <div>Monitoring</div>
                            </div>
                            <div className="text-center bg-white p-2 rounded">
                              <div className="font-bold text-orange-600">50%</div>
                              <div>Readmission Reduction</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <CardTitle className="text-xl">Financial Services</CardTitle>
                    <CardDescription className="text-purple-100">AI for risk management, fraud detection, and personalization</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Fraud Detection & Prevention</h4>
                        <div className="bg-purple-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            Real-time transaction monitoring with ML models that detect suspicious patterns, 
                            behavioral anomalies, and emerging fraud schemes with 99.5% accuracy.
                          </p>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="text-center bg-white p-2 rounded">
                              <div className="font-bold text-purple-600">99.5%</div>
                              <div>Detection Accuracy</div>
                            </div>
                            <div className="text-center bg-white p-2 rounded">
                              <div className="font-bold text-green-600">&lt;100ms</div>
                              <div>Response Time</div>
                            </div>
                            <div className="text-center bg-white p-2 rounded">
                              <div className="font-bold text-blue-600">95%</div>
                              <div>False Positive Reduction</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Credit Risk Assessment</h4>
                        <div className="bg-blue-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            Advanced credit scoring models using alternative data sources, behavioral analytics, 
                            and machine learning to improve lending decisions and reduce default rates.
                          </p>
                          <div className="flex flex-wrap gap-1 text-xs">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Alternative Data</span>
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Behavioral Analytics</span>
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">Risk Scoring</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Personalized Financial Services</h4>
                        <div className="bg-green-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            AI-driven personalization for product recommendations, investment advice, and customer service 
                            based on spending patterns, life events, and financial goals.
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="text-center bg-white p-2 rounded">
                              <div className="font-bold text-green-600">3x</div>
                              <div>Engagement Increase</div>
                            </div>
                            <div className="text-center bg-white p-2 rounded">
                              <div className="font-bold text-orange-600">45%</div>
                              <div>Cross-sell Success</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-12 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-semibold mb-8 text-center">AI Implementation Success Factors</h3>
                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">📊</span>
                    </div>
                    <h4 className="font-semibold mb-3">Data Quality & Governance</h4>
                    <div className="text-sm text-gray-700">
                      High-quality, well-governed data is the foundation of successful AI implementations. 
                      We ensure data cleansing, validation, and ongoing quality monitoring.
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🎯</span>
                    </div>
                    <h4 className="font-semibold mb-3">Business Alignment</h4>
                    <div className="text-sm text-gray-700">
                      AI solutions must directly address business challenges and deliver measurable value. 
                      We start with clear objectives and success metrics.
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🔧</span>
                    </div>
                    <h4 className="font-semibold mb-3">Technical Excellence</h4>
                    <div className="text-sm text-gray-700">
                      Robust, scalable AI infrastructure with proper MLOps practices, monitoring, 
                      and continuous improvement capabilities.
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">👥</span>
                    </div>
                    <h4 className="font-semibold mb-3">Change Management</h4>
                    <div className="text-sm text-gray-700">
                      Successful AI adoption requires proper training, change management, 
                      and stakeholder engagement throughout the implementation process.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Case Studies & Success Stories */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
                AI Implementation Case Studies & Success Stories
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Global Manufacturing: Predictive Maintenance AI</h3>
                    <div className="grid grid-cols-2 gap-4 text-blue-100">
                      <div>Industry: Automotive Manufacturing</div>
                      <div>Timeline: 8 months</div>
                      <div>Investment: $800K</div>
                      <div>ROI: 420%</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Challenge & Solution</h4>
                        <div className="bg-blue-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Challenge:</strong> Automotive parts manufacturer experiencing $2.5M annually in unplanned downtime 
                            due to equipment failures. Traditional reactive maintenance was costly and disruptive to production schedules.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>Solution:</strong> Deployed IoT sensors across 150+ machines with ML models analyzing vibration, 
                            temperature, pressure, and acoustic signatures to predict failures 15-30 days in advance.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Technical Implementation</h4>
                        <div className="space-y-3">
                          <div className="bg-green-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Data Collection & Processing</div>
                            <p className="text-gray-700">Real-time sensor data collection from 1,200+ IoT devices generating 50TB monthly data, 
                            processed using edge computing and cloud analytics with Apache Kafka and TensorFlow.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Machine Learning Models</div>
                            <p className="text-gray-700">Ensemble models combining LSTM networks, Random Forest, and Isolation Forest 
                            for anomaly detection with 93% prediction accuracy and 5% false positive rate.</p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Integration & Alerts</div>
                            <p className="text-gray-700">Integrated with CMMS and ERP systems for automated work order generation, 
                            inventory management, and maintenance scheduling with mobile alerts.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Business Impact</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">75%</div>
                            <div className="text-xs text-gray-700">Downtime Reduction</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">$1.9M</div>
                            <div className="text-xs text-gray-700">Annual Savings</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">40%</div>
                            <div className="text-xs text-gray-700">Maintenance Cost Reduction</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">98%</div>
                            <div className="text-xs text-gray-700">Equipment Availability</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">FinTech: AI-Powered Fraud Detection System</h3>
                    <div className="grid grid-cols-2 gap-4 text-green-100">
                      <div>Industry: Digital Banking</div>
                      <div>Timeline: 6 months</div>
                      <div>Investment: $1.2M</div>
                      <div>ROI: 650%</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Challenge & Solution</h4>
                        <div className="bg-green-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Challenge:</strong> Digital bank processing 10M+ daily transactions experiencing $15M annual losses 
                            from fraud. Existing rule-based system had 60% false positive rate causing customer friction.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>Solution:</strong> Deployed real-time ML-based fraud detection using behavioral analytics, 
                            device fingerprinting, and network analysis with sub-100ms response times.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Advanced Analytics Implementation</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Behavioral Profiling</div>
                            <p className="text-gray-700">ML models analyze spending patterns, transaction timing, location data, and device behavior 
                            to create dynamic user profiles with anomaly scoring.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Graph Analytics</div>
                            <p className="text-gray-700">Network analysis identifying fraud rings and suspicious connections using graph neural networks 
                            with real-time relationship mapping across accounts and entities.</p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Real-time Scoring</div>
                            <p className="text-gray-700">Ensemble models combining XGBoost, neural networks, and isolation forest 
                            with real-time feature engineering and model serving infrastructure.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-orange-700">Results & Impact</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">99.7%</div>
                            <div className="text-xs text-gray-700">Fraud Detection Rate</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">85%</div>
                            <div className="text-xs text-gray-700">False Positive Reduction</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">$12M</div>
                            <div className="text-xs text-gray-700">Prevented Losses</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">45ms</div>
                            <div className="text-xs text-gray-700">Avg Response Time</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Healthcare: AI Diagnostic Assistant</h3>
                    <div className="grid grid-cols-2 gap-4 text-purple-100">
                      <div>Industry: Radiology Network</div>
                      <div>Timeline: 10 months</div>
                      <div>Investment: $1.5M</div>
                      <div>ROI: 380%</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Medical Imaging AI</h4>
                        <div className="bg-purple-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Challenge:</strong> Radiology group with 25 radiologists struggling with increasing scan volumes, 
                            diagnostic backlogs, and need for specialized expertise in remote locations.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>Solution:</strong> Developed AI diagnostic assistant for CT, MRI, and X-ray analysis with 
                            automated anomaly detection, priority scoring, and second opinion capabilities.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">AI Model Architecture</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Computer Vision Models</div>
                            <p className="text-gray-700">Specialized CNN architectures trained on 500K+ annotated medical images 
                            with transfer learning and domain adaptation techniques.</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Multi-Modal Analysis</div>
                            <p className="text-gray-700">Integration of imaging data with patient history, lab results, and clinical notes 
                            using transformer-based models for comprehensive analysis.</p>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">DICOM Integration</div>
                            <p className="text-gray-700">Seamless integration with PACS systems and radiology workflows 
                            with HL7 FHIR compliance and automated reporting.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Clinical Outcomes</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">35%</div>
                            <div className="text-xs text-gray-700">Faster Diagnosis</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">94%</div>
                            <div className="text-xs text-gray-700">Sensitivity Rate</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">12%</div>
                            <div className="text-xs text-gray-700">Earlier Detection</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">60%</div>
                            <div className="text-xs text-gray-700">Throughput Increase</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-600 to-red-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">E-commerce: Personalization Engine</h3>
                    <div className="grid grid-cols-2 gap-4 text-orange-100">
                      <div>Industry: Online Retail</div>
                      <div>Timeline: 5 months</div>
                      <div>Investment: $600K</div>
                      <div>ROI: 520%</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-orange-700">Intelligent Personalization</h4>
                        <div className="bg-orange-50 p-4 rounded-lg text-sm">
                          <p className="text-gray-700 mb-3">
                            <strong>Challenge:</strong> E-commerce platform with 2M+ users experiencing low conversion rates, 
                            high cart abandonment (68%), and poor customer lifetime value due to generic user experience.
                          </p>
                          <p className="text-gray-700 mb-3">
                            <strong>Solution:</strong> Deployed comprehensive AI personalization engine with real-time recommendation system, 
                            dynamic pricing, and personalized marketing automation.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">ML-Driven Personalization</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Recommendation Systems</div>
                            <p className="text-gray-700">Hybrid collaborative and content-based filtering with deep learning models 
                            for product recommendations, search ranking, and content personalization.</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Customer Journey Analysis</div>
                            <p className="text-gray-700">Sequential pattern mining and Markov models analyzing customer touchpoints, 
                            behavior patterns, and conversion paths for journey optimization.</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg text-sm">
                            <div className="font-medium mb-1">Dynamic Optimization</div>
                            <p className="text-gray-700">Real-time A/B testing, multi-armed bandit algorithms for content optimization, 
                            and automated campaign adjustments based on performance metrics.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Business Growth</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-green-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-green-600 mb-1">47%</div>
                            <div className="text-xs text-gray-700">Conversion Rate Increase</div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-blue-600 mb-1">35%</div>
                            <div className="text-xs text-gray-700">Cart Abandonment Reduction</div>
                          </div>
                          <div className="bg-purple-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-purple-600 mb-1">28%</div>
                            <div className="text-xs text-gray-700">Average Order Value</div>
                          </div>
                          <div className="bg-orange-50 p-3 rounded text-center">
                            <div className="font-bold text-2xl text-orange-600 mb-1">65%</div>
                            <div className="text-xs text-gray-700">Customer LTV Increase</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* AI Technology Roadmap & Future Trends */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI Technology Roadmap & Future Innovations
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <CardTitle className="text-xl">Current AI Capabilities (2024-2025)</CardTitle>
                    <CardDescription className="text-blue-100">Production-ready AI solutions delivering immediate value</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Large Language Models</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>GPT-4, Claude, Llama 2/3</span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Production Ready</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Domain-specific fine-tuning</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Optimized</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>RAG implementations</span>
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Enterprise Scale</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Computer Vision</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>Object detection & classification</span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">99%+ Accuracy</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Medical image analysis</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">FDA Approved</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Industrial quality control</span>
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Real-time</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Predictive Analytics</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>Time series forecasting</span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">85%+ Accuracy</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Anomaly detection</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Automated</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Risk scoring models</span>
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Regulated</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Implementation Readiness</h5>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-blue-600">2-6 months</div>
                            <div>Deployment Time</div>
                          </div>
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-green-600">Proven ROI</div>
                            <div>Business Value</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                    <CardTitle className="text-xl">Emerging Technologies (2025-2026)</CardTitle>
                    <CardDescription className="text-green-100">Next-generation AI capabilities in pilot and early adoption phase</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Multimodal AI</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>GPT-4 Vision, DALL-E 3</span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Beta Testing</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Video understanding</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Research</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Audio-visual-text fusion</span>
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Pilot</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Autonomous Agents</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>Task orchestration</span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Development</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Code generation agents</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Testing</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Decision-making systems</span>
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Proof of Concept</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Federated Learning</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>Privacy-preserving ML</span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Healthcare Ready</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Cross-organization learning</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Financial Sector</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Edge AI deployment</span>
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">IoT Integration</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Adoption Timeline</h5>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-green-600">6-12 months</div>
                            <div>Pilot Projects</div>
                          </div>
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-blue-600">High Potential</div>
                            <div>Business Impact</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0">
                  <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <CardTitle className="text-xl">Future Innovations (2026+)</CardTitle>
                    <CardDescription className="text-purple-100">Transformative AI technologies shaping the next decade</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-purple-700">Artificial General Intelligence</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>Reasoning & planning</span>
                            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Research</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Transfer learning</span>
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Early Stage</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Human-level cognition</span>
                            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Long-term</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-700">Quantum-AI Integration</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>Quantum machine learning</span>
                            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Experimental</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Optimization problems</span>
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Specialized</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Cryptography & security</span>
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Strategic</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">Neuromorphic Computing</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span>Brain-inspired chips</span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Prototypes</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Ultra-low power AI</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Edge Computing</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Real-time adaptation</span>
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Robotics</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Strategic Planning</h5>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-purple-600">2-5 years</div>
                            <div>Horizon Planning</div>
                          </div>
                          <div className="text-center bg-white p-2 rounded">
                            <div className="font-bold text-orange-600">Transformative</div>
                            <div>Potential Impact</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-12 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-semibold mb-8 text-center">AI Implementation Strategy & Roadmap</h3>
                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">1</span>
                    </div>
                    <h4 className="font-semibold mb-3">Foundation Building</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Data infrastructure setup</div>
                      <div>AI governance framework</div>
                      <div>Team capability development</div>
                      <div>Pilot project identification</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">2</span>
                    </div>
                    <h4 className="font-semibold mb-3">Quick Wins</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Automated process optimization</div>
                      <div>Customer service chatbots</div>
                      <div>Predictive maintenance pilots</div>
                      <div>Document processing automation</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">3</span>
                    </div>
                    <h4 className="font-semibold mb-3">Scale & Expand</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Enterprise-wide ML platforms</div>
                      <div>Advanced analytics deployment</div>
                      <div>Cross-functional AI initiatives</div>
                      <div>Industry-specific solutions</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">4</span>
                    </div>
                    <h4 className="font-semibold mb-3">Innovation Leadership</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>Cutting-edge AI research</div>
                      <div>Industry ecosystem partnerships</div>
                      <div>AI-driven business model innovation</div>
                      <div>Competitive differentiation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evaluation Metrics */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">Evaluation Metrics</h3>
            <Table>
              <TableCaption>Tracking quality and safety of AI systems.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Target</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Answer Relevance</TableCell>
                  <TableCell>{">= 0.8"}</TableCell>
                  <TableCell>Human-rated scale</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Groundedness</TableCell>
                  <TableCell>Source citations</TableCell>
                  <TableCell>Evidence linked</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Toxicity</TableCell>
                  <TableCell>0 incidents</TableCell>
                  <TableCell>Filters and policies</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* AI Partnership & Support */}
        <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
              <h2 className="text-4xl font-bold mb-16 text-center">
                Partner with Aethrix for AI Excellence
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      🤝 Strategic Partnership
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100 mb-6">
                      Long-term collaboration focused on AI transformation goals with dedicated teams, 
                      strategic roadmapping, and continuous innovation support.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        Dedicated AI solution architects
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        Quarterly strategy reviews
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        Priority support & maintenance
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      🚀 Implementation Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100 mb-6">
                      End-to-end implementation services including project management, training, 
                      change management, and post-deployment optimization.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                        Agile project delivery
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                        Team training & upskilling
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                        24/7 monitoring & support
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      💡 Innovation Lab Access
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-100 mb-6">
                      Access to cutting-edge AI research, emerging technology pilots, 
                      and collaborative innovation projects with industry experts.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                        Early access to new AI models
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                        Research collaboration opportunities
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                        Industry best practices sharing
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Start Your AI Journey Today
                </Button>
                <p className="mt-6 text-blue-200 text-lg">
                  Ready to transform your business with AI? Let's discuss your unique challenges and opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AI;
