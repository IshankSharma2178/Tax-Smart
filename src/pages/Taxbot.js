import React, { useEffect } from 'react';

function Taxbot() {
  useEffect(() => {
        if (!document.getElementById('chatling-embed-script')) {
      const script = document.createElement('script');
      script.async = true;
      script.id = 'chatling-embed-script';
      script.dataset.id = '7991141872';
      script.dataset.display = 'fullscreen';
      script.src = 'https://chatling.ai/js/embed.js';
      document.body.appendChild(script);
    }
  }, []);

  return <div id="chatbot-container"></div>;
}

export default Taxbot;
