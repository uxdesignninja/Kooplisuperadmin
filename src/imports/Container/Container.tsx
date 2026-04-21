import svgPaths from "./svg-dup5a965jg";

function Text() {
  return (
    <div className="h-[18px] relative shrink-0 w-[24.195px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#111827] text-[12px] top-[0.5px] whitespace-nowrap">9:41</p>
      </div>
    </div>
  );
}

function Container4() {
  return <div className="bg-[#111827] h-[6px] rounded-[16777200px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container5() {
  return <div className="bg-[#111827] h-[8px] rounded-[16777200px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container6() {
  return <div className="bg-[#111827] h-[10px] rounded-[16777200px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container7() {
  return <div className="bg-[#111827] flex-[1_0_0] h-[12px] min-w-px rounded-[16777200px]" data-name="Container" />;
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[2px] h-[12px] items-start left-0 top-0 w-[14px]" data-name="Container">
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return <div className="bg-[#111827] h-[4px] rounded-[1px] shrink-0 w-full" data-name="Container" />;
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[10px] items-start left-[20px] pb-px pl-[3px] pr-[3.797px] pt-[3px] rounded-[12px] top-px w-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#111827] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container9 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[12px] relative shrink-0 w-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container3 />
        <Container8 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[4px] pt-[12px] px-[32px] relative size-full">
          <Text />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[26.398px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26.4px] left-0 not-italic text-[#111827] text-[17.6px] top-[-0.5px] whitespace-nowrap">My Goals</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[19.195px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.2px] left-0 not-italic text-[#6b7085] text-[12.8px] top-[-0.5px] whitespace-nowrap">Start saving towards something meaningful.</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[294_0_0] h-[45.594px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 4.16667V15.8333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonCreateGoal() {
  return (
    <div className="relative rounded-[20px] shadow-[0px_4px_14px_0px_rgba(10,10,111,0.25)] shrink-0 size-[44px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(21, 101, 192) 0%, rgb(45, 45, 158) 100%)" }} data-name="Button - Create Goal">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[81.594px] relative shrink-0 w-[390px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pb-[16px] pt-[20px] px-[20px] relative size-full">
        <Container12 />
        <ButtonCreateGoal />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p25667780} id="Vector" stroke="var(--stroke-0, #1565C0)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="2.25" />
          <path d={svgPaths.p1747f000} id="Vector_2" stroke="var(--stroke-0, #1565C0)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="2.25" />
          <path d={svgPaths.p3ee2f100} id="Vector_3" stroke="var(--stroke-0, #1565C0)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[rgba(10,10,111,0.06)] content-stretch flex items-center justify-center left-[131px] px-[22px] rounded-[24px] size-[80px] top-[48px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[25.195px] left-[120.48px] top-[148px] w-[101.031px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25.2px] left-[51.5px] not-italic text-[#111827] text-[16.8px] text-center top-[-1px] whitespace-nowrap">No goals yet</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[40.797px] left-[51px] top-[181.2px] w-[240px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.4px] left-[120px] not-italic text-[#6b7085] text-[13.6px] text-center top-[-0.5px] w-[240px]">Create your first savings goal and start tracking your progress.</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[24px] size-[16px] top-[16.8px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[49.594px] left-[88.17px] rounded-[16px] shadow-[0px_6px_20px_0px_rgba(10,10,111,0.22)] top-[245.99px] w-[165.648px]" style={{ backgroundImage: "linear-gradient(163.333deg, rgb(21, 101, 192) 0%, rgb(45, 45, 158) 100%)" }} data-name="Button">
      <Icon2 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.6px] left-[95px] not-italic text-[14.4px] text-center text-white top-[14px] whitespace-nowrap">Create a Goal</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[343.586px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Paragraph2 />
      <Paragraph3 />
      <Button />
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[667.406_0_0] min-h-px relative w-[390px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip px-[24px] relative rounded-[inherit] size-full">
        <Container14 />
      </div>
    </div>
  );
}

function GoalsScreen() {
  return (
    <div className="absolute bg-[#faf9f7] content-stretch flex flex-col h-[749px] items-start left-0 top-0 w-[390px]" data-name="GoalsScreen">
      <Container11 />
      <Container13 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2bbf6680} id="Vector" stroke="var(--stroke-0, #B0B3BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p206ad900} id="Vector_2" stroke="var(--stroke-0, #B0B3BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[33.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[17px] not-italic text-[#b0b3be] text-[12px] text-center top-[0.5px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[54px] items-center justify-center left-[39.74px] px-[12px] py-[4px] top-[12px] w-[57.625px]" data-name="Button">
      <Icon3 />
      <Text1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #1565C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3c6311f0} id="Vector_2" stroke="var(--stroke-0, #1565C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3d728000} id="Vector_3" stroke="var(--stroke-0, #1565C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[33.039px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[17.5px] not-italic text-[#1565c0] text-[12px] text-center top-[0.5px] whitespace-nowrap">Goals</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[54px] items-center justify-center left-[128.86px] px-[12px] py-[4px] top-[12px] w-[57.039px]" data-name="Button">
      <Icon4 />
      <Text2 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p296ad200} id="Vector" stroke="var(--stroke-0, #B0B3BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M20 3V7" id="Vector_2" stroke="var(--stroke-0, #B0B3BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M22 5H18" id="Vector_3" stroke="var(--stroke-0, #B0B3BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M4 17V19" id="Vector_4" stroke="var(--stroke-0, #B0B3BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M5 18H3" id="Vector_5" stroke="var(--stroke-0, #B0B3BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[11.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[6px] not-italic text-[#b0b3be] text-[12px] text-center top-[0.5px] whitespace-nowrap">AI</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[54px] items-center justify-center left-[217.39px] px-[12px] py-[4px] top-[12px] w-[48px]" data-name="Button">
      <Icon5 />
      <Text3 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3d96f400} id="Vector" stroke="var(--stroke-0, #B0B3BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p19719a00} id="Vector_2" stroke="var(--stroke-0, #B0B3BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p190dfa00} id="Vector_3" stroke="var(--stroke-0, #B0B3BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[29.352px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[15px] not-italic text-[#b0b3be] text-[12px] text-center top-[0.5px] whitespace-nowrap">More</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[54px] items-center justify-center left-[296.88px] px-[12px] py-[4px] top-[12px] w-[53.352px]" data-name="Button">
      <Icon6 />
      <Text4 />
    </div>
  );
}

function BottomNav() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] border-[rgba(17,24,39,0.06)] border-solid border-t h-[79px] left-0 top-[670px] w-[390px]" data-name="BottomNav">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[749px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <GoalsScreen />
      <BottomNav />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#faf9f7] content-stretch flex flex-col items-start overflow-clip relative rounded-[40px] shadow-[0px_25px_50px_-12px_rgba(10,10,111,0.12)] size-full" data-name="Container">
      <Container1 />
      <Container10 />
    </div>
  );
}