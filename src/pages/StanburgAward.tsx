
import React from 'react';
import StanburgHero from '@/components/stanburg/StanburgHero';
import WhoWeEmpower from '@/components/stanburg/WhoWeEmpower';
import WhatWeProvide from '@/components/stanburg/WhatWeProvide';
import DemoVideoSection from '@/components/stanburg/DemoVideoSection';
import PreviousProjects from '@/components/stanburg/PreviousProjects';
import HowDifferent from '@/components/stanburg/HowDifferent';
import WhyUnique from '@/components/stanburg/WhyUnique';
import ComingSoon from '@/components/stanburg/ComingSoon';
import ApplyConnect from '@/components/stanburg/ApplyConnect';
import Footer from '@/components/Footer';

const StanburgAward = () => {
  return (
    <div className="min-h-screen bg-white">
      <StanburgHero />
      <WhoWeEmpower />
      <WhatWeProvide />
      <DemoVideoSection />
      <PreviousProjects />
      <HowDifferent />
      <WhyUnique />
      <ComingSoon />
      <ApplyConnect />
      <Footer />
    </div>
  );
};

export default StanburgAward;
