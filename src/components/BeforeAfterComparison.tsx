import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  DollarSign, 
  Users, 
  Zap,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  ArrowRight,
  Eye,
  EyeOff
} from 'lucide-react';

interface ComparisonMetric {
  label: string;
  beforeValue: number;
  afterValue: number;
  unit: string;
  type: 'percentage' | 'number' | 'currency' | 'time';
  improvement: 'higher' | 'lower'; // whether higher values are better
  category: string;
  description: string;
}

interface ComparisonScenario {
  id: string;
  title: string;
  description: string;
  industry: string;
  projectType: string;
  timeline: string;
  investment: string;
  metrics: ComparisonMetric[];
  challenges: string[];
  solutions: string[];
  results: string[];
}

export function BeforeAfterComparison() {
  const [selectedScenario, setSelectedScenario] = useState('erp-manufacturing');
  const [activeView, setActiveView] = useState<'split' | 'slider' | 'animated'>('split');
  const [showDetails, setShowDetails] = useState(false);

  const scenarios: ComparisonScenario[] = [
    {
      id: 'erp-manufacturing',
      title: 'Manufacturing ERP Implementation',
      description: 'Complete ERP transformation for a mid-size manufacturing company',
      industry: 'Manufacturing',
      projectType: 'ERP Implementation',
      timeline: '8 months',
      investment: '$180,000',
      metrics: [
        {
          label: 'Process Efficiency',
          beforeValue: 65,
          afterValue: 92,
          unit: '%',
          type: 'percentage',
          improvement: 'higher',
          category: 'Operations',
          description: 'Overall operational efficiency improvement'
        },
        {
          label: 'Order Processing Time',
          beforeValue: 48,
          afterValue: 12,
          unit: 'hours',
          type: 'time',
          improvement: 'lower',
          category: 'Operations',
          description: 'Time to process customer orders'
        },
        {
          label: 'Inventory Accuracy',
          beforeValue: 78,
          afterValue: 99,
          unit: '%',
          type: 'percentage',
          improvement: 'higher',
          category: 'Operations',
          description: 'Real-time inventory tracking accuracy'
        },
        {
          label: 'Monthly Cost Savings',
          beforeValue: 0,
          afterValue: 15000,
          unit: '$',
          type: 'currency',
          improvement: 'higher',
          category: 'Financial',
          description: 'Monthly operational cost reduction'
        },
        {
          label: 'Report Generation Time',
          beforeValue: 8,
          afterValue: 0.5,
          unit: 'hours',
          type: 'time',
          improvement: 'lower',
          category: 'Operations',
          description: 'Time to generate executive reports'
        },
        {
          label: 'Customer Satisfaction',
          beforeValue: 72,
          afterValue: 94,
          unit: '%',
          type: 'percentage',
          improvement: 'higher',
          category: 'Customer',
          description: 'Customer satisfaction scores'
        }
      ],
      challenges: [
        'Manual data entry across 15 different systems',
        'No real-time inventory visibility',
        'Delayed order processing and fulfillment',
        'Inconsistent reporting and data quality',
        'High operational costs due to inefficiencies'
      ],
      solutions: [
        'Unified ERP system with integrated modules',
        'Real-time inventory management with barcode scanning',
        'Automated order processing workflows',
        'Centralized reporting with live dashboards',
        'Process optimization and automation'
      ],
      results: [
        '41% improvement in process efficiency',
        '75% reduction in order processing time',
        '27% improvement in inventory accuracy',
        '$180,000 annual cost savings',
        '31% increase in customer satisfaction'
      ]
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration & Modernization',
      description: 'Legacy system migration to modern cloud architecture',
      industry: 'Financial Services',
      projectType: 'Cloud Migration',
      timeline: '6 months',
      investment: '$220,000',
      metrics: [
        {
          label: 'System Uptime',
          beforeValue: 97.5,
          afterValue: 99.9,
          unit: '%',
          type: 'percentage',
          improvement: 'higher',
          category: 'Reliability',
          description: 'System availability and uptime'
        },
        {
          label: 'Response Time',
          beforeValue: 4.2,
          afterValue: 0.8,
          unit: 'seconds',
          type: 'time',
          improvement: 'lower',
          category: 'Performance',
          description: 'Application response time'
        },
        {
          label: 'Infrastructure Costs',
          beforeValue: 25000,
          afterValue: 12000,
          unit: '$/month',
          type: 'currency',
          improvement: 'lower',
          category: 'Financial',
          description: 'Monthly infrastructure costs'
        },
        {
          label: 'Deployment Speed',
          beforeValue: 72,
          afterValue: 4,
          unit: 'hours',
          type: 'time',
          improvement: 'lower',
          category: 'Operations',
          description: 'Time to deploy new features'
        },
        {
          label: 'Scalability',
          beforeValue: 20,
          afterValue: 95,
          unit: '%',
          type: 'percentage',
          improvement: 'higher',
          category: 'Technical',
          description: 'System scalability rating'
        }
      ],
      challenges: [
        'Legacy monolithic architecture with limited scalability',
        'Frequent downtime during peak periods',
        'High infrastructure maintenance costs',
        'Slow deployment cycles and limited agility',
        'Security vulnerabilities in outdated systems'
      ],
      solutions: [
        'Microservices architecture on cloud platform',
        'Auto-scaling infrastructure with load balancing',
        'Cost-optimized cloud resource management',
        'CI/CD pipelines for rapid deployment',
        'Enhanced security with modern cloud tools'
      ],
      results: [
        '2.4% improvement in system uptime',
        '81% reduction in response time',
        '52% reduction in infrastructure costs',
        '94% faster deployment speed',
        '375% improvement in scalability'
      ]
    }
  ];

  const formatValue = (value: number, type: string, unit: string) => {
    switch (type) {
      case 'percentage':
        return `${value}%`;
      case 'currency':
        return `$${value.toLocaleString()}`;
      case 'time':
        return `${value} ${unit}`;
      default:
        return `${value} ${unit}`;
    }
  };

  const calculateImprovement = (before: number, after: number, improvement: 'higher' | 'lower') => {
    if (improvement === 'higher') {
      return ((after - before) / before) * 100;
    } else {
      return ((before - after) / before) * 100;
    }
  };

  const getImprovementColor = (improvementPercent: number) => {
    if (improvementPercent >= 50) return 'text-green-600';
    if (improvementPercent >= 25) return 'text-green-500';
    if (improvementPercent >= 10) return 'text-yellow-600';
    return 'text-red-500';
  };

  const currentScenario = scenarios.find(s => s.id === selectedScenario)!;

  const MetricCard = ({ metric, view }: { metric: ComparisonMetric; view: string }) => {
    const improvementPercent = calculateImprovement(metric.beforeValue, metric.afterValue, metric.improvement);
    const isImprovement = improvementPercent > 0;

    if (view === 'split') {
      return (
        <Card className="shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">{metric.label}</CardTitle>
            <CardDescription>{metric.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {/* Before */}
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-sm text-red-600 font-medium mb-2">BEFORE</div>
                <div className="text-2xl font-bold text-red-700">
                  {formatValue(metric.beforeValue, metric.type, metric.unit)}
                </div>
              </div>
              
              {/* After */}
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-sm text-green-600 font-medium mb-2">AFTER</div>
                <div className="text-2xl font-bold text-green-700">
                  {formatValue(metric.afterValue, metric.type, metric.unit)}
                </div>
              </div>
            </div>
            
            {/* Improvement */}
            <div className="mt-4 text-center">
              <Badge variant={isImprovement ? "default" : "destructive"} className="px-3 py-1">
                <div className="flex items-center gap-1">
                  {isImprovement ? 
                    <TrendingUp className="w-3 h-3" /> : 
                    <TrendingDown className="w-3 h-3" />
                  }
                  {Math.abs(improvementPercent).toFixed(1)}% {isImprovement ? 'Improvement' : 'Decline'}
                </div>
              </Badge>
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card className="shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center justify-between">
            {metric.label}
            <Badge variant="outline">{metric.category}</Badge>
          </CardTitle>
          <CardDescription>{metric.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Before: {formatValue(metric.beforeValue, metric.type, metric.unit)}</span>
                <span>After: {formatValue(metric.afterValue, metric.type, metric.unit)}</span>
              </div>
              <Progress 
                value={metric.improvement === 'higher' ? 
                  (metric.afterValue / Math.max(metric.beforeValue, metric.afterValue)) * 100 :
                  (metric.beforeValue / Math.max(metric.beforeValue, metric.afterValue)) * 100
                } 
                className="h-3"
              />
            </div>
            
            <div className="text-center">
              <Badge variant={isImprovement ? "default" : "destructive"} className="px-3 py-1">
                <div className="flex items-center gap-1">
                  {isImprovement ? 
                    <TrendingUp className="w-3 h-3" /> : 
                    <TrendingDown className="w-3 h-3" />
                  }
                  {Math.abs(improvementPercent).toFixed(1)}% {isImprovement ? 'Improvement' : 'Change'}
                </div>
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="w-full space-y-8">
      {/* Scenario Selector */}
      <div className="grid md:grid-cols-2 gap-4">
        {scenarios.map((scenario) => (
          <Card 
            key={scenario.id}
            className={`cursor-pointer transition-all ${
              selectedScenario === scenario.id 
                ? 'ring-2 ring-blue-500 bg-blue-50' 
                : 'hover:shadow-lg'
            }`}
            onClick={() => setSelectedScenario(scenario.id)}
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{scenario.title}</CardTitle>
                  <CardDescription>{scenario.description}</CardDescription>
                </div>
                <Badge variant="outline">{scenario.industry}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Timeline:</span>
                  <span className="ml-2 font-medium">{scenario.timeline}</span>
                </div>
                <div>
                  <span className="text-gray-600">Investment:</span>
                  <span className="ml-2 font-medium">{scenario.investment}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View Controls */}
      <div className="flex justify-between items-center">
        <Tabs value={activeView} onValueChange={(value) => setActiveView(value as 'split' | 'slider')}>
          <TabsList>
            <TabsTrigger value="split">Split View</TabsTrigger>
            <TabsTrigger value="slider">Progress View</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <Button
          variant="outline"
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-2"
        >
          {showDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          {showDetails ? 'Hide Details' : 'Show Details'}
        </Button>
      </div>

      {/* Scenario Overview */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-2xl">{currentScenario.title}</CardTitle>
          <CardDescription className="text-lg">{currentScenario.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{currentScenario.industry}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-600" />
              <span className="text-sm">{currentScenario.timeline}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-gray-600" />
              <span className="text-sm">{currentScenario.investment}</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-gray-600" />
              <span className="text-sm">{currentScenario.metrics.length} KPIs Tracked</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Context (if enabled) */}
      {showDetails && (
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <AlertTriangle className="w-5 h-5" />
                Challenges Addressed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {currentScenario.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <Zap className="w-5 h-5" />
                Solutions Implemented
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {currentScenario.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    {solution}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                Results Achieved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {currentScenario.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {result}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Metrics Comparison */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-center">Performance Metrics Comparison</h3>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {currentScenario.metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} view={activeView} />
          ))}
        </div>
      </div>

      {/* Summary Statistics */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-center">Transformation Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {currentScenario.metrics.filter(m => calculateImprovement(m.beforeValue, m.afterValue, m.improvement) > 0).length}
              </div>
              <div className="text-sm text-gray-600">Metrics Improved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {Math.round(currentScenario.metrics.reduce((sum, m) => 
                  sum + Math.abs(calculateImprovement(m.beforeValue, m.afterValue, m.improvement)), 0
                ) / currentScenario.metrics.length)}%
              </div>
              <div className="text-sm text-gray-600">Average Improvement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {Math.max(...currentScenario.metrics.map(m => 
                  Math.abs(calculateImprovement(m.beforeValue, m.afterValue, m.improvement))
                )).toFixed(0)}%
              </div>
              <div className="text-sm text-gray-600">Best Improvement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {currentScenario.timeline}
              </div>
              <div className="text-sm text-gray-600">Implementation Time</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
