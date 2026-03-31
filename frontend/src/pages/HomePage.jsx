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

const S = ({ children }) => <Suspense fallback={null}>{children}</Suspense>;

const HomePage = () => (
  <div className="min-h-screen bg-[#0a0a0f]">
    <HeroSection />
    <S><ProblemSection /></S>
    <S><SolutionSection /></S>
    <S><WhyAINASection /></S>
    <S><FeaturesSection /></S>
    <S><HowItWorksSection /></S>
    <S><SystemArchitectureSection /></S>
    <S><ProgressSection /></S>
    <S><RoadmapSection /></S>
    <S><FundingSection /></S>
    <S><PricingSection /></S>
    <S><AppreciationSection /></S>
    <S><ClosingSection /></S>
    <S><Footer /></S>
  </div>
);

export default HomePage;
