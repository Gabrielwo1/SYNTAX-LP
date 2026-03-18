function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[35px] h-[1555px] items-start min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none size-full">
          <div className="bg-[#202020] rounded-[61px] shadow-[0px_26px_4px_0px_rgba(0,0,0,0.07)] size-full" />
        </div>
      </div>
      <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none size-full">
          <div className="bg-[#464a45] rounded-[61px] shadow-[0px_26px_4px_0px_rgba(0,0,0,0.07)] size-full" />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[53px] h-[1555px] items-center min-h-px min-w-px relative">
      <div className="bg-[#094334] flex-[1_0_0] h-full min-h-px min-w-px rounded-[61px] shadow-[0px_26px_4px_0px_rgba(0,0,0,0.07)]" />
      <div className="bg-[#67c24e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[61px] shadow-[0px_26px_4px_0px_rgba(0,0,0,0.07)]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[35px] h-[1555px] items-start min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none size-full">
          <div className="bg-[#f5f5f5] rounded-[61px] shadow-[0px_26px_4px_0px_rgba(0,0,0,0.07)] size-full" />
        </div>
      </div>
      <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none size-full">
          <div className="bg-[#e1edde] rounded-[61px] shadow-[0px_26px_4px_0px_rgba(0,0,0,0.07)] size-full" />
        </div>
      </div>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex gap-[105px] items-center relative size-full">
      <Frame2 />
      <Frame1 />
      <Frame />
    </div>
  );
}