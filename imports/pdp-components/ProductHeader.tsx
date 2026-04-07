import { usePdpContext } from '../PdpContext';

function MattsPdpTopProductInfoHeaderHeaderSubHeader() {
  const ctx = usePdpContext();
  const partNo = ctx?.partNo ?? 'MPS751RLRAG.';
  const description = ctx?.description ?? 'Bipolar (BJT) Single Transistor, PNP, 60 V, 2 A, 625 mW, TO-92, Through Hole';
  return (
    <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[4px] items-start not-italic relative shrink-0 text-[#161616] tracking-[-0.3px] w-full" data-name="matts/pdp/top/product-info/header/header+sub-header">
      <p className="leading-[36px] relative shrink-0 text-[28px] w-full">{partNo}</p>
      <p className="leading-[22px] relative shrink-0 text-[16px] w-full">{description}</p>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#2a8442] content-stretch flex items-start pb-[4px] pt-[2px] px-[8px] relative shrink-0" data-name="text">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.2px] uppercase whitespace-nowrap">NEW</p>
    </div>
  );
}

function Flashes() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Flashes">
      <Text />
      <div className="h-[24px] relative shrink-0 w-[7.862px]" data-name="triange">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.86207 24">
          <path d="M0 0H7.86207L0 24V0Z" fill="var(--fill-0, #2A8442)" id="triange" />
        </svg>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative self-stretch" data-name="title">
      <MattsPdpTopProductInfoHeaderHeaderSubHeader />
      <Flashes />
    </div>
  );
}

export default function ProductHeader() {
  const ctx = usePdpContext();
  const manufacturer = ctx?.manufacturer ?? 'ONSEMI';
  const isOnsemi = manufacturer.toUpperCase() === 'ONSEMI';
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/product-info/header">
      <Title />
      <div className="flex items-center justify-center h-[69px] shrink-0 w-[173px] border border-[#e0e0e0] rounded-[4px] bg-white px-[12px]" data-name="brand-logo">
        {isOnsemi ? (
          <img alt="onsemi" className="w-full h-auto object-contain pointer-events-none" src="/images/onsemi-logo.svg" />
        ) : (
          <p className="font-['Apercu_Avnet:Regular',sans-serif] text-[14px] text-[#161616] text-center">{manufacturer}</p>
        )}
      </div>
    </div>
  );
}
