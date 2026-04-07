import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { HeaderWithSearch } from '../components/HeaderWithSearch';
import Frame22 from '../../imports/Frame1578';
import NotificationsToast from '../../imports/NotificationsToast';
import { PdpContext } from '../../imports/PdpContext';

const PRODUCT = {
  image: '/images/resistor.jpg',
  partNo: 'MCWR08X4301FTL',
  description: 'Thick Film Resistor, 430 Ohm, 0805 [2012 Metric], 1%, 125 mW, SMD',
  manufacturer: 'Multicomp Pro',
  orderCode: '2447553',
  orderCodes: [
    { icon: 'reel' as const, label: 'Full Reel', code: '2447553' },
    { icon: 'scissors' as const, label: 'Cut Tape', code: '2447554' },
  ],
  unitPrice: 0.013,
  priceBreaks: [
    { quantity: '50+',   price: '£0.013' },
    { quantity: '500+',  price: '£0.010' },
    { quantity: '2000+', price: '£0.008' },
  ],
  breadcrumbs: ['Passive Components', 'Resistors', 'Chip / SMD Resistors'],
};

export default function ProductDetailResistor() {
  const [showToast, setShowToast] = useState(false);
  const [quantity, setQuantity] = useState(50);
  const navigate = useNavigate();

  const productData = {
    title: PRODUCT.partNo + ' added to basket',
    partNumber: PRODUCT.partNo,
    description: PRODUCT.description,
    orderCode: PRODUCT.orderCode,
    image: PRODUCT.image,
    quantity,
    price: '£' + (PRODUCT.unitPrice * quantity).toFixed(3),
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
                  <button onClick={i === 0 ? () => navigate('/search?q=MCWR08X4301FTL') : undefined} className="content-start flex flex-wrap items-start relative shrink-0">
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
