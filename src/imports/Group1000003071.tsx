import imgImage11 from "@/assets/6206666ded2cd2e837bf6a846e7f20adba445400.png";
import imgPrancheta23 from "@/assets/be2c439f1fe52087c8979f9d310dc4f8ad3d37d5.png";
import imgDesktop4833 from "@/assets/a8afaee2f32908376814c1843ddb7c02f17f02a7.png";
import imgDesktop484 from "@/assets/46045ce2c33a66973805c5c367a6a8ae2600620b.png";

function Frame() {
  return (
    <div className="content-stretch flex h-[61px] items-center relative shrink-0">
      <div className="h-[46px] relative shrink-0 w-[121px]" data-name="Prancheta 2 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[340.8%] left-[-42.32%] max-w-none top-[-121.98%] w-[184.49%]" src={imgPrancheta23} />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-start justify-center left-[19px] top-[11px]">
      <div className="h-[32px] relative shrink-0 w-[226px]" data-name="image 11">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
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
      <div className="absolute h-[389px] left-[264px] top-0 w-[303px]" data-name="Desktop - 483 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[143.11%] left-0 max-w-none top-[-9.56%] w-full" src={imgDesktop4833} />
        </div>
      </div>
      <div className="absolute h-[317px] left-[57px] top-[72px] w-[330px]" data-name="Desktop - 48 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[199.15%] left-0 max-w-none top-[-0.01%] w-full" src={imgDesktop484} />
        </div>
      </div>
    </div>
  );
}