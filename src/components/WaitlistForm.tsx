import React, { useEffect } from 'react';
import Container from './Container';

const WaitlistForm: React.FC = () => {
  useEffect(() => {
    const d = document;
    const w = "https://tally.so/widgets/embed.js";
    const v = function() {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e) {
          const iframe = e as HTMLIFrameElement;
          if (iframe.dataset && iframe.dataset.tallySrc) {
            iframe.src = iframe.dataset.tallySrc;
          }
        });
      }
    };
    if (typeof window.Tally !== "undefined") {
      v();
    } else if (d.querySelector('script[src="' + w + '"]') == null) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    }
  }, []);

  return (
    <section id="waitlist" className="relative py-16 sm:py-24 bg-[#00C4A7] text-white overflow-hidden">
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 60% 40% at 50% 50%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 40% at 50% 50%, #000 60%, transparent 100%)',
        }}
      />
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to transform your reconciliation process?</h2>
          <div 
            className="bg-white rounded-lg overflow-hidden px-6 py-8 flex flex-col items-center"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 480,
              margin: '0 auto',
              boxSizing: 'border-box',
            }}
          >
            <p className="text-base text-gray-800 mb-6">
              Join the waitlist to be among the first to experience the power of Flowbase
            </p>
            <iframe data-tally-src="https://tally.so/embed/w7jJdL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="395" frameBorder="0" marginHeight={0} marginWidth={0} title="Join the Waitlist" style={{ border: 'none' }}></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WaitlistForm;