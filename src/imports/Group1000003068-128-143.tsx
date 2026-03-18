import imgPrancheta23 from "figma:asset/be2c439f1fe52087c8979f9d310dc4f8ad3d37d5.png";
import imgXTrade24 from "figma:asset/fa7e0ff24b5fe4729d0e9280130a6335c3697d6d.png";
import imgXTrade221 from "figma:asset/84e94740cbedbbcf258246796618d24653a9259f.png";

function Frame() {
  return (
    <div className="absolute h-[61px] left-0 top-0 w-[121px]">
      <div className="absolute h-[46px] left-0 top-[7.5px] w-[121px]" data-name="Prancheta 2 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[340.8%] left-[-42.32%] max-w-none top-[-121.98%] w-[184.49%]" src={imgPrancheta23} />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[61px] left-[19px] top-[11px] w-[121px]">
      <Frame />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-black h-[389.266px] left-0 top-0 w-[567.125px]" data-name="Container">
      <Frame1 />
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
      <div className="absolute flex h-[369.252px] items-center justify-center left-[186.74px] top-[11px] w-[244.662px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[5.14deg]">
          <div className="h-[351.481px] relative w-[214.013px]" data-name="X trade 24">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[220.55%] left-[-0.15%] max-w-none top-[-120.58%] w-full" src={imgXTrade24} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[310px] left-[19px] top-[79px] w-[274px]" data-name="X trade 23">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[320.16%] left-[-0.25%] max-w-none top-[-0.49%] w-full" src={imgXTrade24} />
        </div>
      </div>
      <div className="absolute h-[389px] left-[349px] top-0 w-[218px]" data-name="X trade 22 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[193.3%] left-0 max-w-none top-[-2.64%] w-full" src={imgXTrade221} />
        </div>
      </div>
    </div>
  );
}