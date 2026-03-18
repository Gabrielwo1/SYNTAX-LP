import imgSemFundo2Cores3 from "@/assets/baaf39fa0971b49293e17a95216f5893c53b917c.png";
import imgSasa2 from "@/assets/7dc47d66d53f980f6f1c40bd17786420b3e94a96.png";
import imgHome2 from "@/assets/2282149517060b183f3501395d3636358f009854.png";

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="h-[51px] relative shrink-0 w-[40px]" data-name="SEM-FUNDO-2-CORES 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[199.03%] left-[-198.96%] max-w-none top-[-8.47%] w-[515.27%]" src={imgSemFundo2Cores3} />
        </div>
      </div>
      <div className="h-[51px] relative shrink-0 w-[191px]" data-name="SEM-FUNDO-2-CORES 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[217.22%] left-[-6.85%] max-w-none top-[-108.96%] w-[116.57%]" src={imgSemFundo2Cores3} />
        </div>
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
    <div className="absolute bg-white h-[389.266px] left-0 top-0 w-[567.125px]" data-name="Container">
      <div className="absolute flex h-[368.697px] items-center justify-center left-[211px] top-[11px] w-[243.764px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[8.12deg]">
          <div className="h-[344.301px] w-[197.087px]" data-name="X trade 1" />
        </div>
      </div>
      <Frame1 />
      <div className="absolute h-[389px] left-[256px] top-px w-[256px]" data-name="sasa 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[185.32%] left-0 max-w-none top-[-85.09%] w-[99.94%]" src={imgSasa2} />
        </div>
      </div>
      <div className="absolute h-[307px] left-[29px] top-[82px] w-[256px]" data-name="sasa 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[234.82%] left-0 max-w-none top-0 w-[99.94%]" src={imgSasa2} />
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

export default function Group1() {
  return (
    <div className="relative size-full">
      <Group />
      <div className="absolute h-[388px] left-[311px] top-px w-[256px]" data-name="Home 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[171.96%] left-[-0.07%] max-w-none top-[-61.74%] w-full" src={imgHome2} />
        </div>
      </div>
    </div>
  );
}