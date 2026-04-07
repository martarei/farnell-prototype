import { useState, useContext } from 'react';
import { PdpContext } from './PdpContext';
import svgPaths from "./svg-wt8pemywxi";

interface Frame22Props {
  quantity?: number;
  onQuantityChange?: (quantity: number) => void;
}
import imgScreenshot20260324At1147301 from "figma:asset/194cb70d43678ba2df1d4092d674b9559a965000.png";
import imgMultiviewDocumentatio from "figma:asset/b21bea3608eabac95a6efe8167f6f60cf6de7090.png";
import imgScreenshot20260325At1524521 from "figma:asset/60524fa9953542f14535850be50bb6b44de5e5d3.png";
import imgImage59 from "figma:asset/f295eeeeb153879270180aac34b39c0931487a8f.png";
import imgImage276 from "figma:asset/a968229396c3e4ad1ace3a253fde9a678c4b6f7e.png";
import imgImage277 from "figma:asset/4997279be9063caf461174a0a1b425c040dc337e.png";
import imgImage261 from "figma:asset/7c63fd46a52589220e00f482dc90611473b06506.png";
import imgImage60 from "figma:asset/4664426d1d41fa3bf4a2f9c1313ff850bb36cb02.png";
import imgImage81 from "figma:asset/285fa9ec9a5214e5fa157a27c94578ee88cb34ed.png";
import imgImage285 from "figma:asset/7a65f262fa51fd227a6c6135a7028630266cae6d.png";
import imgImage288 from "figma:asset/446d9059a446e1dba059a04f333833028aaa4e7a.png";
import imgImage289 from "figma:asset/5bd7f2f2ee8de3c2950f9c822d8109d4c616aa18.png";
import imgImage290 from "figma:asset/ac74f6197f2cef6102874fd9c0e6f829c8a1ad97.png";
import imgImage272 from "figma:asset/fe60d1f37494ce3c80533189ff0a0c02bfa0ecb8.png";
import imgImage271 from "figma:asset/f87f5bddf90dd7020f62e5bec969171024920742.png";
import imgImage273 from "figma:asset/1cf4c599e1a9bfc470e10c605fa55cd8ff5cd057.png";
import imgImage274 from "figma:asset/d983e62bf34315d03d53fa582658e31b974ffcb3.png";
import imgImage80 from "figma:asset/4d9da5d2af0cad66354292d46067eecd77d9a032.png";
import imgImage82 from "figma:asset/c0ed4f819f42985d18aa5d08cdf4619f0ddbf5f8.png";
import imgImage83 from "figma:asset/d066364b5812cf35b114730c9ac78aed5b0aa7f2.png";
import imgImage84 from "figma:asset/2fb48ebb7558e9edfead28ae906c0fac87026531.png";

function MattsPdpTopProductInfoHeaderHeaderSubHeader() {
  const ctx = useContext(PdpContext);
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

const MANUFACTURER_LOGOS: Record<string, string> = {
  'ONSEMI': '/images/onsemi-logo.png',
  'JST': '/images/jst-logo.jpeg',
  'MULTICOMP PRO': '/images/multicomp-pro-logo.png',
  'STARTECH.COM': '/images/startech-logo.png',
};

function MattsPdpTopProductInfoHeader() {
  const ctx = useContext(PdpContext);
  const manufacturer = ctx?.manufacturer ?? 'ONSEMI';
  const logoSrc = MANUFACTURER_LOGOS[manufacturer.toUpperCase()];
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/product-info/header">
      <Title />
      <div className="flex items-center justify-center shrink-0 bg-white px-[6px]" style={{ height: manufacturer.toUpperCase() === 'STARTECH.COM' ? 64 : 44, width: manufacturer.toUpperCase() === 'STARTECH.COM' ? 158 : 110 }} data-name="brand-logo">
        {logoSrc && <img alt={manufacturer} className="w-full h-full object-contain pointer-events-none" src={logoSrc} />}
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[16px]" data-name="icons">
        <div className="absolute inset-[6.25%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path clipRule="evenodd" d={svgPaths.p6429a00} fill="var(--fill-0, #A8A8A8)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#a8a8a8] text-[12px]">Image is for illustrative purposes only. Please refer to product description.</p>
    </div>
  );
}

function ImgHolder() {
  const ctx = useContext(PdpContext);
  const src = ctx?.image ?? imgScreenshot20260324At1147301;
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shadow-[0px_0px_1px_2px_#58b3f3] shrink-0 size-[56px]" data-name="img-holder">
      <div className="h-[56px] relative shrink-0 w-[62px]" data-name="Screenshot 2026-03-24 at 11.47.30 1">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={src} />
      </div>
    </div>
  );
}

function ThumbnailRow() {
  const ctx = useContext(PdpContext);
  const src = ctx?.image ?? imgScreenshot20260324At1147301;
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-start relative shrink-0 w-[344px]" data-name="thumbnail-row-01">
      <ImgHolder />
      <div className="flex h-[62px] items-center justify-center relative shrink-0 w-[56px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[56px] relative w-[62px]" data-name="Screenshot 2026-03-24 at 11.47.30 1">
            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={src} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ImgGallery() {
  const ctx = useContext(PdpContext);
  const src = ctx?.image ?? imgScreenshot20260324At1147301;
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[344px]" data-name="img-gallery">
      <Frame />
      <div className="aspect-[760/696] relative shrink-0 w-full" data-name="Screenshot 2026-03-24 at 11.47.30 1">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={src} />
      </div>
      <ThumbnailRow />
    </div>
  );
}

function Info() {
  const ctx = useContext(PdpContext);
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="info">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[128px]" data-name="title-text+tooltip">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Manufacturer</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[356px]" data-name="label-text+tooltip">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">{ctx?.manufacturer ?? 'ONSEMI'}</p>
      </div>
    </div>
  );
}

function Info1() {
  const ctx = useContext(PdpContext);
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="info">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[128px]" data-name="title-text+tooltip">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Manufacturer Part No</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[356px]" data-name="label-text+tooltip">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">{ctx?.partNo ?? 'MPS751RLRAG.'}</p>
      </div>
    </div>
  );
}

function ReelIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block shrink-0">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
      <line x1="12" y1="2" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="22"/>
      <line x1="2" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="22" y2="12"/>
    </svg>
  );
}

function ScissorsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block shrink-0">
      <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
      <line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/>
      <line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
  );
}

function Info2() {
  const ctx = useContext(PdpContext);
  const orderCodes = ctx?.orderCodes;
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="info">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[128px]" data-name="title-text+tooltip">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Order Code</p>
      </div>
      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[356px]" data-name="label-text+tooltip">
        {orderCodes ? orderCodes.map((oc, i) => (
          <div key={i} className="flex items-center gap-[8px]">
            <span className="text-[#525252]">{oc.icon === 'reel' ? <ReelIcon /> : <ScissorsIcon />}</span>
            <span className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic text-[#525252] text-[13px] whitespace-nowrap">{oc.label}</span>
            <span className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic text-[#161616] text-[13px] whitespace-nowrap">{oc.code}</span>
          </div>
        )) : (
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">{ctx?.orderCode ?? '2464092'}</p>
        )}
      </div>
    </div>
  );
}

function Vectors() {
  return (
    <div className="h-[14px] relative shrink-0 w-[10.75px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7499 14">
        <g id="vectors">
          <path d={svgPaths.p31284700} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          <path d={svgPaths.p6e57b80} fill="var(--fill-0, #D92638)" id="Vector_2" />
          <path d={svgPaths.pa8b5af0} fill="var(--fill-0, #D92638)" id="Vector_3" />
          <path d={svgPaths.p22c54ac0} fill="var(--fill-0, #D92638)" id="Vector_4" />
          <g id="text">
            <path d={svgPaths.p34884300} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p23639500} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p2b905c00} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Info3() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="info">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[128px]" data-name="title-text+tooltip">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Technical Datasheet</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[356px]" data-name="label-text+tooltip">
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="pdp-icons">
          <Vectors />
        </div>
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">Data Sheet</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Your Part Number</p>
    </div>
  );
}

function LabelCharacterCount() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label + Character count">
      <div className="opacity-0 shrink-0 size-[0.001px]" data-name="Spacer" />
    </div>
  );
}

function TextOverflow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-center justify-between min-h-px min-w-px overflow-x-auto overflow-y-clip relative z-[1]" data-name="Text overflow">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#a8a8a8] text-[13px] whitespace-nowrap">Enter part number</p>
      <div className="relative shrink-0 size-[16px]" data-name="Carbon Icons (All)">
        <div className="absolute inset-[12.5%_43.75%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 12">
            <path clipRule="evenodd" d={svgPaths.p4a8ff40} fill="var(--fill-0, #161616)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#f4f4f4] h-[32px] relative shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start pl-[16px] pr-[8px] py-[7px] relative size-full">
        <TextOverflow />
      </div>
    </div>
  );
}

function TextInputDefault() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] flex-col items-start max-w-[200px] min-h-px min-w-[64px] relative" data-name="Text input - Default">
      <LabelCharacterCount />
      <TextInput />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <TextInputDefault />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-center justify-end relative shrink-0" data-name="Tooltip">
        <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[16px]" data-name="Info">
          <div className="absolute inset-[6.25%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <g id="Vector">
                <path d={svgPaths.p2d24b500} fill="#525252" />
                <path d={svgPaths.p13e84a00} fill="#525252" />
                <path d={svgPaths.p1d03580} fill="#525252" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info4() {
  return (
    <div className="content-stretch flex gap-[55px] items-center relative shrink-0 w-full" data-name="info">
      <Frame7 />
      <Frame10 />
    </div>
  );
}

function PdpTopProductInfoMainInfoInfoLinksInfoTableInfoLine() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="pdp/top/product-info/main-info/info+links/info-table/info-line">
      <Info4 />
      <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="info-table">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="info-table/info-line">
          <Info />
          <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="matts/pdp/border" />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="info-table/info-line">
          <Info1 />
          <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="matts/pdp/border" />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="info-table/info-line">
          <Info2 />
          <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="matts/pdp/border" />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="info-table/info-line">
          <Info3 />
          <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="matts/pdp/border" />
        </div>
      </div>
      <PdpTopProductInfoMainInfoInfoLinksInfoTableInfoLine />
    </div>
  );
}

function InnerFrame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="relative shrink-0 size-[16px]" data-name="icon">
        <div className="absolute inset-[6.25%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path clipRule="evenodd" d={svgPaths.p1dd59980} fill="var(--fill-0, #0072C3)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">UltraLibrarian</p>
    </div>
  );
}

function InnerFrame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="relative shrink-0 size-[16px]" data-name="icon">
        <div className="absolute inset-[18.75%_6.25%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 10">
            <path clipRule="evenodd" d={svgPaths.p1c9c9580} fill="var(--fill-0, #0072C3)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">Video</p>
    </div>
  );
}

function InfoLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="info+links">
      <Frame11 />
      <div className="h-[34px] relative shrink-0 w-[230px]" data-name="Multiview Documentatio">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMultiviewDocumentatio} />
      </div>
      <div className="content-start flex flex-wrap gap-[12px_24px] items-start relative shrink-0 w-[328px]" data-name="extra-info-container">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-[106px]" data-name="extra-info">
          <InnerFrame />
        </div>
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-[58px]" data-name="extra-info">
          <InnerFrame1 />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <path clipRule="evenodd" d={svgPaths.p3cc6b080} fill="var(--fill-0, #0072C3)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#0072c3] text-[14px] whitespace-nowrap">Compare</p>
    </div>
  );
}

function InnerFrame2() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] relative size-full">
          <Icon />
          <Label />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.15%_12.5%_6.25%_6.17%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.266 17.52">
            <path clipRule="evenodd" d={svgPaths.p24f6a480} fill="var(--fill-0, #0072C3)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#0072c3] text-[14px] whitespace-nowrap">Share</p>
    </div>
  );
}

function InnerFrame3() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] relative size-full">
          <Icon1 />
          <Label1 />
        </div>
      </div>
    </div>
  );
}

function ButtonRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-end relative shrink-0 w-full" data-name="button-row">
      <div className="h-[32px] relative rounded-[4px] shrink-0 w-[112px]" data-name="notifications/toast/utilities/button-layout/button">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
          <InnerFrame2 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#0072c3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="h-[32px] relative rounded-[4px] shrink-0 w-[89px]" data-name="notifications/toast/utilities/button-layout/button">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
          <InnerFrame3 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#0072c3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function MainInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative self-stretch" data-name="main-info">
      <InfoLinks />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/pdp/top/product-info/main-info/share-compare-favourite">
        <ButtonRow />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="main-content">
      <ImgGallery />
      <MainInfo />
    </div>
  );
}

function ProductLeft() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative self-stretch" data-name="product-left">
      <MattsPdpTopProductInfoHeader />
      <MainContent />
    </div>
  );
}

function ProductInfo() {
  return (
    <div className="absolute content-stretch flex h-[567px] items-start left-0 top-0 w-[832px]" data-name="product-info">
      <ProductLeft />
    </div>
  );
}

function ContentProductInfo() {
  return (
    <div className="flex-[1_0_0] h-[596px] min-h-px min-w-px relative" data-name="content-product-info">
      <ProductInfo />
    </div>
  );
}

function ProductOverview() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Product Overview">
      <ContentProductInfo />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="matts/pdp/below-the-fold/header">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#161616] text-[28px] text-left tracking-[-0.3px] whitespace-nowrap">Product Overview</p>
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="Carbon Icons (All)">
        <div className="absolute inset-[6.25%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
            <path clipRule="evenodd" d={svgPaths.p377cab00} fill="var(--fill-0, #F4F4F4)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[31.25%]" data-name="Path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path clipRule="evenodd" d={svgPaths.p93ca030} fill="var(--fill-0, black)" fillRule="evenodd" id="Path" />
          </svg>
        </div>
        <div className="absolute inset-[31.25%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path clipRule="evenodd" d={svgPaths.p93ca030} fill="var(--fill-0, #161616)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="matts/pdp/below-the-fold/header">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#161616] text-[28px] text-left tracking-[-0.3px] whitespace-nowrap">Specifications</p>
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="Carbon Icons (All)">
        <div className="absolute inset-[6.25%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
            <path clipRule="evenodd" d={svgPaths.p377cab00} fill="var(--fill-0, #F4F4F4)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[31.25%]" data-name="Path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path clipRule="evenodd" d={svgPaths.p93ca030} fill="var(--fill-0, black)" fillRule="evenodd" id="Path" />
          </svg>
        </div>
        <div className="absolute inset-[31.25%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path clipRule="evenodd" d={svgPaths.p93ca030} fill="var(--fill-0, #161616)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="matts/pdp/below-the-fold/header">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#161616] text-[28px] text-left tracking-[-0.3px] whitespace-nowrap">Technical Docs (5)</p>
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="Carbon Icons (All)">
        <div className="absolute inset-[6.25%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
            <path clipRule="evenodd" d={svgPaths.p377cab00} fill="var(--fill-0, #F4F4F4)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[31.25%]" data-name="Path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path clipRule="evenodd" d={svgPaths.p93ca030} fill="var(--fill-0, black)" fillRule="evenodd" id="Path" />
          </svg>
        </div>
        <div className="absolute inset-[31.25%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path clipRule="evenodd" d={svgPaths.p93ca030} fill="var(--fill-0, #161616)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MattsPdpBorder() {
  return <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="matts/pdp/border" />;
}

function Accordion() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Accordion">
      <Frame3 />
      <MattsPdpBorder />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="matts/pdp/below-the-fold/header">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#161616] text-[28px] text-left tracking-[-0.3px] whitespace-nowrap">Legislation and Environmental</p>
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="Carbon Icons (All)">
        <div className="absolute inset-[6.25%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
            <path clipRule="evenodd" d={svgPaths.p377cab00} fill="var(--fill-0, #F4F4F4)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[31.25%]" data-name="Path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path clipRule="evenodd" d={svgPaths.p93ca030} fill="var(--fill-0, black)" fillRule="evenodd" id="Path" />
          </svg>
        </div>
        <div className="absolute inset-[31.25%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path clipRule="evenodd" d={svgPaths.p93ca030} fill="var(--fill-0, #161616)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AccordionIcon({ open }: { open: boolean }) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute inset-[6.25%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <path clipRule="evenodd" d={svgPaths.p377cab00} fill="#F4F4F4" fillRule="evenodd" />
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[#161616] text-[18px] font-light leading-none select-none">{open ? '−' : '+'}</span>
      </div>
    </div>
  );
}

function AccordionHeader({ label, open, onClick }: { label: string; open: boolean; onClick: () => void }) {
  return (
    <button className="content-stretch flex items-center justify-between w-full text-left" onClick={onClick}>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[26px] not-italic text-[#161616] text-[20px] tracking-[-0.3px] whitespace-nowrap">{label}</p>
      <AccordionIcon open={open} />
    </button>
  );
}

const SPEC_ROWS = [
  { left: ['Transistor Polarity', 'PNP'],             right: ['Collector Emitter Voltage Max', '60V']           },
  { left: ['Continuous Collector Current', '2A'],     right: ['Power Dissipation', '625mW']                     },
  { left: ['Transistor Case Style', 'TO-92'],         right: ['Transistor Mounting', 'Through Hole']            },
  { left: ['No. of Pins', '3 Pins'],                  right: ['Transition Frequency', '75MHz']                  },
  { left: ['DC Current Gain hFE Min', '75hFE'],       right: ['Operating Temperature Max', '150°C']             },
  { left: ['Product Range', '–'],                     right: ['Qualification', '–']                             },
  { left: ['MSL', 'MSL 1 – Unlimited'],               right: ['SVHC', 'No SVHC (17-Dec-2015)']                 },
];

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
      <div className="content-stretch flex items-baseline justify-between w-full gap-[16px]">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] text-[13px] leading-[18px] text-[#525252] shrink-0">{label}</p>
        <p className="font-['Apercu_Avnet:Regular',sans-serif] text-[13px] leading-[18px] text-[#161616] text-right">{value}</p>
      </div>
      <div className="bg-[#e0e0e0] h-px w-full" />
    </div>
  );
}

function ProductOverviewContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start w-full pt-[4px]">
      {/* Warnings */}
      <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] text-[13px] leading-[18px] text-[#161616]">Warnings</p>
        <p className="font-['Apercu_Avnet:Regular',sans-serif] text-[13px] leading-[18px] text-[#525252] pl-[16px]">Market demand for this product has caused an extension in leadtimes. Delivery dates may fluctuate. Product exempt from discounts.</p>
      </div>
      <div className="bg-[#e0e0e0] h-px w-full" />
      {/* Technical Specifications */}
      <p className="font-['Apercu_Avnet:Regular',sans-serif] text-[24px] leading-[32px] text-[#161616] tracking-[-0.3px]">Technical Specifications</p>
      <div className="content-stretch flex gap-[32px] items-start w-full">
        <div className="content-stretch flex flex-col flex-1 gap-[0px] items-start">
          {SPEC_ROWS.map((row, i) => <SpecRow key={i} label={row.left[0]} value={row.left[1]} />)}
        </div>
        <div className="bg-[#e0e0e0] w-px self-stretch" />
        <div className="content-stretch flex flex-col flex-1 gap-[0px] items-start">
          {SPEC_ROWS.map((row, i) => <SpecRow key={i} label={row.right[0]} value={row.right[1]} />)}
        </div>
      </div>
    </div>
  );
}

const TECH_DOCS = [
  { type: 'pdf',      label: 'Technical Data Sheet EN' },
  { type: 'warning',  label: 'Product Change Notice EN' },
];

function DocIcon({ type }: { type: string }) {
  if (type === 'pdf') {
    return (
      <div className="relative shrink-0" style={{ width: 28, height: 34 }}>
        <svg viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute block size-full">
          <rect x="0.5" y="0.5" width="27" height="33" rx="1.5" fill="#FFF4D8" stroke="#D92638"/>
          <path d="M19 0.5L27.5 9H19.5C19.224 9 19 8.776 19 8.5V0.5Z" fill="#D92638"/>
          <rect x="0" y="20" width="28" height="14" rx="2" fill="#D92638"/>
          <text x="14" y="30.5" textAnchor="middle" fill="white" fontSize="8" fontFamily="Arial, sans-serif" fontWeight="bold">PDF</text>
        </svg>
      </div>
    );
  }
  return (
    <div className="relative shrink-0" style={{ width: 28, height: 28 }}>
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute block size-full">
        <path d="M14 2L27 25H1L14 2Z" fill="#161616"/>
        <text x="14" y="22" textAnchor="middle" fill="white" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="bold">!</text>
      </svg>
    </div>
  );
}

function TechnicalDocsContent() {
  return (
    <div className="content-stretch flex flex-wrap gap-x-[48px] gap-y-[16px] items-center w-full pt-[4px]">
      {TECH_DOCS.map((doc, i) => (
        <div key={i} className="flex items-center gap-[10px] cursor-pointer">
          <DocIcon type={doc.type} />
          <p className="font-['Apercu_Avnet:Regular',sans-serif] text-[14px] leading-[18px] text-[#0072c3] whitespace-nowrap">{doc.label}</p>
        </div>
      ))}
    </div>
  );
}

function Frame19() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (id: string) => setOpen(prev => prev === id ? null : id);

  const sections = [
    { id: 'overview',     label: 'Product Overview',           content: <ProductOverviewContent /> },
    { id: 'specs',        label: 'Specifications',             content: null },
    { id: 'docs',         label: 'Technical Docs (5)',         content: <TechnicalDocsContent /> },
    { id: 'legislation',  label: 'Legislation and Environmental', content: null },
  ];

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[832px]">
      {sections.map(section => (
        <div key={section.id} className="content-stretch flex flex-col gap-[0px] items-start w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start w-full py-[24px]">
            <AccordionHeader label={section.label} open={open === section.id} onClick={() => toggle(section.id)} />
            {open === section.id && section.content}
          </div>
          <div className="bg-[#e0e0e0] h-px w-full" />
        </div>
      ))}
    </div>
  );
}

function ProductContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start shrink-0 sticky top-0 w-[832px]" data-name="Product Container">
      <ProductOverview />
      <Frame19 />
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icons">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons">
          <path clipRule="evenodd" d={svgPaths.p1a9866f0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
          <path clipRule="evenodd" d={svgPaths.p3d9e1c80} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
        </g>
      </svg>
    </div>
  );
}

function Avalibility() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Avalibility">
      <Icons />
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#2a8442] text-[20px] tracking-[-0.3px] whitespace-nowrap">345,213 In Stock</p>
    </div>
  );
}

function Availability2Lines() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[553px]" data-name="availability-2-lines">
      <Avalibility />
    </div>
  );
}

function Stock() {
  return (
    <div className="h-[26px] relative shrink-0 w-full z-[2]" data-name="Stock">
      <Availability2Lines />
    </div>
  );
}

function TextIcon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="text+icon">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#525252] text-[16px] tracking-[-0.3px] whitespace-nowrap">EXPRESS Delivery Next Business Day - arrives by 1PM*</p>
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icons">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icons">
          <path clipRule="evenodd" d={svgPaths.p3d2d8180} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Fill" />
        </g>
      </svg>
    </div>
  );
}

function TextIcon1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="text+icon">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Order before 6pm</p>
      <Icons1 />
    </div>
  );
}

function DeliveryMessaging() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="delivery-messaging">
      <TextIcon />
      <TextIcon1 />
    </div>
  );
}

function TextIcon2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="text+icon">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#525252] text-[16px] tracking-[-0.3px] whitespace-nowrap">FREE Standard Delivery</p>
    </div>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icons">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icons">
          <path clipRule="evenodd" d={svgPaths.p3d2d8180} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Fill" />
        </g>
      </svg>
    </div>
  );
}

function TextIcon3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="text+icon">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">on orders £40.00 and over</p>
      <Icons2 />
    </div>
  );
}

function DeliveryMessaging1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="delivery-messaging">
      <TextIcon2 />
      <TextIcon3 />
    </div>
  );
}

function TextIcon4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="text+icon">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Accurate delivery times will be calculated in Checkout</p>
    </div>
  );
}

function DeliveryMessaging2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="delivery-messaging">
      <TextIcon4 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full z-[1]">
      <DeliveryMessaging />
      <DeliveryMessaging1 />
      <DeliveryMessaging2 />
    </div>
  );
}

function HeaderItem() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="header-item">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Quantity</p>
      </div>
    </div>
  );
}

function PdpBorder() {
  return <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />;
}

function PdpTopPurchaseBoxTableQuantityPricesHeaderRowHeaderBorder() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="pdp/top/purchase-box/table-quantity+prices/header-row/header+border">
      <HeaderItem />
      <PdpBorder />
    </div>
  );
}

function HeaderItem1() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="header-item">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Price (ex VAT)</p>
      </div>
    </div>
  );
}

function PdpBorder1() {
  return <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />;
}

function PdpTopPurchaseBoxTableQuantityPricesHeaderRowHeaderBorder1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="pdp/top/purchase-box/table-quantity+prices/header-row/header+border">
      <HeaderItem1 />
      <PdpBorder1 />
    </div>
  );
}

function PdpTopPurchaseBoxTableQuantityPricesHeaderRow() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="pdp/top/purchase-box/table-quantity+prices/header-row">
      <PdpTopPurchaseBoxTableQuantityPricesHeaderRowHeaderBorder />
      <PdpTopPurchaseBoxTableQuantityPricesHeaderRowHeaderBorder1 />
    </div>
  );
}

function ItemQuantity() {
  return (
    <div className="bg-[#eefef2] relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">1+</p>
      </div>
    </div>
  );
}

function PdpBorder2() {
  return <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />;
}

function PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderQuantity() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
      <ItemQuantity />
      <PdpBorder2 />
    </div>
  );
}

function ItemPrice() {
  return (
    <div className="bg-[#eefef2] relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">£1.300</p>
      </div>
    </div>
  );
}

function PdpBorder3() {
  return <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />;
}

function PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderPrice() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
      <ItemPrice />
      <PdpBorder3 />
    </div>
  );
}

function PdpTopPurchaseBoxTableQuantityPricesItemRow() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="pdp/top/purchase-box/table-quantity+prices/item-row">
      <PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderQuantity />
      <PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderPrice />
    </div>
  );
}

function ItemQuantity1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">10+</p>
      </div>
    </div>
  );
}

function PdpBorder4() {
  return <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />;
}

function PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderQuantity1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
      <ItemQuantity1 />
      <PdpBorder4 />
    </div>
  );
}

function ItemPrice1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">£1.050</p>
      </div>
    </div>
  );
}

function PdpBorder5() {
  return <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />;
}

function PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderPrice1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
      <ItemPrice1 />
      <PdpBorder5 />
    </div>
  );
}

function PdpTopPurchaseBoxTableQuantityPricesItemRow1() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="pdp/top/purchase-box/table-quantity+prices/item-row">
      <PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderQuantity1 />
      <PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderPrice1 />
    </div>
  );
}

function ItemQuantity2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">100+</p>
      </div>
    </div>
  );
}

function PdpBorder6() {
  return <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />;
}

function PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderQuantity2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
      <ItemQuantity2 />
      <PdpBorder6 />
    </div>
  );
}

function ItemPrice2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">£0.980</p>
      </div>
    </div>
  );
}

function PdpBorder7() {
  return <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />;
}

function PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderPrice2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
      <ItemPrice2 />
      <PdpBorder7 />
    </div>
  );
}

function PdpTopPurchaseBoxTableQuantityPricesItemRow2() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="pdp/top/purchase-box/table-quantity+prices/item-row">
      <PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderQuantity2 />
      <PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderPrice2 />
    </div>
  );
}

function ItemQuantity3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">500+</p>
      </div>
    </div>
  );
}

function PdpBorder8() {
  return <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />;
}

function PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderQuantity3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
      <ItemQuantity3 />
      <PdpBorder8 />
    </div>
  );
}

function ItemPrice3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">£0.830</p>
      </div>
    </div>
  );
}

function PdpBorder9() {
  return <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />;
}

function PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderPrice3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
      <ItemPrice3 />
      <PdpBorder9 />
    </div>
  );
}

function PdpTopPurchaseBoxTableQuantityPricesItemRow3() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="pdp/top/purchase-box/table-quantity+prices/item-row">
      <PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderQuantity3 />
      <PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderPrice3 />
    </div>
  );
}

function ItemQuantity4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">1,000+</p>
      </div>
    </div>
  );
}

function PdpBorder10() {
  return <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />;
}

function PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderQuantity4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
      <ItemQuantity4 />
      <PdpBorder10 />
    </div>
  );
}

function ItemPrice4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">£0.750</p>
      </div>
    </div>
  );
}

function PdpBorder11() {
  return <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />;
}

function PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderPrice4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
      <ItemPrice4 />
      <PdpBorder11 />
    </div>
  );
}

function PdpTopPurchaseBoxTableQuantityPricesItemRow4() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="pdp/top/purchase-box/table-quantity+prices/item-row">
      <PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderQuantity4 />
      <PdpTopPurchaseBoxTableQuantityPricesItemRowItemBorderPrice4 />
    </div>
  );
}

function Prices() {
  const ctx = useContext(PdpContext);
  const rows = ctx?.priceBreaks ?? [
    { quantity: '1+',   price: '£1.300' },
    { quantity: '10+',  price: '£1.100' },
    { quantity: '100+', price: '£0.900' },
  ];
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Prices">
      <PdpTopPurchaseBoxTableQuantityPricesHeaderRow />
      {rows.map((row, i) => (
        <div key={i} className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
            <div className="relative shrink-0 w-full" data-name="item-quantity">
              <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">{row.quantity}</p>
              </div>
            </div>
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
            <div className="relative shrink-0 w-full" data-name="item-price">
              <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">{row.price}</p>
              </div>
            </div>
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

function PackagingLabelPriceTable() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full z-[2]" data-name="Packaging Label + Price Table">
      <Prices />
    </div>
  );
}

function Input({ quantity, onQuantityChange }: { quantity: number; onQuantityChange?: (value: number) => void }) {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => {
              const value = parseInt(e.target.value) || 1;
              onQuantityChange?.(value);
            }}
            className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#161616] text-[13px] text-center bg-transparent border-none outline-none w-full"
          />
        </div>
      </div>
    </div>
  );
}

function InputButtons({ quantity, onQuantityChange }: { quantity: number; onQuantityChange?: (value: number) => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="input+buttons">
      <Input quantity={quantity} onQuantityChange={onQuantityChange} />
    </div>
  );
}

function BottomBorder() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bottom-border">
      <div className="bg-[#8d8d8d] flex-[1_0_0] h-px min-h-px min-w-px" data-name="border-bottom" />
    </div>
  );
}

function InputButtonsBorder({ quantity, onQuantityChange }: { quantity: number; onQuantityChange?: (value: number) => void }) {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-full" data-name="input+buttons+border">
      <InputButtons quantity={quantity} onQuantityChange={onQuantityChange} />
      <BottomBorder />
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1404 17.5001">
            <path d={svgPaths.p31685d70} fill="var(--fill-0, white)" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Add</p>
    </div>
  );
}

function InnerFrame4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] relative size-full">
          <Icon2 />
          <Label2 />
        </div>
      </div>
    </div>
  );
}

function RowInputAdd({ quantity, onQuantityChange }: { quantity: number; onQuantityChange?: (value: number) => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="row-input+add">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="matts/number-input-pdp">
        <InputButtonsBorder quantity={quantity} onQuantityChange={onQuantityChange} />
      </div>
      <div className="bg-[#0072c3] content-stretch flex flex-[1_0_0] flex-col h-[56px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px]" data-name="matts/button">
        <InnerFrame4 />
      </div>
    </div>
  );
}

function Min() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="min">
      <p className="relative shrink-0 text-[#525252]">{`Minimum: `}</p>
      <p className="relative shrink-0 text-[#161616]">5</p>
    </div>
  );
}

function Mult() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="mult">
      <p className="relative shrink-0 text-[#525252]">Multiple:</p>
      <p className="relative shrink-0 text-[#161616]">5</p>
    </div>
  );
}

function MinMult() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] gap-[16px] items-start leading-[16px] min-h-px min-w-px not-italic relative self-stretch text-[13px] whitespace-nowrap" data-name="min-mult">
      <Min />
      <Mult />
    </div>
  );
}

function Vat() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0" data-name="vat">
      <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] text-right">
        <p className="leading-[16px] whitespace-nowrap">(ex VAT)</p>
      </div>
    </div>
  );
}

const PRICE_BREAKS = [
  { min: 1000, price: 0.750 },
  { min: 500,  price: 0.830 },
  { min: 100,  price: 0.980 },
  { min: 10,   price: 1.050 },
  { min: 1,    price: 1.300 },
];

function getUnitPrice(qty: number): number {
  for (const { min, price } of PRICE_BREAKS) {
    if (qty >= min) return price;
  }
  return 1.300;
}

function PriceVat({ quantity }: { quantity: number }) {
  const unitPrice = getUnitPrice(quantity);
  const totalPrice = (unitPrice * quantity).toFixed(2);
  
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0" data-name="price+vat">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#2a8442] text-[20px] tracking-[-0.3px] whitespace-nowrap">£{totalPrice}</p>
      <Vat />
    </div>
  );
}

function BuyboxStickyTop({ quantity, onQuantityChange }: { quantity: number; onQuantityChange?: (value: number) => void }) {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[16px] isolate items-start min-h-px min-w-px relative" data-name="Buybox Sticky Top">
      <div className="relative shrink-0 w-full z-[4]" data-name="stock">
        <div className="content-stretch flex flex-col isolate items-start pr-[16px] relative w-full">
          <Stock />
          <Frame15 />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] isolate items-start relative shrink-0 w-full z-[3]" data-name="Price tables">
        <PackagingLabelPriceTable />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full z-[2]" data-name="matts/pdp/top/purchase-box/price+quantity+add">
        <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="matts/pdp/top/purchase-box/price+quantity+add/price-for-each-supplied">
          <p className="relative shrink-0 text-[#525252]">{`Price for: `}</p>
          <p className="relative shrink-0 text-[#161616]">Each</p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/price+quantity+add/quantity+add">
          <RowInputAdd quantity={quantity} onQuantityChange={onQuantityChange} />
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/price+quantity+add/quantity+add/price+title">
            <MinMult />
            <PriceVat quantity={quantity} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Buybox({ quantity, onQuantityChange }: { quantity: number; onQuantityChange?: (value: number) => void }) {
  return (
    <div className="bg-[#cecef7] content-stretch flex items-center justify-center relative shrink-0 w-[604px]" data-name="Buybox">
      <div aria-hidden="true" className="absolute border border-[#574099] border-solid inset-0 pointer-events-none" />
      <BuyboxStickyTop quantity={quantity} onQuantityChange={onQuantityChange} />
    </div>
  );
}

function BuyboxLine({ quantity, onQuantityChange }: { quantity: number; onQuantityChange?: (value: number) => void }) {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-[640px]" data-name="Buybox+Line">
      <div className="bg-[#f4f4f4] self-stretch shrink-0 w-[4px]" data-name="pdp/border" />
      <Buybox quantity={quantity} onQuantityChange={onQuantityChange} />
    </div>
  );
}

function PageTopV({ quantity, onQuantityChange }: { quantity: number; onQuantityChange?: (value: number) => void }) {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="page top v2">
      <ProductContainer />
      <BuyboxLine quantity={quantity} onQuantityChange={onQuantityChange} />
    </div>
  );
}

function Vectors1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8213 17.9999">
        <g id="vectors">
          <path d={svgPaths.p25b56600} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          <path d={svgPaths.p1d7c0200} fill="var(--fill-0, #D92638)" id="Vector_2" />
          <path d={svgPaths.p1e1cee80} fill="var(--fill-0, #D92638)" id="Vector_3" />
          <path d={svgPaths.pd69900} fill="var(--fill-0, #D92638)" id="Vector_4" />
          <g id="text">
            <path d={svgPaths.p928b580} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p115f6900} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.pec0f700} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Vectors2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8214 18">
        <g id="vectors">
          <path d={svgPaths.p7750080} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #198038)" />
          <path d={svgPaths.p75a17c0} fill="var(--fill-0, #198038)" id="Vector_2" />
          <path d={svgPaths.p2570a0c0} id="Vector 62" stroke="var(--stroke-0, #198038)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function TextIcon5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors2 />
      </div>
    </div>
  );
}

function Documents() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="documents">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors1 />
      </div>
      <TextIcon5 />
    </div>
  );
}

function ManufacturerDocs() {
  const ctx = useContext(PdpContext);
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="manufacturer+docs">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">{ctx?.manufacturer ?? 'ONSEMI'}</p>
      <Documents />
    </div>
  );
}

function Avalibility1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[136px]" data-name="Avalibility">
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[5%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
            <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#2a8442] text-[13px]">6,300 In Stock</p>
    </div>
  );
}

function AvailabilityPrice() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="availability+price">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="availibility-messaging">
        <Avalibility1 />
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£75.200</p>
    </div>
  );
}

function ManufacturerAvailability() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="manufacturer+availability">
      <ManufacturerDocs />
      <AvailabilityPrice />
    </div>
  );
}

function DataManAvail() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="data+man+avail">
      <ManufacturerAvailability />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">View</p>
    </div>
  );
}

function InnerFrame5() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] relative size-full">
          <Label3 />
        </div>
      </div>
    </div>
  );
}

function RowInputAdd1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="row-input+add">
      <div className="bg-[#0072c3] content-stretch flex flex-[1_0_0] flex-col h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px]" data-name="notifications/toast/utilities/button-layout/button">
        <InnerFrame5 />
      </div>
    </div>
  );
}

function QuantityAdd() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="quantity(add)">
      <RowInputAdd1 />
    </div>
  );
}

function Info5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="info">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0072c3] text-[20px] tracking-[-0.3px] w-full">MPS651RLRAG</p>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] w-full">Bipolar (BJT) Single Transistor, NPN, 60 V, 600 mA, 625 mW, TO-92, Through Hole</p>
      <DataManAvail />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="button-bar">
        <QuantityAdd />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="container">
      <div className="h-[80px] relative shrink-0 w-[78px]" data-name="Screenshot 2026-03-25 at 15.24.52 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260325At1524521} />
      </div>
      <Info5 />
    </div>
  );
}

function Product() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="product">
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function ContentProduct() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 w-[378.667px]" data-name="content-product">
      <Product />
    </div>
  );
}

function Vectors3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8213 17.9999">
        <g id="vectors">
          <path d={svgPaths.p25b56600} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          <path d={svgPaths.p1d7c0200} fill="var(--fill-0, #D92638)" id="Vector_2" />
          <path d={svgPaths.p1e1cee80} fill="var(--fill-0, #D92638)" id="Vector_3" />
          <path d={svgPaths.pd69900} fill="var(--fill-0, #D92638)" id="Vector_4" />
          <g id="text">
            <path d={svgPaths.p928b580} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p115f6900} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.pec0f700} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Vectors4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8214 18">
        <g id="vectors">
          <path d={svgPaths.p7750080} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #198038)" />
          <path d={svgPaths.p75a17c0} fill="var(--fill-0, #198038)" id="Vector_2" />
          <path d={svgPaths.p2570a0c0} id="Vector 62" stroke="var(--stroke-0, #198038)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function TextIcon6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors4 />
      </div>
    </div>
  );
}

function Documents1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="documents">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors3 />
      </div>
      <TextIcon6 />
    </div>
  );
}

function ManufacturerDocs1() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="manufacturer+docs">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">onsemi</p>
      <Documents1 />
    </div>
  );
}

function Avalibility2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[136px]" data-name="Avalibility">
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[5%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
            <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#2a8442] text-[13px]">34,250 In Stock</p>
    </div>
  );
}

function AvailabilityPrice1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="availability+price">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="availibility-messaging">
        <Avalibility2 />
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£0.114</p>
    </div>
  );
}

function ManufacturerAvailability1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="manufacturer+availability">
      <ManufacturerDocs1 />
      <AvailabilityPrice1 />
    </div>
  );
}

function DataManAvail1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="data+man+avail">
      <ManufacturerAvailability1 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">View</p>
    </div>
  );
}

function InnerFrame6() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] relative size-full">
          <Label4 />
        </div>
      </div>
    </div>
  );
}

function RowInputAdd2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="row-input+add">
      <div className="bg-[#0072c3] content-stretch flex flex-[1_0_0] flex-col h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px]" data-name="notifications/toast/utilities/button-layout/button">
        <InnerFrame6 />
      </div>
    </div>
  );
}

function QuantityAdd1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="quantity(add)">
      <RowInputAdd2 />
    </div>
  );
}

function Info6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="info">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0072c3] text-[20px] tracking-[-0.3px] w-full">2N2907AG</p>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] w-full">Bipolar (BJT) Single Transistor, PNP, 60 V, 600 mA, 625 mW, TO-18, Through Hole</p>
      <DataManAvail1 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="button-bar">
        <QuantityAdd1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="container">
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[80px]" data-name="img-holder">
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="image 59">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[70.16%] left-0 max-w-none top-[14.92%] w-full" src={imgImage59} />
          </div>
        </div>
      </div>
      <Info6 />
    </div>
  );
}

function Vectors5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8213 17.9999">
        <g id="vectors">
          <path d={svgPaths.p25b56600} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          <path d={svgPaths.p1d7c0200} fill="var(--fill-0, #D92638)" id="Vector_2" />
          <path d={svgPaths.p1e1cee80} fill="var(--fill-0, #D92638)" id="Vector_3" />
          <path d={svgPaths.pd69900} fill="var(--fill-0, #D92638)" id="Vector_4" />
          <g id="text">
            <path d={svgPaths.p928b580} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p115f6900} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.pec0f700} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Vectors6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8214 18">
        <g id="vectors">
          <path d={svgPaths.p7750080} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #198038)" />
          <path d={svgPaths.p75a17c0} fill="var(--fill-0, #198038)" id="Vector_2" />
          <path d={svgPaths.p2570a0c0} id="Vector 62" stroke="var(--stroke-0, #198038)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function TextIcon7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors6 />
      </div>
    </div>
  );
}

function Documents2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="documents">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors5 />
      </div>
      <TextIcon7 />
    </div>
  );
}

function ManufacturerDocs2() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="manufacturer+docs">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">onsemi</p>
      <Documents2 />
    </div>
  );
}

function Avalibility3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[136px]" data-name="Avalibility">
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[5%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
            <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#2a8442] text-[13px]">4 In Stock</p>
    </div>
  );
}

function AvailabilityPrice2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="availability+price">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="availibility-messaging">
        <Avalibility3 />
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£48.732</p>
    </div>
  );
}

function ManufacturerAvailability2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="manufacturer+availability">
      <ManufacturerDocs2 />
      <AvailabilityPrice2 />
    </div>
  );
}

function DataManAvail2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="data+man+avail">
      <ManufacturerAvailability2 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">View</p>
    </div>
  );
}

function InnerFrame7() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] relative size-full">
          <Label5 />
        </div>
      </div>
    </div>
  );
}

function RowInputAdd3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="row-input+add">
      <div className="bg-[#0072c3] content-stretch flex flex-[1_0_0] flex-col h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px]" data-name="notifications/toast/utilities/button-layout/button">
        <InnerFrame7 />
      </div>
    </div>
  );
}

function QuantityAdd2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="quantity(add)">
      <RowInputAdd3 />
    </div>
  );
}

function Info7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="info">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0072c3] text-[20px] tracking-[-0.3px] w-full">BC327-40</p>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] w-full">Bipolar (BJT) Single Transistor, PNP, 45 V, 800 mA, 625 mW, TO-92, Through Hole</p>
      <DataManAvail2 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="button-bar">
        <QuantityAdd2 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="container">
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[80px]" data-name="img-holder">
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="image 276">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage276} />
        </div>
      </div>
      <Info7 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="row">
      <div className="flex flex-row items-center self-stretch">
        <ContentProduct />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="content-stretch flex h-full items-center relative shrink-0 w-[378.667px]" data-name="content-product">
          <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="product">
            <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
              <Container1 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-[378.667px]" data-name="content-product">
        <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="product">
          <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
            <Container2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Vectors7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8213 17.9999">
        <g id="vectors">
          <path d={svgPaths.p25b56600} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          <path d={svgPaths.p1d7c0200} fill="var(--fill-0, #D92638)" id="Vector_2" />
          <path d={svgPaths.p1e1cee80} fill="var(--fill-0, #D92638)" id="Vector_3" />
          <path d={svgPaths.pd69900} fill="var(--fill-0, #D92638)" id="Vector_4" />
          <g id="text">
            <path d={svgPaths.p928b580} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p115f6900} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.pec0f700} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Vectors8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8214 18">
        <g id="vectors">
          <path d={svgPaths.p7750080} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #198038)" />
          <path d={svgPaths.p75a17c0} fill="var(--fill-0, #198038)" id="Vector_2" />
          <path d={svgPaths.p2570a0c0} id="Vector 62" stroke="var(--stroke-0, #198038)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function TextIcon8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors8 />
      </div>
    </div>
  );
}

function Documents3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="documents">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors7 />
      </div>
      <TextIcon8 />
    </div>
  );
}

function ManufacturerDocs3() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="manufacturer+docs">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">onsemi</p>
      <Documents3 />
    </div>
  );
}

function Avalibility4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[136px]" data-name="Avalibility">
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[5%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
            <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#2a8442] text-[13px]">198 In Stock</p>
    </div>
  );
}

function AvailabilityPrice3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="availability+price">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="availibility-messaging">
        <Avalibility4 />
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£29.124</p>
    </div>
  );
}

function ManufacturerAvailability3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="manufacturer+availability">
      <ManufacturerDocs3 />
      <AvailabilityPrice3 />
    </div>
  );
}

function DataManAvail3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="data+man+avail">
      <ManufacturerAvailability3 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">View</p>
    </div>
  );
}

function InnerFrame8() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] relative size-full">
          <Label6 />
        </div>
      </div>
    </div>
  );
}

function RowInputAdd4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="row-input+add">
      <div className="bg-[#0072c3] content-stretch flex flex-[1_0_0] flex-col h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px]" data-name="notifications/toast/utilities/button-layout/button">
        <InnerFrame8 />
      </div>
    </div>
  );
}

function QuantityAdd3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="quantity(add)">
      <RowInputAdd4 />
    </div>
  );
}

function Info8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="info">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0072c3] text-[20px] tracking-[-0.3px] w-full">MPSA92RL1G</p>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] w-full">Bipolar (BJT) Single Transistor, PNP High Voltage, 300 V, 500 mA, 625 mW, TO-92, Through Hole</p>
      <DataManAvail3 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="button-bar">
        <QuantityAdd3 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="container">
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[80px]" data-name="img-holder">
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="image 277">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage277} />
        </div>
      </div>
      <Info8 />
    </div>
  );
}

function Vectors9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8213 17.9999">
        <g id="vectors">
          <path d={svgPaths.p25b56600} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          <path d={svgPaths.p1d7c0200} fill="var(--fill-0, #D92638)" id="Vector_2" />
          <path d={svgPaths.p1e1cee80} fill="var(--fill-0, #D92638)" id="Vector_3" />
          <path d={svgPaths.pd69900} fill="var(--fill-0, #D92638)" id="Vector_4" />
          <g id="text">
            <path d={svgPaths.p928b580} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p115f6900} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.pec0f700} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Vectors10() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8214 18">
        <g id="vectors">
          <path d={svgPaths.p7750080} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #198038)" />
          <path d={svgPaths.p75a17c0} fill="var(--fill-0, #198038)" id="Vector_2" />
          <path d={svgPaths.p2570a0c0} id="Vector 62" stroke="var(--stroke-0, #198038)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function TextIcon9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors10 />
      </div>
    </div>
  );
}

function Documents4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="documents">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors9 />
      </div>
      <TextIcon9 />
    </div>
  );
}

function ManufacturerDocs4() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="manufacturer+docs">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">onsemi</p>
      <Documents4 />
    </div>
  );
}

function Avalibility5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[136px]" data-name="Avalibility">
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[5%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
            <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#2a8442] text-[13px]">8,440 In Stock</p>
    </div>
  );
}

function AvailabilityPrice4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="availability+price">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="availibility-messaging">
        <Avalibility5 />
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£0.186</p>
    </div>
  );
}

function ManufacturerAvailability4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="manufacturer+availability">
      <ManufacturerDocs4 />
      <AvailabilityPrice4 />
    </div>
  );
}

function DataManAvail4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="data+man+avail">
      <ManufacturerAvailability4 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">View</p>
    </div>
  );
}

function InnerFrame9() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] relative size-full">
          <Label7 />
        </div>
      </div>
    </div>
  );
}

function RowInputAdd5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="row-input+add">
      <div className="bg-[#0072c3] content-stretch flex flex-[1_0_0] flex-col h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px]" data-name="notifications/toast/utilities/button-layout/button">
        <InnerFrame9 />
      </div>
    </div>
  );
}

function QuantityAdd4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="quantity(add)">
      <RowInputAdd5 />
    </div>
  );
}

function Info9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="info">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0072c3] text-[20px] tracking-[-0.3px] w-full">2N3906</p>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] w-full">Bipolar (BJT) Single Transistor, PNP, 40 V, 200 mA, 250 mW, TO-92, Through Hole</p>
      <DataManAvail4 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="button-bar">
        <QuantityAdd4 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="container">
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[80px]" data-name="img-holder">
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="image 261">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage261} />
        </div>
      </div>
      <Info9 />
    </div>
  );
}

function Vectors11() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8213 17.9999">
        <g id="vectors">
          <path d={svgPaths.p25b56600} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          <path d={svgPaths.p1d7c0200} fill="var(--fill-0, #D92638)" id="Vector_2" />
          <path d={svgPaths.p1e1cee80} fill="var(--fill-0, #D92638)" id="Vector_3" />
          <path d={svgPaths.pd69900} fill="var(--fill-0, #D92638)" id="Vector_4" />
          <g id="text">
            <path d={svgPaths.p928b580} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p115f6900} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.pec0f700} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Vectors12() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8214 18">
        <g id="vectors">
          <path d={svgPaths.p7750080} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #198038)" />
          <path d={svgPaths.p75a17c0} fill="var(--fill-0, #198038)" id="Vector_2" />
          <path d={svgPaths.p2570a0c0} id="Vector 62" stroke="var(--stroke-0, #198038)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function TextIcon10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors12 />
      </div>
    </div>
  );
}

function Documents5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="documents">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors11 />
      </div>
      <TextIcon10 />
    </div>
  );
}

function ManufacturerDocs5() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="manufacturer+docs">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">onsemi</p>
      <Documents5 />
    </div>
  );
}

function Avalibility6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[136px]" data-name="Avalibility">
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[5%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
            <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#2a8442] text-[13px]">52,100 In Stock</p>
    </div>
  );
}

function AvailabilityPrice5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="availability+price">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="availibility-messaging">
        <Avalibility6 />
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£7.630</p>
    </div>
  );
}

function ManufacturerAvailability5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="manufacturer+availability">
      <ManufacturerDocs5 />
      <AvailabilityPrice5 />
    </div>
  );
}

function DataManAvail5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="data+man+avail">
      <ManufacturerAvailability5 />
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">View</p>
    </div>
  );
}

function InnerFrame10() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] relative size-full">
          <Label8 />
        </div>
      </div>
    </div>
  );
}

function RowInputAdd6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="row-input+add">
      <div className="bg-[#0072c3] content-stretch flex flex-[1_0_0] flex-col h-[32px] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[4px]" data-name="notifications/toast/utilities/button-layout/button">
        <InnerFrame10 />
      </div>
    </div>
  );
}

function QuantityAdd5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="quantity(add)">
      <RowInputAdd6 />
    </div>
  );
}

function Info10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="info">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0072c3] text-[20px] tracking-[-0.3px] w-full">STM32L476RGT6TR</p>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] w-full">ARM MCU, STM32 Family STM32L4 Series Microcontrollers, ARM Cortex-M4F, 32 bit, 80 MHz, 1 MB</p>
      <DataManAvail5 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="button-bar">
        <QuantityAdd5 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="container">
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[80px]" data-name="img-holder">
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="image 59">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage60} />
        </div>
      </div>
      <Info10 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="row">
      <div className="flex flex-row items-center self-stretch">
        <div className="content-stretch flex h-full items-center relative shrink-0 w-[378.667px]" data-name="content-product">
          <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="product">
            <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
              <Container3 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-[378.667px]" data-name="content-product">
        <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="product">
          <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
            <Container4 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="content-product">
        <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="product">
          <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
            <Container5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function CardWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[378.667px]" data-name="content-product">
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="product">
        <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

function Products({ filter }: { filter: string }) {
  const show = (cat: string) => filter === 'all' || filter === cat;

  const slots: { el: React.ReactNode; cat: string }[] = [
    { el: <ContentProduct />,                       cat: 'npn'    },
    { el: <CardWrap><Container1 /></CardWrap>,       cat: 'pnp'    },
    { el: <CardWrap><Container2 /></CardWrap>,       cat: 'pnp'    },
    { el: <CardWrap><Container3 /></CardWrap>,       cat: 'pnp'    },
    { el: <CardWrap><Container4 /></CardWrap>,       cat: 'pnp'    },
    { el: <CardWrap><Container5 /></CardWrap>,       cat: 'devkit' },
  ];

  const visible = slots.filter(s => show(s.cat));
  const rows: (typeof slots)[] = [];
  for (let i = 0; i < visible.length; i += 3) rows.push(visible.slice(i, i + 3));

  return (
    <div className="bg-[#f4f4f4] flex-[1_0_0] min-h-px min-w-px relative" data-name="products">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[32px] relative w-full">
          {rows.map((row, i) => (
            <div key={i} className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="row">
              {row.map((item, j) => <span key={j}>{item.el}</span>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  const [filter, setFilter] = useState('all');

  const divider = (
    <div className="h-0 relative shrink-0 w-full" data-name="divider">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 256 1">
          <line id="divider" stroke="var(--stroke-0, #E0E0E0)" x2="256" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );

  const tabItems = [
    { id: 'all',    label: 'All Compatible Parts (5)', bold: true  },
    { id: 'npn',   label: 'Complementary NPN (1)',     bold: false },
    { id: 'pnp',   label: 'Similar PNP Transistors (3)', bold: false },
    { id: 'devkit',label: 'Development Kits (1)',      bold: false },
  ];

  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1504px]" data-name="tabs">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[256px]" data-name="tab">
        {tabItems.map((tab, i) => (
          <div key={tab.id} className="w-full">
            <button
              className={`h-[40px] relative shrink-0 w-full cursor-pointer text-left transition-colors ${filter === tab.id ? 'bg-[#e0e0e0]' : 'bg-white hover:bg-[#f4f4f4]'}`}
              data-name="tab-row"
              onClick={() => setFilter(tab.id)}
            >
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] relative size-full">
                  <p className={`${filter === tab.id ? "font-['Apercu_Avnet:Bold',sans-serif]" : "font-['Apercu_Avnet:Regular',sans-serif]"} leading-[18px] not-italic relative shrink-0 text-[13px] text-black whitespace-nowrap`}>
                    {tab.label}
                  </p>
                </div>
              </div>
            </button>
            {i < tabItems.length - 1 && divider}
          </div>
        ))}
      </div>
      <Products filter={filter} />
    </div>
  );
}

function TabsOnPdp() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="tabs-on-PDP-1-770178-0">
      <div className="content-stretch flex gap-[16px] items-baseline relative shrink-0 w-[1522px]" data-name="headline">
        <div className="content-stretch flex items-center relative shrink-0" data-name="matts/pdp/below-the-fold/header">
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[28px] tracking-[-0.3px] whitespace-nowrap">
            <span className="leading-[36px]">{`Compatible Parts `}</span>
            <span className="leading-[36px] text-[#6f6f6f]">(selected by onsemi)</span>
          </p>
        </div>
      </div>
      <Tabs />
    </div>
  );
}

function AssociatedProducts() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Associated Products">
      <TabsOnPdp />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-baseline relative shrink-0 w-full">
      <div className="content-stretch flex items-center relative shrink-0" data-name="matts/pdp/below-the-fold/header">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#161616] text-[28px] tracking-[-0.3px] whitespace-nowrap">Alternative Products</p>
      </div>
    </div>
  );
}

function Start() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Label9() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[2px] px-[8px] relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">Show different contact plating</p>
      <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Resizer">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <Start />
        <End />
      </div>
    </div>
  );
}

function TagContent() {
  return (
    <div className="content-stretch flex gap-[2px] h-full items-center px-[16px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label9 />
    </div>
  );
}

function Start1() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End1() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Label10() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[2px] px-[8px] relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">
        <span className="leading-[16px]">{`Show different `}</span>
        <span className="leading-[16px]">Contact Termination Types</span>
      </p>
      <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Resizer">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <Start1 />
        <End1 />
      </div>
    </div>
  );
}

function TagContent1() {
  return (
    <div className="content-stretch flex gap-[2px] h-full items-center px-[16px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label10 />
    </div>
  );
}

function Tags() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="tags">
      <div className="bg-[#eaeaea] content-stretch flex h-[32px] items-end justify-center relative rounded-[1000px] shrink-0" data-name="Tag">
        <TagContent />
      </div>
      <div className="bg-[#eaeaea] content-stretch flex h-[32px] items-end justify-center relative rounded-[1000px] shrink-0" data-name="Tag">
        <TagContent1 />
      </div>
    </div>
  );
}

function QuickFilter() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="quick-filter">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Quick filter</p>
      <Tags />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="TITLE">
      <Frame5 />
      <QuickFilter />
      <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="matts/pdp/border" />
    </div>
  );
}

function ValueMargin() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Value margin">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] text-left whitespace-nowrap">Select all</p>
    </div>
  );
}

function IconValue() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[20px]" data-name="Checkbox">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p9ba3680} fill="var(--fill-0, #161616)" id="Vector" />
          </svg>
        </div>
      </div>
      <ValueMargin />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
      <button className="bg-[rgba(255,255,255,0)] content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <IconValue />
      </button>
      <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative self-stretch shrink-0 text-[#8d8d8d] text-[12px] w-[29px]">
        <p className="leading-[15px]">Clear</p>
      </div>
    </div>
  );
}

function Component1Row() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end px-[8px] relative self-stretch shrink-0 w-[188px]" data-name="1-row">
      <Checkbox />
    </div>
  );
}

function ImgHolder1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="img-holder">
      <div className="aspect-[80/49.83673858642578] relative shrink-0 w-full" data-name="image 81">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage81} />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[80px]" data-name="img-holder">
        <ImgHolder1 />
      </div>
    </div>
  );
}

function ProductInfo1() {
  return (
    <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="product-info">
      <p className="leading-[26px] relative shrink-0 text-[#161616] text-[20px] tracking-[-0.3px] w-full">1-770178-0</p>
      <p className="leading-[15px] relative shrink-0 text-[#525252] text-[12px] w-full">Pin Header</p>
      <p className="leading-[15px] relative shrink-0 text-[#161616] text-[12px] w-full">AMP - TE CONNECTIVITY</p>
      <p className="leading-[15px] relative shrink-0 text-[#161616] text-[12px] w-full">Ordercode: 1098527</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[4.318px] left-[3.96px] top-[18.4px] w-[10.781px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7812 4.31829">
        <g id="Group">
          <path d={svgPaths.p1216e3c0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3d383f00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p12f2f880} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function DataSheet() {
  return (
    <div className="col-1 content-stretch flex gap-[6px] items-center ml-0 mt-0 relative row-1 w-[7.019999999999996%]" data-name="Data Sheet">
      <div className="h-[24px] relative shrink-0 w-[18.429px]" data-name="icon / pdf">
        <div className="absolute h-[24px] left-0 top-0 w-[18.429px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4286 24">
            <path d={svgPaths.p129700} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          </svg>
        </div>
        <div className="absolute left-[13.29px] size-[5.078px] top-[0.06px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.07814 5.07814">
            <path d="M0 0V5.07814H5.07814L0 0Z" fill="var(--fill-0, #D92638)" id="Vector" />
          </svg>
        </div>
        <div className="absolute h-[11.321px] left-[3.68px] top-[2.96px] w-[9.892px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.89237 11.3211">
            <path d={svgPaths.p3c5879e0} fill="var(--fill-0, #CC4B4C)" id="Vector" />
          </svg>
        </div>
        <div className="absolute h-[7.286px] left-0 top-[16.71px] w-[18.429px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4286 7.28572">
            <path d={svgPaths.p2f0b7100} fill="var(--fill-0, #CC4B4C)" id="Vector" />
          </svg>
        </div>
        <Group />
      </div>
    </div>
  );
}

function Datasheet() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="datasheet">
      <p className="col-1 font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] ml-[10.07%] mt-[4px] not-italic relative row-1 text-[#0072c3] text-[12px] w-[89.93%]">Datasheet</p>
      <DataSheet />
    </div>
  );
}

function UltraLiberian() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="ultraLiberian">
      <div className="relative shrink-0 size-[16px]" data-name="icon">
        <div className="absolute inset-[6.25%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path clipRule="evenodd" d={svgPaths.p1dd59980} fill="var(--fill-0, #0072C3)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">UltraLibrarian</p>
    </div>
  );
}

function XX() {
  return <div className="h-[15px] shrink-0 w-full" data-name="x/x" />;
}

function ContainerInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="container-info">
      <Frame8 />
      <ProductInfo1 />
      <Datasheet />
      <UltraLiberian />
      <XX />
    </div>
  );
}

function ContainerContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px pb-[4px] relative" data-name="container-content">
      <div className="h-[24px] relative shrink-0 w-full" data-name="header-item">
        <p className="absolute font-['Apercu_Avnet:Bold',sans-serif] leading-[22px] left-0 not-italic text-[#161616] text-[16px] top-0 tracking-[-0.3px] w-[260px]">Currently viewing</p>
      </div>
      <ContainerInfo />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[80px]" data-name="img-holder">
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="image 285">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage285} />
        </div>
      </div>
    </div>
  );
}

function ProductInfo2() {
  return (
    <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="product-info">
      <p className="leading-[26px] relative shrink-0 text-[#0072c3] text-[20px] tracking-[-0.3px] w-full">1-770178-1</p>
      <p className="leading-[15px] relative shrink-0 text-[#525252] text-[12px] w-full">Pin Header</p>
      <p className="leading-[15px] relative shrink-0 text-[#161616] text-[12px] w-full">AMP - TE CONNECTIVITY</p>
      <p className="leading-[15px] relative shrink-0 text-[#161616] text-[12px] w-full">Ordercode: 1248298</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[4.318px] left-[3.96px] top-[18.4px] w-[10.781px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7812 4.31829">
        <g id="Group">
          <path d={svgPaths.p1216e3c0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3d383f00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p12f2f880} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function DataSheet1() {
  return (
    <div className="col-1 content-stretch flex gap-[6px] items-center ml-0 mt-0 relative row-1 w-[7.019999999999996%]" data-name="Data Sheet">
      <div className="h-[24px] relative shrink-0 w-[18.429px]" data-name="icon / pdf">
        <div className="absolute h-[24px] left-0 top-0 w-[18.429px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4286 24">
            <path d={svgPaths.p129700} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          </svg>
        </div>
        <div className="absolute left-[13.29px] size-[5.078px] top-[0.06px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.07814 5.07814">
            <path d="M0 0V5.07814H5.07814L0 0Z" fill="var(--fill-0, #D92638)" id="Vector" />
          </svg>
        </div>
        <div className="absolute h-[11.321px] left-[3.68px] top-[2.96px] w-[9.892px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.89237 11.3211">
            <path d={svgPaths.p3c5879e0} fill="var(--fill-0, #CC4B4C)" id="Vector" />
          </svg>
        </div>
        <div className="absolute h-[7.286px] left-0 top-[16.71px] w-[18.429px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4286 7.28572">
            <path d={svgPaths.p2f0b7100} fill="var(--fill-0, #CC4B4C)" id="Vector" />
          </svg>
        </div>
        <Group1 />
      </div>
    </div>
  );
}

function Datasheet1() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="datasheet">
      <p className="col-1 font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] ml-[10.07%] mt-[4px] not-italic relative row-1 text-[#0072c3] text-[12px] w-[89.93%]">Datasheet</p>
      <DataSheet1 />
    </div>
  );
}

function UltraLiberian1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="ultraLiberian">
      <div className="relative shrink-0 size-[16px]" data-name="icon">
        <div className="absolute inset-[6.25%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path clipRule="evenodd" d={svgPaths.p1dd59980} fill="var(--fill-0, #0072C3)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">UltraLibrarian</p>
    </div>
  );
}

function XX1() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="x/x">
      <p className="absolute font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6f6f6f] text-[12px] top-0 w-[251px]">(9/10)</p>
    </div>
  );
}

function ContainerInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="container-info">
      <Frame9 />
      <ProductInfo2 />
      <Datasheet1 />
      <UltraLiberian1 />
      <XX1 />
    </div>
  );
}

function ContainerContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px pb-[4px] relative" data-name="container-content">
      <div className="h-[24px] shrink-0 w-full" data-name="header-item" />
      <ContainerInfo1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[80px]" data-name="img-holder">
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="image 288">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage288} />
        </div>
      </div>
    </div>
  );
}

function ProductInfo3() {
  return (
    <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="product-info">
      <p className="leading-[26px] relative shrink-0 text-[#0072c3] text-[20px] tracking-[-0.3px] w-full">1-770875-1</p>
      <p className="leading-[15px] relative shrink-0 text-[#525252] text-[12px] w-full">Pin Header</p>
      <p className="leading-[15px] relative shrink-0 text-[#161616] text-[12px] w-full">AMP - TE CONNECTIVITY</p>
      <p className="leading-[15px] relative shrink-0 text-[#161616] text-[12px] w-full">Ordercode: 3133748</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[4.318px] left-[3.96px] top-[18.4px] w-[10.781px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7812 4.31829">
        <g id="Group">
          <path d={svgPaths.p1216e3c0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3d383f00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p12f2f880} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function DataSheet2() {
  return (
    <div className="col-1 content-stretch flex gap-[6px] items-center ml-0 mt-0 relative row-1 w-[7.019999999999996%]" data-name="Data Sheet">
      <div className="h-[24px] relative shrink-0 w-[18.429px]" data-name="icon / pdf">
        <div className="absolute h-[24px] left-0 top-0 w-[18.429px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4286 24">
            <path d={svgPaths.p129700} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          </svg>
        </div>
        <div className="absolute left-[13.29px] size-[5.078px] top-[0.06px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.07814 5.07814">
            <path d="M0 0V5.07814H5.07814L0 0Z" fill="var(--fill-0, #D92638)" id="Vector" />
          </svg>
        </div>
        <div className="absolute h-[11.321px] left-[3.68px] top-[2.96px] w-[9.892px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.89237 11.3211">
            <path d={svgPaths.p3c5879e0} fill="var(--fill-0, #CC4B4C)" id="Vector" />
          </svg>
        </div>
        <div className="absolute h-[7.286px] left-0 top-[16.71px] w-[18.429px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4286 7.28572">
            <path d={svgPaths.p2f0b7100} fill="var(--fill-0, #CC4B4C)" id="Vector" />
          </svg>
        </div>
        <Group2 />
      </div>
    </div>
  );
}

function Datasheet2() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="datasheet">
      <p className="col-1 font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] ml-[10.07%] mt-[4px] not-italic relative row-1 text-[#0072c3] text-[12px] w-[89.93%]">Datasheet</p>
      <DataSheet2 />
    </div>
  );
}

function UltraLiberian2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="ultraLiberian">
      <div className="relative shrink-0 size-[16px]" data-name="icon">
        <div className="absolute inset-[6.25%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path clipRule="evenodd" d={svgPaths.p1dd59980} fill="var(--fill-0, #0072C3)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">UltraLibrarian</p>
    </div>
  );
}

function XX2() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="x/x">
      <p className="absolute font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6f6f6f] text-[12px] top-0 w-[251px]">(9/10)</p>
    </div>
  );
}

function ContainerInfo2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="container-info">
      <Frame12 />
      <ProductInfo3 />
      <Datasheet2 />
      <UltraLiberian2 />
      <XX2 />
    </div>
  );
}

function ContainerContent2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px pb-[4px] relative" data-name="container-content">
      <div className="h-[24px] shrink-0 w-full" data-name="header-item" />
      <ContainerInfo2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[80px]" data-name="img-holder">
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="image 289">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage289} />
        </div>
      </div>
    </div>
  );
}

function ProductInfo4() {
  return (
    <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="product-info">
      <p className="leading-[26px] relative shrink-0 text-[#0072c3] text-[20px] tracking-[-0.3px] w-full">66200221122</p>
      <p className="leading-[15px] relative shrink-0 text-[#525252] text-[12px] w-full">Pin Header</p>
      <p className="leading-[15px] relative shrink-0 text-[#161616] text-[12px] w-full">WURTH ELEKTRONIK</p>
      <p className="leading-[15px] relative shrink-0 text-[#161616] text-[12px] w-full">Ordercode: 2984282</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute h-[4.318px] left-[3.96px] top-[18.4px] w-[10.781px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7812 4.31829">
        <g id="Group">
          <path d={svgPaths.p1216e3c0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3d383f00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p12f2f880} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function DataSheet3() {
  return (
    <div className="col-1 content-stretch flex gap-[6px] items-center ml-0 mt-0 relative row-1 w-[7.019999999999996%]" data-name="Data Sheet">
      <div className="h-[24px] relative shrink-0 w-[18.429px]" data-name="icon / pdf">
        <div className="absolute h-[24px] left-0 top-0 w-[18.429px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4286 24">
            <path d={svgPaths.p129700} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          </svg>
        </div>
        <div className="absolute left-[13.29px] size-[5.078px] top-[0.06px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.07814 5.07814">
            <path d="M0 0V5.07814H5.07814L0 0Z" fill="var(--fill-0, #D92638)" id="Vector" />
          </svg>
        </div>
        <div className="absolute h-[11.321px] left-[3.68px] top-[2.96px] w-[9.892px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.89237 11.3211">
            <path d={svgPaths.p3c5879e0} fill="var(--fill-0, #CC4B4C)" id="Vector" />
          </svg>
        </div>
        <div className="absolute h-[7.286px] left-0 top-[16.71px] w-[18.429px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4286 7.28572">
            <path d={svgPaths.p2f0b7100} fill="var(--fill-0, #CC4B4C)" id="Vector" />
          </svg>
        </div>
        <Group3 />
      </div>
    </div>
  );
}

function Datasheet3() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="datasheet">
      <p className="col-1 font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] ml-[10.07%] mt-[4px] not-italic relative row-1 text-[#0072c3] text-[12px] w-[89.93%]">Datasheet</p>
      <DataSheet3 />
    </div>
  );
}

function UltraLiberian3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="ultraLiberian">
      <div className="relative shrink-0 size-[16px]" data-name="icon">
        <div className="absolute inset-[6.25%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path clipRule="evenodd" d={svgPaths.p1dd59980} fill="var(--fill-0, #0072C3)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">UltraLibrarian</p>
    </div>
  );
}

function XX3() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="x/x">
      <p className="absolute font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6f6f6f] text-[12px] top-0 w-[251px]">(8/10)</p>
    </div>
  );
}

function ContainerInfo3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="container-info">
      <Frame13 />
      <ProductInfo4 />
      <Datasheet3 />
      <UltraLiberian3 />
      <XX3 />
    </div>
  );
}

function ContainerContent3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px pb-[4px] relative" data-name="container-content">
      <div className="h-[24px] shrink-0 w-full" data-name="header-item" />
      <ContainerInfo3 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[80px]" data-name="img-holder">
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="image 289">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage290} />
        </div>
      </div>
    </div>
  );
}

function ProductInfo5() {
  return (
    <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="product-info">
      <p className="leading-[26px] relative shrink-0 text-[#0072c3] text-[20px] tracking-[-0.3px] w-full">1-770969-1</p>
      <p className="leading-[15px] relative shrink-0 text-[#525252] text-[12px] w-full">Pin Header</p>
      <p className="leading-[15px] relative shrink-0 text-[#161616] text-[12px] w-full">AMP - TE CONNECTIVITY</p>
      <p className="leading-[15px] relative shrink-0 text-[#161616] text-[12px] w-full">Ordercode: 2468380</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute h-[4.318px] left-[3.96px] top-[18.4px] w-[10.781px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7812 4.31829">
        <g id="Group">
          <path d={svgPaths.p1216e3c0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3d383f00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p12f2f880} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function DataSheet4() {
  return (
    <div className="col-1 content-stretch flex gap-[6px] items-center ml-0 mt-0 relative row-1 w-[7.019999999999996%]" data-name="Data Sheet">
      <div className="h-[24px] relative shrink-0 w-[18.429px]" data-name="icon / pdf">
        <div className="absolute h-[24px] left-0 top-0 w-[18.429px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4286 24">
            <path d={svgPaths.p129700} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          </svg>
        </div>
        <div className="absolute left-[13.29px] size-[5.078px] top-[0.06px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.07814 5.07814">
            <path d="M0 0V5.07814H5.07814L0 0Z" fill="var(--fill-0, #D92638)" id="Vector" />
          </svg>
        </div>
        <div className="absolute h-[11.321px] left-[3.68px] top-[2.96px] w-[9.892px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.89237 11.3211">
            <path d={svgPaths.p3c5879e0} fill="var(--fill-0, #CC4B4C)" id="Vector" />
          </svg>
        </div>
        <div className="absolute h-[7.286px] left-0 top-[16.71px] w-[18.429px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4286 7.28572">
            <path d={svgPaths.p2f0b7100} fill="var(--fill-0, #CC4B4C)" id="Vector" />
          </svg>
        </div>
        <Group4 />
      </div>
    </div>
  );
}

function Datasheet4() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="datasheet">
      <p className="col-1 font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] ml-[10.07%] mt-[4px] not-italic relative row-1 text-[#0072c3] text-[12px] w-[89.93%]">Datasheet</p>
      <DataSheet4 />
    </div>
  );
}

function UltraLiberian4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="ultraLiberian">
      <div className="relative shrink-0 size-[16px]" data-name="icon">
        <div className="absolute inset-[6.25%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path clipRule="evenodd" d={svgPaths.p1dd59980} fill="var(--fill-0, #0072C3)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">UltraLibrarian</p>
    </div>
  );
}

function XX4() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="x/x">
      <p className="absolute font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6f6f6f] text-[12px] top-0 w-[251px]">(9/10)</p>
    </div>
  );
}

function ContainerInfo4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="container-info">
      <Frame14 />
      <ProductInfo5 />
      <Datasheet4 />
      <UltraLiberian4 />
      <XX4 />
    </div>
  );
}

function ContainerContent4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px pb-[4px] relative" data-name="container-content">
      <div className="h-[24px] shrink-0 w-full" data-name="header-item" />
      <ContainerInfo4 />
    </div>
  );
}

function FirstRow() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="first-row">
      <Component1Row />
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="content-product-compare">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[8px] relative w-full">
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[260px]" data-name="product-compare">
              <ContainerContent />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="content-product-compare">
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[260px]" data-name="product-compare">
          <div className="bg-[#c6c6c6] self-stretch shrink-0 w-px" data-name="border" />
          <ContainerContent1 />
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="content-product-compare">
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[260px]" data-name="product-compare">
          <div className="bg-[#c6c6c6] self-stretch shrink-0 w-px" data-name="border" />
          <ContainerContent2 />
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="content-product-compare">
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[260px]" data-name="product-compare">
          <div className="bg-[#c6c6c6] self-stretch shrink-0 w-px" data-name="border" />
          <ContainerContent3 />
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="content-product-compare">
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[260px]" data-name="product-compare">
          <div className="bg-[#c6c6c6] self-stretch shrink-0 w-px" data-name="border" />
          <ContainerContent4 />
        </div>
      </div>
    </div>
  );
}

function IconValue1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="pdp-icons">
        <div className="relative shrink-0 size-[18px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.p3cb99300} fill="var(--fill-0, #473877)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <button className="bg-[rgba(255,255,255,0)] content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <IconValue1 />
      </button>
      <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2145] text-[0px] whitespace-nowrap">
        <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[15px] text-[12px]">AI differences</p>
      </div>
      <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#684ab8] text-[12px] whitespace-nowrap">
        <p className="leading-[15px]">BETA</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#473877] text-[12px]">
        <p className="leading-[15px]">AI has reviewed the datasheets for these alternative options and generated a summary of the key differences. We hope this feature helps, but please double-check the details before making your final selection.</p>
      </div>
    </div>
  );
}

function AttributeLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[424px]" data-name="attribute label">
      <Frame17 />
      <Frame16 />
    </div>
  );
}

function Fill() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="fill">
      <div className="content-stretch flex items-start pb-[4px] px-[16px] relative w-full">
        <div className="flex flex-[1_0_0] flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#574099] text-[12px]">
          <p className="leading-[15px]">This version is mechanically identical to the viewed part but uses gold-plated contacts instead of tin, offering improved corrosion resistance and much lower contact resistance for high-reliability applications. Otherwise, all mechanical, electrical, and dimensional characteristics remain the same.</p>
        </div>
      </div>
    </div>
  );
}

function AlternativeCompare() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[265px]" data-name="alternative compare">
      <Fill />
    </div>
  );
}

function Fill1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="fill">
      <div className="content-stretch flex items-start pb-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#574099] text-[12px]">Still part of the Mini-Universal MATE-N-LOK family, but this variant supports environmental sealing. It includes accommodation for seal plugs and backshells, providing moisture and dust protection that the standard open header does not offer. The core footprint and mating geometry remain compatible.</p>
      </div>
    </div>
  );
}

function AlternativeCompare1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[265px]" data-name="alternative compare">
      <Fill1 />
    </div>
  );
}

function Fill2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start pb-[4px] px-[16px] relative shrink-0 w-[265px]" data-name="fill">
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#574099] text-[12px]">This is not footprint-compatible with the TE part. It uses a 3.00 mm pitch WR-MPC3 system, not TE’s 4.14 mm MATE-N-LOK pitch. It also differs in housing style, keying, current rating, and mating interface. Suitable only as an alternative connector family—not a drop-in replacement.</p>
    </div>
  );
}

function AlternativeCompare2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[266.8px]" data-name="alternative compare">
      <Fill2 />
    </div>
  );
}

function Fill3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] min-h-px min-w-px relative" data-name="fill">
      <div className="content-stretch flex items-start pb-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#574099] text-[12px]">A right-angle version of the Mini-Universal MATE-N-LOK header. The electrical performance and plating options match the standard part, but the 90-degree orientation provides an alternative board-mount configuration where vertical clearance is limited. Footprint and mating housings remain fully compatible.</p>
      </div>
    </div>
  );
}

function AlternativeCompare3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[265px]" data-name="alternative compare">
      <Fill3 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0 w-[639px]" data-name="table">
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#b2b0f1] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <AlternativeCompare />
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#b2b0f1] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <AlternativeCompare1 />
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#b2b0f1] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <AlternativeCompare2 />
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#b2b0f1] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <AlternativeCompare3 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[8px] py-[8px] relative w-full">
        <div className="bg-[rgba(240,240,253,0.5)] relative rounded-[6px] shrink-0 w-full" data-name="alternative compare">
          <div aria-hidden="true" className="absolute border-2 border-[#9a90e9] border-solid inset-[-2px] pointer-events-none rounded-[8px]" />
          <div className="content-stretch flex gap-[8px] items-start pl-[16px] pr-[8px] py-[16px] relative w-full">
            <AttributeLabel />
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

function IconValue2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[20px]" data-name="Checkbox">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p9ba3680} fill="var(--fill-0, #161616)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AttributeLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[172px]" data-name="attribute label">
      <button className="bg-[rgba(255,255,255,0)] content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <IconValue2 />
      </button>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] whitespace-nowrap">Connector Systems</p>
    </div>
  );
}

function Fill4() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Wire-to-Board</p>
        </div>
      </div>
    </div>
  );
}

function Fill5() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Wire-to-Board</p>
        </div>
      </div>
    </div>
  );
}

function Fill6() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Wire-to-Board</p>
        </div>
      </div>
    </div>
  );
}

function Fill7() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Wire-to-Board</p>
        </div>
      </div>
    </div>
  );
}

function Fill8() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Wire-to-Board</p>
        </div>
      </div>
    </div>
  );
}

function Table1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative self-stretch" data-name="table">
      <div className="content-stretch flex flex-[1_0_0] h-[23px] items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill4 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill5 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill6 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill7 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill8 />
      </div>
    </div>
  );
}

function IconValue3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[20px]" data-name="Checkbox">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p9ba3680} fill="var(--fill-0, #161616)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AttributeLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[172px]" data-name="attribute label">
      <button className="bg-[rgba(255,255,255,0)] content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <IconValue3 />
      </button>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] whitespace-nowrap">Pitch Spacing</p>
    </div>
  );
}

function Fill9() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">4.14mm</p>
        </div>
      </div>
    </div>
  );
}

function Fill10() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">4.14mm</p>
        </div>
      </div>
    </div>
  );
}

function Fill11() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">4.14mm</p>
        </div>
      </div>
    </div>
  );
}

function Fill12() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="opacity-0 relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">3mm</p>
        </div>
      </div>
    </div>
  );
}

function Fill13() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">4.14mm</p>
        </div>
      </div>
    </div>
  );
}

function Table2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative self-stretch" data-name="table">
      <div className="content-stretch flex flex-[1_0_0] h-[23px] items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill9 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill10 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill11 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill12 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill13 />
      </div>
    </div>
  );
}

function IconValue4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[20px]" data-name="Checkbox">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p9ba3680} fill="var(--fill-0, #161616)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AttributeLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[172px]" data-name="attribute label">
      <button className="bg-[rgba(255,255,255,0)] content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <IconValue4 />
      </button>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] whitespace-nowrap">{`No. Rows `}</p>
    </div>
  );
}

function Fill14() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">2 Rows</p>
        </div>
      </div>
    </div>
  );
}

function Fill15() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">2 Rows</p>
        </div>
      </div>
    </div>
  );
}

function Fill16() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">2 Rows</p>
        </div>
      </div>
    </div>
  );
}

function Fill17() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">2 Rows</p>
        </div>
      </div>
    </div>
  );
}

function Fill18() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">2 Rows</p>
        </div>
      </div>
    </div>
  );
}

function Table3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative self-stretch" data-name="table">
      <div className="content-stretch flex flex-[1_0_0] h-[23px] items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill14 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill15 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill16 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill17 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill18 />
      </div>
    </div>
  );
}

function IconValue5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[20px]" data-name="Checkbox">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p9ba3680} fill="var(--fill-0, #161616)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AttributeLabel4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[172px]" data-name="attribute label">
      <button className="bg-[rgba(255,255,255,0)] content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <IconValue5 />
      </button>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] whitespace-nowrap">No. of Contacts</p>
    </div>
  );
}

function Fill19() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">6 Contacts</p>
        </div>
      </div>
    </div>
  );
}

function Fill20() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">6 Contacts</p>
        </div>
      </div>
    </div>
  );
}

function Fill21() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">6 Contacts</p>
        </div>
      </div>
    </div>
  );
}

function Fill22() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">6 Contacts</p>
        </div>
      </div>
    </div>
  );
}

function Fill23() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">6 Contacts</p>
        </div>
      </div>
    </div>
  );
}

function Table4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative self-stretch" data-name="table">
      <div className="content-stretch flex flex-[1_0_0] h-[23px] items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill19 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill20 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill21 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill22 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill23 />
      </div>
    </div>
  );
}

function IconValue6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[20px]" data-name="Checkbox">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p9ba3680} fill="var(--fill-0, #161616)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AttributeLabel5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[172px]" data-name="attribute label">
      <button className="bg-[rgba(255,255,255,0)] content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <IconValue6 />
      </button>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] whitespace-nowrap">Contact Termination Type</p>
    </div>
  );
}

function Fill24() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Through Hole Straight</p>
        </div>
      </div>
    </div>
  );
}

function Fill25() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Through Hole Straight</p>
        </div>
      </div>
    </div>
  );
}

function Fill26() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Through Hole Straight</p>
        </div>
      </div>
    </div>
  );
}

function Fill27() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Through Hole Straight</p>
        </div>
      </div>
    </div>
  );
}

function Fill28() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="opacity-0 relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Through Hole Angle</p>
        </div>
      </div>
    </div>
  );
}

function Table5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative self-stretch" data-name="table">
      <div className="content-stretch flex flex-[1_0_0] h-[23px] items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill24 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill25 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill26 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill27 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill28 />
      </div>
    </div>
  );
}

function IconValue7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[20px]" data-name="Checkbox">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p9ba3680} fill="var(--fill-0, #161616)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AttributeLabel6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[172px]" data-name="attribute label">
      <button className="bg-[rgba(255,255,255,0)] content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <IconValue7 />
      </button>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] whitespace-nowrap">Product Range</p>
    </div>
  );
}

function Fill29() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Mini Universal MATE-N-LOK</p>
        </div>
      </div>
    </div>
  );
}

function Fill30() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Mini Universal MATE-N-LOK</p>
        </div>
      </div>
    </div>
  );
}

function Fill31() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Mini Universal MATE-N-LOK</p>
        </div>
      </div>
    </div>
  );
}

function Fill32() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">WR-MPC3</p>
        </div>
      </div>
    </div>
  );
}

function Fill33() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Mini Universal MATE-N-LOK</p>
        </div>
      </div>
    </div>
  );
}

function Table6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative self-stretch" data-name="table">
      <div className="content-stretch flex flex-[1_0_0] h-[23px] items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill29 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill30 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill31 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill32 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill33 />
      </div>
    </div>
  );
}

function IconValue8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[20px]" data-name="Checkbox">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p9ba3680} fill="var(--fill-0, #161616)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AttributeLabel7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[172px]" data-name="attribute label">
      <button className="bg-[rgba(255,255,255,0)] content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <IconValue8 />
      </button>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] whitespace-nowrap">Pitch Connector Shroud</p>
    </div>
  );
}

function Fill34() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Shrouded</p>
        </div>
      </div>
    </div>
  );
}

function Fill35() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Shrouded</p>
        </div>
      </div>
    </div>
  );
}

function Fill36() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Shrouded</p>
        </div>
      </div>
    </div>
  );
}

function Fill37() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="opacity-0 relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">-</p>
        </div>
      </div>
    </div>
  );
}

function Fill38() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Shrouded</p>
        </div>
      </div>
    </div>
  );
}

function Table7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative self-stretch" data-name="table">
      <div className="content-stretch flex flex-[1_0_0] h-[23px] items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill34 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill35 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill36 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill37 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill38 />
      </div>
    </div>
  );
}

function IconValue9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[20px]" data-name="Checkbox">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p9ba3680} fill="var(--fill-0, #161616)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AttributeLabel8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[172px]" data-name="attribute label">
      <button className="bg-[rgba(255,255,255,0)] content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <IconValue9 />
      </button>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] whitespace-nowrap">Contact Plating</p>
    </div>
  );
}

function Fill39() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Tin Plated Contacts</p>
        </div>
      </div>
    </div>
  );
}

function Fill40() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="opacity-0 relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Gold</p>
        </div>
      </div>
    </div>
  );
}

function Fill41() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="opacity-0 relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Gold</p>
        </div>
      </div>
    </div>
  );
}

function Fill42() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Tin Plated Contacts</p>
        </div>
      </div>
    </div>
  );
}

function Fill43() {
  return (
    <div className="bg-[#f1fcf3] relative shrink-0 w-full" data-name="fill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <div className="relative shrink-0 size-[16px]" data-name="Status icon">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute bg-white inset-1/4" data-name="Fill" />
            <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
              <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-[6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p361304f0} fill="var(--fill-0, #24A148)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Tin Plated Contacts</p>
        </div>
      </div>
    </div>
  );
}

function Table8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative self-stretch" data-name="table">
      <div className="content-stretch flex flex-[1_0_0] h-[23px] items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill39 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill40 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill41 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill42 />
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full rotate-180">
          <div className="h-full relative w-px" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="alternative compare">
        <Fill43 />
      </div>
    </div>
  );
}

function AttributeCompare() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="attribute-compare">
      <Frame20 />
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none w-full">
          <div className="h-[1522px] w-full" data-name="alternative compare / row / divider" />
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="alternative compare">
        <div className="content-stretch flex gap-[8px] items-start pl-[8px] relative w-full">
          <AttributeLabel1 />
          <Table1 />
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none w-full">
          <div className="h-[1522px] relative w-full" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="alternative compare">
        <div className="content-stretch flex gap-[8px] items-start pl-[8px] relative w-full">
          <AttributeLabel2 />
          <Table2 />
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none w-full">
          <div className="h-[1522px] relative w-full" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="alternative compare">
        <div className="content-stretch flex gap-[8px] items-start pl-[8px] relative w-full">
          <AttributeLabel3 />
          <Table3 />
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none w-full">
          <div className="h-[1522px] relative w-full" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="alternative compare">
        <div className="content-stretch flex gap-[8px] items-start pl-[8px] relative w-full">
          <AttributeLabel4 />
          <Table4 />
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none w-full">
          <div className="h-[1522px] relative w-full" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="alternative compare">
        <div className="content-stretch flex gap-[8px] items-start pl-[8px] relative w-full">
          <AttributeLabel5 />
          <Table5 />
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none w-full">
          <div className="h-[1522px] relative w-full" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="alternative compare">
        <div className="content-stretch flex gap-[8px] items-start pl-[8px] relative w-full">
          <AttributeLabel6 />
          <Table6 />
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none w-full">
          <div className="h-[1522px] relative w-full" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="alternative compare">
        <div className="content-stretch flex gap-[8px] items-start pl-[8px] relative w-full">
          <AttributeLabel7 />
          <Table7 />
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none w-full">
          <div className="h-[1522px] relative w-full" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="alternative compare">
        <div className="content-stretch flex gap-[8px] items-start pl-[8px] relative w-full">
          <AttributeLabel8 />
          <Table8 />
        </div>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none w-full">
          <div className="h-[1522px] relative w-full" data-name="alternative compare / row / divider">
            <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonLabel() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex items-center relative shrink-0" data-name="Button Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#c6c6c6] text-[14px] whitespace-nowrap">Update Table</p>
    </div>
  );
}

function InnerFrame11() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px overflow-clip px-[12px] relative rounded-[4px]" data-name="Inner Frame">
      <ButtonLabel />
    </div>
  );
}

function Tool() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="tool">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#6f6f6f] text-[12px] whitespace-nowrap">0 attribute values selected</p>
      <div className="content-stretch flex flex-col h-[32px] items-center justify-center relative shrink-0" data-name="Button">
        <InnerFrame11 />
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[13px] w-[172px]">Attribute values you selected are locked</p>
    </div>
  );
}

function Component1Row1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-full items-start px-[8px] relative shrink-0 w-[188px]" data-name="1-row">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#0072c3] text-[12px] whitespace-nowrap">Show all attributes (2 more)</p>
      <Tool />
    </div>
  );
}

function Input1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#161616] text-[13px] text-center">1</p>
        </div>
      </div>
    </div>
  );
}

function InputButtons1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="input+buttons">
      <Input1 />
    </div>
  );
}

function BottomBorder1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bottom-border">
      <div className="bg-[#8d8d8d] flex-[1_0_0] h-px min-h-px min-w-px" data-name="border-bottom" />
    </div>
  );
}

function InputButtonsBorder1() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="input+buttons+border">
      <InputButtons1 />
      <BottomBorder1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1404 17.5001">
            <path d={svgPaths.p31685d70} fill="var(--fill-0, white)" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Add</p>
    </div>
  );
}

function InnerFrame12() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
          <Icon3 />
          <Label11 />
        </div>
      </div>
    </div>
  );
}

function ProductRow7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-[120px]" data-name="product-row-01">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="quantity(add)">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="NumberInput Label">
          <InputButtonsBorder1 />
        </div>
        <div className="bg-[#0072c3] content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="notifications/toast/utilities/button-layout/button">
          <InnerFrame12 />
        </div>
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#525252] text-[12px] w-full">Min: 1 / Mult: 1</p>
      </div>
    </div>
  );
}

function TextGroupVertical() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center leading-[0] relative shrink-0 w-full" data-name="text-group-vertical">
      <div className="relative shrink-0 text-[#525252] text-right">
        <p className="leading-[15px] mb-0">1+</p>
        <p className="leading-[15px] mb-0">10+</p>
        <p className="leading-[15px] mb-0">100+</p>
        <p className="leading-[15px] mb-0">250+</p>
        <p className="leading-[15px]">500+</p>
      </div>
      <div className="relative shrink-0 text-[#161616]">
        <p className="leading-[15px] mb-0">£1.656</p>
        <p className="leading-[15px]">
          £1.380
          <br aria-hidden="true" />
          £1.236
          <br aria-hidden="true" />
          £1.170
          <br aria-hidden="true" />
          £1.0836
        </p>
      </div>
    </div>
  );
}

function ProductRow8() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px py-[8px] relative" data-name="product-row-06">
      <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-center not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="price">
        <TextGroupVertical />
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[15px] relative shrink-0 text-[#6f6f6f] text-right tracking-[-0.2px] underline">More Pricing...</p>
      </div>
    </div>
  );
}

function QuantityPriceBreaks() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="quantity+price-breaks">
      <ProductRow7 />
      <ProductRow8 />
    </div>
  );
}

function BuyBoxContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="buy-box-content">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[235px]" data-name="availibility-messaging">
        <div className="relative shrink-0 size-[20px]" data-name="icons">
          <div className="absolute inset-[5%]" data-name="Fill">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
            </svg>
          </div>
          <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
              <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
            </svg>
          </div>
        </div>
        <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[15px] min-w-full not-italic relative shrink-0 text-[#2a8442] text-[12px] w-[min-content]">1,163 In Stock</p>
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-w-full not-italic relative shrink-0 text-[#525252] text-[12px] w-[min-content]">Delivery in 2-4 business days from our UK warehouse</p>
      </div>
      <QuantityPriceBreaks />
    </div>
  );
}

function Input2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#161616] text-[13px] text-center">10</p>
        </div>
      </div>
    </div>
  );
}

function InputButtons2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="input+buttons">
      <Input2 />
    </div>
  );
}

function BottomBorder2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bottom-border">
      <div className="bg-[#8d8d8d] flex-[1_0_0] h-px min-h-px min-w-px" data-name="border-bottom" />
    </div>
  );
}

function InputButtonsBorder2() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="input+buttons+border">
      <InputButtons2 />
      <BottomBorder2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1404 17.5001">
            <path d={svgPaths.p31685d70} fill="var(--fill-0, white)" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Add</p>
    </div>
  );
}

function InnerFrame13() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
          <Icon4 />
          <Label12 />
        </div>
      </div>
    </div>
  );
}

function ProductRow() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-[120px]" data-name="product-row-01">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="quantity(add)">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="NumberInput Label">
          <InputButtonsBorder2 />
        </div>
        <div className="bg-[#0072c3] content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="notifications/toast/utilities/button-layout/button">
          <InnerFrame13 />
        </div>
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#525252] text-[12px] w-full">Min: 10 / Mult: 10</p>
      </div>
    </div>
  );
}

function TextGroupVertical1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center leading-[0] relative shrink-0 w-full" data-name="text-group-vertical">
      <div className="relative shrink-0 text-[#525252] text-right">
        <p className="leading-[15px] mb-0">10+</p>
        <p className="leading-[15px] mb-0">100+</p>
        <p className="leading-[15px] mb-0">500+</p>
        <p className="leading-[15px] mb-0">1000+</p>
        <p className="leading-[15px]">2500+</p>
      </div>
      <div className="relative shrink-0 text-[#161616]">
        <p className="leading-[15px] mb-0">£0.156</p>
        <p className="leading-[15px] mb-0">£0.104</p>
        <p className="leading-[15px] mb-0">£0.0794</p>
        <p className="leading-[15px] mb-0">£0.0655</p>
        <p className="leading-[15px]">£0.0574</p>
      </div>
    </div>
  );
}

function ProductRow4() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px py-[8px] relative" data-name="product-row-06">
      <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-center not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="price">
        <TextGroupVertical1 />
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[15px] relative shrink-0 text-[#6f6f6f] text-right tracking-[-0.2px] underline">More Pricing...</p>
      </div>
    </div>
  );
}

function QuantityPriceBreaks1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="quantity+price-breaks">
      <ProductRow />
      <ProductRow4 />
    </div>
  );
}

function BuyBoxContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="buy-box-content">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[235px]" data-name="availibility-messaging">
        <div className="relative shrink-0 size-[20px]" data-name="icons">
          <div className="absolute inset-[5%]" data-name="Fill">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
            </svg>
          </div>
          <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
              <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
            </svg>
          </div>
        </div>
        <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[15px] min-w-full not-italic relative shrink-0 text-[#2a8442] text-[12px] w-[min-content]">3,080 In Stock</p>
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-w-full not-italic relative shrink-0 text-[#525252] text-[12px] w-[min-content]">Delivery in 2-4 business days from our UK warehouse</p>
      </div>
      <QuantityPriceBreaks1 />
    </div>
  );
}

function Input3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#161616] text-[13px] text-center">10</p>
        </div>
      </div>
    </div>
  );
}

function InputButtons3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="input+buttons">
      <Input3 />
    </div>
  );
}

function BottomBorder3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bottom-border">
      <div className="bg-[#8d8d8d] flex-[1_0_0] h-px min-h-px min-w-px" data-name="border-bottom" />
    </div>
  );
}

function InputButtonsBorder3() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="input+buttons+border">
      <InputButtons3 />
      <BottomBorder3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1404 17.5001">
            <path d={svgPaths.p31685d70} fill="var(--fill-0, white)" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Add</p>
    </div>
  );
}

function InnerFrame14() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
          <Icon5 />
          <Label13 />
        </div>
      </div>
    </div>
  );
}

function ProductRow1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-[120px]" data-name="product-row-01">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="quantity(add)">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="NumberInput Label">
          <InputButtonsBorder3 />
        </div>
        <div className="bg-[#0072c3] content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="notifications/toast/utilities/button-layout/button">
          <InnerFrame14 />
        </div>
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#525252] text-[12px] w-full">Min: 10 / Mult: 10</p>
      </div>
    </div>
  );
}

function TextGroupVertical2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center leading-[0] relative shrink-0 w-full" data-name="text-group-vertical">
      <div className="relative shrink-0 text-[#525252] text-right">
        <p className="leading-[15px] mb-0">10+</p>
        <p className="leading-[15px] mb-0">100+</p>
        <p className="leading-[15px] mb-0">500+</p>
        <p className="leading-[15px] mb-0">1000+</p>
        <p className="leading-[15px]">2500+</p>
      </div>
      <div className="relative shrink-0 text-[#161616]">
        <p className="leading-[15px] mb-0">£0.156</p>
        <p className="leading-[15px] mb-0">£0.104</p>
        <p className="leading-[15px] mb-0">£0.0794</p>
        <p className="leading-[15px] mb-0">£0.0655</p>
        <p className="leading-[15px]">£0.0574</p>
      </div>
    </div>
  );
}

function ProductRow5() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px py-[8px] relative" data-name="product-row-06">
      <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-center not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="price">
        <TextGroupVertical2 />
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[15px] relative shrink-0 text-[#6f6f6f] text-right tracking-[-0.2px] underline">More Pricing...</p>
      </div>
    </div>
  );
}

function QuantityPriceBreaks2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="quantity+price-breaks">
      <ProductRow1 />
      <ProductRow5 />
    </div>
  );
}

function BuyBoxContent2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="buy-box-content">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[235px]" data-name="availibility-messaging">
        <div className="relative shrink-0 size-[20px]" data-name="icons">
          <div className="absolute inset-[5%]" data-name="Fill">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
            </svg>
          </div>
          <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
              <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
            </svg>
          </div>
        </div>
        <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[15px] min-w-full not-italic relative shrink-0 text-[#2a8442] text-[12px] w-[min-content]">84,107 In Stock</p>
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-w-full not-italic relative shrink-0 text-[#525252] text-[12px] w-[min-content]">Delivery in 2-4 business days from our UK warehouse</p>
      </div>
      <QuantityPriceBreaks2 />
    </div>
  );
}

function Input4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#161616] text-[13px] text-center">1</p>
        </div>
      </div>
    </div>
  );
}

function InputButtons4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="input+buttons">
      <Input4 />
    </div>
  );
}

function BottomBorder4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bottom-border">
      <div className="bg-[#8d8d8d] flex-[1_0_0] h-px min-h-px min-w-px" data-name="border-bottom" />
    </div>
  );
}

function InputButtonsBorder4() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="input+buttons+border">
      <InputButtons4 />
      <BottomBorder4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1404 17.5001">
            <path d={svgPaths.p31685d70} fill="var(--fill-0, white)" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Add</p>
    </div>
  );
}

function InnerFrame15() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
          <Icon6 />
          <Label14 />
        </div>
      </div>
    </div>
  );
}

function ProductRow2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-[120px]" data-name="product-row-01">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="quantity(add)">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="NumberInput Label">
          <InputButtonsBorder4 />
        </div>
        <div className="bg-[#0072c3] content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="notifications/toast/utilities/button-layout/button">
          <InnerFrame15 />
        </div>
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#525252] text-[12px] w-full">Min: 1 / Mult: 1</p>
      </div>
    </div>
  );
}

function TextGroupVertical3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center leading-[0] relative shrink-0 w-full" data-name="text-group-vertical">
      <div className="relative shrink-0 text-[#525252] text-right">
        <p className="leading-[15px] mb-0">1+</p>
        <p className="leading-[15px] mb-0">10+</p>
        <p className="leading-[15px] mb-0">100+</p>
        <p className="leading-[15px] mb-0">500+</p>
        <p className="leading-[15px]">1000+</p>
      </div>
      <div className="relative shrink-0 text-[#161616]">
        <p className="leading-[15px] mb-0">£0.840</p>
        <p className="leading-[15px] mb-0">£0.649</p>
        <p className="leading-[15px] mb-0">£0.581</p>
        <p className="leading-[15px] mb-0">£0.546</p>
        <p className="leading-[15px]">£0.535</p>
      </div>
    </div>
  );
}

function ProductRow6() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px py-[8px] relative" data-name="product-row-06">
      <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-center not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="price">
        <TextGroupVertical3 />
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[15px] relative shrink-0 text-[#6f6f6f] text-right tracking-[-0.2px] underline">More Pricing...</p>
      </div>
    </div>
  );
}

function QuantityPriceBreaks3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="quantity+price-breaks">
      <ProductRow2 />
      <ProductRow6 />
    </div>
  );
}

function BuyBoxContent3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="buy-box-content">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[235px]" data-name="availibility-messaging">
        <div className="relative shrink-0 size-[20px]" data-name="icons">
          <div className="absolute inset-[5%]" data-name="Fill">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
            </svg>
          </div>
          <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
              <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
            </svg>
          </div>
        </div>
        <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[15px] min-w-full not-italic relative shrink-0 text-[#2a8442] text-[12px] w-[min-content]">313 In Stock</p>
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-w-full not-italic relative shrink-0 text-[#525252] text-[12px] w-[min-content]">EXPRESS Delivery Next Business Day - arrives by 1PM</p>
      </div>
      <QuantityPriceBreaks3 />
    </div>
  );
}

function Input5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#161616] text-[13px] text-center">1</p>
        </div>
      </div>
    </div>
  );
}

function InputButtons5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="input+buttons">
      <Input5 />
    </div>
  );
}

function BottomBorder5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bottom-border">
      <div className="bg-[#8d8d8d] flex-[1_0_0] h-px min-h-px min-w-px" data-name="border-bottom" />
    </div>
  );
}

function InputButtonsBorder5() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="input+buttons+border">
      <InputButtons5 />
      <BottomBorder5 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1404 17.5001">
            <path d={svgPaths.p31685d70} fill="var(--fill-0, white)" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Add</p>
    </div>
  );
}

function InnerFrame16() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
          <Icon7 />
          <Label15 />
        </div>
      </div>
    </div>
  );
}

function ProductRow3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-[120px]" data-name="product-row-01">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="quantity(add)">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="NumberInput Label">
          <InputButtonsBorder5 />
        </div>
        <div className="bg-[#0072c3] content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="notifications/toast/utilities/button-layout/button">
          <InnerFrame16 />
        </div>
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#525252] text-[12px] w-full">Min: 1/ Mult: 1</p>
      </div>
    </div>
  );
}

function TextGroupVertical4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center leading-[0] relative shrink-0 w-full" data-name="text-group-vertical">
      <div className="relative shrink-0 text-[#525252] text-right">
        <p className="leading-[15px] mb-0">1+</p>
        <p className="leading-[15px] mb-0">10+</p>
        <p className="leading-[15px] mb-0">100+</p>
        <p className="leading-[15px] mb-0">250+</p>
        <p className="leading-[15px]">500+</p>
      </div>
      <div className="relative shrink-0 text-[#161616]">
        <p className="leading-[15px] mb-0">£3.060</p>
        <p className="leading-[15px] mb-0">£2.784</p>
        <p className="leading-[15px] mb-0">£2.232</p>
        <p className="leading-[15px] mb-0">£1.992</p>
        <p className="leading-[15px]">£1.956</p>
      </div>
    </div>
  );
}

function ProductRow9() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px py-[8px] relative" data-name="product-row-06">
      <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-center not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="price">
        <TextGroupVertical4 />
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[15px] relative shrink-0 text-[#6f6f6f] text-right tracking-[-0.2px] underline">More Pricing...</p>
      </div>
    </div>
  );
}

function QuantityPriceBreaks4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="quantity+price-breaks">
      <ProductRow3 />
      <ProductRow9 />
    </div>
  );
}

function BuyBoxContent4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="buy-box-content">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[235px]" data-name="availibility-messaging">
        <div className="relative shrink-0 size-[20px]" data-name="icons">
          <div className="absolute inset-[5%]" data-name="Fill">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
            </svg>
          </div>
          <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
              <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
            </svg>
          </div>
        </div>
        <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[15px] min-w-full not-italic relative shrink-0 text-[#2a8442] text-[12px] w-[min-content]">680 In Stock</p>
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-w-full not-italic relative shrink-0 text-[#525252] text-[12px] w-[min-content]">Delivery in 2-4 business days from our UK warehouse</p>
      </div>
      <QuantityPriceBreaks4 />
    </div>
  );
}

function BuyBoxes() {
  return (
    <div className="content-stretch flex h-[234px] items-start relative shrink-0 w-full" data-name="buy-boxes">
      <Component1Row1 />
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="buy-box-1">
        <div className="self-stretch shrink-0 w-px" data-name="alternative compare / row / divider" />
        <BuyBoxContent />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="buy-box-2">
        <div className="relative self-stretch shrink-0 w-px" data-name="alternative compare / row / divider">
          <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
        </div>
        <BuyBoxContent1 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="buy-box-3">
        <div className="relative self-stretch shrink-0 w-px" data-name="alternative compare / row / divider">
          <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
        </div>
        <BuyBoxContent2 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="buy-box-4">
        <div className="relative self-stretch shrink-0 w-px" data-name="alternative compare / row / divider">
          <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
        </div>
        <BuyBoxContent3 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="buy-box-4">
        <div className="relative self-stretch shrink-0 w-px" data-name="alternative compare / row / divider">
          <div className="absolute bg-[#c6c6c6] inset-0" data-name="border" />
        </div>
        <BuyBoxContent4 />
      </div>
    </div>
  );
}

function ButtonLabel1() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0" data-name="Button Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#0072c3] text-[14px] whitespace-nowrap">View more Pin Headers (21)</p>
    </div>
  );
}

function InnerFrame17() {
  return (
    <div className="bg-white h-full relative rounded-[4px] shrink-0" data-name="Inner Frame">
      <div className="content-stretch flex gap-[6px] h-full items-center overflow-clip px-[16px] relative rounded-[inherit]">
        <ButtonLabel1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#0072c3] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ContainerBtn() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="container-btn">
      <div className="content-stretch flex h-[48px] items-start relative shrink-0" data-name="Button">
        <InnerFrame17 />
      </div>
    </div>
  );
}

function SubTitleMain() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="sub-title-main">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#161616] text-[28px] tracking-[-0.3px] whitespace-nowrap">Also Bought</p>
    </div>
  );
}

function BorderHolder() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="border-holder">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end pb-[8px] pl-[16px] relative size-full">
          <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="matts/pdp/border" />
        </div>
      </div>
    </div>
  );
}

function SubHeaderHolder1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="sub-header-holder">
      <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="matts/pdp/below-the-fold/sub-header">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="matts/pdp/below-the-fold/sub-header/number">
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#2a8442] text-[28px] tracking-[-0.3px] whitespace-nowrap">16</p>
        </div>
        <SubTitleMain />
        <div className="flex flex-[1_0_0] flex-row items-end self-stretch">
          <BorderHolder />
        </div>
      </div>
    </div>
  );
}

function SubHeaderHolder() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="sub-header-holder">
      <SubHeaderHolder1 />
    </div>
  );
}

function Avalibility7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[136px]" data-name="Avalibility">
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[5%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
            <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#2a8442] text-[13px]">11,550 In Stock</p>
    </div>
  );
}

function ManufacturerAvailability6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="manufacturer+availability">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">SCHURTER</p>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="availibility-messaging">
        <Avalibility7 />
      </div>
    </div>
  );
}

function Vectors13() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8213 17.9999">
        <g id="vectors">
          <path d={svgPaths.p25b56600} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          <path d={svgPaths.p1d7c0200} fill="var(--fill-0, #D92638)" id="Vector_2" />
          <path d={svgPaths.p1e1cee80} fill="var(--fill-0, #D92638)" id="Vector_3" />
          <path d={svgPaths.pd69900} fill="var(--fill-0, #D92638)" id="Vector_4" />
          <g id="text">
            <path d={svgPaths.p928b580} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p115f6900} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.pec0f700} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextIcon11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors13 />
      </div>
    </div>
  );
}

function Vectors14() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8214 18">
        <g id="vectors">
          <path d={svgPaths.p7750080} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #198038)" />
          <path d={svgPaths.p75a17c0} fill="var(--fill-0, #198038)" id="Vector_2" />
          <path d={svgPaths.p2570a0c0} id="Vector 62" stroke="var(--stroke-0, #198038)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function TextIcon12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors14 />
      </div>
    </div>
  );
}

function DataManAvail6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="data+man+avail">
      <ManufacturerAvailability6 />
      <TextIcon11 />
      <TextIcon12 />
    </div>
  );
}

function HeaderItem2() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="header-item">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Quantity</p>
      </div>
    </div>
  );
}

function HeaderItem3() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="header-item">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Price (ex VAT)</p>
      </div>
    </div>
  );
}

function ItemQuantity5() {
  return (
    <div className="bg-[#eefef2] relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">1+</p>
      </div>
    </div>
  );
}

function ItemPrice5() {
  return (
    <div className="bg-[#eefef2] relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£6.230</p>
      </div>
    </div>
  );
}

function ItemQuantity6() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">10+</p>
      </div>
    </div>
  );
}

function ItemPrice6() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£4.800</p>
      </div>
    </div>
  );
}

function ItemQuantity7() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">100+</p>
      </div>
    </div>
  );
}

function ItemPrice7() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£4.450</p>
      </div>
    </div>
  );
}

function LabelCharacterCount1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label + Character count">
      <div className="opacity-0 shrink-0 size-[0.001px]" data-name="Spacer" />
    </div>
  );
}

function TextOverflow1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-x-auto overflow-y-clip relative z-[1]" data-name="Text overflow">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">1</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-[#f4f4f4] h-[40px] relative shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start px-[16px] py-[11px] relative size-full">
        <TextOverflow1 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1404 17.5001">
            <path d={svgPaths.p31685d70} fill="var(--fill-0, white)" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Add</p>
    </div>
  );
}

function InnerFrame18() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[16px] relative rounded-[4px] shrink-0" data-name="Inner Frame">
      <Icon8 />
      <Label16 />
    </div>
  );
}

function RowInputAdd7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="row-input+add">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[64px] relative" data-name="Text input - Default">
        <LabelCharacterCount1 />
        <TextInput1 />
      </div>
      <div className="bg-[#0072c3] content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="notifications/toast/utilities/button-layout/button">
        <InnerFrame18 />
      </div>
    </div>
  );
}

function Min1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="min">
      <p className="relative shrink-0 text-[#525252]">{`Min: `}</p>
      <p className="relative shrink-0 text-[#161616]">1</p>
    </div>
  );
}

function Mult1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="mult">
      <p className="relative shrink-0 text-[#525252]">Mult:</p>
      <p className="relative shrink-0 text-[#161616]">1</p>
    </div>
  );
}

function MinMult1() {
  return (
    <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[16px] items-center leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="min-mult">
      <Min1 />
      <Mult1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="container">
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[160px]" data-name="img-holder">
        <div className="h-[150px] relative shrink-0 w-[122px]" data-name="image 272">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage272} />
        </div>
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[26px] min-w-full not-italic relative shrink-0 text-[#0072c3] text-[20px] tracking-[-0.3px] w-[min-content]">4782.0100</p>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#525252] text-[13px] w-[min-content]">IEC Power Connector, IEC C13 Socket, 10 A, 250 VAC, Screw, Cable Mount, 4782</p>
      <DataManAvail6 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices">
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row/header+border">
            <HeaderItem2 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row/header+border">
            <HeaderItem3 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity5 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice5 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity6 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice6 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity7 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice7 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start pt-[8px] relative shrink-0 w-full" data-name="button-bar">
        <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="matts/pdp/top/purchase-box/price+quantity+add/price-for-each-supplied">
          <p className="relative shrink-0 text-[#525252]">{`Price for: `}</p>
          <p className="relative shrink-0 text-[#161616]">Each</p>
        </div>
        <RowInputAdd7 />
        <MinMult1 />
      </div>
    </div>
  );
}

function Border() {
  return <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="border" />;
}

function Avalibility8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[136px]" data-name="Avalibility">
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[5%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
            <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#2a8442] text-[13px]">3,550 In Stock</p>
    </div>
  );
}

function ManufacturerAvailability7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="manufacturer+availability">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">BULGIN</p>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="availibility-messaging">
        <Avalibility8 />
      </div>
    </div>
  );
}

function Vectors15() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8213 17.9999">
        <g id="vectors">
          <path d={svgPaths.p25b56600} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          <path d={svgPaths.p1d7c0200} fill="var(--fill-0, #D92638)" id="Vector_2" />
          <path d={svgPaths.p1e1cee80} fill="var(--fill-0, #D92638)" id="Vector_3" />
          <path d={svgPaths.pd69900} fill="var(--fill-0, #D92638)" id="Vector_4" />
          <g id="text">
            <path d={svgPaths.p928b580} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p115f6900} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.pec0f700} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextIcon13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors15 />
      </div>
    </div>
  );
}

function Vectors16() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8214 18">
        <g id="vectors">
          <path d={svgPaths.p7750080} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #198038)" />
          <path d={svgPaths.p75a17c0} fill="var(--fill-0, #198038)" id="Vector_2" />
          <path d={svgPaths.p2570a0c0} id="Vector 62" stroke="var(--stroke-0, #198038)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function TextIcon14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors16 />
      </div>
    </div>
  );
}

function DataManAvail7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="data+man+avail">
      <ManufacturerAvailability7 />
      <TextIcon13 />
      <TextIcon14 />
    </div>
  );
}

function HeaderItem4() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="header-item">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Quantity</p>
      </div>
    </div>
  );
}

function HeaderItem5() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="header-item">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Price (ex VAT)</p>
      </div>
    </div>
  );
}

function ItemQuantity8() {
  return (
    <div className="bg-[#eefef2] relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">1+</p>
      </div>
    </div>
  );
}

function ItemPrice8() {
  return (
    <div className="bg-[#eefef2] relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£15.770</p>
      </div>
    </div>
  );
}

function ItemQuantity9() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">10+</p>
      </div>
    </div>
  );
}

function ItemPrice9() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£12.670</p>
      </div>
    </div>
  );
}

function ItemQuantity10() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">25+</p>
      </div>
    </div>
  );
}

function ItemPrice10() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£11.840</p>
      </div>
    </div>
  );
}

function LabelCharacterCount2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label + Character count">
      <div className="opacity-0 shrink-0 size-[0.001px]" data-name="Spacer" />
    </div>
  );
}

function TextOverflow2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-x-auto overflow-y-clip relative z-[1]" data-name="Text overflow">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">1</p>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-[#f4f4f4] h-[40px] relative shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start px-[16px] py-[11px] relative size-full">
        <TextOverflow2 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1404 17.5001">
            <path d={svgPaths.p31685d70} fill="var(--fill-0, white)" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Add</p>
    </div>
  );
}

function InnerFrame19() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[16px] relative rounded-[4px] shrink-0" data-name="Inner Frame">
      <Icon9 />
      <Label17 />
    </div>
  );
}

function RowInputAdd8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="row-input+add">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[64px] relative" data-name="Text input - Default">
        <LabelCharacterCount2 />
        <TextInput2 />
      </div>
      <div className="bg-[#0072c3] content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="notifications/toast/utilities/button-layout/button">
        <InnerFrame19 />
      </div>
    </div>
  );
}

function Min2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="min">
      <p className="relative shrink-0 text-[#525252]">{`Min: `}</p>
      <p className="relative shrink-0 text-[#161616]">1</p>
    </div>
  );
}

function Mult2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="mult">
      <p className="relative shrink-0 text-[#525252]">Mult:</p>
      <p className="relative shrink-0 text-[#161616]">1</p>
    </div>
  );
}

function MinMult2() {
  return (
    <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[16px] items-center leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="min-mult">
      <Min2 />
      <Mult2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="container">
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[160px]" data-name="img-holder">
        <div className="aspect-[320/178] relative shrink-0 w-full" data-name="image 271">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage271} />
        </div>
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[26px] min-w-full not-italic relative shrink-0 text-[#0072c3] text-[20px] tracking-[-0.3px] w-[min-content]">PX0599</p>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#525252] text-[13px] w-[min-content]">IEC Power Connector, IEC C19 Socket, 20 A, 250 VAC, Screw, Cable Mount</p>
      <DataManAvail7 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices">
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row/header+border">
            <HeaderItem4 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row/header+border">
            <HeaderItem5 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity8 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice8 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity9 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice9 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity10 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice10 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start pt-[8px] relative shrink-0 w-full" data-name="button-bar">
        <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="matts/pdp/top/purchase-box/price+quantity+add/price-for-each-supplied">
          <p className="relative shrink-0 text-[#525252]">{`Price for: `}</p>
          <p className="relative shrink-0 text-[#161616]">Each</p>
        </div>
        <RowInputAdd8 />
        <MinMult2 />
      </div>
    </div>
  );
}

function Border1() {
  return <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="border" />;
}

function Avalibility9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[136px]" data-name="Avalibility">
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[5%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
            <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#2a8442] text-[13px]">151 In Stock</p>
    </div>
  );
}

function ManufacturerAvailability8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="manufacturer+availability">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">onsemi</p>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="availibility-messaging">
        <Avalibility9 />
      </div>
    </div>
  );
}

function Vectors17() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8213 17.9999">
        <g id="vectors">
          <path d={svgPaths.p25b56600} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          <path d={svgPaths.p1d7c0200} fill="var(--fill-0, #D92638)" id="Vector_2" />
          <path d={svgPaths.p1e1cee80} fill="var(--fill-0, #D92638)" id="Vector_3" />
          <path d={svgPaths.pd69900} fill="var(--fill-0, #D92638)" id="Vector_4" />
          <g id="text">
            <path d={svgPaths.p928b580} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p115f6900} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.pec0f700} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextIcon15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors17 />
      </div>
    </div>
  );
}

function Vectors18() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8214 18">
        <g id="vectors">
          <path d={svgPaths.p7750080} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #198038)" />
          <path d={svgPaths.p75a17c0} fill="var(--fill-0, #198038)" id="Vector_2" />
          <path d={svgPaths.p2570a0c0} id="Vector 62" stroke="var(--stroke-0, #198038)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function TextIcon16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors18 />
      </div>
    </div>
  );
}

function DataManAvail8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="data+man+avail">
      <ManufacturerAvailability8 />
      <TextIcon15 />
      <TextIcon16 />
    </div>
  );
}

function HeaderItem6() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="header-item">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Quantity</p>
      </div>
    </div>
  );
}

function HeaderItem7() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="header-item">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Price (ex VAT)</p>
      </div>
    </div>
  );
}

function ItemQuantity11() {
  return (
    <div className="bg-[#eefef2] relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">1+</p>
      </div>
    </div>
  );
}

function ItemPrice11() {
  return (
    <div className="bg-[#eefef2] relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£15.770</p>
      </div>
    </div>
  );
}

function ItemQuantity12() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">5+</p>
      </div>
    </div>
  );
}

function ItemPrice12() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£12.670</p>
      </div>
    </div>
  );
}

function ItemQuantity13() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">10+</p>
      </div>
    </div>
  );
}

function ItemPrice13() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£11.840</p>
      </div>
    </div>
  );
}

function LabelCharacterCount3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label + Character count">
      <div className="opacity-0 shrink-0 size-[0.001px]" data-name="Spacer" />
    </div>
  );
}

function TextOverflow3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-x-auto overflow-y-clip relative z-[1]" data-name="Text overflow">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">1</p>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="bg-[#f4f4f4] h-[40px] relative shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start px-[16px] py-[11px] relative size-full">
        <TextOverflow3 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1404 17.5001">
            <path d={svgPaths.p31685d70} fill="var(--fill-0, white)" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Add</p>
    </div>
  );
}

function InnerFrame20() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[16px] relative rounded-[4px] shrink-0" data-name="Inner Frame">
      <Icon10 />
      <Label18 />
    </div>
  );
}

function RowInputAdd9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="row-input+add">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[64px] relative" data-name="Text input - Default">
        <LabelCharacterCount3 />
        <TextInput3 />
      </div>
      <div className="bg-[#0072c3] content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="notifications/toast/utilities/button-layout/button">
        <InnerFrame20 />
      </div>
    </div>
  );
}

function Min3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="min">
      <p className="relative shrink-0 text-[#525252]">{`Min: `}</p>
      <p className="relative shrink-0 text-[#161616]">1</p>
    </div>
  );
}

function Mult3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="mult">
      <p className="relative shrink-0 text-[#525252]">Mult:</p>
      <p className="relative shrink-0 text-[#161616]">1</p>
    </div>
  );
}

function MinMult3() {
  return (
    <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[16px] items-center leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="min-mult">
      <Min3 />
      <Mult3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="container">
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[160px]" data-name="img-holder">
        <div className="aspect-[205/200] relative shrink-0 w-full" data-name="image 273">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage273} />
        </div>
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[26px] min-w-full not-italic relative shrink-0 text-[#0072c3] text-[20px] tracking-[-0.3px] w-[min-content]">794190-1.</p>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#525252] text-[13px] w-[min-content]">PLUG AND SOCKET CONNECTOR HOUSING</p>
      <DataManAvail8 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices">
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row/header+border">
            <HeaderItem6 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row/header+border">
            <HeaderItem7 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity11 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice11 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity12 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice12 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity13 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice13 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start pt-[8px] relative shrink-0 w-full" data-name="button-bar">
        <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="matts/pdp/top/purchase-box/price+quantity+add/price-for-each-supplied">
          <p className="relative shrink-0 text-[#525252]">{`Price for: `}</p>
          <p className="relative shrink-0 text-[#161616]">Each</p>
        </div>
        <RowInputAdd9 />
        <MinMult3 />
      </div>
    </div>
  );
}

function Border2() {
  return <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="border" />;
}

function Avalibility10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[136px]" data-name="Avalibility">
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[5%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
            <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#2a8442] text-[13px]">76 In Stock</p>
    </div>
  );
}

function ManufacturerAvailability9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="manufacturer+availability">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">DFROBOT</p>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="availibility-messaging">
        <Avalibility10 />
      </div>
    </div>
  );
}

function Vectors19() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8213 17.9999">
        <g id="vectors">
          <path d={svgPaths.p25b56600} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          <path d={svgPaths.p1d7c0200} fill="var(--fill-0, #D92638)" id="Vector_2" />
          <path d={svgPaths.p1e1cee80} fill="var(--fill-0, #D92638)" id="Vector_3" />
          <path d={svgPaths.pd69900} fill="var(--fill-0, #D92638)" id="Vector_4" />
          <g id="text">
            <path d={svgPaths.p928b580} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p115f6900} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.pec0f700} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextIcon17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors19 />
      </div>
    </div>
  );
}

function Vectors20() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8214 18">
        <g id="vectors">
          <path d={svgPaths.p7750080} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #198038)" />
          <path d={svgPaths.p75a17c0} fill="var(--fill-0, #198038)" id="Vector_2" />
          <path d={svgPaths.p2570a0c0} id="Vector 62" stroke="var(--stroke-0, #198038)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function TextIcon18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors20 />
      </div>
    </div>
  );
}

function DataManAvail9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="data+man+avail">
      <ManufacturerAvailability9 />
      <TextIcon17 />
      <TextIcon18 />
    </div>
  );
}

function HeaderItem8() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="header-item">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Quantity</p>
      </div>
    </div>
  );
}

function HeaderItem9() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="header-item">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Price (ex VAT)</p>
      </div>
    </div>
  );
}

function ItemQuantity14() {
  return (
    <div className="bg-[#eefef2] relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">1+</p>
      </div>
    </div>
  );
}

function ItemPrice14() {
  return (
    <div className="bg-[#eefef2] relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£11.010</p>
      </div>
    </div>
  );
}

function LabelCharacterCount4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label + Character count">
      <div className="opacity-0 shrink-0 size-[0.001px]" data-name="Spacer" />
    </div>
  );
}

function TextOverflow4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-x-auto overflow-y-clip relative z-[1]" data-name="Text overflow">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">1</p>
    </div>
  );
}

function TextInput4() {
  return (
    <div className="bg-[#f4f4f4] h-[40px] relative shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start px-[16px] py-[11px] relative size-full">
        <TextOverflow4 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1404 17.5001">
            <path d={svgPaths.p31685d70} fill="var(--fill-0, white)" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Add</p>
    </div>
  );
}

function InnerFrame21() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[16px] relative rounded-[4px] shrink-0" data-name="Inner Frame">
      <Icon11 />
      <Label19 />
    </div>
  );
}

function RowInputAdd10() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="row-input+add">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[64px] relative" data-name="Text input - Default">
        <LabelCharacterCount4 />
        <TextInput4 />
      </div>
      <div className="bg-[#0072c3] content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="notifications/toast/utilities/button-layout/button">
        <InnerFrame21 />
      </div>
    </div>
  );
}

function Min4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="min">
      <p className="relative shrink-0 text-[#525252]">{`Min: `}</p>
      <p className="relative shrink-0 text-[#161616]">1</p>
    </div>
  );
}

function Mult4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="mult">
      <p className="relative shrink-0 text-[#525252]">Mult:</p>
      <p className="relative shrink-0 text-[#161616]">1</p>
    </div>
  );
}

function MinMult4() {
  return (
    <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[16px] items-center leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="min-mult">
      <Min4 />
      <Mult4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="container">
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[160px]" data-name="img-holder">
        <div className="aspect-[249/200] relative shrink-0 w-full" data-name="image 274">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage274} />
        </div>
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[26px] min-w-full not-italic relative shrink-0 text-[#0072c3] text-[20px] tracking-[-0.3px] w-[min-content]">SER0038</p>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#525252] text-[13px] w-[min-content]">Servo Motor, Standard, 7.2 V, 1.47 N-m</p>
      <DataManAvail9 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices">
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row/header+border">
            <HeaderItem8 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row/header+border">
            <HeaderItem9 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity14 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice14 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start pt-[8px] relative shrink-0 w-full" data-name="button-bar">
        <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="matts/pdp/top/purchase-box/price+quantity+add/price-for-each-supplied">
          <p className="relative shrink-0 text-[#525252]">{`Price for: `}</p>
          <p className="relative shrink-0 text-[#161616]">Each</p>
        </div>
        <RowInputAdd10 />
        <MinMult4 />
      </div>
    </div>
  );
}

function Products2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="products">
      <div className="content-stretch flex gap-[24px] items-start px-[39.5px] relative w-full">
        <div className="content-stretch flex items-center relative shrink-0 w-[320px]" data-name="content-product">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="product">
            <Container6 />
          </div>
        </div>
        <Border />
        <div className="content-stretch flex items-center relative shrink-0 w-[320px]" data-name="content-product">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="product">
            <Container7 />
          </div>
        </div>
        <Border1 />
        <div className="content-stretch flex items-center relative shrink-0 w-[320px]" data-name="content-product">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="product">
            <Container8 />
          </div>
        </div>
        <Border2 />
        <div className="content-stretch flex items-center relative shrink-0 w-[320px]" data-name="content-product">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="product">
            <Container9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function CarouselLeft() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex flex-col items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="carousel-left">
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[18.75%_33.13%_18.75%_31.25%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.125 12.5">
            <path clipRule="evenodd" d={svgPaths.paa0c900} fill="var(--fill-0, #C6C6C6)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CarouselLeft1() {
  return (
    <div className="bg-[#0072c3] content-stretch flex flex-col items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="carousel-left">
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[18.75%_31.25%_18.75%_33.13%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.125 12.5">
            <path clipRule="evenodd" d={svgPaths.p75c6800} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NewPassiveComponents() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="new-passive-components">
      <Products2 />
      <div className="absolute bottom-0 content-stretch flex flex-col items-center justify-center left-[-23.5px] top-0" data-name="matts/pdp/bottom/tech-specs/carousel/carousel-nav">
        <div className="bg-[#e0e0e0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="matts/pdp/border" />
        <CarouselLeft />
        <div className="bg-[#e0e0e0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="matts/pdp/border" />
      </div>
      <div className="absolute bottom-0 content-stretch flex flex-col items-center justify-center right-[-23.5px] top-0" data-name="matts/pdp/bottom/tech-specs/carousel/carousel-nav">
        <div className="bg-[#e0e0e0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="matts/pdp/border" />
        <CarouselLeft1 />
        <div className="bg-[#e0e0e0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="matts/pdp/border" />
      </div>
    </div>
  );
}

function Products1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="products">
      <SubHeaderHolder />
      <NewPassiveComponents />
    </div>
  );
}

function Carousel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1504px]" data-name="carousel">
      <Products1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[12px] relative shrink-0 w-[48px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 12">
        <g id="Frame 1573">
          <circle cx="6" cy="6" fill="var(--fill-0, #161616)" id="Ellipse 3" r="6" />
          <circle cx="42" cy="6" fill="var(--fill-0, #8D8D8D)" id="Ellipse 2" r="6" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="matts/pdp/below-the-fold/header">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#161616] text-[28px] tracking-[-0.3px] whitespace-nowrap">Recently Viewed</p>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="TITLE">
      <Frame6 />
      <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="matts/pdp/border" />
    </div>
  );
}

function SubHeaderHolder2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="sub-header-holder">
      <Title2 />
    </div>
  );
}

function ImgHolder2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="img-holder">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="image 80">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage80} />
      </div>
    </div>
  );
}

function Avalibility11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[136px]" data-name="Avalibility">
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[5%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
            <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#2a8442] text-[13px]">52,100 In Stock</p>
    </div>
  );
}

function ManufacturerAvailability10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="manufacturer+availability">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">onsemi</p>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="availibility-messaging">
        <Avalibility11 />
      </div>
    </div>
  );
}

function Vectors21() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8213 17.9999">
        <g id="vectors">
          <path d={svgPaths.p25b56600} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          <path d={svgPaths.p1d7c0200} fill="var(--fill-0, #D92638)" id="Vector_2" />
          <path d={svgPaths.p1e1cee80} fill="var(--fill-0, #D92638)" id="Vector_3" />
          <path d={svgPaths.pd69900} fill="var(--fill-0, #D92638)" id="Vector_4" />
          <g id="text">
            <path d={svgPaths.p928b580} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p115f6900} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.pec0f700} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextIcon19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors21 />
      </div>
    </div>
  );
}

function Vectors22() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8214 18">
        <g id="vectors">
          <path d={svgPaths.p7750080} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #198038)" />
          <path d={svgPaths.p75a17c0} fill="var(--fill-0, #198038)" id="Vector_2" />
          <path d={svgPaths.p2570a0c0} id="Vector 62" stroke="var(--stroke-0, #198038)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function TextIcon20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors22 />
      </div>
    </div>
  );
}

function DataManAvail10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="data+man+avail">
      <ManufacturerAvailability10 />
      <TextIcon19 />
      <TextIcon20 />
    </div>
  );
}

function HeaderItem10() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="header-item">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Quantity</p>
      </div>
    </div>
  );
}

function HeaderItem11() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="header-item">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Price (ex VAT)</p>
      </div>
    </div>
  );
}

function ItemQuantity15() {
  return (
    <div className="bg-[#eefef2] relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">1+</p>
      </div>
    </div>
  );
}

function ItemPrice15() {
  return (
    <div className="bg-[#eefef2] relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£7.630</p>
      </div>
    </div>
  );
}

function ItemQuantity16() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">5+</p>
      </div>
    </div>
  );
}

function ItemPrice16() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£5.940</p>
      </div>
    </div>
  );
}

function ItemQuantity17() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">10+</p>
      </div>
    </div>
  );
}

function ItemPrice17() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£5.510</p>
      </div>
    </div>
  );
}

function LabelCharacterCount5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label + Character count">
      <div className="opacity-0 shrink-0 size-[0.001px]" data-name="Spacer" />
    </div>
  );
}

function TextOverflow5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-x-auto overflow-y-clip relative z-[1]" data-name="Text overflow">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">5</p>
    </div>
  );
}

function TextInput5() {
  return (
    <div className="bg-[#f4f4f4] h-[40px] relative shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start px-[16px] py-[11px] relative size-full">
        <TextOverflow5 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1404 17.5001">
            <path d={svgPaths.p31685d70} fill="var(--fill-0, white)" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Add</p>
    </div>
  );
}

function InnerFrame22() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[16px] relative rounded-[4px] shrink-0" data-name="Inner Frame">
      <Icon12 />
      <Label20 />
    </div>
  );
}

function RowInputAdd11() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="row-input+add">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[64px] relative" data-name="Text input - Default">
        <LabelCharacterCount5 />
        <TextInput5 />
      </div>
      <div className="bg-[#0072c3] content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="notifications/toast/utilities/button-layout/button">
        <InnerFrame22 />
      </div>
    </div>
  );
}

function Min5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="min">
      <p className="relative shrink-0 text-[#525252]">{`Min: `}</p>
      <p className="relative shrink-0 text-[#161616]">5</p>
    </div>
  );
}

function Mult5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="mult">
      <p className="relative shrink-0 text-[#525252]">Mult:</p>
      <p className="relative shrink-0 text-[#161616]">5</p>
    </div>
  );
}

function MinMult5() {
  return (
    <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[16px] items-center leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="min-mult">
      <Min5 />
      <Mult5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="container">
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[160px]" data-name="img-holder">
        <ImgHolder2 />
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[26px] min-w-full not-italic relative shrink-0 text-[#0072c3] text-[20px] tracking-[-0.3px] w-[min-content]">STM32L476RGT6TR</p>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#525252] text-[13px] w-[min-content]">ARM MCU, STM32 Family STM32L4 Series Microcontrollers, ARM Cortex-M4F, 32 bit, 80 MHz, 1 MB</p>
      <DataManAvail10 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices">
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row/header+border">
            <HeaderItem10 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row/header+border">
            <HeaderItem11 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity15 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice15 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity16 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice16 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity17 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice17 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start pt-[8px] relative shrink-0 w-full" data-name="button-bar">
        <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="matts/pdp/top/purchase-box/price+quantity+add/price-for-each-supplied">
          <p className="relative shrink-0 text-[#525252]">{`Price for: `}</p>
          <p className="relative shrink-0 text-[#161616]">Each</p>
        </div>
        <RowInputAdd11 />
        <MinMult5 />
      </div>
    </div>
  );
}

function Border3() {
  return <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="border" />;
}

function ImgHolder3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="img-holder">
      <div className="aspect-[700/620] relative shrink-0 w-full" data-name="image 81">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage82} />
      </div>
    </div>
  );
}

function Avalibility12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[136px]" data-name="Avalibility">
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[5%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
            <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#2a8442] text-[13px]">151 In Stock</p>
    </div>
  );
}

function ManufacturerAvailability11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="manufacturer+availability">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">onsemi</p>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="availibility-messaging">
        <Avalibility12 />
      </div>
    </div>
  );
}

function Vectors23() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8213 17.9999">
        <g id="vectors">
          <path d={svgPaths.p25b56600} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          <path d={svgPaths.p1d7c0200} fill="var(--fill-0, #D92638)" id="Vector_2" />
          <path d={svgPaths.p1e1cee80} fill="var(--fill-0, #D92638)" id="Vector_3" />
          <path d={svgPaths.pd69900} fill="var(--fill-0, #D92638)" id="Vector_4" />
          <g id="text">
            <path d={svgPaths.p928b580} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p115f6900} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.pec0f700} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextIcon21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors23 />
      </div>
    </div>
  );
}

function Vectors24() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8214 18">
        <g id="vectors">
          <path d={svgPaths.p7750080} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #198038)" />
          <path d={svgPaths.p75a17c0} fill="var(--fill-0, #198038)" id="Vector_2" />
          <path d={svgPaths.p2570a0c0} id="Vector 62" stroke="var(--stroke-0, #198038)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function TextIcon22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors24 />
      </div>
    </div>
  );
}

function DataManAvail11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="data+man+avail">
      <ManufacturerAvailability11 />
      <TextIcon21 />
      <TextIcon22 />
    </div>
  );
}

function HeaderItem12() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="header-item">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Quantity</p>
      </div>
    </div>
  );
}

function HeaderItem13() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="header-item">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Price (ex VAT)</p>
      </div>
    </div>
  );
}

function ItemQuantity18() {
  return (
    <div className="bg-[#eefef2] relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">1+</p>
      </div>
    </div>
  );
}

function ItemPrice18() {
  return (
    <div className="bg-[#eefef2] relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£3.860</p>
      </div>
    </div>
  );
}

function ItemQuantity19() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">5+</p>
      </div>
    </div>
  );
}

function ItemPrice19() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£3.860</p>
      </div>
    </div>
  );
}

function ItemQuantity20() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">10+</p>
      </div>
    </div>
  );
}

function ItemPrice20() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£2.490</p>
      </div>
    </div>
  );
}

function LabelCharacterCount6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label + Character count">
      <div className="opacity-0 shrink-0 size-[0.001px]" data-name="Spacer" />
    </div>
  );
}

function TextOverflow6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-x-auto overflow-y-clip relative z-[1]" data-name="Text overflow">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">5</p>
    </div>
  );
}

function TextInput6() {
  return (
    <div className="bg-[#f4f4f4] h-[40px] relative shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start px-[16px] py-[11px] relative size-full">
        <TextOverflow6 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1404 17.5001">
            <path d={svgPaths.p31685d70} fill="var(--fill-0, white)" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Add</p>
    </div>
  );
}

function InnerFrame23() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[16px] relative rounded-[4px] shrink-0" data-name="Inner Frame">
      <Icon13 />
      <Label21 />
    </div>
  );
}

function RowInputAdd12() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="row-input+add">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[64px] relative" data-name="Text input - Default">
        <LabelCharacterCount6 />
        <TextInput6 />
      </div>
      <div className="bg-[#0072c3] content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="notifications/toast/utilities/button-layout/button">
        <InnerFrame23 />
      </div>
    </div>
  );
}

function Min6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="min">
      <p className="relative shrink-0 text-[#525252]">{`Min: `}</p>
      <p className="relative shrink-0 text-[#161616]">5</p>
    </div>
  );
}

function Mult6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="mult">
      <p className="relative shrink-0 text-[#525252]">Mult:</p>
      <p className="relative shrink-0 text-[#161616]">5</p>
    </div>
  );
}

function MinMult6() {
  return (
    <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[16px] items-center leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="min-mult">
      <Min6 />
      <Mult6 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="container">
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[160px]" data-name="img-holder">
        <ImgHolder3 />
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[26px] min-w-full not-italic relative shrink-0 text-[#0072c3] text-[20px] tracking-[-0.3px] w-[min-content]">STM32H523CEU6</p>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#525252] text-[13px] w-[min-content]">ARM MCU, STM32 Family STM32H5 Series STM32H523xx Group Microcontrollers, ARM Cortex-M33F, 32 bit</p>
      <DataManAvail11 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices">
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row/header+border">
            <HeaderItem12 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row/header+border">
            <HeaderItem13 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity18 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice18 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity19 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice19 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity20 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice20 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start pt-[8px] relative shrink-0 w-full" data-name="button-bar">
        <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="matts/pdp/top/purchase-box/price+quantity+add/price-for-each-supplied">
          <p className="relative shrink-0 text-[#525252]">{`Price for: `}</p>
          <p className="relative shrink-0 text-[#161616]">Each</p>
        </div>
        <RowInputAdd12 />
        <MinMult6 />
      </div>
    </div>
  );
}

function Border4() {
  return <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="border" />;
}

function ImgHolder4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="img-holder">
      <div className="aspect-[331/241] relative shrink-0 w-full" data-name="image 82">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage83} />
      </div>
    </div>
  );
}

function Avalibility13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[136px]" data-name="Avalibility">
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[5%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
            <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#2a8442] text-[13px]">151 In Stock</p>
    </div>
  );
}

function ManufacturerAvailability12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="manufacturer+availability">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">NXP</p>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="availibility-messaging">
        <Avalibility13 />
      </div>
    </div>
  );
}

function Vectors25() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8213 17.9999">
        <g id="vectors">
          <path d={svgPaths.p25b56600} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          <path d={svgPaths.p1d7c0200} fill="var(--fill-0, #D92638)" id="Vector_2" />
          <path d={svgPaths.p1e1cee80} fill="var(--fill-0, #D92638)" id="Vector_3" />
          <path d={svgPaths.pd69900} fill="var(--fill-0, #D92638)" id="Vector_4" />
          <g id="text">
            <path d={svgPaths.p928b580} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p115f6900} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.pec0f700} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextIcon23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors25 />
      </div>
    </div>
  );
}

function Vectors26() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8214 18">
        <g id="vectors">
          <path d={svgPaths.p7750080} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #198038)" />
          <path d={svgPaths.p75a17c0} fill="var(--fill-0, #198038)" id="Vector_2" />
          <path d={svgPaths.p2570a0c0} id="Vector 62" stroke="var(--stroke-0, #198038)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function TextIcon24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors26 />
      </div>
    </div>
  );
}

function DataManAvail12() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="data+man+avail">
      <ManufacturerAvailability12 />
      <TextIcon23 />
      <TextIcon24 />
    </div>
  );
}

function HeaderItem14() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="header-item">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Quantity</p>
      </div>
    </div>
  );
}

function HeaderItem15() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="header-item">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Price (ex VAT)</p>
      </div>
    </div>
  );
}

function ItemQuantity21() {
  return (
    <div className="bg-[#eefef2] relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">1+</p>
      </div>
    </div>
  );
}

function ItemPrice21() {
  return (
    <div className="bg-[#eefef2] relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£15.360</p>
      </div>
    </div>
  );
}

function ItemQuantity22() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">5+</p>
      </div>
    </div>
  );
}

function ItemPrice22() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£14.630</p>
      </div>
    </div>
  );
}

function ItemQuantity23() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">10+</p>
      </div>
    </div>
  );
}

function ItemPrice23() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£13.900</p>
      </div>
    </div>
  );
}

function LabelCharacterCount7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label + Character count">
      <div className="opacity-0 shrink-0 size-[0.001px]" data-name="Spacer" />
    </div>
  );
}

function TextOverflow7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-x-auto overflow-y-clip relative z-[1]" data-name="Text overflow">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">5</p>
    </div>
  );
}

function TextInput7() {
  return (
    <div className="bg-[#f4f4f4] h-[40px] relative shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start px-[16px] py-[11px] relative size-full">
        <TextOverflow7 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1404 17.5001">
            <path d={svgPaths.p31685d70} fill="var(--fill-0, white)" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Add</p>
    </div>
  );
}

function InnerFrame24() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[16px] relative rounded-[4px] shrink-0" data-name="Inner Frame">
      <Icon14 />
      <Label22 />
    </div>
  );
}

function RowInputAdd13() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="row-input+add">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[64px] relative" data-name="Text input - Default">
        <LabelCharacterCount7 />
        <TextInput7 />
      </div>
      <div className="bg-[#0072c3] content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="notifications/toast/utilities/button-layout/button">
        <InnerFrame24 />
      </div>
    </div>
  );
}

function Min7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="min">
      <p className="relative shrink-0 text-[#525252]">{`Min: `}</p>
      <p className="relative shrink-0 text-[#161616]">5</p>
    </div>
  );
}

function Mult7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="mult">
      <p className="relative shrink-0 text-[#525252]">Mult:</p>
      <p className="relative shrink-0 text-[#161616]">5</p>
    </div>
  );
}

function MinMult7() {
  return (
    <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[16px] items-center leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="min-mult">
      <Min7 />
      <Mult7 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="container">
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[160px]" data-name="img-holder">
        <ImgHolder4 />
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[26px] min-w-full not-italic relative shrink-0 text-[#0072c3] text-[20px] tracking-[-0.3px] w-[min-content]">S32K344EHT1VMMST</p>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#525252] text-[13px] w-[min-content]">ARM MCU, S32K3 Family S32K344 Series Microcontrollers, ARM Cortex-M7, 32 bit, 160 MHz, 4 MB</p>
      <DataManAvail12 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices">
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row/header+border">
            <HeaderItem14 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row/header+border">
            <HeaderItem15 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity21 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice21 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity22 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice22 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity23 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice23 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start pt-[8px] relative shrink-0 w-full" data-name="button-bar">
        <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="matts/pdp/top/purchase-box/price+quantity+add/price-for-each-supplied">
          <p className="relative shrink-0 text-[#525252]">{`Price for: `}</p>
          <p className="relative shrink-0 text-[#161616]">Each</p>
        </div>
        <RowInputAdd13 />
        <MinMult7 />
      </div>
    </div>
  );
}

function Border5() {
  return <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="border" />;
}

function Avalibility14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[136px]" data-name="Avalibility">
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[5%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.pf66aaf0} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.8">
            <path clipRule="evenodd" d={svgPaths.p24731600} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Bold',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#2a8442] text-[13px]">151 In Stock</p>
    </div>
  );
}

function ManufacturerAvailability13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="manufacturer+availability">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">onsemi</p>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="availibility-messaging">
        <Avalibility14 />
      </div>
    </div>
  );
}

function Vectors27() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8213 17.9999">
        <g id="vectors">
          <path d={svgPaths.p25b56600} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #D92638)" />
          <path d={svgPaths.p1d7c0200} fill="var(--fill-0, #D92638)" id="Vector_2" />
          <path d={svgPaths.p1e1cee80} fill="var(--fill-0, #D92638)" id="Vector_3" />
          <path d={svgPaths.pd69900} fill="var(--fill-0, #D92638)" id="Vector_4" />
          <g id="text">
            <path d={svgPaths.p928b580} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p115f6900} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.pec0f700} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextIcon25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors27 />
      </div>
    </div>
  );
}

function Vectors28() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.821px]" data-name="vectors">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8214 18">
        <g id="vectors">
          <path d={svgPaths.p7750080} fill="var(--fill-0, #FFF4D8)" id="Vector" stroke="var(--stroke-0, #198038)" />
          <path d={svgPaths.p75a17c0} fill="var(--fill-0, #198038)" id="Vector_2" />
          <path d={svgPaths.p2570a0c0} id="Vector 62" stroke="var(--stroke-0, #198038)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function TextIcon26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="text+icon">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="pdp/icons">
        <Vectors28 />
      </div>
    </div>
  );
}

function DataManAvail13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="data+man+avail">
      <ManufacturerAvailability13 />
      <TextIcon25 />
      <TextIcon26 />
    </div>
  );
}

function HeaderItem16() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="header-item">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Quantity</p>
      </div>
    </div>
  );
}

function HeaderItem17() {
  return (
    <div className="bg-[#f4f4f4] relative shrink-0 w-full" data-name="header-item">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Price (ex VAT)</p>
      </div>
    </div>
  );
}

function ItemQuantity24() {
  return (
    <div className="bg-[#eefef2] relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">1+</p>
      </div>
    </div>
  );
}

function ItemPrice24() {
  return (
    <div className="bg-[#eefef2] relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£18.250</p>
      </div>
    </div>
  );
}

function ItemQuantity25() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">5+</p>
      </div>
    </div>
  );
}

function ItemPrice25() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£14.780</p>
      </div>
    </div>
  );
}

function ItemQuantity26() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-quantity">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">10+</p>
      </div>
    </div>
  );
}

function ItemPrice26() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="item-price">
      <div className="content-stretch flex items-start px-[8px] py-[4px] relative w-full">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">£13.860</p>
      </div>
    </div>
  );
}

function LabelCharacterCount8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label + Character count">
      <div className="opacity-0 shrink-0 size-[0.001px]" data-name="Spacer" />
    </div>
  );
}

function TextOverflow8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-x-auto overflow-y-clip relative z-[1]" data-name="Text overflow">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">5</p>
    </div>
  );
}

function TextInput8() {
  return (
    <div className="bg-[#f4f4f4] h-[40px] relative shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start px-[16px] py-[11px] relative size-full">
        <TextOverflow8 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1404 17.5001">
            <path d={svgPaths.p31685d70} fill="var(--fill-0, white)" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Add</p>
    </div>
  );
}

function InnerFrame25() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[16px] relative rounded-[4px] shrink-0" data-name="Inner Frame">
      <Icon15 />
      <Label23 />
    </div>
  );
}

function RowInputAdd14() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="row-input+add">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[64px] relative" data-name="Text input - Default">
        <LabelCharacterCount8 />
        <TextInput8 />
      </div>
      <div className="bg-[#0072c3] content-stretch flex flex-col h-[40px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="notifications/toast/utilities/button-layout/button">
        <InnerFrame25 />
      </div>
    </div>
  );
}

function Min8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="min">
      <p className="relative shrink-0 text-[#525252]">{`Min: `}</p>
      <p className="relative shrink-0 text-[#161616]">5</p>
    </div>
  );
}

function Mult8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="mult">
      <p className="relative shrink-0 text-[#525252]">Mult:</p>
      <p className="relative shrink-0 text-[#161616]">5</p>
    </div>
  );
}

function MinMult8() {
  return (
    <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[16px] items-center leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="min-mult">
      <Min8 />
      <Mult8 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="container">
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[160px]" data-name="img-holder">
        <div className="aspect-[917/897] relative shrink-0 w-full" data-name="image 83">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage84} />
        </div>
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[26px] min-w-full not-italic relative shrink-0 text-[#0072c3] text-[20px] tracking-[-0.3px] w-[min-content]">STM32H755XIH6</p>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#525252] text-[13px] w-[min-content]">ARM MCU, STM32 Family STM32H7 Series Microcontrollers, ARM Cortex-M7F, 32 bit, 480 MHz, 1 MB</p>
      <DataManAvail13 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices">
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row/header+border">
            <HeaderItem16 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/header-row/header+border">
            <HeaderItem17 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity24 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice24 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity25 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice25 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-quantity">
            <ItemQuantity26 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/pdp/top/purchase-box/table-quantity+prices/item-row/item+border-price">
            <ItemPrice26 />
            <div className="bg-[#e0e0e0] h-px shrink-0 w-full" data-name="pdp/border" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start pt-[8px] relative shrink-0 w-full" data-name="button-bar">
        <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start leading-[16px] not-italic relative shrink-0 text-[13px] w-full whitespace-nowrap" data-name="matts/pdp/top/purchase-box/price+quantity+add/price-for-each-supplied">
          <p className="relative shrink-0 text-[#525252]">{`Price for: `}</p>
          <p className="relative shrink-0 text-[#161616]">Each</p>
        </div>
        <RowInputAdd14 />
        <MinMult8 />
      </div>
    </div>
  );
}

function Products4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="products">
      <div className="content-stretch flex gap-[24px] items-start px-[39.5px] relative w-full">
        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="content-product">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="product">
            <Container10 />
          </div>
        </div>
        <Border3 />
        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="content-product">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="product">
            <Container11 />
          </div>
        </div>
        <Border4 />
        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="content-product">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="product">
            <Container12 />
          </div>
        </div>
        <Border5 />
        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="content-product">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="product">
            <Container13 />
          </div>
        </div>
      </div>
    </div>
  );
}

function CarouselLeft2() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex flex-col items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="carousel-left">
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[18.75%_33.13%_18.75%_31.25%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.125 12.5">
            <path clipRule="evenodd" d={svgPaths.paa0c900} fill="var(--fill-0, #C6C6C6)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CarouselLeft3() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex flex-col items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="carousel-left">
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[18.75%_31.25%_18.75%_33.13%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.125 12.5">
            <path clipRule="evenodd" d={svgPaths.p75c6800} fill="var(--fill-0, #C6C6C6)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NewPassiveComponents1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="new-passive-components">
      <Products4 />
      <div className="absolute bottom-0 content-stretch flex flex-col items-center justify-center left-[-23.5px] top-0" data-name="matts/pdp/bottom/tech-specs/carousel/carousel-nav">
        <div className="bg-[#e0e0e0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="matts/pdp/border" />
        <CarouselLeft2 />
        <div className="bg-[#e0e0e0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="matts/pdp/border" />
      </div>
      <div className="absolute bottom-0 content-stretch flex flex-col items-center justify-center right-[-23.5px] top-0" data-name="matts/pdp/bottom/tech-specs/carousel/carousel-nav">
        <div className="bg-[#e0e0e0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="matts/pdp/border" />
        <CarouselLeft3 />
        <div className="bg-[#e0e0e0] flex-[1_0_0] min-h-px min-w-px w-px" data-name="matts/pdp/border" />
      </div>
    </div>
  );
}

function Products3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1504px]" data-name="products">
      <SubHeaderHolder2 />
      <NewPassiveComponents1 />
    </div>
  );
}

function Carousel1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="carousel">
      <Products3 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame 1573">
          <circle cx="6" cy="6" fill="var(--fill-0, #161616)" id="Ellipse 3" r="6" />
        </g>
      </svg>
    </div>
  );
}

function FullWidthSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="full width section">
      <AssociatedProducts />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Simliar Products">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Alternatives-Content">
          <div className="bg-white content-stretch flex flex-col gap-[12px] items-end relative shrink-0 w-[1522px]" data-name="Alternatives">
            <Title1 />
            <FirstRow />
            <AttributeCompare />
            <BuyBoxes />
            <ContainerBtn />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="also-bought-populated">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0" data-name="Also bought">
          <Carousel />
          <Frame18 />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Recently viewed">
        <Carousel1 />
        <Frame21 />
      </div>
    </div>
  );
}

export default function Frame22({ quantity = 5, onQuantityChange }: Frame22Props = {}) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full">
      <PageTopV quantity={quantity} onQuantityChange={onQuantityChange} />
      <FullWidthSection />
    </div>
  );
}