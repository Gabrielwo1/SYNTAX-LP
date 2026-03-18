import imgLogoFundoEscuro from "figma:asset/36d0374d35daae4b332d990dc624bd7f3d80c276.png";
import imgLandingPage5 from "figma:asset/91d3acbc149747c51cd4188207a78e657b059d6d.png";

function Frame() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-[19px] top-[11px]">
      <div className="h-[56px] relative rounded-[30px] shrink-0 w-[120px]" data-name="Logo Fundo escuro">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
          <img alt="" className="absolute h-[153.98%] left-[-15.72%] max-w-none top-[-26.66%] w-[118.14%]" src={imgLogoFundoEscuro} />
        </div>
      </div>
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
      <Frame />
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

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
      <div className="absolute h-[389px] left-[264px] top-0 w-[303px]" data-name="Desktop - 483 3" />
      <div className="absolute h-[317px] left-[57px] top-[72px] w-[330px]" data-name="Desktop - 48 4" />
    </div>
  );
}

export default function Group1000003079() {
  return (
    <div className="relative w-[574px] h-[390px] overflow-hidden">
      <Group1 />
      <div className="absolute h-[389px] left-[365px] top-0 w-[209px]" data-name="Landing page 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[214.74%] left-[-30.24%] max-w-none top-[-110.32%] w-[141.68%]" src={imgLandingPage5} />
        </div>
      </div>
      <div className="absolute h-[389px] left-[222px] top-0 w-[233px]" data-name="Landing page 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[239.85%] left-[-30.31%] max-w-none top-[-65.81%] w-[142.01%]" src={imgLandingPage5} />
        </div>
      </div>
      <div className="absolute h-[292px] left-[19px] top-[97px] w-[286px]" data-name="Landing page 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[392.43%] left-[-30.31%] max-w-none top-0 w-[142.01%]" src={imgLandingPage5} />
        </div>
      </div>
    </div>
  );
}