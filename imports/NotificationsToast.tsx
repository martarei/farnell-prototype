import svgPaths from "./svg-3blzazwxqx";

interface ProductData {
  title: string;
  partNumber: string;
  description: string;
  orderCode: string;
  image: string;
  quantity: number;
  price: string;
}

interface NotificationsToastProps {
  productData: ProductData;
  onClose: () => void;
}

function TitleLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="title+label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#161616] text-[20px] tracking-[-0.3px] whitespace-nowrap">Added to basket</p>
      <div className="relative shrink-0 size-[26px]" data-name="Component 2">
        <div className="absolute inset-[5%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.4 23.4">
            <path clipRule="evenodd" d={svgPaths.p4ceb880} fill="var(--fill-0, #24A148)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7 8.84">
            <path clipRule="evenodd" d={svgPaths.p2ad93c80} fill="var(--fill-0, #161616)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <TitleLabel />
    </div>
  );
}

function Title({ title }: { title: string }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="title">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[-0.2px] break-words">{title}</p>
    </div>
  );
}

function Frame11({ partNumber, description, orderCode }: { partNumber: string; description: string; orderCode: string }) {
  return (
    <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[4px] items-start leading-[16px] not-italic relative shrink text-[13px] tracking-[-0.3px] flex-1 min-w-0">
      <p className="relative shrink-0 text-[#0072c3] w-full break-words">{partNumber}</p>
      <p className="relative shrink-0 text-[#525252] w-full break-words">{description}</p>
      <p className="relative shrink-0 text-[#525252] w-full break-words">{orderCode}</p>
    </div>
  );
}

function Frame3({ image, partNumber, description, orderCode }: { image: string; partNumber: string; description: string; orderCode: string }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 flex-1 min-w-0">
      <div className="h-[54px] relative shrink-0 w-[59px]" data-name="Screenshot 2025-08-07 at 16.36.00 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={image} />
      </div>
      <Frame11 partNumber={partNumber} description={description} orderCode={orderCode} />
    </div>
  );
}

function Frame2({ quantity, price }: { quantity: number; price: string }) {
  return (
    <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[13px] items-center leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] text-right tracking-[-0.3px]">
      <p className="relative shrink-0 min-w-[48px]">{quantity}</p>
      <p className="relative shrink-0 min-w-[64px] break-words">{price}</p>
    </div>
  );
}

function Frame10({ productData }: { productData: ProductData }) {
  return (
    <div className="content-stretch flex items-start gap-[8px] relative shrink-0 w-full">
      <Frame3 image={productData.image} partNumber={productData.partNumber} description={productData.description} orderCode={productData.orderCode} />
      <Frame2 quantity={productData.quantity} price={productData.price} />
    </div>
  );
}

function MiniCartItem({ productData }: { productData: ProductData }) {
  return (
    <div className="bg-[#f0f8ff] relative rounded-[6px] shrink-0 w-full overflow-hidden" data-name="Mini-Cart-Item">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[12px] relative w-full">
          <Title title={productData.title} />
          <Frame10 productData={productData} />
        </div>
      </div>
    </div>
  );
}

function Frame12({ productData }: { productData: ProductData }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <MiniCartItem productData={productData} />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex font-['Apercu_Avnet:Bold',sans-serif] items-start leading-[22px] not-italic relative shrink-0 text-[#161616] text-[16px] tracking-[-0.3px] w-full">
      <p className="flex-[1_0_0] min-h-px min-w-px relative">All items total (Exc VAT)</p>
      <p className="relative shrink-0 text-right w-[150.989px]">£56.75</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center px-[16px] relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.3px] whitespace-nowrap">Visit Basket</p>
    </div>
  );
}

function InnerFrame() {
  return (
    <div className="bg-[#0072c3] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px] self-stretch" data-name="Inner Frame">
      <Label />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] h-[48px] items-start min-h-px min-w-px relative" data-name="button">
        <InnerFrame />
      </div>
    </div>
  );
}

function MattsCountrySelector() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/country-selector">
      <Frame1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame5 />
      <MattsCountrySelector />
    </div>
  );
}

function Frame7({ productData }: { productData: ProductData }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame6 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 1">
            <line id="Line 3" stroke="var(--stroke-0, #E0E0E0)" x2="345" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame12 productData={productData} />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 1">
              <line id="Line 3" stroke="var(--stroke-0, #E0E0E0)" x2="345" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col h-0 items-start shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Frame4({ productData }: { productData: ProductData }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[345px]">
      <Frame7 productData={productData} />
      <Frame9 />
    </div>
  );
}

function ContentButtons({ productData }: { productData: ProductData }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="content+buttons">
      <Frame4 productData={productData} />
    </div>
  );
}

function Frame13({ productData, onClose }: { productData: ProductData; onClose: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full max-w-[349px]">
      <div className="relative shrink-0 size-[20px] cursor-pointer" data-name="cancel" onClick={onClose}>
        <div className="absolute inset-1/4" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path clipRule="evenodd" d={svgPaths.p25fa3200} fill="var(--fill-0, #161616)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
      <ContentButtons productData={productData} />
    </div>
  );
}

function NotificationContent({ productData, onClose }: { productData: ProductData; onClose: () => void }) {
  return (
    <div className="content-stretch flex items-start pb-[32px] pt-[16px] relative shrink-0" data-name="notification-content">
      <Frame13 productData={productData} onClose={onClose} />
    </div>
  );
}

export default function NotificationsToast({ productData, onClose }: NotificationsToastProps) {
  return (
    <div className="bg-white content-stretch flex items-start px-[16px] sm:px-[32px] relative shadow-[0px_2px_7px_0px_rgba(0,0,0,0.25)] rounded-[8px] max-w-[calc(100vw-32px)]" data-name="notifications/toast">
      <NotificationContent productData={productData} onClose={onClose} />
    </div>
  );
}