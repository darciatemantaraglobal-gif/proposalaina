import React from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import WhyAINASection from '../components/WhyAINASection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import SystemArchitectureSection from '../components/SystemArchitectureSection';
import ProgressSection from '../components/ProgressSection';
import RoadmapSection from '../components/RoadmapSection';
import FundingSection from '../components/FundingSection';
import AppreciationSection from '../components/AppreciationSection';
import ClosingSection from '../components/ClosingSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhyAINASection />
      <FeaturesSection />
      <HowItWorksSection />
      <SystemArchitectureSection />
      <ProgressSection />
      <RoadmapSection />
      <FundingSection />
      <AppreciationSection />
      <ClosingSection />
      <Footer />
    </div>
  );
};

export default HomePage;
