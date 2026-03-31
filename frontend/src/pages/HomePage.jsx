import React, { Suspense, lazy } from 'react';
import HeroSection from '../components/HeroSection';

const ProblemSection = lazy(() => import('../components/ProblemSection'));
const SolutionSection = lazy(() => import('../components/SolutionSection'));
const WhyAINASection = lazy(() => import('../components/WhyAINASection'));
const FeaturesSection = lazy(() => import('../components/FeaturesSection'));
const HowItWorksSection = lazy(() => import('../components/HowItWorksSection'));
const SystemArchitectureSection = lazy(() => import('../components/SystemArchitectureSection'));
const ProgressSection = lazy(() => import('../components/ProgressSection'));
const RoadmapSection = lazy(() => import('../components/RoadmapSection'));
const FundingSection = lazy(() => import('../components/FundingSection'));
const PricingSection = lazy(() => import('../components/PricingSection'));
const AppreciationSection = lazy(() => import('../components/AppreciationSection'));
const ClosingSection = lazy(() => import('../components/ClosingSection'));
const Footer = lazy(() => import('../components/Footer'));

const SectionFallback = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <div className="w-6 h-6 rounded-full border-2 border-purple-500/40 border-t-purple-400 animate-spin" />
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <ProblemSection />
        <SolutionSection />
        <WhyAINASection />
        <FeaturesSection />
        <HowItWorksSection />
        <SystemArchitectureSection />
        <ProgressSection />
        <RoadmapSection />
        <FundingSection />
        <PricingSection />
        <AppreciationSection />
        <ClosingSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default HomePage;
