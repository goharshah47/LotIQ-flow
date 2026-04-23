/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building, 
  Eye, 
  Brain, 
  Zap, 
  BarChart3, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

interface OnboardingStep {
  title: string;
  derivedFrom: string;
  purpose: string;
  keyPoints: string[];
  icon: typeof Building;
  color: string;
}

const steps: OnboardingStep[] = [
  {
    title: "Property Setup",
    derivedFrom: "How It Works: Step 1 (LotIQ installs)",
    purpose: "Establish the physical and digital foundation of the monitoring system.",
    icon: Building,
    color: "bg-brand",
    keyPoints: [
      "Professional end-to-end hardware installation and configuration.",
      "Custom mapping of parking zones, hazard areas, and service points.",
      "System calibration to ensure site-specific detection accuracy."
    ]
  },
  {
    title: "24/7 Property Visibility",
    derivedFrom: "Hero Section & Step 2 (Receive Intelligence)",
    purpose: "Maintain constant, real-time visibility over the entire property.",
    icon: Eye,
    color: "bg-indigo-500",
    keyPoints: [
      "Continuous 24/7 video analysis of every square foot.",
      "Unified dashboard for instant property-wide status updates.",
      "Remote visibility that eliminates the need for on-site staff."
    ]
  },
  {
    title: "Behavioral AI Detection",
    derivedFrom: "Behavior-Based Intelligence & Use-cases",
    purpose: "Understand the context and intent of every movement on-site.",
    icon: Brain,
    color: "bg-purple-500",
    keyPoints: [
      "Distinguishes between delivery vehicles, visitors, and violations.",
      "Instant detection of slip-and-falls, intruders, or hazard zones.",
      "Context-aware intelligence that filters out false alarms."
    ]
  },
  {
    title: "Rules & Automation",
    derivedFrom: "Automated Enforcement & Hero Section",
    purpose: "Turn detections into instant, hands-free enforcement actions.",
    icon: Zap,
    color: "bg-amber-500",
    keyPoints: [
      "Automatic alerts triggered for towing, security, or maintenance vendors.",
      "Real-time enforcement based on custom property-specific rules.",
      "Instant notifications sent directly to managers and owners."
    ]
  },
  {
    title: "Evidence & Insights",
    derivedFrom: "Service Monitoring & Property Operations",
    purpose: "Access data-driven proof to verify operations and mitigate liability.",
    icon: BarChart3,
    color: "bg-emerald-500",
    keyPoints: [
      "Visual proof of service for snow ploughing and maintenance work.",
      "Full video backup and event timelines for incident verification.",
      "Comprehensive metrics on occupancy, traffic, and compliance trends."
    ]
  }
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = steps[currentStep];

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-900">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col min-h-[600px] border border-slate-100">
        {/* Header */}
        <div className="p-6 flex justify-end items-center bg-white border-b border-slate-50">
          <button 
            onClick={() => setCurrentStep(steps.length - 1)}
            className="text-slate-400 font-medium text-sm hover:text-slate-600 transition-colors"
          >
            Skip
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 relative overflow-hidden flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="p-8 flex flex-col h-full"
            >
              {/* Icon & Label */}
              <div className="mb-8">
                <div className={`${step.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg`}>
                  <step.icon size={28} />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand mb-2">
                  {step.derivedFrom}
                </div>
                <h1 className="text-2xl font-bold text-slate-900 mb-3 leading-tight tracking-tight">
                  {step.title}
                </h1>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.purpose}
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4 flex-1">
                {step.keyPoints.map((point, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border border-slate-100"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm font-medium leading-normal">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Navigation */}
        <div className="p-8 bg-white border-t border-slate-50">
          {/* Progress Indicators */}
          <div className="flex justify-center gap-1.5 mb-6">
            {steps.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentStep ? 'w-8 bg-brand' : 'w-1.5 bg-slate-200'
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            {currentStep > 0 && (
              <button
                onClick={prevStep}
                className="flex-1 py-4 px-6 rounded-2xl font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all flex items-center justify-center group"
              >
                Back
              </button>
            )}
            
            {currentStep < steps.length - 1 ? (
              <button
                onClick={nextStep}
                className="flex-[2] py-4 px-6 rounded-2xl font-bold bg-brand text-white hover:opacity-90 shadow-md shadow-brand/20 transition-all flex items-center justify-center gap-2 group"
              >
                Continue
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <button
                onClick={() => console.log('Finished')}
                className="flex-[2] py-4 px-6 rounded-2xl font-bold bg-slate-900 text-white hover:bg-black shadow-md shadow-slate-200 transition-all flex items-center justify-center gap-2"
              >
                Get Started
                <CheckCircle2 className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
