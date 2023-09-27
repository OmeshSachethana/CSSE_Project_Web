import React from 'react';

const Services = () => {
  const servicesData = [
    {
      title: 'Best Services',
      description: 'We provide top-notch services to meet your needs.',
    },
    {
      title: 'Best Teams',
      description: 'Our teams are experienced and dedicated to excellence.',
    },
    {
      title: 'Best Designs',
      description: 'We create stunning designs to make your vision a reality.',
    },
  ];

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
