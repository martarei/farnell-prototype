import svgPaths from "./svg-hq71u938rp";
import imgScreenshot20260323At1554361 from "figma:asset/62711cf7cb1ba186cd09973c294c05ddda0330d9.png";
import { Link } from "react-router";
import { createContext, useContext } from 'react';

export interface PlpRowData {
  partNo: string;
  productId: string; // URL id for /product/:id
  orderCode: string;
  description: string[];
  manufacturer: string;
  stock: string;
  delivery: string;
  packaging: string;
  priceBreaks: Array<{ qty: string; price: string }>;
  minQty: string;
  multiple: string;
  attrs: string[]; // exactly 4 items
  image?: string;
}

export interface PlpPageConfig {
  breadcrumbs: string[]; // 4 items replacing BreadcrumbBase1-4
  searchTerm: string;
  attrHeaders: string[]; // 4 items for cols 09-12
  rows: PlpRowData[];
  filters?: string[];
}

export const ProductListContext = createContext<PlpPageConfig | null>(null);

function getPartNoColWidth(ctx: PlpPageConfig | null): number {
  if (!ctx) return 160;
  const maxLen = Math.max(...ctx.rows.map(r => r.partNo.length));
  return Math.max(160, maxLen * 7 + 16);
}

function Group10() {
  return (
    <div className="absolute bottom-[41.91%] contents right-[108px] top-[30.88%]">
      <div className="absolute bottom-[45.59%] right-[205px] top-[35.29%] w-[26px]" data-name="icons">
        <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5825 22.7502">
            <path clipRule="evenodd" d={svgPaths.p26f15c80} fill="var(--fill-0, #1E853B)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[55.88%] flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic right-[198px] text-[#525252] text-[13px] top-[30.88%] translate-x-full whitespace-nowrap">
        <p className="leading-[18px]">5 Items</p>
      </div>
      <div className="absolute bottom-[41.91%] font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic right-[198px] text-[#161616] text-[13px] top-[41.91%] translate-x-full w-[90px] whitespace-pre-wrap">
        <p className="mb-0">{`£8,888,888.98 `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[76.47%_0_0_0]">
      <div className="absolute bg-[#262626] inset-[76.47%_0_0_0]" />
    </div>
  );
}

function SearchMedium() {
  return (
    <div className="absolute bg-white border border-[#8d8d8d] border-solid inset-[0_40px_0_81px]" data-name="search medium">
      <p className="absolute font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] left-[13px] not-italic right-[34px] text-[#a8a8a8] text-[13px] top-[calc(50%-10px)]">Keyword / Part #</p>
    </div>
  );
}

function DropdownNoLabel() {
  return (
    <div className="absolute bg-[#e0e0e0] border border-[#8d8d8d] border-solid h-[40px] left-0 top-0 w-[82px]" data-name="dropdown-no-label">
      <p className="absolute font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] left-[15px] not-italic right-[47px] text-[#161616] text-[13px] top-[calc(50%-9px)]">All</p>
      <div className="-translate-y-1/2 absolute right-[15px] size-[16px] top-1/2" data-name="icons">
        <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
            <path clipRule="evenodd" d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute bottom-0 contents right-0">
      <div className="absolute bg-[#0072c3] bottom-0 right-0 size-[40px]" data-name="button/01 primary/field/03 icon/01 enabled">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Icon" />
      </div>
      <div className="absolute bottom-[10px] right-[10px] size-[20px]" data-name="icons">
        <div className="absolute inset-[9.31%_6.25%_6.25%_9.31%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8871 16.8871">
            <path clipRule="evenodd" d={svgPaths.p34660300} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Select() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[11px] relative shrink-0" data-name="Select">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">My Account</p>
      <div className="relative shrink-0 size-[16px]" data-name="Carbon Icons">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Carbon Icons">
            <path clipRule="evenodd" d={svgPaths.p2fb7a700} fill="var(--fill-0, #161616)" fillRule="evenodd" id="Fill" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SelectInline01Enabled() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex items-center left-[calc(50%+15px)] top-[47.06%]" data-name="select / inline / 01 enabled">
      <Select />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[5.88%_-0.73%_0_21.17%]">
      <div className="absolute bottom-1/2 flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] left-[27.74%] not-italic right-[21.9%] text-[#525252] text-[12px] top-[5.88%] whitespace-nowrap">
        <p className="leading-[15px]">Hi Firstname</p>
      </div>
      <SelectInline01Enabled />
    </div>
  );
}

function UserIconHolder() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-start left-[calc(50%-54.5px)] top-[calc(50%+1px)]" data-name="user-icon-holder">
      <div className="relative shrink-0 size-[28px]" data-name="Carbon Icons">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="Carbon Icons">
            <path clipRule="evenodd" d={svgPaths.p3a65df80} fill="var(--fill-0, #2A8442)" fillRule="evenodd" id="Fill" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function FarnellLogo() {
  return (
    <div className="absolute h-[51px] left-[40px] top-[30px] w-[159px]" data-name="farnell logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159.001 51.0008">
        <g id="farnell logo">
          <path d={svgPaths.pb0b5a00} fill="var(--fill-0, black)" id="Fill 1" />
          <path d={svgPaths.p24d439c0} fill="var(--fill-0, black)" id="Fill 2" />
          <path d={svgPaths.p13460000} fill="var(--fill-0, black)" id="Fill 3" />
          <path d={svgPaths.pe5f5500} fill="var(--fill-0, black)" id="Fill 4" />
          <path d={svgPaths.p1bf5c7f0} fill="var(--fill-0, black)" id="Fill 5" />
          <path d={svgPaths.p27ea5d00} fill="var(--fill-0, black)" id="Fill 6" />
          <path d={svgPaths.p18f11f00} fill="var(--fill-0, black)" id="Fill 7" />
          <path d={svgPaths.p6029900} fill="var(--fill-0, black)" id="Fill 9" />
          <path d={svgPaths.p13d9fc0} fill="var(--fill-0, #4BB061)" id="Fill 10" />
          <path d={svgPaths.pda52800} fill="var(--fill-0, black)" id="Fill 12" />
          <path d={svgPaths.p37ebc800} fill="var(--fill-0, #4BB061)" id="Fill 13" />
          <g id="Group 517">
            <path d={svgPaths.p1c2c440} fill="var(--fill-0, #1E853B)" id="Fill 15" />
            <path d={svgPaths.p282f9ff0} fill="var(--fill-0, #1E853B)" id="Fill 16" />
            <path d={svgPaths.p2bb71500} fill="var(--fill-0, #1E853B)" id="Fill 17" />
            <path d={svgPaths.p2e697f80} fill="var(--fill-0, #1E853B)" id="Fill 18" />
            <path d={svgPaths.p2c449e40} fill="var(--fill-0, #1E853B)" id="Fill 19" />
            <path d={svgPaths.p14adec00} fill="var(--fill-0, #1E853B)" id="Fill 20" />
            <path d={svgPaths.p33278a00} fill="var(--fill-0, #1E853B)" id="Fill 21" />
            <path d={svgPaths.p3e2c3580} fill="var(--fill-0, #1E853B)" id="Fill 22" />
            <path d={svgPaths.p2a78a000} fill="var(--fill-0, #1E853B)" id="Fill 23" />
            <path d={svgPaths.p169d7080} fill="var(--fill-0, #1E853B)" id="Fill 24" />
            <path d={svgPaths.p2ccae80} fill="var(--fill-0, #1E853B)" id="Fill 25" />
            <path d={svgPaths.p3d215580} fill="var(--fill-0, #1E853B)" id="Fill 26" />
            <path d={svgPaths.p139a7600} fill="var(--fill-0, #1E853B)" id="Fill 27" />
            <path d={svgPaths.p3146200} fill="var(--fill-0, #1E853B)" id="Fill 28" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Select1() {
  return (
    <div className="bg-[#262626] h-full relative shrink-0" data-name="Select">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center pl-[16px] pr-[10px] py-[11px] relative">
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">All Products</p>
          <div className="relative shrink-0 size-[16px]" data-name="icons">
            <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Fill">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
                <path clipRule="evenodd" d={svgPaths.p32d32200} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Select2() {
  return (
    <div className="bg-[#262626] h-full relative shrink-0" data-name="Select">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center pl-[16px] pr-[10px] py-[11px] relative">
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Manufacturers</p>
          <div className="relative shrink-0 size-[16px]" data-name="icons">
            <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Fill">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
                <path clipRule="evenodd" d={svgPaths.p32d32200} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Select3() {
  return (
    <div className="bg-[#262626] h-full relative shrink-0" data-name="Select">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center pl-[16px] pr-[10px] py-[11px] relative">
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Resources</p>
          <div className="relative shrink-0 size-[16px]" data-name="icons">
            <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Fill">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
                <path clipRule="evenodd" d={svgPaths.p32d32200} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Select4() {
  return (
    <div className="bg-[#262626] h-full relative shrink-0" data-name="Select">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center pl-[16px] pr-[10px] py-[11px] relative">
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Communities</p>
          <div className="relative shrink-0 size-[16px]" data-name="icons">
            <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Fill">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
                <path clipRule="evenodd" d={svgPaths.p32d32200} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Select5() {
  return (
    <div className="bg-[#262626] h-full relative shrink-0" data-name="Select">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[16px] py-[11px] relative">
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Favourites</p>
        </div>
      </div>
    </div>
  );
}

function Select6() {
  return (
    <div className="bg-[#262626] h-full relative shrink-0" data-name="Select">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center pl-[16px] pr-[10px] py-[11px] relative">
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Buying Tools</p>
          <div className="relative shrink-0 size-[16px]" data-name="icons">
            <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Fill">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
                <path clipRule="evenodd" d={svgPaths.p32d32200} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle() {
  return (
    <div className="absolute content-stretch flex inset-[0_33.33%_52.94%_0] items-center" data-name="toggle">
      <div className="h-[16px] relative shrink-0 w-[32px]" data-name="toggle / small / off">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#8d8d8d] h-[16px] left-1/2 rounded-[100px] top-1/2 w-[32px]" data-name="pill" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-8px)] size-[10px] top-1/2" data-name="handle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path clipRule="evenodd" d={svgPaths.p46c6500} fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="handle" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BreadcrumbBase() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="_Breadcrumb base">
      <div className="content-start flex flex-wrap items-start relative shrink-0" data-name="Link">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">Home</p>
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">/</p>
    </div>
  );
}

function BreadcrumbBase1() {
  const ctx = useContext(ProductListContext);
  const text = ctx?.breadcrumbs[0] ?? 'Semiconductors - Discretes';
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="_Breadcrumb base">
      <div className="content-start flex flex-wrap items-start relative shrink-0" data-name="Link">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">{text}</p>
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">/</p>
    </div>
  );
}

function BreadcrumbBase2() {
  const ctx = useContext(ProductListContext);
  const text = ctx?.breadcrumbs[1] ?? 'Transistors';
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="_Breadcrumb base">
      <div className="content-start flex flex-wrap items-start relative shrink-0" data-name="Link">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">{text}</p>
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">/</p>
    </div>
  );
}

function BreadcrumbBase3() {
  const ctx = useContext(ProductListContext);
  const text = ctx?.breadcrumbs[2] ?? 'Bipolar Transistors';
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="_Breadcrumb base">
      <div className="content-start flex flex-wrap items-start relative shrink-0" data-name="Link">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">{text}</p>
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">/</p>
    </div>
  );
}

function BreadcrumbBase4() {
  const ctx = useContext(ProductListContext);
  const text = ctx?.breadcrumbs[3] ?? 'Single Bipolar Junction Transistors - BJT';
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="_Breadcrumb base">
      <div className="content-start flex flex-wrap items-start relative shrink-0" data-name="Link">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0072c3] text-[13px] whitespace-nowrap">{text}</p>
      </div>
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">/</p>
    </div>
  );
}

function BreadcrumbBase5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="_Breadcrumb base">
      <div className="content-start flex flex-wrap items-start relative shrink-0" data-name="Link">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">Results</p>
      </div>
    </div>
  );
}

function Breadcrumb1() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0" data-name="Breadcrumb">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="_Breadcrumb item lg xlg max">
        <BreadcrumbBase />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="_Breadcrumb item lg xlg max">
        <BreadcrumbBase1 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="_Breadcrumb item lg xlg max">
        <BreadcrumbBase2 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="_Breadcrumb item lg xlg max">
        <BreadcrumbBase3 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="_Breadcrumb item lg xlg max">
        <BreadcrumbBase4 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="_Breadcrumb item lg xlg max">
        <BreadcrumbBase5 />
      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="content-stretch flex h-[18px] items-center relative shrink-0 w-[1506px]" data-name="Breadcrumb">
      <Breadcrumb1 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0">
      <Breadcrumb />
    </div>
  );
}

function ToggleMargin() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Toggle margin">
      <div className="bg-[#8d8d8d] content-stretch flex items-start overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[32px]" data-name="_Toggle item">
        <div className="bg-white rounded-[20px] shrink-0 size-[10px]" data-name="_Toggle switch - Small" />
      </div>
    </div>
  );
}

function ToggleValue() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Toggle + Value">
      <ToggleMargin />
      <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[13px] text-left whitespace-nowrap">
        <p className="leading-[18px]">Expand Filters</p>
      </div>
    </div>
  );
}

function ValueMargin() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Value margin">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[13px] text-left whitespace-nowrap">
        <span className="leading-[18px]">{`In Stock `}</span>
        <span className="leading-[18px]">(834111)</span>
      </p>
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

function ValueMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Value margin">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[13px] text-left whitespace-nowrap">
        <span className="leading-[18px]">No Delivery Surchargers</span>
        <span className="leading-[18px]">{` (233769)`}</span>
      </p>
    </div>
  );
}

function IconValue1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[20px]" data-name="Checkbox">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p9ba3680} fill="var(--fill-0, #161616)" id="Vector" />
          </svg>
        </div>
      </div>
      <ValueMargin1 />
    </div>
  );
}

function ValueMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Value margin">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[13px] text-left whitespace-nowrap">
        <span className="leading-[18px]">Suitable For New Design</span>
        <span className="leading-[18px]">{` (242891)`}</span>
      </p>
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
      <ValueMargin2 />
    </div>
  );
}

function ValueMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Value margin">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[13px] text-left whitespace-nowrap">
        <span className="leading-[18px]">Date/Lot Code</span>
        <span className="leading-[18px] text-[#525252]">{` (458)`}</span>
      </p>
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
      <ValueMargin3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-start cursor-pointer flex flex-wrap gap-[8px_24px] items-start relative shrink-0 w-full">
      <button className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="expand filter toggle">
        <ToggleValue />
      </button>
      <button className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="In stock checkbox">
        <IconValue />
      </button>
      <button className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[223px]" data-name="No Delivery Surcharges checkbox">
        <IconValue1 />
      </button>
      <button className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[223px]" data-name="Suitable for new design checkbox">
        <IconValue2 />
      </button>
      <button className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[223px]" data-name="date and lot">
        <IconValue3 />
      </button>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="container">
      <Frame3 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[13px] text-ellipsis whitespace-nowrap">Manufacturer</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[2]">
      <Label />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0 z-[1]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] h-[40px] isolate items-center px-[16px] py-[11px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <Frame2 />
      <Icon />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[13px] text-ellipsis whitespace-nowrap">Channel Type</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[2]">
      <Label1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0 z-[1]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] h-[40px] isolate items-center px-[16px] py-[11px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <Frame4 />
      <Icon1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[13px] text-ellipsis whitespace-nowrap">MOSFET Module Configuration</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[2]">
      <Label2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0 z-[1]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] h-[40px] isolate items-center px-[16px] py-[11px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <Frame5 />
      <Icon2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[13px] text-ellipsis whitespace-nowrap">Transistor Polarity</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[2]">
      <Label3 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0 z-[1]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] h-[40px] isolate items-center px-[16px] py-[11px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <Frame6 />
      <Icon3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[13px] text-ellipsis whitespace-nowrap">Drain Source Voltage Vds</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[2]">
      <Label4 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0 z-[1]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] h-[40px] isolate items-center px-[16px] py-[11px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <Frame7 />
      <Icon4 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[13px] text-ellipsis whitespace-nowrap">Continuous Drain Current Id</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[2]">
      <Label5 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0 z-[1]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] h-[40px] isolate items-center px-[16px] py-[11px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <Frame8 />
      <Icon5 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[13px] text-ellipsis whitespace-nowrap">Drain Source On State Resistance</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[2]">
      <Label6 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0 z-[1]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] h-[40px] isolate items-center px-[16px] py-[11px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <Frame9 />
      <Icon6 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[13px] text-ellipsis whitespace-nowrap">On Resistance Rds (on)</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[2]">
      <Label7 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0 z-[1]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] h-[40px] isolate items-center px-[16px] py-[11px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <Frame10 />
      <Icon7 />
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[13px] text-ellipsis whitespace-nowrap">Transistor Case Style</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[2]">
      <Label8 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0 z-[1]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] h-[40px] isolate items-center px-[16px] py-[11px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <Frame11 />
      <Icon8 />
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[13px] text-ellipsis whitespace-nowrap">Transistor Mounting</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[2]">
      <Label9 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0 z-[1]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] h-[40px] isolate items-center px-[16px] py-[11px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <Frame12 />
      <Icon9 />
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[13px] text-ellipsis whitespace-nowrap">Rds(on) Test Voltage</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[2]">
      <Label10 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0 z-[1]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] h-[40px] isolate items-center px-[16px] py-[11px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <Frame13 />
      <Icon10 />
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[13px] text-ellipsis whitespace-nowrap">Gate Source Threshold Voltage Max</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[2]">
      <Label11 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0 z-[1]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] h-[40px] isolate items-center px-[16px] py-[11px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <Frame14 />
      <Icon11 />
    </div>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[13px] text-ellipsis whitespace-nowrap">Power Dissipation</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[2]">
      <Label12 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0 z-[1]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] h-[40px] isolate items-center px-[16px] py-[11px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <Frame15 />
      <Icon12 />
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[13px] text-ellipsis whitespace-nowrap">No. of Pins</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[2]">
      <Label13 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0 z-[1]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] h-[40px] isolate items-center px-[16px] py-[11px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <Frame16 />
      <Icon13 />
    </div>
  );
}

function Label14() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[13px] text-ellipsis whitespace-nowrap">Operating Temperature Max</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[2]">
      <Label14 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0 z-[1]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] h-[40px] isolate items-center px-[16px] py-[11px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <Frame17 />
      <Icon14 />
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[13px] text-ellipsis whitespace-nowrap">Product Range</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[2]">
      <Label15 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0 z-[1]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] h-[40px] isolate items-center px-[16px] py-[11px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <Frame18 />
      <Icon15 />
    </div>
  );
}

function Label16() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[13px] text-ellipsis whitespace-nowrap">Packaging</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[2]">
      <Label16 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="content-stretch flex items-center pl-[8px] relative shrink-0 z-[1]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] h-[40px] isolate items-center px-[16px] py-[11px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <Frame19 />
      <Icon16 />
    </div>
  );
}

function ButtonLabel() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0" data-name="Button Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#0072c3] text-[14px] whitespace-nowrap">Add more</p>
    </div>
  );
}

function InnerFrame() {
  return (
    <div className="bg-white h-full relative rounded-[4px] shrink-0" data-name="Inner Frame">
      <div className="content-stretch flex gap-[6px] h-full items-center overflow-clip px-[16px] relative rounded-[inherit]">
        <ButtonLabel />
      </div>
      <div aria-hidden="true" className="absolute border border-[#0072c3] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

const DEFAULT_FILTERS = [
  'Manufacturer', 'Channel Type', 'MOSFET Module Configuration', 'Transistor Polarity',
  'Drain Source Voltage Vds', 'Continuous Drain Current Id', 'Drain Source On State Resistance',
  'On Resistance Rds (on)', 'Transistor Case Style', 'Transistor Mounting', 'Rds(on) Test Voltage',
  'Gate Source Threshold Voltage Max', 'Power Dissipation', 'No. of Pins',
  'Operating Temperature Max', 'Product Range', 'Packaging',
];

function FilterPill({ label }: { label: string }) {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[8px] h-[40px] isolate items-center px-[16px] py-[11px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-center relative shrink-0 z-[2]">
        <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Label">
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[13px] text-ellipsis whitespace-nowrap">{label}</p>
        </div>
      </div>
      <div className="content-stretch flex items-center pl-[8px] relative shrink-0 z-[1]" data-name="Icon">
        <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
          <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
            <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
                <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Filters() {
  const ctx = useContext(ProductListContext);
  const filters = (ctx && ctx.filters && ctx.filters.length > 0) ? ctx.filters : DEFAULT_FILTERS;
  return (
    <div className="content-center flex flex-wrap gap-[8px] isolate items-center relative shrink-0 w-full" data-name="filters">
      {filters.map((name, i) => (
        <div key={'f' + i} className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" style={{ zIndex: filters.length + 1 - i }} data-name="Collapsed Filter">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Dropdown-Filter">
            <FilterPill label={name} />
          </div>
        </div>
      ))}
      <div className="content-stretch flex h-[40px] items-start relative shrink-0 z-[1]" data-name="Button">
        <InnerFrame />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-[1]" data-name="container">
      <div className="content-stretch flex gap-[3px] items-end justify-center relative shrink-0" data-name="Label+NoFilters+clear">
        <div className="flex flex-col font-['Apercu_Avnet:Bold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#525252] text-[18px] tracking-[-0.2px] whitespace-nowrap">
          <p className="leading-[18px]">All Filters</p>
        </div>
      </div>
      <div className="content-start flex flex-wrap gap-y-[8px] items-start relative shrink-0 w-full" data-name="expand + static filters">
        <Container2 />
      </div>
      <Filters />
    </div>
  );
}

function Container() {
  const ctx = useContext(ProductListContext);
  const count = ctx ? ctx.rows.length : 3;
  const searchTerm = ctx?.searchTerm ?? 'MPS751RLRAG.';
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="container">
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="N0. of results">
        <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#161616] text-[20px] tracking-[-0.3px]">
          <span className="leading-[26px] text-[#2a8442]">{count}{' '}</span>
          <span className="leading-[26px]">Products Found for &quot;{searchTerm}&quot;</span>
        </p>
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none w-full">
          
        </div>
      </div>
      <div className="content-stretch flex flex-col isolate items-end justify-center relative shrink-0 w-full" data-name="filter-panel">
        <Container1 />
      </div>
      <div className="flex h-px items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none w-full">
          
        </div>
      </div>
    </div>
  );
}

function SearchMedium1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="search medium">
      <div aria-hidden="true" className="absolute border border-[#8d8d8d] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] left-[14px] not-italic right-[35px] text-[#a8a8a8] text-[13px] top-[calc(50%-10px)]">Search Within...</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#0072c3] col-1 ml-0 mt-0 relative row-1 size-[32px]" data-name="button/01 primary/field/03 icon/01 enabled">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Icon" />
      </div>
      <div className="col-1 ml-[8px] mt-[8px] relative row-1 size-[16px]" data-name="Component 1">
        <div className="absolute inset-[6.58%_6.25%_6.25%_6.58%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9473 13.9473">
            <path clipRule="evenodd" d={svgPaths.p3f16a480} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SiteSearch() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[224px]" data-name="site-search">
      <SearchMedium1 />
      <Group9 />
    </div>
  );
}

function MattsPlpRowColumnCellManufacturerPartNo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/manufacturer-part-no">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#0072c3] text-[12px] whitespace-nowrap">MPS751RLRAG.</p>
      <div className="aspect-[326/222] relative shrink-0 w-full" data-name="Screenshot 2026-03-23 at 15.54.36 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute inset-0 w-full h-full object-contain" src="/images/to92-transistor.jpeg" />
        </div>
      </div>
    </div>
  );
}

function MattsPlpRowColumn2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[160px]" data-name="matts/plp/row/column-02">
      <MattsPlpRowColumnCellManufacturerPartNo />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[4.318px] left-[3.96px] top-[18.4px] w-[10.781px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7811 4.31829">
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
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Data Sheet">
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
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#0072c3] text-[12px]">Data Sheet</p>
    </div>
  );
}

function G() {
  return (
    <div className="absolute left-0 size-[18.43px] top-0" data-name="g2387">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.43 18.43">
        <g id="g2387">
          <path d={svgPaths.p25090880} fill="var(--fill-0, #00AA00)" id="path2756" />
          <path d={svgPaths.p13d1c200} fill="var(--fill-0, #00AA00)" id="path2762" />
          <g id="g2768">
            <path d={svgPaths.p4bf8b80} fill="var(--fill-0, #00AA00)" id="path2758" />
            <path d={svgPaths.p1dbb9a80} fill="var(--fill-0, #00AA00)" id="path2760" />
            <path d={svgPaths.p1bfb1800} fill="var(--fill-0, #00AA00)" id="path2764" />
            <path d={svgPaths.p237b4580} fill="var(--fill-0, #00AA00)" id="path2766" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents left-0 top-0" data-name="layer1">
      <G />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <Layer />
    </div>
  );
}

function RoHs() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="RoHS">
      <div className="relative shrink-0 size-[18px]" data-name="icon / RoHS certificate">
        <Group3 />
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#0072c3] text-[12px]">RoHS</p>
    </div>
  );
}

function DateLotCode() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Date/Lot Code">
      <div className="h-[16.5px] relative shrink-0 w-[18px]" data-name="icon / date & lot">
        <div className="absolute inset-[22.73%_87.5%_4.55%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 12">
            <path d="M1.5 0H0V12H1.5V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-[18.18%] left-[70.83%] right-1/4 top-[22.73%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.75 9.75">
            <path d="M0.75 0H0V9.75H0.75V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-[18.18%] left-[16.67%] right-3/4 top-[22.73%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 9.75">
            <path d="M1.5 0H0V9.75H1.5V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-[18.18%] left-1/2 right-[41.67%] top-[22.73%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 9.75">
            <path d="M1.5 0H0V9.75H1.5V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.73%_33.33%_18.18%_62.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.75 9.75">
            <path d="M0.75 0H0V9.75H0.75V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.73%_12.5%_4.55%_79.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 12">
            <path d="M1.5 0H0V12H1.5V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.73%_66.67%_18.18%_29.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.75 9.75">
            <path d="M0.75 0H0V9.75H0.75V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.73%_54.17%_18.18%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.75 9.75">
            <path d="M0.75 0H0V9.75H0.75V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bg-[#4d5358] bottom-[4.55%] left-[16.67%] right-3/4 rounded-[6px] top-[86.36%]" />
        <div className="absolute bg-[#4d5358] inset-[86.36%_62.5%_4.55%_29.17%] rounded-[6px]" />
        <div className="absolute bg-[#4d5358] bottom-[4.55%] left-[41.67%] right-1/2 rounded-[6px] top-[86.36%]" />
        <div className="absolute bg-[#4d5358] inset-[86.36%_37.5%_4.55%_54.17%] rounded-[6px]" />
        <div className="absolute bg-[#4d5358] bottom-[4.55%] left-[66.67%] right-1/4 rounded-[6px] top-[86.36%]" />
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#0072c3] text-[12px]">Date/Lot Code</p>
    </div>
  );
}

function CutTape() {
  return (
    <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="Cut Tape">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 20.0004">
        <g id="Cut Tape">
          <path clipRule="evenodd" d={svgPaths.p284bb980} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Shape" />
          <path clipRule="evenodd" d={svgPaths.p3cd15600} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Shape_2" />
          <path d={svgPaths.p1de11900} fill="var(--fill-0, #525252)" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function Packaging() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="packaging">
      <div className="relative shrink-0 size-[24px]" data-name="icon / cut tape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="path" />
        </svg>
        <CutTape />
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Cut Tape</p>
    </div>
  );
}

function TextCombined() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="text-combined">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#6f6f6f] text-[12px] w-full">A £3.50 re-reeling charge will be added for this product</p>
    </div>
  );
}

function Avalibility() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Avalibility">
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#0072c3] text-[12px]">Packaging Options</p>
    </div>
  );
}

function TextGroupVertical() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="text-group-vertical">
      <div className="flex-[1_0_0] min-h-px min-w-px relative text-[#525252] text-right">
        <p className="mb-0">10+</p>
        <p className="mb-0">100+</p>
        <p className="mb-0">500+</p>
        <p className="mb-0">1000+</p>
        <p>2500+</p>
      </div>
      <div className="relative shrink-0 text-[#161616] whitespace-nowrap">
        <p className="mb-0">£0.156</p>
        <p className="mb-0">£0.104</p>
        <p className="mb-0">£0.0794</p>
        <p className="mb-0">£0.0655</p>
        <p>£0.0574</p>
      </div>
    </div>
  );
}

function Input() {
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

function InputButtons() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="input+buttons">
      <Input />
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

function InputButtonsBorder() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="input+buttons+border">
      <InputButtons />
      <BottomBorder />
    </div>
  );
}

function Icon17() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1404 17.5001">
            <path clipRule="evenodd" d={svgPaths.p835dc00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
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

function InnerFrame1() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
          <Icon17 />
          <Label17 />
        </div>
      </div>
    </div>
  );
}

function MattsPlpRow() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="matts/plp/row">
      <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0 w-[71px]" data-name="matts/plp/row/column-01">
        <div className="relative shrink-0 size-[20px]" data-name="matts/plp/row/header-item/checkbox">
          <div className="absolute inset-[12.5%]" data-name="Fill">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path clipRule="evenodd" d={svgPaths.p181d3b80} fill="var(--fill-0, #161616)" fillRule="evenodd" id="Fill" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <MattsPlpRowColumn2 />
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[92px]" data-name="matts/plp/row/column-03">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/order-code">
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] w-full">2464092</p>
          <DataSheet />
          <RoHs />
          <DateLotCode />
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[224px]" data-name="matts/plp/row/column-04">
        <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="matts/plp/row/column-cell/desc-man">
          <ul className="block leading-[0] list-disc relative shrink-0 text-[#0072c3] text-[0px] w-full">
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <Link className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" to="/product/mps751rlrag">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]">
                  Bipolar (BJT) Single Transistor
                </span>
              </Link>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <Link className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" to="/product/mps751rlrag">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]">
                  PNP
                </span>
              </Link>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <Link className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" to="/product/mps751rlrag">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]">
                  60 V
                </span>
              </Link>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <Link className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" to="/product/mps751rlrag">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]">
                  2 A
                </span>
              </Link>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <Link className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" to="/product/mps751rlrag">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]">
                  625 mW
                </span>
              </Link>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <Link className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" to="/product/mps751rlrag">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]">
                  TO-92
                </span>
              </Link>
            </li>
            <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <Link className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" to="/product/mps751rlrag">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]">
                  Through Hole
                </span>
              </Link>
            </li>
          </ul>
          <Link to="/product/mps751rlrag" className="leading-[15px] relative shrink-0 text-[#161616] text-[12px] w-full cursor-pointer hover:underline">ONSEMI</Link>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[125px]" data-name="matts/plp/row/column-05">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availibility-messaging">
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
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[169px]" data-name="matts/plp/row/column-06">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availability-plus">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availability-plus/supplied-on">
            <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] w-full">Each (Supplied on Cut Tape)</p>
            <Packaging />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availability-plus/price-for-availability">
            <TextCombined />
          </div>
          <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availability-plus/price-for-availability">
            <Avalibility />
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[118px]" data-name="matts/plp/row/column-07">
        <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start leading-[15px] not-italic relative shrink-0 text-[12px] w-full" data-name="matts/plp/row/column-cell/price+multiples">
          <TextGroupVertical />
          <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0 text-[#6f6f6f] text-right tracking-[-0.2px] underline w-full">More Pricing...</p>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[140px]" data-name="matts/plp/row/column-08">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/quantity-add">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/number-input+label">
            <InputButtonsBorder />
          </div>
          <div className="bg-[#0072c3] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="matts/button">
            <InnerFrame1 />
          </div>
          <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[3px] items-start justify-center leading-[15px] not-italic relative shrink-0 text-[#525252] text-[12px] w-full" data-name="matts/plp/row/column-cell/quantity-add/min+mult">
            <p className="relative shrink-0 whitespace-nowrap">Min: 10</p>
            <p className="relative shrink-0 whitespace-nowrap">/</p>
            <p className="flex-[1_0_0] min-h-px min-w-px relative">Mult: 10</p>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="matts/plp/row/column-09">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/extended-attributes">
              <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">0.005ohm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="matts/plp/row/column-10">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/extended-attributes">
              <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">0603 [1608 Metric]</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="matts/plp/row/column-11">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/extended-attributes">
              <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">250mW</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="matts/plp/row/column-12">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/extended-attributes">
              <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">± 1%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MattsPlpRowColumnCellManufacturerPartNo1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/manufacturer-part-no">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#0072c3] text-[12px] whitespace-nowrap">MPS751RLRAG</p>
      <div className="aspect-[326/222] relative shrink-0 w-full" data-name="Screenshot 2026-03-23 at 15.54.36 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute inset-0 w-full h-full object-contain" src="/images/to92-transistor.jpeg" />
        </div>
      </div>
    </div>
  );
}

function MattsPlpRowColumn() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[160px]" data-name="matts/plp/row/column-02">
      <MattsPlpRowColumnCellManufacturerPartNo1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[4.318px] left-[3.96px] top-[18.4px] w-[10.781px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7811 4.31829">
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
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Data Sheet">
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
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#0072c3] text-[12px]">Data Sheet</p>
    </div>
  );
}

function G1() {
  return (
    <div className="absolute left-0 size-[18.43px] top-0" data-name="g2387">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.43 18.43">
        <g id="g2387">
          <path d={svgPaths.p25090880} fill="var(--fill-0, #00AA00)" id="path2756" />
          <path d={svgPaths.p13d1c200} fill="var(--fill-0, #00AA00)" id="path2762" />
          <g id="g2768">
            <path d={svgPaths.p4bf8b80} fill="var(--fill-0, #00AA00)" id="path2758" />
            <path d={svgPaths.p1dbb9a80} fill="var(--fill-0, #00AA00)" id="path2760" />
            <path d={svgPaths.p1bfb1800} fill="var(--fill-0, #00AA00)" id="path2764" />
            <path d={svgPaths.p237b4580} fill="var(--fill-0, #00AA00)" id="path2766" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="layer1">
      <G1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-0">
      <Layer1 />
    </div>
  );
}

function RoHs1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="RoHS">
      <div className="relative shrink-0 size-[18px]" data-name="icon / RoHS certificate">
        <Group4 />
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#0072c3] text-[12px]">RoHS</p>
    </div>
  );
}

function DateLotCode1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Date/Lot Code">
      <div className="h-[16.5px] relative shrink-0 w-[18px]" data-name="icon / date & lot">
        <div className="absolute inset-[22.73%_87.5%_4.55%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 12">
            <path d="M1.5 0H0V12H1.5V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-[18.18%] left-[70.83%] right-1/4 top-[22.73%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.75 9.75">
            <path d="M0.75 0H0V9.75H0.75V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-[18.18%] left-[16.67%] right-3/4 top-[22.73%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 9.75">
            <path d="M1.5 0H0V9.75H1.5V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-[18.18%] left-1/2 right-[41.67%] top-[22.73%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 9.75">
            <path d="M1.5 0H0V9.75H1.5V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.73%_33.33%_18.18%_62.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.75 9.75">
            <path d="M0.75 0H0V9.75H0.75V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.73%_12.5%_4.55%_79.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 12">
            <path d="M1.5 0H0V12H1.5V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.73%_66.67%_18.18%_29.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.75 9.75">
            <path d="M0.75 0H0V9.75H0.75V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.73%_54.17%_18.18%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.75 9.75">
            <path d="M0.75 0H0V9.75H0.75V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bg-[#4d5358] bottom-[4.55%] left-[16.67%] right-3/4 rounded-[6px] top-[86.36%]" />
        <div className="absolute bg-[#4d5358] inset-[86.36%_62.5%_4.55%_29.17%] rounded-[6px]" />
        <div className="absolute bg-[#4d5358] bottom-[4.55%] left-[41.67%] right-1/2 rounded-[6px] top-[86.36%]" />
        <div className="absolute bg-[#4d5358] inset-[86.36%_37.5%_4.55%_54.17%] rounded-[6px]" />
        <div className="absolute bg-[#4d5358] bottom-[4.55%] left-[66.67%] right-1/4 rounded-[6px] top-[86.36%]" />
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#0072c3] text-[12px]">Date/Lot Code</p>
    </div>
  );
}

function CutTape1() {
  return (
    <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="Cut Tape">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 20.0004">
        <g id="Cut Tape">
          <path clipRule="evenodd" d={svgPaths.p284bb980} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Shape" />
          <path clipRule="evenodd" d={svgPaths.p3cd15600} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Shape_2" />
          <path d={svgPaths.p1de11900} fill="var(--fill-0, #525252)" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function Packaging1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="packaging">
      <div className="relative shrink-0 size-[24px]" data-name="icon / cut tape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="path" />
        </svg>
        <CutTape1 />
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Cut Tape</p>
    </div>
  );
}

function TextCombined1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="text-combined">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#6f6f6f] text-[12px] w-full">A £3.50 re-reeling charge will be added for this product</p>
    </div>
  );
}

function Avalibility1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Avalibility">
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#0072c3] text-[12px]">Packaging Options</p>
    </div>
  );
}

function TextGroupVertical1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="text-group-vertical">
      <div className="flex-[1_0_0] min-h-px min-w-px relative text-[#525252] text-right">
        <p className="mb-0">10+</p>
        <p className="mb-0">100+</p>
        <p className="mb-0">500+</p>
        <p className="mb-0">1000+</p>
        <p>2500+</p>
      </div>
      <div className="relative shrink-0 text-[#161616] whitespace-nowrap">
        <p className="mb-0">£0.156</p>
        <p className="mb-0">£0.104</p>
        <p className="mb-0">£0.0794</p>
        <p className="mb-0">£0.0655</p>
        <p>£0.0574</p>
      </div>
    </div>
  );
}

function Input1() {
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

function Icon18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1404 17.5001">
            <path clipRule="evenodd" d={svgPaths.p835dc00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
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

function InnerFrame2() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
          <Icon18 />
          <Label18 />
        </div>
      </div>
    </div>
  );
}

function MattsPlpRow1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="matts/plp/row">
      <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0 w-[71px]" data-name="matts/plp/row/column-01">
        <div className="relative shrink-0 size-[20px]" data-name="matts/plp/row/header-item/checkbox">
          <div className="absolute inset-[12.5%]" data-name="Fill">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path clipRule="evenodd" d={svgPaths.p181d3b80} fill="var(--fill-0, #161616)" fillRule="evenodd" id="Fill" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <MattsPlpRowColumn />
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[92px]" data-name="matts/plp/row/column-03">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/order-code">
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] w-full">2441541</p>
          <DataSheet1 />
          <RoHs1 />
          <DateLotCode1 />
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[224px]" data-name="matts/plp/row/column-04">
        <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="matts/plp/row/column-cell/desc-man">
          <ul className="block leading-[0] list-disc relative shrink-0 text-[#0072c3] text-[0px] w-full">
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <Link className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" to="/product/mps751rlrag">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]">
                  Bipolar (BJT) Single Transistor
                </span>
              </Link>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <Link className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" to="/product/mps751rlrag">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]">
                  General Purpose
                </span>
              </Link>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <Link className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" to="/product/mps751rlrag">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]">
                  PNP
                </span>
              </Link>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <Link className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" to="/product/mps751rlrag">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]">
                  60 V
                </span>
              </Link>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <Link className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" to="/product/mps751rlrag">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]">
                  2 A
                </span>
              </Link>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <Link className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" to="/product/mps751rlrag">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]">
                  625 mW
                </span>
              </Link>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <Link className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" to="/product/mps751rlrag">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]">
                  TO-92
                </span>
              </Link>
            </li>
            <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <Link className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" to="/product/mps751rlrag">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]">
                  Through Hole
                </span>
              </Link>
            </li>
          </ul>
          <Link to="/product/mps751rlrag" className="leading-[15px] relative shrink-0 text-[#161616] text-[12px] w-full cursor-pointer hover:underline">ONSEMI</Link>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[125px]" data-name="matts/plp/row/column-05">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availibility-messaging">
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
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[169px]" data-name="matts/plp/row/column-06">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availability-plus">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availability-plus/supplied-on">
            <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] w-full">Each (Supplied on Cut Tape)</p>
            <Packaging1 />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availability-plus/price-for-availability">
            <TextCombined1 />
          </div>
          <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availability-plus/price-for-availability">
            <Avalibility1 />
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[118px]" data-name="matts/plp/row/column-07">
        <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start leading-[15px] not-italic relative shrink-0 text-[12px] w-full" data-name="matts/plp/row/column-cell/price+multiples">
          <TextGroupVertical1 />
          <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0 text-[#6f6f6f] text-right tracking-[-0.2px] underline w-full">More Pricing...</p>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[140px]" data-name="matts/plp/row/column-08">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/quantity-add">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/number-input+label">
            <InputButtonsBorder1 />
          </div>
          <div className="bg-[#0072c3] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="matts/button">
            <InnerFrame2 />
          </div>
          <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[3px] items-start justify-center leading-[15px] not-italic relative shrink-0 text-[#525252] text-[12px] w-full" data-name="matts/plp/row/column-cell/quantity-add/min+mult">
            <p className="relative shrink-0 whitespace-nowrap">Min: 10</p>
            <p className="relative shrink-0 whitespace-nowrap">/</p>
            <p className="flex-[1_0_0] min-h-px min-w-px relative">Mult: 10</p>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="matts/plp/row/column-09">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/extended-attributes">
              <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">0.005ohm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="matts/plp/row/column-10">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/extended-attributes">
              <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">0603 [1608 Metric]</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="matts/plp/row/column-11">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/extended-attributes">
              <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">250mW</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="matts/plp/row/column-12">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/extended-attributes">
              <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">± 1%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MattsPlpRowColumnCellManufacturerPartNo2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/manufacturer-part-no">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#0072c3] text-[12px] whitespace-nowrap">SN74ABT16245ADGGR.</p>
      <div className="aspect-[326/222] relative shrink-0 w-full" data-name="Screenshot 2026-03-23 at 15.54.36 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute inset-0 w-full h-full object-contain" src="/images/to92-transistor.jpeg" />
        </div>
      </div>
    </div>
  );
}

function MattsPlpRowColumn1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[160px]" data-name="matts/plp/row/column-02">
      <MattsPlpRowColumnCellManufacturerPartNo2 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[4.318px] left-[3.96px] top-[18.4px] w-[10.781px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7811 4.31829">
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
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Data Sheet">
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
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#0072c3] text-[12px]">Data Sheet</p>
    </div>
  );
}

function G2() {
  return (
    <div className="absolute left-0 size-[18.43px] top-0" data-name="g2387">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.43 18.43">
        <g id="g2387">
          <path d={svgPaths.p25090880} fill="var(--fill-0, #00AA00)" id="path2756" />
          <path d={svgPaths.p13d1c200} fill="var(--fill-0, #00AA00)" id="path2762" />
          <g id="g2768">
            <path d={svgPaths.p4bf8b80} fill="var(--fill-0, #00AA00)" id="path2758" />
            <path d={svgPaths.p1dbb9a80} fill="var(--fill-0, #00AA00)" id="path2760" />
            <path d={svgPaths.p1bfb1800} fill="var(--fill-0, #00AA00)" id="path2764" />
            <path d={svgPaths.p237b4580} fill="var(--fill-0, #00AA00)" id="path2766" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Layer2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="layer1">
      <G2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-0 top-0">
      <Layer2 />
    </div>
  );
}

function RoHs2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="RoHS">
      <div className="relative shrink-0 size-[18px]" data-name="icon / RoHS certificate">
        <Group5 />
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#0072c3] text-[12px]">RoHS</p>
    </div>
  );
}

function DateLotCode2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Date/Lot Code">
      <div className="h-[16.5px] relative shrink-0 w-[18px]" data-name="icon / date & lot">
        <div className="absolute inset-[22.73%_87.5%_4.55%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 12">
            <path d="M1.5 0H0V12H1.5V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-[18.18%] left-[70.83%] right-1/4 top-[22.73%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.75 9.75">
            <path d="M0.75 0H0V9.75H0.75V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-[18.18%] left-[16.67%] right-3/4 top-[22.73%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 9.75">
            <path d="M1.5 0H0V9.75H1.5V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-[18.18%] left-1/2 right-[41.67%] top-[22.73%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 9.75">
            <path d="M1.5 0H0V9.75H1.5V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.73%_33.33%_18.18%_62.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.75 9.75">
            <path d="M0.75 0H0V9.75H0.75V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.73%_12.5%_4.55%_79.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 12">
            <path d="M1.5 0H0V12H1.5V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.73%_66.67%_18.18%_29.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.75 9.75">
            <path d="M0.75 0H0V9.75H0.75V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[22.73%_54.17%_18.18%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.75 9.75">
            <path d="M0.75 0H0V9.75H0.75V0Z" fill="var(--fill-0, #4D5358)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bg-[#4d5358] bottom-[4.55%] left-[16.67%] right-3/4 rounded-[6px] top-[86.36%]" />
        <div className="absolute bg-[#4d5358] inset-[86.36%_62.5%_4.55%_29.17%] rounded-[6px]" />
        <div className="absolute bg-[#4d5358] bottom-[4.55%] left-[41.67%] right-1/2 rounded-[6px] top-[86.36%]" />
        <div className="absolute bg-[#4d5358] inset-[86.36%_37.5%_4.55%_54.17%] rounded-[6px]" />
        <div className="absolute bg-[#4d5358] bottom-[4.55%] left-[66.67%] right-1/4 rounded-[6px] top-[86.36%]" />
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#0072c3] text-[12px]">Date/Lot Code</p>
    </div>
  );
}

function CutTape2() {
  return (
    <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="Cut Tape">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 20.0004">
        <g id="Cut Tape">
          <path clipRule="evenodd" d={svgPaths.p284bb980} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Shape" />
          <path clipRule="evenodd" d={svgPaths.p3cd15600} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Shape_2" />
          <path d={svgPaths.p1de11900} fill="var(--fill-0, #525252)" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function Packaging2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="packaging">
      <div className="relative shrink-0 size-[24px]" data-name="icon / cut tape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="path" />
        </svg>
        <CutTape2 />
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">Cut Tape</p>
    </div>
  );
}

function TextCombined2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="text-combined">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#6f6f6f] text-[12px] w-full">A £3.50 re-reeling charge will be added for this product</p>
    </div>
  );
}

function Avalibility2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Avalibility">
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#0072c3] text-[12px]">Packaging Options</p>
    </div>
  );
}

function TextGroupVertical2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="text-group-vertical">
      <div className="flex-[1_0_0] min-h-px min-w-px relative text-[#525252] text-right">
        <p className="mb-0">10+</p>
        <p className="mb-0">100+</p>
        <p className="mb-0">500+</p>
        <p className="mb-0">1000+</p>
        <p>2500+</p>
      </div>
      <div className="relative shrink-0 text-[#161616] whitespace-nowrap">
        <p className="mb-0">£0.156</p>
        <p className="mb-0">£0.104</p>
        <p className="mb-0">£0.0794</p>
        <p className="mb-0">£0.0655</p>
        <p>£0.0574</p>
      </div>
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

function Icon19() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon">
      <div className="relative shrink-0 size-[20px]" data-name="icon">
        <div className="absolute inset-[6.25%_9.3%_6.25%_0]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1404 17.5001">
            <path clipRule="evenodd" d={svgPaths.p835dc00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
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

function InnerFrame3() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
          <Icon19 />
          <Label19 />
        </div>
      </div>
    </div>
  );
}

function MattsPlpRow2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="matts/plp/row">
      <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0 w-[71px]" data-name="matts/plp/row/column-01">
        <div className="relative shrink-0 size-[20px]" data-name="matts/plp/row/header-item/checkbox">
          <div className="absolute inset-[12.5%]" data-name="Fill">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path clipRule="evenodd" d={svgPaths.p181d3b80} fill="var(--fill-0, #161616)" fillRule="evenodd" id="Fill" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <MattsPlpRowColumn1 />
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[92px]" data-name="matts/plp/row/column-03">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/order-code">
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] w-full">1653629</p>
          <DataSheet2 />
          <RoHs2 />
          <DateLotCode2 />
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[224px]" data-name="matts/plp/row/column-04">
        <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="matts/plp/row/column-cell/desc-man">
          <ul className="block leading-[0] list-disc relative shrink-0 text-[#0072c3] text-[0px] w-full">
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" href="https://uk.farnell.com/onsemi/sn74abt16245adggr/bipolar-transistor/dp/1653629">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]" href="https://uk.farnell.com/onsemi/sn74abt16245adggr/bipolar-transistor/dp/1653629">
                  Bipolar (BJT) Single Transistor
                </span>
              </a>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" href="https://uk.farnell.com/onsemi/sn74abt16245adggr/bipolar-transistor/dp/1653629">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]" href="https://uk.farnell.com/onsemi/sn74abt16245adggr/bipolar-transistor/dp/1653629">
                  General Purpose
                </span>
              </a>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" href="https://uk.farnell.com/onsemi/sn74abt16245adggr/bipolar-transistor/dp/1653629">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]" href="https://uk.farnell.com/onsemi/sn74abt16245adggr/bipolar-transistor/dp/1653629">
                  PNP
                </span>
              </a>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" href="https://uk.farnell.com/onsemi/sn74abt16245adggr/bipolar-transistor/dp/1653629">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]" href="https://uk.farnell.com/onsemi/sn74abt16245adggr/bipolar-transistor/dp/1653629">
                  60 V
                </span>
              </a>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" href="https://uk.farnell.com/onsemi/sn74abt16245adggr/bipolar-transistor/dp/1653629">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]" href="https://uk.farnell.com/onsemi/sn74abt16245adggr/bipolar-transistor/dp/1653629">
                  2 A
                </span>
              </a>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" href="https://uk.farnell.com/onsemi/sn74abt16245adggr/bipolar-transistor/dp/1653629">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]" href="https://uk.farnell.com/onsemi/sn74abt16245adggr/bipolar-transistor/dp/1653629">
                  625 mW
                </span>
              </a>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" href="https://uk.farnell.com/onsemi/sn74abt16245adggr/bipolar-transistor/dp/1653629">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]" href="https://uk.farnell.com/onsemi/sn74abt16245adggr/bipolar-transistor/dp/1653629">
                  TO-92
                </span>
              </a>
            </li>
            <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] underline" href="https://uk.farnell.com/onsemi/sn74abt16245adggr/bipolar-transistor/dp/1653629">
                <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]" href="https://uk.farnell.com/onsemi/sn74abt16245adggr/bipolar-transistor/dp/1653629">
                  Through Hole
                </span>
              </a>
            </li>
          </ul>
          <p className="leading-[15px] relative shrink-0 text-[#161616] text-[12px] w-full">ONSEMI</p>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[125px]" data-name="matts/plp/row/column-05">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availibility-messaging">
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
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[169px]" data-name="matts/plp/row/column-06">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availability-plus">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availability-plus/supplied-on">
            <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] w-full">Each (Supplied on Cut Tape)</p>
            <Packaging2 />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availability-plus/price-for-availability">
            <TextCombined2 />
          </div>
          <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availability-plus/price-for-availability">
            <Avalibility2 />
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[118px]" data-name="matts/plp/row/column-07">
        <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start leading-[15px] not-italic relative shrink-0 text-[12px] w-full" data-name="matts/plp/row/column-cell/price+multiples">
          <TextGroupVertical2 />
          <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0 text-[#6f6f6f] text-right tracking-[-0.2px] underline w-full">More Pricing...</p>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[140px]" data-name="matts/plp/row/column-08">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/quantity-add">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/number-input+label">
            <InputButtonsBorder2 />
          </div>
          <div className="bg-[#0072c3] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="matts/button">
            <InnerFrame3 />
          </div>
          <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[3px] items-start justify-center leading-[15px] not-italic relative shrink-0 text-[#525252] text-[12px] w-full" data-name="matts/plp/row/column-cell/quantity-add/min+mult">
            <p className="relative shrink-0 whitespace-nowrap">Min: 10</p>
            <p className="relative shrink-0 whitespace-nowrap">/</p>
            <p className="flex-[1_0_0] min-h-px min-w-px relative">Mult: 10</p>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="matts/plp/row/column-09">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/extended-attributes">
              <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">0.005ohm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="matts/plp/row/column-10">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/extended-attributes">
              <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">0603 [1608 Metric]</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="matts/plp/row/column-11">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/extended-attributes">
              <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">250mW</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="matts/plp/row/column-12">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/extended-attributes">
              <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">± 1%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConfigurablePlpRow({ data, partNoColWidth }: { data: PlpRowData; partNoColWidth: number }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="matts/plp/row">
      <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0 w-[71px]" data-name="matts/plp/row/column-01">
        <div className="relative shrink-0 size-[20px]" data-name="matts/plp/row/header-item/checkbox">
          <div className="absolute inset-[12.5%]" data-name="Fill">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path clipRule="evenodd" d={svgPaths.p181d3b80} fill="var(--fill-0, #161616)" fillRule="evenodd" id="Fill" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0" style={{ width: partNoColWidth }} data-name="matts/plp/row/column-02">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/manufacturer-part-no">
          <Link to={'/product/' + data.productId} className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#0072c3] text-[12px] whitespace-nowrap hover:underline">{data.partNo}</Link>
          <div className="aspect-[326/222] relative shrink-0 w-full">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {data.image
                ? <img alt="" className="absolute inset-0 w-full h-full object-contain" src={data.image} />
                : <img alt="" className="absolute h-[153.15%] left-[-9.51%] max-w-none top-[-33.33%] w-[116.87%]" src={imgScreenshot20260323At1554361} />
              }
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[92px]" data-name="matts/plp/row/column-03">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/order-code">
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] w-full">{data.orderCode}</p>
          <DataSheet />
          <RoHs />
          <DateLotCode />
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[224px]" data-name="matts/plp/row/column-04">
        <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="matts/plp/row/column-cell/desc-man">
          <ul className="block leading-[0] list-disc relative shrink-0 text-[#0072c3] text-[0px] w-full">
            {data.description.map((item, i) => (
              <li key={i} className={i === data.description.length - 1 ? "ms-[calc(var(--list-marker-font-size,0)*1.5*1)]" : "mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]"}>
                <Link to={'/product/' + data.productId} className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic text-[12px] text-[#0072c3] underline">
                  <span className="[text-decoration-skip-ink:none] decoration-solid leading-[15px]">{item}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="leading-[15px] relative shrink-0 text-[#161616] text-[12px] w-full cursor-pointer hover:underline">{data.manufacturer}</p>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[125px]" data-name="matts/plp/row/column-05">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availibility-messaging">
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
          <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[15px] min-w-full not-italic relative shrink-0 text-[#2a8442] text-[12px] w-[min-content]">{data.stock}</p>
          <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-w-full not-italic relative shrink-0 text-[#525252] text-[12px] w-[min-content]">{data.delivery}</p>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[169px]" data-name="matts/plp/row/column-06">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availability-plus">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availability-plus/supplied-on">
            <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#161616] text-[12px] w-full">{data.packaging}</p>
            <Packaging />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availability-plus/price-for-availability">
            <TextCombined />
          </div>
          <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="matts/plp/row/column-cell/availability-plus/price-for-availability">
            <Avalibility />
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[118px]" data-name="matts/plp/row/column-07">
        <div className="content-stretch flex flex-col font-['Apercu_Avnet:Regular',sans-serif] gap-[8px] items-start leading-[15px] not-italic relative shrink-0 text-[12px] w-full" data-name="matts/plp/row/column-cell/price+multiples">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="text-group-vertical">
            <div className="flex-[1_0_0] min-h-px min-w-px relative text-[#525252] text-right">
              {data.priceBreaks.map((pb, i) => (
                <p key={i} className={i < data.priceBreaks.length - 1 ? 'mb-0' : ''}>{pb.qty}</p>
              ))}
            </div>
            <div className="relative shrink-0 text-[#161616] whitespace-nowrap">
              {data.priceBreaks.map((pb, i) => (
                <p key={i} className={i < data.priceBreaks.length - 1 ? 'mb-0' : ''}>{pb.price}</p>
              ))}
            </div>
          </div>
          <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0 text-[#6f6f6f] text-right tracking-[-0.2px] underline w-full">More Pricing...</p>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      <div className="content-stretch flex flex-col items-start px-[8px] relative shrink-0 w-[140px]" data-name="matts/plp/row/column-08">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/quantity-add">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="matts/number-input+label">
            <InputButtonsBorder />
          </div>
          <div className="bg-[#0072c3] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="matts/button">
            <InnerFrame1 />
          </div>
          <div className="content-stretch flex font-['Apercu_Avnet:Regular',sans-serif] gap-[3px] items-start justify-center leading-[15px] not-italic relative shrink-0 text-[#525252] text-[12px] w-full" data-name="matts/plp/row/column-cell/quantity-add/min+mult">
            <p className="relative shrink-0 whitespace-nowrap">Min: {data.minQty}</p>
            <p className="relative shrink-0 whitespace-nowrap">/</p>
            <p className="flex-[1_0_0] min-h-px min-w-px relative">Mult: {data.multiple}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />
      {data.attrs.map((attr, i) => (
        <>
          <div key={'ca' + i} className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name={'matts/plp/row/column-' + String(9 + i).padStart(2, '0')}>
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="matts/plp/row/column-cell/extended-attributes">
                  <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] min-h-px min-w-px not-italic relative text-[#161616] text-[12px]">{attr}</p>
                </div>
              </div>
            </div>
          </div>
          {i < data.attrs.length - 1 && <div key={'cb' + i} className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="matts/border" />}
        </>
      ))}
    </div>
  );
}

function MattsPlpColumns() {
  const ctx = useContext(ProductListContext);
  if (ctx) {
    const partNoColWidth = getPartNoColWidth(ctx);
    return (
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/columns">
        {ctx.rows.map((row, i) => (
          <>
            <ConfigurablePlpRow key={'row' + i} data={row} partNoColWidth={partNoColWidth} />
            <div key={'brd' + i} className="bg-[#c6c6c6] h-px shrink-0 w-full" data-name="matts/border" />
          </>
        ))}
      </div>
    );
  }
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="matts/plp/columns">
      <MattsPlpRow />
      <div className="bg-[#c6c6c6] h-px shrink-0 w-full" data-name="matts/border" />
      <MattsPlpRow1 />
      <div className="bg-[#c6c6c6] h-px shrink-0 w-full" data-name="matts/border" />
      <MattsPlpRow2 />
      <div className="bg-[#c6c6c6] h-px shrink-0 w-full" data-name="matts/border" />
    </div>
  );
}

function Page() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Page">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">1</p>
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 7.125">
            <path clipRule="evenodd" d={svgPaths.p23048b80} fill="var(--fill-0, #161616)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Pages() {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-name="Pages">
      <Page />
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] text-right whitespace-nowrap">of 1 pages</p>
    </div>
  );
}

function Right() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[48px] items-start overflow-clip px-[16px] right-0 top-px" data-name="Right">
      <div className="bg-[#e0e0e0] h-[49px] shrink-0 w-px" data-name="Second divider" />
      <Pages />
      <div className="bg-[#e0e0e0] h-full shrink-0 w-px" data-name="Third divider" />
      <div className="relative shrink-0 size-[16px]" data-name="icons">
        <div className="absolute bottom-1/4 left-[37.5%] right-[31.25%] top-1/4" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 8">
            <path clipRule="evenodd" d="M5 8L0 4L5 0V8Z" fill="var(--fill-0, #161616)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
      <div className="bg-[#e0e0e0] h-full shrink-0 w-px" data-name="Fourth divider" />
      <div className="relative shrink-0 size-[16px]" data-name="icons">
        <div className="absolute bottom-1/4 left-[37.5%] right-[31.25%] top-1/4" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 8">
            <path clipRule="evenodd" d="M0 0L5 4L0 8V0Z" fill="var(--fill-0, #161616)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Items">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">25</p>
      <div className="relative shrink-0 size-[20px]" data-name="icons">
        <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 7.125">
            <path clipRule="evenodd" d={svgPaths.p23048b80} fill="var(--fill-0, #161616)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ItemsPerPage() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Items per page">
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">Items per page:</p>
      <Items />
    </div>
  );
}

function Left() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[48px] items-center left-0 overflow-clip px-[16px] top-px" data-name="Left">
      <ItemsPerPage />
      <div className="bg-[#e0e0e0] h-full shrink-0 w-px" data-name="First divider" />
      <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">1-3 of 3 items</p>
    </div>
  );
}

function Frame21() {
  const ctx = useContext(ProductListContext);
  const partNoColWidth = getPartNoColWidth(ctx);
  const h09 = ctx?.attrHeaders[0] ?? 'Resistance';
  const h10 = ctx?.attrHeaders[1] ?? 'Resistor Case Style';
  const h11 = ctx?.attrHeaders[2] ?? 'Power Rating';
  const h12 = ctx?.attrHeaders[3] ?? 'Resistance Tolerance';
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0">
      <SiteSearch />
      <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[1505px]" data-name="plp1">
        <div className="content-stretch flex items-start pb-px relative shrink-0 w-full" data-name="matts/plp/headers">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[71px]" data-name="matts/plp/row/header-01">
            <div className="bg-[#e0e0e0] h-[84px] relative shrink-0 w-full" data-name="matts/plp/row/header/header-item">
              <div className="content-stretch flex flex-col items-start justify-between p-[8px] relative size-full">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">Compare</p>
                <div className="opacity-0 relative shrink-0 size-[20px]" data-name="matts/plp/row/header-item/checkbox">
                  <div className="absolute inset-[12.5%]" data-name="Fill">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path clipRule="evenodd" d={svgPaths.p181d3b80} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Fill" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white self-stretch shrink-0 w-px" data-name="matts/border" />
          <div className="content-stretch flex flex-col items-start relative shrink-0" style={{ width: partNoColWidth }} data-name="matts/plp/row/header-02">
            <div className="bg-[#e0e0e0] h-[84px] relative shrink-0 w-full" data-name="matts/plp/row/header/header-item">
              <div className="content-stretch flex flex-col items-start justify-between p-[8px] relative size-full">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-pre">
                  {`Manufacturer `}
                  <br aria-hidden="true" />
                  Part No
                </p>
                <div className="relative shrink-0 size-[20px]" data-name="matts/plp/row/header-item/sort-options">
                  <div className="absolute inset-[12.5%]" data-name="Fill">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path clipRule="evenodd" d={svgPaths.p19bb1800} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Fill" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white self-stretch shrink-0 w-px" data-name="matts/border" />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[92px]" data-name="matts/plp/row/header-03">
            <div className="bg-[#e0e0e0] h-[84px] relative shrink-0 w-full" data-name="matts/plp/row/header/header-item">
              <div className="content-stretch flex flex-col items-start justify-between p-[8px] relative size-full">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#525252] text-[13px] w-[min-content]">Order Code</p>
                <div className="relative shrink-0 size-[20px]" data-name="matts/plp/row/header-item/sort-options">
                  <div className="absolute inset-[12.5%]" data-name="Fill">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path clipRule="evenodd" d={svgPaths.p19bb1800} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Fill" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white self-stretch shrink-0 w-px" data-name="matts/border" />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[224px]" data-name="matts/plp/row/header-04">
            <div className="bg-[#e0e0e0] h-[84px] relative shrink-0 w-full" data-name="matts/plp/row/header/header-item">
              <div className="content-stretch flex flex-col items-start justify-between p-[8px] relative size-full">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#525252] text-[13px] w-[min-content]">Description / Manufacturer</p>
                <div className="relative shrink-0 size-[20px]" data-name="matts/plp/row/header-item/sort-options">
                  <div className="absolute inset-[12.5%]" data-name="Fill">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path clipRule="evenodd" d={svgPaths.p19bb1800} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Fill" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white self-stretch shrink-0 w-px" data-name="matts/border" />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[125px]" data-name="matts/plp/row/header-05">
            <div className="bg-[#e0e0e0] h-[84px] relative shrink-0 w-full" data-name="matts/plp/row/header/header-item">
              <div className="content-stretch flex flex-col items-start justify-between p-[8px] relative size-full">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#525252] text-[13px] w-[min-content]">Availability</p>
                <div className="relative shrink-0 size-[20px]" data-name="matts/plp/row/header-item/sort-options">
                  <div className="absolute inset-[12.5%]" data-name="Fill">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path clipRule="evenodd" d={svgPaths.p19bb1800} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Fill" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white self-stretch shrink-0 w-px" data-name="matts/border" />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[169px]" data-name="matts/plp/row/header-06">
            <div className="bg-[#e0e0e0] h-[84px] relative shrink-0 w-full" data-name="matts/plp/row/header/header-item">
              <div className="content-stretch flex flex-col items-start justify-between p-[8px] relative size-full">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#525252] text-[13px] w-[min-content]">Price For</p>
                <div className="opacity-0 relative shrink-0 size-[20px]" data-name="matts/plp/row/header-item/sort-options">
                  <div className="absolute inset-[12.5%]" data-name="Fill">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path clipRule="evenodd" d={svgPaths.p19bb1800} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Fill" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white self-stretch shrink-0 w-px" data-name="matts/border" />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[118px]" data-name="matts/plp/row/header-07">
            <div className="bg-[#e0e0e0] h-[84px] relative shrink-0 w-full" data-name="matts/plp/row/header/header-item">
              <div className="content-stretch flex flex-col items-start justify-between p-[8px] relative size-full">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#525252] text-[13px] w-[min-content]">Price (ex VAT)</p>
                <div className="relative shrink-0 size-[20px]" data-name="matts/plp/row/header-item/sort-options">
                  <div className="absolute inset-[12.5%]" data-name="Fill">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path clipRule="evenodd" d={svgPaths.p19bb1800} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Fill" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white self-stretch shrink-0 w-px" data-name="matts/border" />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="matts/plp/row/header-08">
            <div className="bg-[#e0e0e0] h-[84px] relative shrink-0 w-full" data-name="matts/plp/row/header/header-item">
              <div className="content-stretch flex flex-col items-start justify-between p-[8px] relative size-full">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#525252] text-[13px] w-[min-content]">Quantity</p>
                <div className="relative shrink-0 size-[20px]" data-name="matts/plp/row/header-item/sort-options">
                  <div className="absolute inset-[12.5%]" data-name="Fill">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path clipRule="evenodd" d={svgPaths.p19bb1800} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Fill" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white self-stretch shrink-0 w-px" data-name="matts/border" />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/plp/row/header-09">
            <div className="bg-[#e0e0e0] h-[84px] relative shrink-0 w-full" data-name="matts/plp/row/header/header-item">
              <div className="content-stretch flex flex-col items-start justify-between p-[8px] relative size-full">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#525252] text-[13px] w-[min-content]">{h09}</p>
                <div className="relative shrink-0 size-[20px]" data-name="matts/plp/row/header-item/sort-options">
                  <div className="absolute inset-[12.5%]" data-name="Fill">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path clipRule="evenodd" d={svgPaths.p19bb1800} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Fill" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white self-stretch shrink-0 w-px" data-name="matts/border" />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/plp/row/header-10">
            <div className="bg-[#e0e0e0] h-[84px] relative shrink-0 w-full" data-name="matts/plp/row/header/header-item">
              <div className="content-stretch flex flex-col items-start justify-between p-[8px] relative size-full">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#525252] text-[13px] w-[min-content]">{h10}</p>
                <div className="relative shrink-0 size-[20px]" data-name="matts/plp/row/header-item/sort-options">
                  <div className="absolute inset-[12.5%]" data-name="Fill">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path clipRule="evenodd" d={svgPaths.p19bb1800} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Fill" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white self-stretch shrink-0 w-px" data-name="matts/border" />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/plp/row/header-11">
            <div className="bg-[#e0e0e0] h-[84px] relative shrink-0 w-full" data-name="matts/plp/row/header/header-item">
              <div className="content-stretch flex flex-col items-start justify-between p-[8px] relative size-full">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#525252] text-[13px] w-[min-content]">{h11}</p>
                <div className="relative shrink-0 size-[20px]" data-name="matts/plp/row/header-item/sort-options">
                  <div className="absolute inset-[12.5%]" data-name="Fill">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path clipRule="evenodd" d={svgPaths.p19bb1800} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Fill" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white self-stretch shrink-0 w-px" data-name="matts/border" />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="matts/plp/row/header-12">
            <div className="bg-[#e0e0e0] h-[84px] relative shrink-0 w-full" data-name="matts/plp/row/header/header-item">
              <div className="content-stretch flex flex-col items-start justify-between p-[8px] relative size-full">
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#525252] text-[13px] w-[min-content]">{h12}</p>
                <div className="relative shrink-0 size-[20px]" data-name="matts/plp/row/header-item/sort-options">
                  <div className="absolute inset-[12.5%]" data-name="Fill">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path clipRule="evenodd" d={svgPaths.p19bb1800} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Fill" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MattsPlpColumns />
        <div className="bg-[#f4f4f4] h-[48px] relative shrink-0 w-full" data-name="pagination / table bar / advanced">
          <div className="absolute flex h-px items-center justify-center left-0 right-0 top-0">
            <div className="flex-none h-[1024px] rotate-90 w-px">
              <div className="bg-[#e0e0e0] size-full" data-name="border top" />
            </div>
          </div>
          <Right />
          <Left />
        </div>
      </div>
    </div>
  );
}

function TextIconHolder() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="text+icon-holder">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="footer/links/header/text">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] w-[114px]">Footer Link Header</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[8px] relative shrink-0 w-full" data-name="header">
      <TextIconHolder />
    </div>
  );
}

function TextIconHolder1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="text+icon-holder">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="footer/links/header/text">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] w-[114px]">Footer Link Header</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[8px] relative shrink-0 w-full" data-name="header">
      <TextIconHolder1 />
    </div>
  );
}

function TextIconHolder2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="text+icon-holder">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="footer/links/header/text">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] w-[114px]">Footer Link Header</p>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[8px] relative shrink-0 w-full" data-name="header">
      <TextIconHolder2 />
    </div>
  );
}

function TextIconHolder3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="text+icon-holder">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="footer/links/header/text">
        <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[13px] whitespace-nowrap">Social Media +</p>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[8px] relative shrink-0 w-full" data-name="header">
      <TextIconHolder3 />
    </div>
  );
}

function Label20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#0072c3] text-[14px] whitespace-nowrap">Sign Up</p>
    </div>
  );
}

function InnerFrame4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Inner Frame">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
          <Label20 />
        </div>
      </div>
    </div>
  );
}

function ButtonText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative self-stretch" data-name="button+text">
      <div className="h-[48px] relative rounded-[4px] shrink-0 w-[80px]" data-name="notifications/toast/utilities/button-layout/button">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
          <InnerFrame4 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#0072c3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="flex-[1_0_0] font-['Apercu_Avnet:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#525252] text-[13px]">Subscribe to our emails for exclusive benefits!</p>
    </div>
  );
}

function Top() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="top">
      <div className="border-3 border-[#6f6f6f] border-solid col-1 h-[30.8px] ml-0 mt-0 rounded-[21px] row-1 w-[84px]" />
      <div className="col-1 ml-0 mt-0 relative row-1 size-[30.8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.8 30.8">
          <circle cx="15.4" cy="15.4" id="Ellipse 1" r="13.9" stroke="var(--stroke-0, #6F6F6F)" strokeWidth="3" />
        </svg>
      </div>
      <p className="col-1 font-['Apercu_Avnet:Bold',sans-serif] h-[15px] leading-[normal] ml-[40px] mt-[7px] not-italic relative row-1 text-[#6f6f6f] text-[12px] w-[29px]">Logo</p>
      <div className="col-1 ml-[6.53px] mt-[6.53px] relative row-1 size-[17.733px]" data-name="Component 1">
        <div className="absolute inset-[5%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.96 15.96">
            <path clipRule="evenodd" d={svgPaths.p2fe13d00} fill="var(--fill-0, #6F6F6F)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.98 6.02933">
            <path clipRule="evenodd" d={svgPaths.p27e2bdc0} fill="var(--fill-0, #6F6F6F)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] grid-rows-[max-content] inline-grid min-h-px min-w-px place-items-start relative w-full" data-name="text">
      <p className="col-1 font-['Apercu_Avnet:Mono',sans-serif] h-[11.2px] leading-[normal] ml-0 mt-0 not-italic relative row-1 text-[#6f6f6f] text-[10px] text-center w-full">Accreditation</p>
    </div>
  );
}

function Top1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="top">
      <div className="border-3 border-[#6f6f6f] border-solid col-1 h-[30.8px] ml-0 mt-0 rounded-[21px] row-1 w-[84px]" />
      <div className="col-1 ml-0 mt-0 relative row-1 size-[30.8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.8 30.8">
          <circle cx="15.4" cy="15.4" id="Ellipse 1" r="13.9" stroke="var(--stroke-0, #6F6F6F)" strokeWidth="3" />
        </svg>
      </div>
      <p className="col-1 font-['Apercu_Avnet:Bold',sans-serif] h-[15px] leading-[normal] ml-[40px] mt-[7px] not-italic relative row-1 text-[#6f6f6f] text-[12px] w-[29px]">Logo</p>
      <div className="col-1 ml-[6.53px] mt-[6.53px] relative row-1 size-[17.733px]" data-name="Component 1">
        <div className="absolute inset-[5%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.96 15.96">
            <path clipRule="evenodd" d={svgPaths.p2fe13d00} fill="var(--fill-0, #6F6F6F)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
        <div className="absolute inset-[33.5%_27.5%_32.5%_27.5%]" data-name="Inner Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.98 6.02933">
            <path clipRule="evenodd" d={svgPaths.p27e2bdc0} fill="var(--fill-0, #6F6F6F)" fillRule="evenodd" id="Inner Fill" opacity="0.01" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] grid-rows-[max-content] inline-grid min-h-px min-w-px place-items-start relative w-full" data-name="text">
      <p className="col-1 font-['Apercu_Avnet:Mono',sans-serif] h-[11.2px] leading-[normal] ml-0 mt-0 not-italic relative row-1 text-[#6f6f6f] text-[10px] text-center w-full">Accreditation</p>
    </div>
  );
}

function Placeholder() {
  return (
    <div className="absolute contents inset-0" data-name="placeholder">
      <div className="absolute border-2 border-[#6f6f6f] border-solid inset-0 rounded-[5px]" data-name="outline" />
      <p className="absolute font-['Apercu_Avnet:Mono',sans-serif] inset-[29.41%_10%] leading-[0] not-italic text-[#6f6f6f] text-[10px] whitespace-nowrap">
        <span className="leading-[normal]">Card</span>
        <span className="font-['Apercu_Avnet:Bold',sans-serif] leading-[normal]">Logo</span>
      </p>
    </div>
  );
}

function Placeholder1() {
  return (
    <div className="absolute contents inset-0" data-name="placeholder">
      <div className="absolute border-2 border-[#6f6f6f] border-solid inset-0 rounded-[5px]" data-name="outline" />
      <p className="absolute font-['Apercu_Avnet:Mono',sans-serif] inset-[29.41%_10%] leading-[0] not-italic text-[#6f6f6f] text-[10px] whitespace-nowrap">
        <span className="leading-[normal]">Card</span>
        <span className="font-['Apercu_Avnet:Bold',sans-serif] leading-[normal]">Logo</span>
      </p>
    </div>
  );
}

function Placeholder2() {
  return (
    <div className="absolute contents inset-0" data-name="placeholder">
      <div className="absolute border-2 border-[#6f6f6f] border-solid inset-0 rounded-[5px]" data-name="outline" />
      <p className="absolute font-['Apercu_Avnet:Mono',sans-serif] inset-[29.41%_10%] leading-[0] not-italic text-[#6f6f6f] text-[10px] whitespace-nowrap">
        <span className="leading-[normal]">Card</span>
        <span className="font-['Apercu_Avnet:Bold',sans-serif] leading-[normal]">Logo</span>
      </p>
    </div>
  );
}

function Placeholder3() {
  return (
    <div className="absolute contents inset-0" data-name="placeholder">
      <div className="absolute border-2 border-[#6f6f6f] border-solid inset-0 rounded-[5px]" data-name="outline" />
      <p className="absolute font-['Apercu_Avnet:Mono',sans-serif] inset-[29.41%_10%] leading-[0] not-italic text-[#6f6f6f] text-[10px] whitespace-nowrap">
        <span className="leading-[normal]">Card</span>
        <span className="font-['Apercu_Avnet:Bold',sans-serif] leading-[normal]">Logo</span>
      </p>
    </div>
  );
}

function Placeholder4() {
  return (
    <div className="absolute contents inset-0" data-name="placeholder">
      <div className="absolute border-2 border-[#6f6f6f] border-solid inset-0 rounded-[5px]" data-name="outline" />
      <p className="absolute font-['Apercu_Avnet:Mono',sans-serif] inset-[29.41%_10%] leading-[0] not-italic text-[#6f6f6f] text-[10px] whitespace-nowrap">
        <span className="leading-[normal]">Card</span>
        <span className="font-['Apercu_Avnet:Bold',sans-serif] leading-[normal]">Logo</span>
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1504px]">
      <div className="content-stretch flex gap-[16px] items-start leading-[0] relative shrink-0" data-name="footer/assets/accreditation">
        <div className="content-stretch flex flex-col h-[42px] items-start relative shrink-0" data-name="footer/assets/accreditation/individual">
          <Top />
          <Text />
        </div>
        <div className="content-stretch flex flex-col h-[42px] items-start relative shrink-0" data-name="footer/assets/accreditation/individual">
          <Top1 />
          <Text1 />
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="footer/assets/card-smybols">
        <div className="h-[34px] relative shrink-0 w-[60px]" data-name="footer/assets/card-smybols/individual">
          <Placeholder />
        </div>
        <div className="h-[34px] relative shrink-0 w-[60px]" data-name="footer/assets/card-smybols/individual">
          <Placeholder1 />
        </div>
        <div className="h-[34px] relative shrink-0 w-[60px]" data-name="footer/assets/card-smybols/individual">
          <Placeholder2 />
        </div>
        <div className="h-[34px] relative shrink-0 w-[60px]" data-name="footer/assets/card-smybols/individual">
          <Placeholder3 />
        </div>
        <div className="h-[34px] relative shrink-0 w-[60px]" data-name="footer/assets/card-smybols/individual">
          <Placeholder4 />
        </div>
      </div>
    </div>
  );
}

function HorizontalLinks() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="horizontal-links">
      <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="footer/links/link/text">
        <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
          <p className="leading-[16px]">First Link</p>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="footer/assets/border" />
    </div>
  );
}

function HorizontalLinks1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="horizontal-links">
      <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="footer/links/link/text">
        <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
          <p className="leading-[16px]">Mid Link</p>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="footer/assets/border" />
    </div>
  );
}

function HorizontalLinks2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="horizontal-links">
      <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="footer/links/link/text">
        <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
          <p className="leading-[16px]">Mid Link</p>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="footer/assets/border" />
    </div>
  );
}

function HorizontalLinks3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="horizontal-links">
      <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="footer/links/link/text">
        <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
          <p className="leading-[16px]">Mid Link</p>
        </div>
      </div>
      <div className="bg-[#e0e0e0] self-stretch shrink-0 w-px" data-name="footer/assets/border" />
    </div>
  );
}

function HorizontalLinks4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="horizontal-links">
      <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="footer/links/link/text">
        <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
          <p className="leading-[16px]">End Link</p>
        </div>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1504px]" data-name="links">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="footer/links/horizontal/link">
        <HorizontalLinks />
      </div>
      <div className="content-stretch flex items-center justify-center pl-[8px] relative shrink-0" data-name="footer/links/horizontal/link">
        <HorizontalLinks1 />
      </div>
      <div className="content-stretch flex items-center justify-center pl-[8px] relative shrink-0" data-name="footer/links/horizontal/link">
        <HorizontalLinks2 />
      </div>
      <div className="content-stretch flex items-center justify-center pl-[8px] relative shrink-0" data-name="footer/links/horizontal/link">
        <HorizontalLinks3 />
      </div>
      <div className="content-stretch flex items-center pl-[8px] relative shrink-0" data-name="footer/links/horizontal/link">
        <HorizontalLinks4 />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full">
      <Frame22 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1506px]" data-name="Categories+filters">
        <Container />
      </div>
      <Frame21 />
      <div className="bg-[#f4f4f4] content-stretch flex flex-col gap-[48px] items-start py-[48px] relative shrink-0 w-full" data-name="footer">
        <div className="relative shrink-0 w-full" data-name="footer/links">
          <div className="flex flex-row justify-center size-full">
            <div className="content-stretch flex gap-[32px] items-start justify-center px-[40px] relative w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[352px]" data-name="footer/links/link">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="footer/links/header">
                  <Header />
                  <div className="bg-[#c6c6c6] h-px shrink-0 w-full" data-name="footer/assets/border" />
                </div>
                <div className="content-stretch flex items-start py-[4px] relative shrink-0 w-full" data-name="footer/links/link/text">
                  <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
                    <p className="leading-[16px]">Footer Link</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start py-[4px] relative shrink-0 w-full" data-name="footer/links/link/text">
                  <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
                    <p className="leading-[16px]">Footer Link</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start py-[4px] relative shrink-0 w-full" data-name="footer/links/link/text">
                  <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
                    <p className="leading-[16px]">Footer Link</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start py-[4px] relative shrink-0 w-full" data-name="footer/links/link/text">
                  <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
                    <p className="leading-[16px]">Footer Link</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start py-[4px] relative shrink-0 w-full" data-name="footer/links/link/text">
                  <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
                    <p className="leading-[16px]">Footer Link</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[352px]" data-name="footer/links/link">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="footer/links/header">
                  <Header1 />
                  <div className="bg-[#c6c6c6] h-px shrink-0 w-full" data-name="footer/assets/border" />
                </div>
                <div className="content-stretch flex items-start py-[4px] relative shrink-0 w-full" data-name="footer/links/link/text">
                  <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
                    <p className="leading-[16px]">Footer Link</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start py-[4px] relative shrink-0 w-full" data-name="footer/links/link/text">
                  <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
                    <p className="leading-[16px]">Footer Link</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start py-[4px] relative shrink-0 w-full" data-name="footer/links/link/text">
                  <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
                    <p className="leading-[16px]">Footer Link</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start py-[4px] relative shrink-0 w-full" data-name="footer/links/link/text">
                  <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
                    <p className="leading-[16px]">Footer Link</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start py-[4px] relative shrink-0 w-full" data-name="footer/links/link/text">
                  <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
                    <p className="leading-[16px]">Footer Link</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[352px]" data-name="footer/links/link">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="footer/links/header">
                  <Header2 />
                  <div className="bg-[#c6c6c6] h-px shrink-0 w-full" data-name="footer/assets/border" />
                </div>
                <div className="content-stretch flex items-start py-[4px] relative shrink-0 w-full" data-name="footer/links/link/text">
                  <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
                    <p className="leading-[16px]">Footer Link</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start py-[4px] relative shrink-0 w-full" data-name="footer/links/link/text">
                  <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
                    <p className="leading-[16px]">Footer Link</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start py-[4px] relative shrink-0 w-full" data-name="footer/links/link/text">
                  <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
                    <p className="leading-[16px]">Footer Link</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[352px]" data-name="footer/links/link">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="footer/links/header">
                  <Header3 />
                  <div className="bg-[#c6c6c6] h-px shrink-0 w-full" data-name="footer/assets/border" />
                </div>
                <div className="content-stretch flex h-[24px] items-start py-[4px] relative shrink-0 w-full" data-name="footer/links/link/text">
                  <ButtonText />
                </div>
                <div className="content-stretch flex gap-[8px] items-start py-[4px] relative shrink-0 w-full" data-name="footer/links/link/text">
                  <div className="relative shrink-0 size-[16px]" data-name="Component 2">
                    <div className="absolute inset-[12.5%_12.5%_12.72%_12.5%]" data-name="Fill">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11.9651">
                        <path clipRule="evenodd" d={svgPaths.pc30edf0} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Fill" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
                    <p className="leading-[16px]">LinkedIn</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-start py-[4px] relative shrink-0 w-full" data-name="footer/links/link/text">
                  <div className="relative shrink-0 size-[16px]" data-name="Component 2">
                    <div className="absolute inset-[22.07%_15.63%_22.06%_15.63%]" data-name="Fill">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8.93862">
                        <path clipRule="evenodd" d={svgPaths.p35dda140} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Fill" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
                    <p className="leading-[16px]">Twitter</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-start py-[4px] relative shrink-0 w-full" data-name="footer/links/link/text">
                  <div className="relative shrink-0 size-[16px]" data-name="Component 2">
                    <div className="absolute inset-[12.5%]" data-name="Fill">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <path clipRule="evenodd" d={svgPaths.p3248ba80} fill="var(--fill-0, #525252)" fillRule="evenodd" id="Fill" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Apercu_Avnet:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[13px] whitespace-nowrap">
                    <p className="leading-[16px]">Facebook</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="footer/assets/accreditation+card-symbols">
          <div className="flex flex-row justify-center size-full">
            <div className="content-stretch flex items-start justify-center px-[40px] relative w-full">
              <Frame1 />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="footer/horizontal-links+legal">
          <div className="relative shrink-0 w-full" data-name="footer/links-horizontal">
            <div className="flex flex-row justify-center size-full">
              <div className="content-stretch flex items-start justify-center px-[40px] relative w-full">
                <Links />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="footer/legal">
            <div className="flex flex-row justify-center size-full">
              <div className="content-stretch flex items-start justify-center px-[40px] relative w-full">
                <div className="font-['Apercu_Avnet:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#525252] text-[12px] w-[1504px] whitespace-pre-wrap">
                  <p className="mb-0">{`Company Information © 2022 Company Name. All Rights Reserved. `}</p>
                  <p className="mb-0">Trading name information.</p>
                  <p>Registered number: XXXXXX | Registered office: Address, City, POSTCODE, Country.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full">
      
      <Frame20 />
    </div>
  );
}