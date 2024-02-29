import React, { useEffect } from 'react';

const VideoWidget: React.FC = () => {
  useEffect(() => {
    // Define the function that initializes the widget
    function initWidget() {
      const id = 'movio_frame_' + Date.now();
      const container = document.getElementById('video-container');
      if (container) {
        container.insertAdjacentHTML('beforeend', '<iframe id="' + id + '" frameborder="0" style="z-index:999;position:relative;width:399px;height:412px;display:none" src="https://app.heygen.com/widget?data=eyJ2aWRlb19pZCI6IjYwODA1MzE2ODIzODRiYTBhYzk3NDczZDZiMTY1MGZlIiwiY3JvcF9zaGFwZSI6Im5vbmUiLCJzaG93X3BiIjp0cnVlLCJ1c2VybmFtZSI6IjkyOWQ4ZDNiZjY4YzQyMWU4MWFkZTIxM2JkY2IyYWQwIiwic2lkIjoibm9fc2lkIn0=&rid=YjhiuvAq"></iframe>');
      }

      // Event listener for messages from the iframe
      window.addEventListener('message', function (message) {
        const iframe = document.getElementById(id) as HTMLIFrameElement;
        const data = message.data;
        if (data.source !== 'movio-widget' || data.rid !== 'YjhiuvAq') return;
        if (data.action === 'loaded') {
          if (iframe) {
            iframe.style.display = 'block';
            iframe.style.width = "212px";
            iframe.style.height = "265px";
          }
        } else if (data.action === 'close') {
          if (iframe) {
            iframe.style.width = "90px";
            iframe.style.height = "90px";
          }
        }
      });
    }

    // Initialize the widget
    if (document.readyState === 'complete') {
      initWidget();
    } else {
      document.addEventListener('DOMContentLoaded', initWidget);
    }

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('message', initWidget);
    };
  }, []);

  return <div id="video-container"></div>;
};

export default VideoWidget;
