import svgPaths from "../svg-wt8pemywxi";
import { usePdpContext } from '../PdpContext';
import imgMultiviewDocumentatio from "figma:asset/b21bea3608eabac95a6efe8167f6f60cf6de7090.png";

function Info() {
  const ctx = usePdpContext();
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
  const ctx = usePdpContext();
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

function Info2() {
  const ctx = usePdpContext();
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="info">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[128px]" data-name="title-text+tooltip">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Order Code</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[356px]" data-name="label-text+tooltip">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">{ctx?.orderCode ?? '2464092'}</p>
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

export default function ProductInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative self-stretch" data-name="main-info">
      <InfoLinks />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/pdp/top/product-info/main-info/share-compare-favourite">
        <ButtonRow />
      </div>
    </div>
  );
}
