
import React from 'react';
import ExecutiveTeam from '@/components/campaign-leaders/ExecutiveTeam';
import VolunteerTeam from '@/components/campaign-leaders/VolunteerTeam';
import InternTeam from '@/components/campaign-leaders/InternTeam';

const CampaignLeaders = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Campaign Leaders</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated individuals who drive our mission forward through leadership, volunteerism, and commitment.
          </p>
        </div>

        <div className="space-y-16">
          <ExecutiveTeam />
          <VolunteerTeam />
          <InternTeam />
        </div>
      </div>
    </div>
  );
};

export default CampaignLeaders;
