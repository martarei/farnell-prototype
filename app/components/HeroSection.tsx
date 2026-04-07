import { ChevronRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="max-w-[1584px] mx-auto px-[40px] py-[24px]">
      <div className="content-stretch flex gap-[16px] items-start pb-[64px] pt-[32px] relative w-full">
        {/* Big Cell - Left Side */}
        <div className="bg-[#161616] flex-[1_0_0] h-[496px] min-h-px min-w-px relative">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[32px] items-center p-[32px] relative size-full">
              {/* Main Banner Content */}
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[19px] h-full items-start justify-center min-h-px min-w-px relative">
                <div className="bg-[#c4c4c4] h-[48px] shrink-0 w-[160px]" />
                <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[24px] text-white tracking-[-0.3px] w-[min-content]">Molex microminiature solutions</p>
                <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3px] w-[min-content]">High performance in a small space for connected devices</p>
                <div className="content-stretch flex h-[48px] items-center relative shrink-0">
                  <div className="bg-white content-stretch flex h-full items-center overflow-clip relative rounded-[4px] shrink-0">
                    <div className="content-stretch flex items-center px-[16px] relative shrink-0">
                      <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">Learn more</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hidden Banner for spacing */}
              <div className="flex-[1_0_0] h-full min-h-px min-w-px opacity-0" />
            </div>
          </div>
        </div>

        {/* 2xrows - Right Side */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[496px] items-start min-h-px min-w-px relative">
          {/* Top Row */}
          <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative w-full">
            {/* Top Left Cell - Dark */}
            <div className="bg-[#161616] flex-[1_0_0] h-full min-h-px min-w-px relative">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[16px] py-[16px] relative size-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative">
                    <div className="bg-[#c4c4c4] h-[24px] shrink-0 w-[80px]" />
                    <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3px] w-[min-content]">Molex microminiature solutions</p>
                    <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[13px] text-white w-[min-content]">High performance in a small space for connected devices</p>
                    <div className="content-stretch flex h-[32px] items-center relative shrink-0">
                      <div className="h-full relative rounded-[4px] shrink-0">
                        <div className="content-stretch flex h-full items-center overflow-clip relative rounded-[inherit]">
                          <div className="content-stretch flex items-center px-[12px] relative shrink-0">
                            <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Learn more</p>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] h-[184px] min-h-px min-w-px opacity-0" />
                </div>
              </div>
            </div>

            {/* Top Right Cell - White */}
            <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative">
              <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[16px] py-[16px] relative size-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative">
                    <div className="bg-[#c4c4c4] h-[24px] shrink-0 w-[80px]" />
                    <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[#161616] text-[16px] tracking-[-0.3px] w-[min-content]">{`Introducing the R&S®LCX LCR`}</p>
                    <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#161616] text-[13px] w-[min-content] whitespace-pre-wrap">
                      {`Fast, accurate measurements `}
                      <br aria-hidden="true" />
                      for challenging applications
                    </p>
                    <div className="content-stretch flex h-[32px] items-center relative shrink-0">
                      <div className="h-full relative rounded-[4px] shrink-0">
                        <div className="content-stretch flex h-full items-center overflow-clip relative rounded-[inherit]">
                          <div className="content-stretch flex items-center px-[12px] relative shrink-0">
                            <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">Learn more</p>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#161616] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] h-[184px] min-h-px min-w-px opacity-0" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative w-full">
            {/* Bottom Left Cell - White */}
            <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative">
              <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[16px] py-[16px] relative size-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative">
                    <div className="bg-[#c4c4c4] h-[24px] shrink-0 w-[80px]" />
                    <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[#161616] text-[16px] tracking-[-0.3px] w-[min-content]">Edge computing solutions for smart manufacturing</p>
                    <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#161616] text-[13px] w-[min-content]">We are INDUSTRIAL</p>
                    <div className="content-stretch flex h-[32px] items-center relative shrink-0">
                      <div className="h-full relative rounded-[4px] shrink-0">
                        <div className="content-stretch flex h-full items-center overflow-clip relative rounded-[inherit]">
                          <div className="content-stretch flex items-center px-[12px] relative shrink-0">
                            <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">Learn more</p>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#161616] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] h-[184px] min-h-px min-w-px opacity-0" />
                </div>
              </div>
            </div>

            {/* Bottom Right Cell - Dark */}
            <div className="bg-[#161616] flex-[1_0_0] h-full min-h-px min-w-px relative">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[16px] py-[16px] relative size-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative">
                    <div className="bg-[#c4c4c4] h-[24px] shrink-0 w-[80px]" />
                    <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3px] w-[min-content] whitespace-pre-wrap">
                      {`High power chip resistors in small `}
                      <br aria-hidden="true" />
                      case sizes
                    </p>
                    <p className="font-['Apercu_Avnet:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[13px] text-white w-[min-content]">Compact. Reliable. Powerful.</p>
                    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-[141px]">
                      <div className="h-full relative rounded-[4px] shrink-0">
                        <div className="content-stretch flex h-full items-center overflow-clip relative rounded-[inherit]">
                          <div className="content-stretch flex items-center px-[12px] relative shrink-0">
                            <p className="font-['Apercu_Avnet:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Learn more</p>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] h-[184px] min-h-px min-w-px opacity-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}