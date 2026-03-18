export default function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[20.813px] items-start not-italic relative size-full">
      <p className="h-[87.415px] leading-[0] relative shrink-0 text-[#cacaca] text-[58.832px] w-full">
        <span className="leading-[normal]">{`Gabriel `}</span>
        <span className="font-['Poppins:Bold',sans-serif] leading-[normal]">Oliveira</span>
      </p>
      <p className="h-[77.229px] leading-[normal] relative shrink-0 text-[51.977px] text-white w-[939.616px]">{`UX/UI Sênior `}</p>
      <p className="h-[102.532px] leading-[1.42] relative shrink-0 text-[29.477px] text-white w-[952.616px]">{`Apaixonado por conhecer e mergulhar comportamento humano, através da Psicologia & Ux/Ui!`}</p>
    </div>
  );
}