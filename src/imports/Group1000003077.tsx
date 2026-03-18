import imgFkAdvogadosPng1 from "@/assets/f684c88f613e495a4d01fa8cd7085539be06fa1b.png";
import imgFk2 from "@/assets/cb3f3e305ce5938d2d97ae6c3686fb83db57af0d.png";
import imgFk11 from "@/assets/a6dfac1bec03657669a4ec1cc8d18f7854580f54.png";

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="h-[43px] relative shrink-0 w-[148px]" data-name="FK ADVOGADOS PNG 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFkAdvogadosPng1} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-[19px] top-[11px]">
      <Frame />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[389.266px] left-0 top-0 w-[567.125px]" data-name="Container">
      <div className="absolute flex h-[368.697px] items-center justify-center left-[211px] top-[11px] w-[243.764px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[8.12deg]">
          <div className="h-[344.301px] w-[197.087px]" data-name="X trade 1" />
        </div>
      </div>
      <Frame1 />
      <div className="absolute h-[307px] left-[29px] top-[82px] w-[256px]" data-name="sasa 1" />
      <div className="absolute flex h-[389.997px] items-center justify-center left-[322px] top-0 w-[244.972px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.08deg]">
          <div className="h-[389.641px] relative w-[244.404px]" data-name="Fk 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[132.46%] left-0 max-w-none top-[-32.46%] w-full" src={imgFk2} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[390px] left-[196px] top-0 w-[309px]" data-name="Fk-1 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[158.35%] left-[-0.03%] max-w-none top-[-58.35%] w-[100.05%]" src={imgFk11} />
        </div>
      </div>
      <div className="absolute h-[296px] left-[19px] top-[94px] w-[249px]" data-name="Fk 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[177.66%] left-[-0.09%] max-w-none top-0 w-[100.17%]" src={imgFk2} />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Container />
    </div>
  );
}

export default function Group1000003077() {
  return (
    <div className="relative w-[567px] h-[390px] overflow-hidden">
      <Group />
      <div className="absolute h-[388px] left-[311px] top-px w-[256px]" data-name="Home 2" />
    </div>
  );
}