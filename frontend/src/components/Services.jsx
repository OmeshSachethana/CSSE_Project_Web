import React from 'react';

import { servicesData } from '../constants';

const Services = () => {

  return (
    <div className="flex justify-center mt-10">
      {servicesData.map((feature, index) => (
        <div key={index} className="max-w-xs mx-4 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold mb-4">{feature.title}</h2>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
