import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface TechCategory {
  id: string;
  name: string;
  color: string;
  technologies: Array<{
    name: string;
    logo: string;
    description: string;
    expertise: 'Expert' | 'Advanced' | 'Intermediate';
    usage: string;
  }>;
}

export const TechnologyStackVisualization: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('frontend');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techStack: TechCategory[] = [
    {
      id: 'frontend',
      name: 'Frontend Technologies',
      color: '#3B82F6',
      technologies: [
        {
          name: 'React 18',
          logo: '⚛️',
          description: 'Modern React with hooks, concurrent features, and server components',
          expertise: 'Expert',
          usage: '90% of projects'
        },
        {
          name: 'TypeScript',
          logo: '📘',
          description: 'Type-safe JavaScript for large-scale applications',
          expertise: 'Expert',
          usage: '95% of projects'
        },
        {
          name: 'Next.js',
          logo: '▲',
          description: 'Full-stack React framework with SSR, SSG, and API routes',
          expertise: 'Advanced',
          usage: '70% of projects'
        },
        {
          name: 'Tailwind CSS',
          logo: '🎨',
          description: 'Utility-first CSS framework for rapid UI development',
          expertise: 'Expert',
          usage: '85% of projects'
        },
        {
          name: 'Vue.js',
          logo: '💚',
          description: 'Progressive framework for building user interfaces',
          expertise: 'Advanced',
          usage: '30% of projects'
        }
      ]
    },
    {
      id: 'backend',
      name: 'Backend Technologies',
      color: '#10B981',
      technologies: [
        {
          name: 'Node.js',
          logo: '🟢',
          description: 'JavaScript runtime for scalable server-side applications',
          expertise: 'Expert',
          usage: '80% of projects'
        },
        {
          name: 'Python',
          logo: '🐍',
          description: 'Versatile language for web development, AI, and automation',
          expertise: 'Expert',
          usage: '75% of projects'
        },
        {
          name: 'FastAPI',
          logo: '⚡',
          description: 'High-performance Python web framework for building APIs',
          expertise: 'Advanced',
          usage: '60% of projects'
        },
        {
          name: 'Express.js',
          logo: '🚂',
          description: 'Fast, minimal web framework for Node.js applications',
          expertise: 'Expert',
          usage: '70% of projects'
        },
        {
          name: 'GraphQL',
          logo: '◉',
          description: 'Query language and runtime for flexible API development',
          expertise: 'Advanced',
          usage: '40% of projects'
        }
      ]
    },
    {
      id: 'database',
      name: 'Database Technologies',
      color: '#8B5CF6',
      technologies: [
        {
          name: 'PostgreSQL',
          logo: '🐘',
          description: 'Advanced relational database with JSON and full-text search',
          expertise: 'Expert',
          usage: '85% of projects'
        },
        {
          name: 'MongoDB',
          logo: '🍃',
          description: 'Flexible NoSQL database for document-based applications',
          expertise: 'Advanced',
          usage: '50% of projects'
        },
        {
          name: 'Redis',
          logo: '🔴',
          description: 'In-memory data structure store for caching and sessions',
          expertise: 'Advanced',
          usage: '70% of projects'
        },
        {
          name: 'Elasticsearch',
          logo: '🔍',
          description: 'Distributed search and analytics engine',
          expertise: 'Intermediate',
          usage: '30% of projects'
        }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      color: '#F59E0B',
      technologies: [
        {
          name: 'AWS',
          logo: '☁️',
          description: 'Comprehensive cloud platform with 200+ services',
          expertise: 'Expert',
          usage: '70% of projects'
        },
        {
          name: 'Docker',
          logo: '🐳',
          description: 'Containerization platform for consistent deployments',
          expertise: 'Expert',
          usage: '90% of projects'
        },
        {
          name: 'Kubernetes',
          logo: '⎈',
          description: 'Container orchestration for scalable applications',
          expertise: 'Advanced',
          usage: '60% of projects'
        },
        {
          name: 'Terraform',
          logo: '🏗️',
          description: 'Infrastructure as Code for automated provisioning',
          expertise: 'Advanced',
          usage: '65% of projects'
        },
        {
          name: 'GitHub Actions',
          logo: '🤖',
          description: 'CI/CD automation and workflow management',
          expertise: 'Expert',
          usage: '80% of projects'
        }
      ]
    },
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      color: '#EF4444',
      technologies: [
        {
          name: 'OpenAI GPT',
          logo: '🤖',
          description: 'Large language models for natural language processing',
          expertise: 'Advanced',
          usage: '50% of AI projects'
        },
        {
          name: 'TensorFlow',
          logo: '🧠',
          description: 'End-to-end ML platform for model development and deployment',
          expertise: 'Intermediate',
          usage: '40% of AI projects'
        },
        {
          name: 'LangChain',
          logo: '🔗',
          description: 'Framework for developing LLM-powered applications',
          expertise: 'Advanced',
          usage: '70% of AI projects'
        },
        {
          name: 'Hugging Face',
          logo: '🤗',
          description: 'Open-source ML models and datasets platform',
          expertise: 'Advanced',
          usage: '60% of AI projects'
        }
      ]
    }
  ];

  const getExpertiseColor = (expertise: string) => {
    switch (expertise) {
      case 'Expert': return 'bg-green-100 text-green-800 border-green-200';
      case 'Advanced': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const currentCategory = techStack.find(cat => cat.id === selectedCategory)!;

  return (
    <div className="w-full space-y-6">
      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {techStack.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className="flex items-center gap-2"
          >
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: category.color }}
            />
            {category.name}
          </Button>
        ))}
      </div>

      {/* Technology Stack Visualization */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: currentCategory.color }}
            />
            {currentCategory.name}
          </CardTitle>
          <CardDescription>
            Technologies we use to build modern, scalable solutions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory.technologies.map((tech, index) => (
              <Card 
                key={tech.name}
                className={`transition-all duration-200 cursor-pointer ${
                  hoveredTech === tech.name ? 'scale-105 shadow-lg border-blue-300' : 'hover:shadow-md'
                }`}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{tech.logo}</div>
                    <h3 className="font-semibold text-lg mb-2">{tech.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 h-12">{tech.description}</p>
                    
                    <div className="space-y-3">
                      <Badge 
                        variant="outline" 
                        className={`${getExpertiseColor(tech.expertise)} border text-xs`}
                      >
                        {tech.expertise}
                      </Badge>
                      <div className="text-xs text-gray-500">
                        Used in {tech.usage}
                      </div>
                    </div>
                  </div>

                  {/* Animated progress bar */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          backgroundColor: currentCategory.color,
                          width: hoveredTech === tech.name ? 
                            (tech.expertise === 'Expert' ? '100%' : 
                             tech.expertise === 'Advanced' ? '80%' : '60%') : '0%'
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technology Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="text-center">
          <CardContent className="py-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {techStack.reduce((sum, cat) => sum + cat.technologies.length, 0)}+
            </div>
            <div className="text-sm text-gray-600">Technologies Mastered</div>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="py-6">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {techStack.reduce((sum, cat) => 
                sum + cat.technologies.filter(tech => tech.expertise === 'Expert').length, 0
              )}
            </div>
            <div className="text-sm text-gray-600">Expert Level</div>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="py-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
            <div className="text-sm text-gray-600">Core Categories</div>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="py-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Modern Stack</div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Technology Radar */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Technology Radar</CardTitle>
          <CardDescription>
            Our expertise levels across different technology domains
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              {/* Radar Grid */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Technology Points */}
              {techStack.map((category, catIndex) => (
                <g key={category.id}>
                  {category.technologies.map((tech, techIndex) => {
                    const angle = (catIndex * 72) + (techIndex * 15);
                    const expertise = tech.expertise === 'Expert' ? 80 : 
                                    tech.expertise === 'Advanced' ? 60 : 40;
                    const x = 200 + expertise * Math.cos(angle * Math.PI / 180);
                    const y = 100 + expertise * Math.sin(angle * Math.PI / 180);
                    
                    return (
                      <circle
                        key={tech.name}
                        cx={x}
                        cy={y}
                        r="4"
                        fill={category.color}
                        className="cursor-pointer hover:r-6 transition-all"
                        onMouseEnter={() => setHoveredTech(tech.name)}
                        onMouseLeave={() => setHoveredTech(null)}
                      />
                    );
                  })}
                </g>
              ))}
              
              {/* Center Point */}
              <circle cx="200" cy="100" r="3" fill="#374151" />
            </svg>
            
            {/* Hover Tooltip */}
            {hoveredTech && (
              <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg border z-10">
                <div className="font-medium">{hoveredTech}</div>
                <div className="text-sm text-gray-600">
                  {currentCategory.technologies.find(t => t.name === hoveredTech)?.expertise}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
