import svgPaths from "./svg-l91hvn7tiu";
import imgUserProfile from "./b167d083fa3da792e23d7bedb2b0750f0f48b91b.png";
import imgFinancialAnalysisDashboard from "./7b5eca7ef2ca0691e4477cd9f557a2038f2717dc.png";

function Container() {
  return (
    <div className="relative shrink-0 size-[14.961px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9609 14.9609">
        <g id="Container">
          <path d={svgPaths.p235e09e0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonContextualFab() {
  return (
    <div className="absolute bg-[#004ac6] bottom-[96px] content-stretch flex items-center justify-center right-[32px] rounded-[9999px] size-[56px] z-[4]" data-name="Button - Contextual FAB">
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 right-0 rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,74,198,0.4)] size-[56px]" data-name="Button - Contextual FAB:shadow" />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[20px] text-center tracking-[-0.5px] w-[86.91px]">
        <p className="leading-[28px]">FICCO</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[207px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Search accounts...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex items-start justify-center overflow-clip pb-[8px] pl-[40px] pr-[16px] pt-[7px] relative rounded-[9999px] shrink-0 w-[256px]" data-name="Input">
      <Container5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Input />
      <div className="absolute bottom-[24.69%] flex items-center justify-center left-[15.9px] top-[24.69%] w-[16.2px]" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p8a35e00} fill="var(--fill-0, #737686)" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #434655)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="var(--fill-0, #434655)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <Container8 />
    </div>
  );
}

function UserProfile() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[40px]" data-name="User profile">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserProfile} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#eee] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function ImgUserProfileMargin() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start pl-[8px] relative shrink-0 w-[48px]" data-name="Img - User profile:margin">
      <UserProfile />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
      <ImgUserProfileMargin />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.8)] h-[64px] max-w-[1920px] relative shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full z-[3]" data-name="TopNavBar">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[32px] relative size-full">
          <Container1 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="var(--fill-0, #1D4ED8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1d4ed8] text-[14px] w-[73.02px]">
          <p className="leading-[20px]">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="bg-[#f3f3f3] relative rounded-[16px] shrink-0 w-full" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#1d4ed8] border-r-2 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[16px] pr-[18px] py-[12px] relative size-full">
          <Container10 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p39955c80} fill="var(--fill-0, #434655)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[14px] w-[63.28px]">
        <p className="leading-[20px]">Members</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container13 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p396ca1c0} fill="var(--fill-0, #434655)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[14px] w-[86.36px]">
        <p className="leading-[20px]">Transactions</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container16 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p15aec574} fill="var(--fill-0, #434655)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[14px] w-[79.55px]">
        <p className="leading-[20px]">Compliance</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container19 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #434655)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[14px] w-[54.92px]">
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container22 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <BackgroundVerticalBorder />
        <Container12 />
        <Container15 />
        <Container18 />
        <Container21 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20">
        <g id="Container">
          <path d={svgPaths.p2d9a1e80} fill="var(--fill-0, #434655)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[14px] w-[53.66px]">
        <p className="leading-[20px]">Support</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container25 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="var(--fill-0, #AE0010)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#ae0010] text-[14px] w-[46.7px]">
        <p className="leading-[20px]">Logout</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Container28 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(195,198,215,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[25px] relative size-full">
        <Container24 />
        <Container27 />
      </div>
    </div>
  );
}

function AsideSideNavBarPersistentOnDesktop() {
  return (
    <div className="absolute bg-[#eee] content-stretch flex flex-col h-[1600px] items-start left-0 pl-[16px] pr-[17px] py-[32px] top-[64px] w-[256px] z-[2]" data-name="Aside - SideNavBar (Persistent on Desktop)">
      <div aria-hidden="true" className="absolute border-[rgba(195,198,215,0.1)] border-r border-solid inset-0 pointer-events-none" />
      <Container9 />
      <HorizontalBorder />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[56px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[42px] tracking-[-1.4px] w-[465.89px]">
        <p className="leading-[56px]">Cooperative Summary</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[18px] w-[386.58px]">
        <p>
          <span className="leading-[28px]">{`Operational overview for `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic text-[#004ac6]">KOOPLI</span>
        </p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[465.89px]" data-name="Container">
      <Heading />
      <Container31 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[14px] text-center w-[116.63px]">
        <p className="leading-[20px]">Download Report</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[16px] shrink-0" style={{ backgroundImage: "linear-gradient(166.015deg, rgb(0, 74, 198) 0%, rgb(37, 99, 235) 100%)" }} data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,74,198,0.2),0px_4px_6px_-4px_rgba(0,74,198,0.2)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[128.67px]">
        <p className="leading-[20px]">New Disbursement</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Header">
      <Container30 />
      <Container32 />
    </div>
  );
}

function Container34() {
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
    <div className="bg-[rgba(0,74,198,0.1)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[48px]" data-name="Overlay">
      <Container34 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[12px] w-[39.61px]">
        <p className="leading-[16px]">+4.2%</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Overlay />
      <Background />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container33 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Total Liquidity</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[30px] w-full">
        <p className="leading-[36px]">$14.2M</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Heading2 />
    </div>
  );
}

function LiquidityCard() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[24px] row-1 self-start shadow-[0px_20px_40px_0px_rgba(0,74,198,0.05)] shrink-0" data-name="Liquidity Card">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Margin />
        <Container35 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[21px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
        <g id="Container">
          <path d={svgPaths.p29a42280} fill="var(--fill-0, #656464)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e5e2e1] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[48px]" data-name="Background">
      <Container38 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#eee] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] w-[37.53px]">
        <p className="leading-[16px]">Global</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <Background2 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container37 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Active Members</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[30px] w-full">
        <p className="leading-[36px]">8,422</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Heading3 />
    </div>
  );
}

function ActiveMembersCard() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[24px] row-1 self-start shadow-[0px_20px_40px_0px_rgba(0,74,198,0.05)] shrink-0" data-name="Active Members Card">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Margin1 />
        <Container39 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[21px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
        <g id="Container">
          <path d={svgPaths.p13774060} fill="var(--fill-0, #AE0010)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(213,32,34,0.1)] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[48px]" data-name="Overlay">
      <Container42 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#ae0010] text-[12px] w-[39.98px]">
        <p className="leading-[16px]">Urgent</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Overlay1 />
        <Background3 />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container41 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">KYC Approvals</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[30px] w-full">
        <p className="leading-[36px]">47</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Heading4 />
    </div>
  );
}

function KycCard() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[24px] row-1 self-start shadow-[0px_20px_40px_0px_rgba(0,74,198,0.05)] shrink-0" data-name="KYC Card">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Margin2 />
        <Container43 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
        <g id="Container">
          <path d={svgPaths.p33125000} fill="var(--fill-0, #004AC6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#dbe1ff] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[48px]" data-name="Background">
      <Container46 />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(219,225,255,0.5)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#004ac6] text-[12px] w-[48.52px]">
        <p className="leading-[16px]">Monthly</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Background4 />
      <Overlay2 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container45 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Monthly Volume</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[30px] w-full">
        <p className="leading-[36px]">$2.18M</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Heading5 />
    </div>
  );
}

function VolumeCard() {
  return (
    <div className="bg-white col-4 justify-self-stretch relative rounded-[24px] row-1 self-start shadow-[0px_20px_40px_0px_rgba(0,74,198,0.05)] shrink-0" data-name="Volume Card">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Margin3 />
        <Container47 />
      </div>
    </div>
  );
}

function BentoGridStats() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_184px] relative shrink-0 w-full" data-name="Bento Grid Stats">
      <LiquidityCard />
      <ActiveMembersCard />
      <KycCard />
      <VolumeCard />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] tracking-[1.2px] uppercase w-[112.3px]">
        <p className="leading-[16px]">Asset Growth</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[24px] w-[178.89px]">
        <p className="leading-[32px]">Liquidity Trend</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[178.89px]" data-name="Container">
      <Container51 />
      <Heading1 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#e8e8e8] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[10px] w-[13.05px]">
          <p className="leading-[15px]">7D</p>
        </div>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#004ac6] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-[20.42px]">
          <p className="leading-[15px]">30D</p>
        </div>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#e8e8e8] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[10px] w-[11.63px]">
          <p className="leading-[15px]">1Y</p>
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[8px] h-[23px] items-start relative shrink-0" data-name="Container">
      <Background5 />
      <Background6 />
      <Background7 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Container52 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#737686] text-[10px] uppercase w-[121.98px]">
        <p className="leading-[15px]">Projection: +12% YoY</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#737686] text-[10px] uppercase w-[78.89px]">
        <p className="leading-[15px]">Scale: USD (M)</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex h-[15px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#004ac6] flex-[1_0_0] h-[216px] min-h-px min-w-px relative rounded-tl-[16px] rounded-tr-[16px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.01px_0_0] shadow-[0px_20px_25px_-5px_rgba(0,74,198,0.2),0px_8px_10px_-6px_rgba(0,74,198,0.2)]" data-name="Overlay+Shadow" />
    </div>
  );
}

function SimulatedChartVisualization() {
  return (
    <div className="h-[256px] relative shrink-0 w-full" data-name="Simulated Chart Visualization">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-end justify-center pb-[16px] px-[16px] relative size-full">
          <div className="bg-[rgba(0,74,198,0.2)] flex-[1_0_0] h-[96px] min-h-px min-w-px rounded-tl-[16px] rounded-tr-[16px]" data-name="Overlay" />
          <div className="bg-[rgba(0,74,198,0.2)] flex-[1_0_0] h-[108px] min-h-px min-w-px rounded-tl-[16px] rounded-tr-[16px]" data-name="Overlay" />
          <div className="bg-[rgba(0,74,198,0.2)] flex-[1_0_0] h-[84px] min-h-px min-w-px rounded-tl-[16px] rounded-tr-[16px]" data-name="Overlay" />
          <div className="bg-[rgba(0,74,198,0.2)] flex-[1_0_0] h-[132px] min-h-px min-w-px rounded-tl-[16px] rounded-tr-[16px]" data-name="Overlay" />
          <div className="bg-[rgba(0,74,198,0.3)] flex-[1_0_0] h-[156px] min-h-px min-w-px rounded-tl-[16px] rounded-tr-[16px]" data-name="Overlay" />
          <div className="bg-[rgba(0,74,198,0.4)] flex-[1_0_0] h-[180px] min-h-px min-w-px rounded-tl-[16px] rounded-tr-[16px]" data-name="Overlay" />
          <Background9 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-between p-[32px]" data-name="Container">
      <Container54 />
      <SimulatedChartVisualization />
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#f3f3f3] h-[384px] overflow-clip relative rounded-[24px] shrink-0 w-full" data-name="Background">
      <Container53 />
      <div className="absolute bg-gradient-to-t bottom-0 from-[#f3f3f3] h-[96px] left-0 right-0 to-[rgba(243,243,243,0)]" data-name="Gradient" />
    </div>
  );
}

function LiquidityTrendChartSection() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[112px] relative row-1 self-start shrink-0" data-name="Liquidity Trend Chart Section">
      <Container49 />
      <Background8 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Real-time processing</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[24px] w-full">
        <p className="leading-[32px]">Critical Queue</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container58 />
      <Heading6 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[15px] relative shrink-0 w-[3.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 15">
        <g id="Container">
          <path d={svgPaths.p1a723780} fill="var(--fill-0, #AE0010)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(255,218,214,0.2)] content-stretch flex h-[40px] items-center justify-center relative rounded-[9999px] shrink-0 w-[29.19px]" data-name="Overlay">
      <Container60 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] w-full">
        <p className="leading-[20px] mb-0">Equity</p>
        <p className="leading-[20px]">Disbursement</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] w-full">
        <p className="leading-[16px] mb-0">Merchant #8821 •</p>
        <p className="leading-[16px]">High Impact</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Heading7 />
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] text-right w-[68.03px]">
        <p className="leading-[20px]">$124,500</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#ae0010] text-[10px] text-right tracking-[-0.5px] uppercase w-[59.66px]">
        <p className="leading-[15px]">Needs Auth</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[68.03px]" data-name="Container">
      <Container64 />
      <Container65 />
    </div>
  );
}

function QueueItem() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Queue Item 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Overlay3 />
          <Container61 />
          <Container63 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p39919e0} fill="var(--fill-0, #004AC6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(219,225,255,0.2)] content-stretch flex h-[40px] items-center justify-center relative rounded-[9999px] shrink-0 w-[35.69px]" data-name="Overlay">
      <Container66 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] w-full">
        <p className="leading-[20px] mb-0">Member Loan</p>
        <p className="leading-[20px]">Payout</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] w-full">
        <p className="leading-[16px] mb-0">L. Thompson •</p>
        <p className="leading-[16px]">Verified</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Heading8 />
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] text-right w-[59.34px]">
        <p className="leading-[20px]">$12,000</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#737686] text-[10px] text-right tracking-[-0.5px] uppercase w-[41.84px]">
        <p className="leading-[15px]">Pending</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[59.34px]" data-name="Container">
      <Container70 />
      <Container71 />
    </div>
  );
}

function QueueItem1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Queue Item 2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Overlay4 />
          <Container67 />
          <Container69 />
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p170df4c0} fill="var(--fill-0, #004AC6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(219,225,255,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay">
      <Container72 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] w-full">
        <p className="leading-[20px]">Batch Settlement</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] w-full">
        <p className="leading-[16px]">Daily Reconciliation</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Heading9 />
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] text-right w-[58.5px]">
        <p className="leading-[20px]">$45,210</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#737686] text-[10px] text-right tracking-[-0.5px] uppercase w-[60.27px]">
        <p className="leading-[15px]">Processing</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60.27px]" data-name="Container">
      <Container76 />
      <Container77 />
    </div>
  );
}

function QueueItem2() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Queue Item 3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Overlay5 />
          <Container73 />
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[15.833px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 15.8333">
        <g id="Container">
          <path d={svgPaths.p1a7e4c60} fill="var(--fill-0, #AE0010)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay6() {
  return (
    <div className="bg-[rgba(255,218,214,0.2)] content-stretch flex h-[40px] items-center justify-center relative rounded-[9999px] shrink-0 w-[29.52px]" data-name="Overlay">
      <Container78 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] w-full">
        <p className="leading-[20px] mb-0">Risk Flag:</p>
        <p className="leading-[20px]">Withdrawal</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[12px] w-full">
        <p className="leading-[16px] mb-0">Account #0022 •</p>
        <p className="leading-[16px]">Unusual Pattern</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Heading10 />
      <Container80 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] text-right w-[52.73px]">
        <p className="leading-[20px]">$8,500</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#ae0010] text-[10px] text-right tracking-[-0.5px] uppercase w-[36.38px]">
        <p className="leading-[15px]">Review</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[52.73px]" data-name="Container">
      <Container82 />
      <Container83 />
    </div>
  );
}

function QueueItem3() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Queue Item 4">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Overlay6 />
          <Container79 />
          <Container81 />
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center py-[16px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#004ac6] text-[12px] text-center tracking-[1.2px] uppercase w-[204.44px]">
        <p className="leading-[16px]">View Full Queue (24 more)</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <QueueItem />
      <QueueItem1 />
      <QueueItem2 />
      <QueueItem3 />
      <Button4 />
    </div>
  );
}

function TransactionQueue() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Transaction Queue">
      <Container57 />
      <Container59 />
    </div>
  );
}

function ChartAndQueueSection() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_572px] relative shrink-0 w-full" data-name="Chart and Queue Section">
      <LiquidityTrendChartSection />
      <TransactionQueue />
    </div>
  );
}

function Overlay7() {
  return (
    <div className="bg-[rgba(0,74,198,0.1)] content-stretch flex items-start px-[16px] py-[3.5px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#004ac6] text-[12px] w-[111.14px]">
        <p className="leading-[16px]">Institutional Health</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[36px] tracking-[-0.9px] w-full">
        <p className="leading-[40px] mb-0">{`Real-time Compliance &`}</p>
        <p className="leading-[40px]">Audit Engine</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[3px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434655] text-[18px] w-full">
        <p className="leading-[29.25px] mb-0">Our dashboard provides autonomous monitoring of</p>
        <p className="mb-0">
          <span className="leading-[29.25px]">{`cooperative health. Using `}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[29.25px] not-italic text-[#004ac6]">FinCo-op Proprietary</span>
        </p>
        <p className="mb-0">
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[29.25px] not-italic text-[#004ac6]">scoring</span>
          <span className="leading-[29.25px]">, we identify liquidity gaps before they impact</span>
        </p>
        <p className="leading-[29.25px]">your members.</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1caa9380} fill="var(--fill-0, #16A34A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[16px] w-[266.86px]">
        <p className="leading-[24px]">Automated IFRS-9 Reporting ready</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container89() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1caa9380} fill="var(--fill-0, #16A34A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[16px] w-[251.98px]">
        <p className="leading-[24px]">{`KYC verification response < 2.4s`}</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container89 />
      <Container90 />
    </div>
  );
}

function Container91() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1caa9380} fill="var(--fill-0, #16A34A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[16px] w-[210.91px]">
        <p className="leading-[24px]">AML threat detection active</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container91 />
      <Container92 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[3px] relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start relative shrink-0 w-full" data-name="Container">
      <Overlay7 />
      <Heading11 />
      <Container86 />
      <List />
    </div>
  );
}

function Container84() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start relative row-1 self-center shrink-0 w-[456px]" data-name="Container">
      <div className="absolute bg-[rgba(0,74,198,0.05)] blur-[32px] left-[-48px] rounded-[9999px] size-[256px] top-[-44px]" data-name="Overlay+Blur" />
      <Container85 />
    </div>
  );
}

function FinancialAnalysisDashboard() {
  return (
    <div className="h-[256.5px] relative shrink-0 w-full" data-name="Financial analysis dashboard">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={imgFinancialAnalysisDashboard} />
      </div>
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Overlay+Shadow">
      <FinancialAnalysisDashboard />
      <div className="absolute bg-gradient-to-t from-[rgba(26,28,28,0.6)] inset-0 to-[rgba(26,28,28,0)]" data-name="Gradient" />
      <div className="absolute bottom-[64px] flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-[24px] not-italic opacity-80 text-[12px] text-white tracking-[1.2px] translate-y-1/2 uppercase w-[146.25px]">
        <p className="leading-[16px]">Next Review Cycle</p>
      </div>
      <div className="absolute bottom-[38px] flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] left-[24px] not-italic text-[20px] text-white translate-y-1/2 w-[223px]">
        <p className="leading-[28px]">Tuesday, October 24th</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#c3c6d7] text-[10px] uppercase w-[104.59px]">
        <p className="leading-[15px]">Compliance Score</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[30px] w-[70.61px]">
        <p className="leading-[36px]">98.2</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[12px] w-[45.64px]">
        <p className="leading-[16px]">Optimal</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="Container">
      <Container96 />
      <Margin4 />
    </div>
  );
}

function Background10() {
  return (
    <div className="absolute bg-white bottom-[-24px] content-stretch flex flex-col gap-[8px] items-start max-w-[240px] p-[24px] right-[-24px] rounded-[24px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Container94 />
      <Container95 />
    </div>
  );
}

function Container93() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <OverlayShadow />
      <Background10 />
    </div>
  );
}

function AsymmetricDetailSection() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_389px] pt-[48px] relative shrink-0 w-full" data-name="Asymmetric Detail Section">
      <Container84 />
      <Container93 />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start min-h-[1600px] pb-[104px] pt-[40px] px-[32px] relative shrink-0 w-[1024px] z-[1]" data-name="Main Content Canvas">
      <Header />
      <BentoGridStats />
      <ChartAndQueueSection />
      <AsymmetricDetailSection />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex flex-col isolate items-end left-0 right-0 top-0" data-name="Body">
      <ButtonContextualFab />
      <TopNavBar />
      <AsideSideNavBarPersistentOnDesktop />
      <MainContentCanvas />
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="relative size-full" data-name="Dashboard">
      <Body />
    </div>
  );
}