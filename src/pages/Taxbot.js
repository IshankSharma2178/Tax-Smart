import React, { useEffect } from 'react';

const Taxbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://chatling.ai/js/embed.js';
    script.async = true;
    script.setAttribute('data-id', '3317918368');
    script.setAttribute('id', 'chatling-embed-script');
    script.setAttribute('data-display', 'fullscreen');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  

  return (
    <div className="relative overflow-hidden" style={{ marginBottom: '-10px' }}>
      {/* Main content of your page */}
      <div className="h-[calc(100vh-10px)] flex items-center justify-center">
        <h1 className="text-2xl font-bold "></h1>
      </div>
    </div>
  );
};

export default Taxbot;
