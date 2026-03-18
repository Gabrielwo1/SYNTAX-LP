import imgMockupPleno1 from "@/assets/5d05d88f3569fd2e53fd01a0f39dad226f96580b.png";
import imgPleno3 from "@/assets/740aa747a05a887ca5af6975d63a0b49c57e82c8.png";

export default function Group1000003074() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#2da78d] h-[393px] left-0 top-0 w-[589px]" />
      <div className="absolute h-[393px] left-0 top-0 w-[589px]" data-name="mockup pleno 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-[-0.07%] w-[100.07%]" src={imgMockupPleno1} />
        </div>
      </div>
      <div className="absolute h-[47px] left-[9px] top-[7px] w-[79px]" data-name="pleno 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.17%] left-[-7.31%] max-w-none top-[-1.09%] w-[107.31%]" src={imgPleno3} />
        </div>
      </div>
    </div>
  );
}