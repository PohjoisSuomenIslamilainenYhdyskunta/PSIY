"use client"
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function DonationSection(props) {
  const defaultData = props.data.default || {};
  const donationData = defaultData.donation || {};

  return (
    <>
      {donationData.title && (
        <div className="bg-white">
          <div id="donate" className="mx-auto py-5 px-4 max-w-7xl sm:px-6 lg:px-8 md:py-16 lg:py-20">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">{donationData.title}</span>
              <span className="block mosque-website__text--brand">{donationData.subtitle}</span>
            </h2>
            <div className="mt-6 text-gray-700 markdown max-w-3xl">
              {donationData.description}
            </div>
            <div className="mt-8 flex">
              <div className="inline-flex rounded-md shadow">
                <a
                  href={donationData.link}
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white mosque-website__cta-button--brand opacity-90 hover:opacity-100"
                >
                  {donationData.link_label || "Donate Now"}
                  <Popup
                    trigger={<button>Donate Now</button>}
                    position="right center"
                    size="large"
                  >
                    <div>
                      Bank transfer Information
                      <div>Name: Pohjois Suomen Islamilainen Yhdyskunta (PSIY)</div>
                      <div>Bank: Danske Bank</div>
                      <div>Account Number: FI9789008710565976</div>
                    </div>
                  </Popup>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

