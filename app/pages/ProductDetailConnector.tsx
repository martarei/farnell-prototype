import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { HeaderWithSearch } from '../components/HeaderWithSearch';
import Frame22 from '../../imports/Frame1578';
import NotificationsToast from '../../imports/NotificationsToast';
import { PdpContext } from '../../imports/PdpContext';

const PRODUCT = {
  image: '/images/jst-connector.jpg',
  partNo: 'BM05B-ACHSS-A-GAN-ETF(LF)(SN)',
  description: 'Male Header, 5 Contacts, 1.5mm Pitch, Surface Mount, Straight, ACH Series',
  manufacturer: 'JST',
  orderCode: '2359841',
  orderCodes: [
    { icon: 'reel' as const, label: 'Full Reel', code: '2359841' },
    { icon: 'scissors' as const, label: 'Cut Tape', code: '2359842' },
  ],
  unitPrice: 0.52,
  priceBreaks: [
    { quantity: '1+',   price: '£0.52' },
    { quantity: '100+', price: '£0.44' },
    { quantity: '500+', price: '£0.38' },
  ],
  breadcrumbs: ['Connectors', 'Wire-to-Board Connectors', 'JST Connectors'],
};

export default function ProductDetailConnector() {
  const [showToast, setShowToast] = useState(false);
  const [quantity, setQuantity] = useState(10);
  const navigate = useNavigate();

  const productData = {
    title: PRODUCT.partNo + ' added to basket',
    partNumber: PRODUCT.partNo,
    description: PRODUCT.description,
    orderCode: PRODUCT.orderCode,
    image: PRODUCT.image,
    quantity,
    price: '£' + (PRODUCT.unitPrice * quantity).toFixed(2),
  };

  const handleAddToBasket = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) setQuantity(newQuantity);
  };

  return (
    <PdpContext.Provider value={PRODUCT}>
      <div className="bg-white min-h-screen">
        <style>{`
          [data-name="border"].bg-\\[\\#c6c6c6\\] { display: none !important; }
          [data-name="matts/button"] { cursor: pointer; }
          [data-name="matts/button"] [data-name="Label"] p { font-size: 0; }
          [data-name="matts/button"] [data-name="Label"] p::after { content: "Add to Basket"; font-size: 16px; }
          @keyframes slideDownFade {
            from { transform: translateY(-100%); opacity: 0; }
            to   { transform: translateY(0);     opacity: 1; }
          }
          .animate-slide-down { animation: slideDownFade 0.4s ease-out; }
        `}</style>

        {showToast && (
          <div className="fixed top-4 right-4 z-50 animate-slide-down">
            <div className="relative">
              <NotificationsToast productData={productData} onClose={() => setShowToast(false)} />
            </div>
          </div>
        )}

        <div className="w-full h-[102px]">
          <HeaderWithSearch />
        </div>

        <div className="w-full">
          <div className="flex justify-center pt-[32px]">
            <nav className="content-start flex flex-wrap gap-[8px] items-start w-[1506px]">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                <button onClick={() => navigate('/')} className="content-start flex flex-wrap items-start relative shrink-0">
                  <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">Home</p>
                </button>
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">/</p>
              </div>
              {PRODUCT.breadcrumbs.map((crumb, i) => (
                <div key={i} className="content-stretch flex gap-[8px] items-start relative shrink-0">
                  <button onClick={i === 0 ? () => navigate('/search?q=BM05B-ACHSS-A-GAN-ETF%28LF%29%28SN%29') : undefined} className="content-start flex flex-wrap items-start relative shrink-0">
                    <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">{crumb}</p>
                  </button>
                  <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">/</p>
                </div>
              ))}
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">{PRODUCT.partNo}</p>
              </div>
            </nav>
          </div>

          <div className="flex justify-center mt-[30px]">
            <div className="w-[1506px]" onClick={(e) => {
              const target = e.target as HTMLElement;
              if (target.closest('[data-name="matts/button"]')) handleAddToBasket();
            }}>
              <Frame22 quantity={quantity} onQuantityChange={handleQuantityChange} />
            </div>
          </div>
        </div>
      </div>
    </PdpContext.Provider>
  );
}
