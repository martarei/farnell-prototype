import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { HeaderWithSearch } from '../components/HeaderWithSearch';
import Frame22 from '../../imports/Frame1578';
import NotificationsToast from '../../imports/NotificationsToast';
import imgScreenshot20260324At1147301 from "figma:asset/194cb70d43678ba2df1d4092d674b9559a965000.png";

export default function ProductDetail() {
  const [showToast, setShowToast] = useState(false);
  const [quantity, setQuantity] = useState(5);
  const navigate = useNavigate();

  const unitPrice = 6.334;

  const productData = {
    title: "Bipolar (BJT) Single Transistor added to basket",
    partNumber: "MPS751RLRAG",
    description: "Bipolar (BJT) Single Transistor, PNP, 60 V, 2 A, 625 mW, TO-92, Through Hole",
    orderCode: "1234567",
    image: imgScreenshot20260324At1147301,
    quantity: quantity,
    price: `£${(unitPrice * quantity).toFixed(2)}`
  };

  const handleAddToBasket = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) setQuantity(newQuantity);
  };

  return (
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
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
              <button onClick={() => navigate('/search')} className="content-start flex flex-wrap items-start relative shrink-0">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">Semiconductors - Discretes</p>
              </button>
              <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">/</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
              <button className="content-start flex flex-wrap items-start relative shrink-0">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">Transistors</p>
              </button>
              <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">/</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
              <button className="content-start flex flex-wrap items-start relative shrink-0">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">Bipolar Transistors</p>
              </button>
              <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">/</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
              <div className="content-start flex flex-wrap items-start relative shrink-0">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">MPS751RLRAG</p>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex justify-center mt-[30px]">
          <div className="w-[1506px]" onClick={(e) => {
            const target = e.target as HTMLElement;
            const addButton = target.closest('[data-name="matts/button"]');
            if (addButton) handleAddToBasket();
          }}>
            <Frame22 quantity={quantity} onQuantityChange={handleQuantityChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
