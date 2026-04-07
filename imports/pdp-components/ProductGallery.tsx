import svgPaths from "../svg-wt8pemywxi";
import imgScreenshot20260324At1147301 from "figma:asset/194cb70d43678ba2df1d4092d674b9559a965000.png";

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
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shadow-[0px_0px_1px_2px_#58b3f3] shrink-0 size-[56px]" data-name="img-holder">
      <div className="h-[56px] relative shrink-0 w-[62px]" data-name="Screenshot 2026-03-24 at 11.47.30 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260324At1147301} />
      </div>
    </div>
  );
}

function ThumbnailRow() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-start relative shrink-0 w-[344px]" data-name="thumbnail-row-01">
      <ImgHolder />
      <div className="flex h-[62px] items-center justify-center relative shrink-0 w-[56px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[56px] relative w-[62px]" data-name="Screenshot 2026-03-24 at 11.47.30 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260324At1147301} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductGallery() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[344px]" data-name="img-gallery">
      <Frame />
      <div className="aspect-[760/696] relative shrink-0 w-full" data-name="Screenshot 2026-03-24 at 11.47.30 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260324At1147301} />
      </div>
      <ThumbnailRow />
    </div>
  );
}
