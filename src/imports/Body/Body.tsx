import svgPaths from "./svg-ytvy8pi29p";
import imgAlexanderSterlingMoss from "./0f082bab6296279a06b37e2adcd7c1bc9b7c3632.png";

function AlexanderSterlingMoss() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Alexander Sterling-Moss">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAlexanderSterlingMoss} />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bottom-[8px] h-[20.25px] right-[8px] w-[20.833px]" data-name="Background">
      <div className="absolute inset-[-9.88%_-58.5%_-107.41%_-57.6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.02 44">
          <g id="Background">
            <rect fill="var(--fill-0, #004AC6)" height="20.25" rx="6" width="20.8333" x="12" y="2" />
            <g filter="url(#filter0_dd_10_263)" id="Overlay+Shadow">
              <rect fill="var(--fill-0, white)" fillOpacity="0.01" height="20" rx="6" shapeRendering="crispEdges" width="21.02" x="12" y="2" />
            </g>
            <path d={svgPaths.p2c1a8940} fill="var(--fill-0, white)" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44" id="filter0_dd_10_263" width="45.02" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="4" result="effect1_dropShadow_10_263" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_10_263" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="3" result="effect2_dropShadow_10_263" />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="7.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_10_263" mode="normal" result="effect2_dropShadow_10_263" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_10_263" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[12px] shadow-[0px_20px_40px_0px_rgba(0,74,198,0.05)] shrink-0 size-[160px]" data-name="Overlay+Shadow">
      <AlexanderSterlingMoss />
      <Background />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[36px] tracking-[-0.9px] w-full">
        <p className="leading-[40px]">John Alfred Lim</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[16px] w-full">
        <p className="leading-[24px]">Owner • Emerald Rice Milling</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container4 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#dbe1ff] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#00174b] text-[12px] tracking-[-0.3px] w-[105.73px]">
          <p className="leading-[16px]">CLASS-A MEMBER</p>
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#e8e8e8] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] tracking-[-0.3px] w-[126.98px]">
          <p className="leading-[16px]">VOTING POWER: 4.2%</p>
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#e8e8e8] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] tracking-[-0.3px] w-[97.63px]">
          <p className="leading-[16px]">ID: #ASM-992-01</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <Background2 />
      <Background3 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[11.5px] pt-[10.5px] px-[24px] relative rounded-[8px] shrink-0" style={{ backgroundImage: "linear-gradient(165.542deg, rgb(0, 74, 198) 0%, rgb(37, 99, 235) 100%)" }} data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[114.89px]">
        <p className="leading-[20px]">Execute Transfer</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[25px] py-[11px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(195,198,215,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] text-center w-[105.83px]">
        <p className="leading-[20px]">Freeze Account</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Container">
      <Container3 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="col-[1/span_8] content-stretch flex gap-[32px] h-[174px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <OverlayShadow />
      <Container2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[10px] tracking-[1px] uppercase w-[92.39px]">
        <p className="leading-[15px]">Financial DNA</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="var(--fill-0, #004AC6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[30px] w-full">
        <p className="leading-[36px]">Php 204,950.00</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.p1f49bc80} fill="var(--fill-0, #16A34A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[12px] w-[45.19px]">
        <p className="leading-[16px]">+12.4%</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] w-[82.2px]">
        <p className="leading-[16px]">this fiscal year</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] w-[79.11px]">
        <p className="leading-[16px]">Liquid Capital</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[12px] w-[27.22px]">
        <p className="leading-[16px]">62%</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#eee] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#004ac6] inset-[0_38%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Background4 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] w-[79.97px]">
        <p className="leading-[16px]">Staked Equity</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[12px] w-[27.38px]">
        <p className="leading-[16px]">38%</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[16px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#eee] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#b4c5ff] inset-[0_62.01%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Background5 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[8px] relative size-full">
        <Container16 />
        <Container20 />
      </div>
    </div>
  );
}

function FinancialDnaBentoComponent() {
  return (
    <div className="bg-white col-[9/span_4] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Financial DNA (Bento Component)">
      <div aria-hidden="true" className="absolute border border-[rgba(195,198,215,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_40px_0px_rgba(0,74,198,0.05)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative size-full">
        <Container7 />
        <Container10 />
        <Container15 />
      </div>
    </div>
  );
}

function HeroProfileSection() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_266px] relative shrink-0 w-full" data-name="Hero Profile Section">
      <Container1 />
      <FinancialDnaBentoComponent />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[20px] w-[217.39px]">
        <p className="leading-[28px]">Allocated Sub-Wallets</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#004ac6] text-[12px] w-[108.88px]">
        <p className="leading-[16px]">View Ledger Detail</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container25 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[18px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18">
        <g id="Container">
          <path d={svgPaths.p53fc80} fill="var(--fill-0, #004AC6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(0,74,198,0.05)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Overlay">
      <Container28 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Overlay />
        <div className="relative shrink-0 size-[18px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p22fc1b80} fill="var(--fill-0, #434655)" fillOpacity="0.4" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] tracking-[-0.6px] uppercase w-full">
          <p className="leading-[16px]">warehouse renovation</p>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[20px] w-full">
          <p className="leading-[28px]">Php 50,000.00</p>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[10px] w-[117.34px]">
        <p className="leading-[15px]">Primary Liquidity Source</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pt-[12px] relative size-full">
        <div className="bg-[#004ac6] h-[4px] rounded-[9999px] shrink-0 w-[48px]" data-name="Background" />
        <Container32 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(195,198,215,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[21px] relative size-full">
        <Container27 />
        <Container29 />
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[19px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
        <g id="Container">
          <path d={svgPaths.p19ed9400} fill="var(--fill-0, #AE0010)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(174,0,16,0.05)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Overlay">
      <Container34 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Overlay1 />
        <div className="relative shrink-0 size-[18px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p22fc1b80} fill="var(--fill-0, #434655)" fillOpacity="0.4" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] tracking-[-0.6px] uppercase w-full">
          <p className="leading-[16px]">legal fees</p>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[20px] w-full">
          <p className="leading-[28px]">Php 10,000.00</p>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[10px] w-[102.8px]">
        <p className="leading-[15px]">Locked until Q4 2024</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pt-[12px] relative size-full">
        <div className="bg-[#ae0010] h-[4px] rounded-[9999px] shrink-0 w-[48px]" data-name="Background" />
        <Container38 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(195,198,215,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[21px] relative size-full">
        <Container33 />
        <Container35 />
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p30837e80} fill="var(--fill-0, #16A34A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(34,197,94,0.05)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Overlay">
      <Container40 />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Overlay2 />
        <div className="relative shrink-0 size-[18px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p22fc1b80} fill="var(--fill-0, #434655)" fillOpacity="0.4" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] tracking-[-0.6px] uppercase w-full">
          <p className="leading-[16px]">equipment purchases</p>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[20px] w-full">
          <p className="leading-[28px]">Php 154,950.00</p>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[10px] w-[112.08px]">
        <p className="leading-[15px]">Yield distribution active</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pt-[12px] relative size-full">
        <div className="bg-[#22c55e] h-[4px] rounded-[9999px] shrink-0 w-[48px]" data-name="Background" />
        <Container44 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(195,198,215,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[21px] relative size-full">
        <Container39 />
        <Container41 />
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[33px] relative shrink-0 w-[25px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 33">
        <g id="Margin">
          <path d={svgPaths.p2e1e2d00} fill="var(--fill-0, #434655)" fillOpacity="0.6" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(67,70,85,0.6)] w-[159.38px]">
          <p className="leading-[20px]">Deploy New Sub-Wallet</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f3f3f3] col-2 justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#c3c6d7] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[21px] py-[56.5px] relative size-full">
          <Margin />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__177px_177px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[18px] w-full">
          <p className="leading-[28px]">Recent Governance Activity</p>
        </div>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#004ac6] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background">
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_0px_0px_4px_rgba(0,74,198,0.1)] size-[12px] top-0" data-name="Overlay+Shadow" />
    </div>
  );
}

function Margin1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[2px]" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center py-[4px] relative size-full">
          <div className="bg-[rgba(195,198,215,0.2)] flex-[1_0_0] min-h-px w-[2px]" data-name="Vertical Divider" />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <Background6 />
      <Margin1 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] w-[160.47px]">
        <p className="leading-[20px]">Voted YES on Prop-242</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[10px] w-[68.91px]">
        <p className="leading-[15px]">2 HOURS AGO</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] w-full">
        <p className="leading-[16px]">Expansion of Latin American Infrastructure Fund.</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] relative size-full">
        <Container50 />
        <Container53 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#c3c6d7] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background">
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_0px_0px_4px_rgba(195,198,215,0.1)] size-[12px] top-0" data-name="Overlay+Shadow" />
    </div>
  );
}

function Margin2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[2px]" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center py-[4px] relative size-full">
          <div className="bg-[rgba(195,198,215,0.2)] flex-[1_0_0] min-h-px w-[2px]" data-name="Vertical Divider" />
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <Background7 />
      <Margin2 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] w-[236.91px]">
        <p className="leading-[20px]">{`Co-authored "Security Protocol 9"`}</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[10px] w-[65.97px]">
        <p className="leading-[15px]">OCT 12, 2023</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] w-full">
        <p className="leading-[16px]">Member initiated a security hardening proposal for hot-wallets.</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] relative size-full">
        <Container57 />
        <Container60 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#c3c6d7] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background">
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_0px_0px_4px_rgba(195,198,215,0.1)] size-[12px] top-0" data-name="Overlay+Shadow" />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <Background8 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] w-[141.92px]">
        <p className="leading-[20px]">Abstain on Prop-239</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[10px] w-[68.39px]">
        <p className="leading-[15px]">OCT 08, 2023</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] w-full">
        <p className="leading-[16px]">Liquidity pooling for secondary market debt.</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative self-stretch" data-name="Container">
      <Container64 />
      <Container67 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container47 />
        <Container54 />
        <Container61 />
      </div>
    </div>
  );
}

function GovernanceActivityPerspectiveLayout() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Governance Activity (Perspective Layout)">
      <div aria-hidden="true" className="absolute border border-[rgba(195,198,215,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_40px_0px_rgba(0,74,198,0.05)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative size-full">
        <Heading2 />
        <Container46 />
      </div>
    </div>
  );
}

function SubWalletsAsymmetricList() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[14.25px] relative row-1 self-start shrink-0" data-name="Sub-Wallets (Asymmetric List)">
      <Container24 />
      <Container26 />
      <GovernanceActivityPerspectiveLayout />
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.pea74a00} fill="var(--fill-0, #AE0010)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[18px] w-[176.25px]">
        <p className="leading-[28px]">Compliance Dossier</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Container69 />
        <Heading3 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#ae0010] text-[12px] tracking-[0.6px] uppercase w-[115.56px]">
        <p className="leading-[16px]">KYC/AML STATUS</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[10px] uppercase w-[45.78px]">
        <p className="leading-[15px]">Verified</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pr-[0.01px] relative size-full">
          <Container71 />
          <Overlay3 />
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#93000b] text-[10px] w-full">
          <p className="leading-[16.25px] mb-0">Last audit completed 14 days ago. Zero</p>
          <p className="leading-[16.25px] mb-0">high-risk flags detected in cross-jurisdiction</p>
          <p className="leading-[16.25px]">scans.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(213,32,34,0.05)] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(174,0,16,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container70 />
        <Container72 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] w-[98.14px]">
          <p className="leading-[16px]">Onboarding Date</p>
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[12px] w-[72.14px]">
          <p className="leading-[16px]">Jan 12, 2019</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(195,198,215,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[9px] pr-[0.01px] pt-[8px] relative size-full">
          <Container74 />
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] w-[61.13px]">
          <p className="leading-[16px]">Risk Score</p>
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[12px] w-[74.83px]">
          <p className="leading-[16px]">Low (12/100)</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[9px] pt-[8px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(195,198,215,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container76 />
      <Container77 />
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] w-[84.05px]">
          <p className="leading-[16px]">Tax Residency</p>
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Malaybalay, Bukidnon</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(195,198,215,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[9px] pt-[8px] relative size-full">
          <Container78 />
          <Container79 />
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] w-[99.73px]">
          <p className="leading-[16px]">Source of Wealth</p>
        </div>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Real Estate/Business</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(195,198,215,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[9px] pr-[0.01px] pt-[8px] relative size-full">
          <Container80 />
          <Container81 />
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <HorizontalBorder />
        <HorizontalBorder1 />
        <HorizontalBorder2 />
        <HorizontalBorder3 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.pc679c40} fill="var(--fill-0, #434655)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] text-center w-[93.88px]">
        <p className="leading-[16px]">Annual Tax Cert</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex gap-[11.99px] items-center relative shrink-0" data-name="Container">
      <Container84 />
      <Container85 />
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.p21f4d300} fill="var(--fill-0, #434655)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f3f3f3] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <Container83 />
          <Container86 />
        </div>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p5df7b00} fill="var(--fill-0, #434655)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] text-center w-[97.13px]">
        <p className="leading-[16px]">Bank Attestation</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex gap-[11.99px] items-center relative shrink-0" data-name="Container">
      <Container88 />
      <Container89 />
    </div>
  );
}

function Container90() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.p21f4d300} fill="var(--fill-0, #434655)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f3f3f3] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <Container87 />
          <Container90 />
        </div>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pt-[8px] relative size-full">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(195,198,215,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_40px_0px_rgba(0,74,198,0.05)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative size-full">
        <Container68 />
        <OverlayBorder />
        <Container73 />
        <Container82 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">Institutional Alert</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 pb-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-full">
        <p className="leading-[19.5px] mb-0">Passport expires in 42 days. Triggering</p>
        <p className="leading-[19.5px] mb-0">automated notification sequence for</p>
        <p className="leading-[19.5px]">document renewal.</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#ae0010] text-[12px] text-center w-[87.14px]">
        <p className="leading-[16px]">Renew Dossier</p>
      </div>
    </div>
  );
}

function WarningAlertCard() {
  return (
    <div className="bg-[#ae0010] relative rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Warning / Alert Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
          <Heading4 />
          <Container91 />
          <div className="absolute bottom-[-0.5px] h-[95px] right-[-10.98px] w-[110px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 95">
              <path d={svgPaths.p54ffee0} fill="var(--fill-0, white)" id="Icon" opacity="0.1" />
            </svg>
          </div>
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function ComplianceDossierTheSideRail() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Compliance Dossier (The Side Rail)">
      <BackgroundBorderShadow />
      <WarningAlertCard />
    </div>
  );
}

function SectionGridLayoutForSubWalletsAndCompliance() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_762.25px] relative shrink-0 w-full" data-name="Section - Grid Layout for Sub-wallets and Compliance">
      <SubWalletsAsymmetricList />
      <ComplianceDossierTheSideRail />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1400px] relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] p-[32px] relative size-full">
        <HeroProfileSection />
        <SectionGridLayoutForSubWalletsAndCompliance />
      </div>
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="content-stretch flex flex-col isolate items-start min-h-[1188px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <Container />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-start pl-[256px] relative size-full" data-name="Body">
      <MainContentCanvas />
    </div>
  );
}