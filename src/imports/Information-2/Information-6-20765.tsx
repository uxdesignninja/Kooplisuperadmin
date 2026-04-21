import svgPaths from "./svg-fp7x0thhdl";

function Frame() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.875 7.875">
        <g clipPath="url(#clip0_1_6455)" id="Frame">
          <path d={svgPaths.p9913e80} fill="var(--fill-0, #18181B)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_6455">
            <rect fill="white" height="7.875" width="7.875" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center opacity-60 pt-[2px] relative shrink-0" data-name="container">
      <div className="overflow-clip relative shrink-0 size-[9px]" data-name="style=regular, keywords=-">
        <Frame />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[2px] relative shrink-0" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#52525b] text-[14px] whitespace-nowrap">Difficulty: Medium</p>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="bar-medium">
        <div className="absolute bg-[#18181b] bottom-0 left-0 right-3/4 rounded-[8px] top-[62.5%]" />
        <div className="absolute bg-[#18181b] inset-[31.25%_37.5%_0_37.5%] rounded-[8px]" />
        <div className="absolute bg-[#18181b] bottom-0 left-3/4 opacity-20 right-0 rounded-[8px] top-0" />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0" data-name="container">
      <div className="content-stretch flex gap-[2px] items-start justify-center px-[2px] relative shrink-0" data-name="Link">
        <a className="[text-decoration-skip-ink:none] block cursor-pointer decoration-[#cdcdce] decoration-[10%] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#18181b] text-[14px] underline whitespace-nowrap" href="https://v3.heroui.com/docs/react/components/dropdown" target="_blank">
          View documentation
        </a>
        <Container1 />
      </div>
      <Container2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#18181b] text-[56px] tracking-[-0.56px] whitespace-nowrap">Dropdown</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="backdrop-blur-[0px] bg-[#ebebec] content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[6px] relative rounded-[16px] shrink-0" data-name="Tag">
        <a className="block cursor-pointer font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap" href="https://www.figma.com/design/X7cCQ3i91B0nK5b6rOG25e?node-id=5375-70869" target="_blank">
          ListBox
        </a>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] min-w-full not-italic relative shrink-0 text-[#18181b] text-[22px] tracking-[-0.11px] w-[min-content]">A dropdown displays a list of actions or options that a user can choose.</p>
      <Frame2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[4px] pt-[10px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#71717a] text-[12px] whitespace-nowrap">Actions</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=add new">
          <div className="absolute inset-[9.37%_9.38%_9.38%_9.37%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path clipRule="evenodd" d={svgPaths.p3e1bc500} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#18181b] text-[14px] w-full">New file</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#71717a] text-[12px] w-full">Create a new file</p>
    </div>
  );
}

function Abbr() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">N</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=duplicate">
          <div className="absolute inset-[6.25%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path clipRule="evenodd" d={svgPaths.pda60c80} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#18181b] text-[14px] w-full">Copy link</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#71717a] text-[12px] w-full">Copy the file link</p>
    </div>
  );
}

function Abbr1() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr1 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">L</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=edit write">
          <div className="absolute inset-[6.25%_6.25%_11.09%_11.09%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2258 13.2258">
              <path clipRule="evenodd" d={svgPaths.p2cecc580} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#18181b] text-[14px] w-full">Edit file</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#71717a] text-[12px] w-full">Make changes</p>
    </div>
  );
}

function Abbr2() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr2 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">E</p>
      </div>
    </div>
  );
}

function Slot() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container4 />
            </div>
            <Container5 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_02">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container6 />
            </div>
            <Container7 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard1 />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_03">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container8 />
            </div>
            <Container9 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="content-stretch flex h-px items-center justify-center max-h-[12px] relative rounded-[4px] shrink-0 w-full" data-name="Separator">
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-0.5px_-0.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 1">
                <path d="M0.5 0.5H112.5" id="Line" stroke="var(--stroke-0, #E4E4E7)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-0.5px_-0.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 1">
                <path d="M0.5 0.5H112.5" id="Line" stroke="var(--stroke-0, #E4E4E7)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[4px] pt-[10px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#71717a] text-[12px] whitespace-nowrap">Danger zone</p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=delete remove trash can recycle bin">
          <div className="absolute inset-[3.13%_9.37%_6.25%_9.38%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14.5">
              <path clipRule="evenodd" d={svgPaths.p24446940} fill="var(--fill-0, #FF383C)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#ff383c] text-[14px] w-full">Delete file</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#71717a] text-[12px] w-full">Move to trash</p>
    </div>
  );
}

function Abbr3() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘⇧</p>
      </div>
    </div>
  );
}

function Keyboard3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr3 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">K</p>
      </div>
    </div>
  );
}

function Slot1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container12 />
            </div>
            <Container13 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[120px] relative size-full">
          <div className="content-stretch flex flex-col gap-[2px] items-start p-[4px] relative rounded-[24px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06),0px_-6px_12px_0px_rgba(0,0,0,0.03),0px_14px_28px_0px_rgba(0,0,0,0.08)] shrink-0 w-[240px]" data-name="Dropdown">
            <div aria-hidden="true" className="absolute backdrop-blur-[20px] bg-white inset-0 pointer-events-none rounded-[24px]" />
            <Container3 />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox">
              <Slot />
            </div>
            <Container10 />
            <Container11 />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox2">
              <Slot1 />
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_1px_0px_rgba(0,0,0,0)]" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dedee0] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Section">
      <Frame1 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#18181b] text-[24px] tracking-[-0.12px] whitespace-nowrap">Composition</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#18181b] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[24px] mb-[24px]">Dropdown is composed of:</p>
        <ul className="list-disc mb-[24px]">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">ListBox</span>
          </li>
          <ul className="mb-0">
            <li className="mb-0 ms-[48px]">
              <span className="leading-[24px]">Manages vertical stacking and spacing</span>
            </li>
            <li className="ms-[48px]">
              <span className="leading-[24px]">Supports grouped sections and dividers</span>
            </li>
          </ul>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Dropdown Item</span>
          </li>
          <ul>
            <li className="mb-0 ms-[48px]">
              <span className="leading-[24px]">Represents a single actionable row</span>
            </li>
            <li className="ms-[48px]">
              <span className="leading-[24px]">Supports multiple states and visual types (e.g. danger)</span>
            </li>
          </ul>
        </ul>
        <p className="leading-[24px] mb-[24px]">Each ListBox and Dropdown Item can be customized via nested instances in Figma.</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] mb-[24px]">Structure</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Optional Groups (e.g. “Actions”, “Danger zone”)</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Optional Dividers between groups</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">One or more ListBox instances</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[24px]">Multiple Dropdown Item children per ListBox</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#18181b] text-[24px] tracking-[-0.12px] whitespace-nowrap">Dropdown Item</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#18181b] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[24px] mb-[24px]">A Dropdown Item represents a single selectable action.</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] mb-[24px]">Elements</p>
        <ul className="list-disc mb-[24px]">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Title (required)</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Description (optional)</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Prefix (icon, avatar, indicator)</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[24px]">Suffix (shortcut, icon, checkmark)</span>
          </li>
        </ul>
        <p className="font-['Inter:Bold',sans-serif] font-bold mb-[24px]">
          <span className="leading-[24px]">T</span>
          <span className="leading-[24px]">ypes</span>
        </p>
        <ul className="list-disc mb-[24px]">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Initial – default neutral action</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[24px]">Danger – destructive or irreversible action (e.g. delete)</span>
          </li>
        </ul>
        <p className="mb-[24px]">
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic">
            States
            <br aria-hidden="true" />
          </span>
          <span className="leading-[24px]">Dropdown item support the following interaction states:</span>
        </p>
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Default</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Hover</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Focus</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Selected</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[24px]">Disabled</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#18181b] text-[24px] tracking-[-0.12px] whitespace-nowrap">Properties</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc not-italic relative shrink-0 text-[#18181b] text-[16px] tracking-[-0.08px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[24px]">Dropdown</span>
        </li>
        <ul className="leading-[24px] mb-0">
          <li className="mb-0 ms-[48px]">
            {`Show Groups: `}
            <span className="font-['Inter:Italic',sans-serif] font-normal italic text-[#c2410c]">true | false</span>
          </li>
          <li className="ms-[48px]">
            {`Show Divider: `}
            <span className="font-['Inter:Italic',sans-serif] font-normal italic text-[#c2410c]">true | false</span>
          </li>
        </ul>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[24px]">Nested instances</span>
        </li>
        <ul className="mb-0">
          <li className="mb-0 ms-[48px]">
            <span className="leading-[24px]">ListBox</span>
          </li>
          <li className="leading-[24px] ms-[48px]">
            {`ListBox 2 `}
            <span className="text-[#52525b]">(optional second group)</span>
          </li>
        </ul>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[24px]">Dropdown Item</span>
        </li>
        <ul className="leading-[24px]">
          <li className="mb-0 ms-[48px]">
            {`State: `}
            <span className="font-['Inter:Italic',sans-serif] font-normal italic text-[#c2410c]">default | hover | focus | selected | disabled</span>
          </li>
          <li className="mb-0 ms-[48px]">
            {`Type: `}
            <span className="text-[#c2410c]">initial | danger</span>
          </li>
          <li className="mb-0 ms-[48px]">
            {`Title: `}
            <span className="font-['Inter:Italic',sans-serif] font-normal italic text-[#52525b]">Text — main action label</span>
          </li>
          <li className="mb-0 ms-[48px]">
            {`Show Description: `}
            <span className="font-['Inter:Italic',sans-serif] font-normal italic text-[#c2410c]">true | false</span>
          </li>
          <li className="mb-0 ms-[48px]">
            {`Description: `}
            <span className="font-['Inter:Italic',sans-serif] font-normal italic text-[#52525b]">Text — supporting context</span>
          </li>
          <li className="mb-0 ms-[48px]">
            {`Show Prefix: `}
            <span className="text-[#c2410c]">true | false</span>
          </li>
          <li className="mb-0 ms-[48px]">
            {`Prefix: `}
            <span className="font-['Inter:Italic',sans-serif] font-normal italic text-[#52525b]">Slot — ideal for icons or avatars</span>
          </li>
          <li className="mb-0 ms-[48px]">
            {`Show Suffix: `}
            <span className="font-['Inter:Italic',sans-serif] font-normal italic text-[#c2410c]">true | false</span>
          </li>
          <li className="ms-[48px]">
            {`Suffix: `}
            <span className="font-['Inter:Italic',sans-serif] font-normal italic text-[#52525b]">Slot — ideal for indicators or shortcuts</span>
          </li>
        </ul>
      </ul>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#18181b] text-[24px] tracking-[-0.12px] whitespace-nowrap">Usage Guidelines</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc not-italic relative shrink-0 text-[#18181b] text-[16px] tracking-[-0.08px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[24px]">Use Dropdown for contextual actions, not navigation.</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[24px]">We recommend to use Danger items sparingly and visually separated (via groups or dividers).</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[24px]">Avoid mixing selection and navigation semantics in the same dropdown.</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[24px]">Pair with Button, IconButton, ComboBox, or TextField as trigger elements.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start justify-center min-w-px relative">
      <Frame5 />
      <Frame10 />
      <Frame12 />
      <Frame15 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[4px] pt-[10px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#71717a] text-[12px] whitespace-nowrap">Text Style</p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=done">
          <div className="absolute inset-[20.31%_14.06%_26.56%_17.19%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8.50001">
              <path clipRule="evenodd" d={svgPaths.p16e13d00} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Bold</p>
    </div>
  );
}

function Abbr4() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard4() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr4 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">B</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=done">
          <div className="absolute inset-[20.31%_14.06%_26.56%_17.19%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8.50001">
              <path clipRule="evenodd" d={svgPaths.p16e13d00} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Italic</p>
    </div>
  );
}

function Abbr5() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard5() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr5 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">I</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="opacity-0 overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=done">
          <div className="absolute inset-[20.31%_14.06%_26.56%_17.19%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8.50001">
              <path clipRule="evenodd" d={svgPaths.p16e13d00} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Underline</p>
    </div>
  );
}

function Abbr6() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard6() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr6 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">U</p>
      </div>
    </div>
  );
}

function Slot2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container15 />
            </div>
            <Container16 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard4 />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_02">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container17 />
            </div>
            <Container18 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard5 />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_03">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container19 />
            </div>
            <Container20 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="content-stretch flex h-px items-center justify-center max-h-[12px] relative rounded-[4px] shrink-0 w-full" data-name="Separator">
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-0.5px_-0.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 1">
                <path d="M0.5 0.5H112.5" id="Line" stroke="var(--stroke-0, #E4E4E7)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-0.5px_-0.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 1">
                <path d="M0.5 0.5H112.5" id="Line" stroke="var(--stroke-0, #E4E4E7)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[4px] pt-[10px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#71717a] text-[12px] whitespace-nowrap">Text Alignment</p>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=fill, keywords=-">
          <div className="absolute inset-1/4" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <path clipRule="evenodd" d={svgPaths.p65069f0} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Left</p>
    </div>
  );
}

function Abbr7() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌥</p>
      </div>
    </div>
  );
}

function Keyboard7() {
  return (
    <div className="content-stretch flex gap-[1.41px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr7 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">A</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="opacity-0 overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=duplicate">
          <div className="absolute inset-[6.25%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path clipRule="evenodd" d={svgPaths.pda60c80} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Center</p>
    </div>
  );
}

function Abbr8() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌥</p>
      </div>
    </div>
  );
}

function Keyboard8() {
  return (
    <div className="content-stretch flex gap-[1.41px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr8 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">H</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="opacity-0 overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=edit write">
          <div className="absolute inset-[6.25%_6.25%_11.09%_11.09%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2258 13.2258">
              <path clipRule="evenodd" d={svgPaths.p2cecc580} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Right</p>
    </div>
  );
}

function Abbr9() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌥</p>
      </div>
    </div>
  );
}

function Keyboard9() {
  return (
    <div className="content-stretch flex gap-[1.41px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr9 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">D</p>
      </div>
    </div>
  );
}

function Slot3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container23 />
            </div>
            <Container24 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=option">
              <Keyboard7 />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_02">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container25 />
            </div>
            <Container26 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=option">
              <Keyboard8 />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_03">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container27 />
            </div>
            <Container28 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=option">
              <Keyboard9 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[32px] items-center justify-center pb-[64px] pt-[80px] px-[24px] relative size-full">
          <div className="absolute backdrop-blur-[0px] content-stretch flex gap-[2px] items-center justify-center left-[16px] px-[10px] py-[6px] rounded-[16px] top-[16px]" data-name="Chip">
            <div className="absolute bg-[#ebebec] inset-0 rounded-[16px]" data-name="base" />
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="style=regular, keywords=-">
              <div className="absolute inset-[3.13%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
                  <path clipRule="evenodd" d={svgPaths.p16cb0400} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">Dropdown</p>
          </div>
          <div className="content-stretch flex flex-col gap-[2px] items-start p-[4px] relative rounded-[24px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06),0px_-6px_12px_0px_rgba(0,0,0,0.03),0px_14px_28px_0px_rgba(0,0,0,0.08)] shrink-0 w-[256px]" data-name="Dropdown">
            <div aria-hidden="true" className="absolute backdrop-blur-[20px] bg-white inset-0 pointer-events-none rounded-[24px]" />
            <Container14 />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox">
              <Slot2 />
            </div>
            <Container21 />
            <Container22 />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox2">
              <Slot3 />
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_1px_0px_rgba(0,0,0,0)]" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dedee0] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=edit write">
          <div className="absolute inset-[6.25%_6.25%_11.09%_11.09%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2258 13.2258">
              <path clipRule="evenodd" d={svgPaths.p2cecc580} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#18181b] text-[14px] w-full">Edit file</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#71717a] text-[12px] w-full">Make changes</p>
    </div>
  );
}

function Abbr10() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard10() {
  return (
    <div className="bg-[#ebebec] content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr10 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">E</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#f5f5f5] h-[200px] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center pb-[48px] pt-[72px] px-[24px] relative size-full">
          <div className="absolute backdrop-blur-[0px] content-stretch flex gap-[2px] items-center justify-center left-[16px] px-[10px] py-[6px] rounded-[16px] top-[16px]" data-name="Chip">
            <div className="absolute bg-[#ebebec] inset-0 rounded-[16px]" data-name="base" />
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="style=regular, keywords=-">
              <div className="absolute inset-[3.13%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
                  <path clipRule="evenodd" d={svgPaths.p16cb0400} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">Dropdown Item</p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[36px] px-[12px] py-[6px] relative rounded-[20px] shrink-0 w-[220px]" data-name="DropdownItem">
            <div className="flex flex-row items-center self-stretch">
              <Container29 />
            </div>
            <Container30 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=default, shortcut=command">
              <Keyboard10 />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dedee0] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=edit write">
          <div className="absolute inset-[6.25%_6.25%_11.09%_11.09%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2258 13.2258">
              <path clipRule="evenodd" d={svgPaths.p2cecc580} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#18181b] text-[14px] w-full">Edit file</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#71717a] text-[12px] w-full">Make changes</p>
    </div>
  );
}

function Abbr11() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard11() {
  return (
    <div className="bg-[#ebebec] content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr11 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">E</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=delete remove trash can recycle bin">
          <div className="absolute inset-[3.13%_9.37%_6.25%_9.38%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14.5">
              <path clipRule="evenodd" d={svgPaths.p24446940} fill="var(--fill-0, #FF383C)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#ff383c] text-[14px] w-full">Delete file</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#71717a] text-[12px] w-full">Move to trash</p>
    </div>
  );
}

function Abbr12() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p>
          <span className="leading-[1.43]">⌘</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic">⇧</span>
        </p>
      </div>
    </div>
  );
}

function Keyboard12() {
  return (
    <div className="bg-[#ebebec] content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr12 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">D</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center pb-[48px] pt-[72px] px-[24px] relative size-full">
          <div className="absolute backdrop-blur-[0px] content-stretch flex gap-[2px] items-center justify-center left-[16px] px-[10px] py-[6px] rounded-[16px] top-[16px]" data-name="Chip">
            <div className="absolute bg-[#ebebec] inset-0 rounded-[16px]" data-name="base" />
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="style=regular, keywords=-">
              <div className="absolute inset-[3.13%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
                  <path clipRule="evenodd" d={svgPaths.p16cb0400} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">Dropdown Item</p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[36px] px-[12px] py-[6px] relative rounded-[20px] shrink-0 w-[220px]" data-name="DropdownItem">
            <div className="flex flex-row items-center self-stretch">
              <Container31 />
            </div>
            <Container32 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=default, shortcut=command">
              <Keyboard11 />
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[36px] px-[12px] py-[6px] relative rounded-[20px] shrink-0 w-[220px]" data-name="DropdownItem">
            <div className="flex flex-row items-center self-stretch">
              <Container33 />
            </div>
            <Container34 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=default, shortcut=command">
              <Keyboard12 />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dedee0] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip p-px relative shrink-0" data-name="style=regular, keywords=-">
          <div className="relative shrink-0 size-[14px]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path clipRule="evenodd" d={svgPaths.p8c97d00} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#18181b] text-[14px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#71717a] text-[12px] w-full">Description</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip p-px relative shrink-0" data-name="style=regular, keywords=-">
          <div className="relative shrink-0 size-[14px]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path clipRule="evenodd" d={svgPaths.p8c97d00} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#18181b] text-[14px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#71717a] text-[12px] w-full">Description</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip p-px relative shrink-0" data-name="style=regular, keywords=-">
          <div className="relative shrink-0 size-[14px]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path clipRule="evenodd" d={svgPaths.p8c97d00} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#18181b] text-[14px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#71717a] text-[12px] w-full">Description</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip p-px relative shrink-0" data-name="style=regular, keywords=-">
          <div className="relative shrink-0 size-[14px]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path clipRule="evenodd" d={svgPaths.p8c97d00} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#18181b] text-[14px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#71717a] text-[12px] w-full">Description</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip p-px relative shrink-0" data-name="style=regular, keywords=-">
          <div className="relative shrink-0 size-[14px]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path clipRule="evenodd" d={svgPaths.p8c97d00} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#18181b] text-[14px] w-full">Title</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#71717a] text-[12px] w-full">Description</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center pb-[48px] pt-[72px] px-[24px] relative size-full">
          <div className="absolute backdrop-blur-[0px] content-stretch flex gap-[2px] items-center justify-center left-[16px] px-[10px] py-[6px] rounded-[16px] top-[16px]" data-name="Chip">
            <div className="absolute bg-[#ebebec] inset-0 rounded-[16px]" data-name="base" />
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="style=regular, keywords=-">
              <div className="absolute inset-[3.13%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
                  <path clipRule="evenodd" d={svgPaths.p16cb0400} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">Dropdown Item</p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[36px] px-[12px] py-[6px] relative rounded-[20px] shrink-0 w-[220px]" data-name="DropdownItem">
            <div className="flex flex-row items-center self-stretch">
              <Container35 />
            </div>
            <Container36 />
            <div className="content-stretch flex gap-[8px] items-center overflow-clip p-px relative shrink-0" data-name="style=regular, keywords=-">
              <div className="relative shrink-0 size-[14px]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path clipRule="evenodd" d={svgPaths.p8c97d00} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#ebebec] content-stretch flex gap-[12px] items-center min-h-[36px] px-[12px] py-[6px] relative rounded-[20px] shrink-0 w-[220px]" data-name="DropdownItem">
            <div className="flex flex-row items-center self-stretch">
              <Container37 />
            </div>
            <Container38 />
            <div className="content-stretch flex gap-[8px] items-center overflow-clip p-px relative shrink-0" data-name="style=regular, keywords=-">
              <div className="relative shrink-0 size-[14px]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path clipRule="evenodd" d={svgPaths.p8c97d00} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#ebebec] content-stretch flex gap-[12px] items-center min-h-[36px] overflow-clip px-[12px] py-[6px] relative rounded-[20px] shadow-[0px_0px_0px_2px_#f5f5f5,0px_0px_0px_4px_#0485f7] shrink-0 w-[220px]" data-name="DropdownItem">
            <div className="flex flex-row items-center self-stretch">
              <Container39 />
            </div>
            <Container40 />
            <div className="content-stretch flex gap-[8px] items-center overflow-clip p-px relative shrink-0" data-name="style=regular, keywords=-">
              <div className="relative shrink-0 size-[14px]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path clipRule="evenodd" d={svgPaths.p8c97d00} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[36px] opacity-50 px-[12px] py-[6px] relative rounded-[20px] shrink-0 w-[220px]" data-name="DropdownItem">
            <div className="flex flex-row items-center self-stretch">
              <Container41 />
            </div>
            <Container42 />
            <div className="content-stretch flex gap-[8px] items-center overflow-clip p-px relative shrink-0" data-name="style=regular, keywords=-">
              <div className="relative shrink-0 size-[14px]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path clipRule="evenodd" d={svgPaths.p8c97d00} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center min-h-[36px] px-[12px] py-[6px] relative rounded-[20px] shrink-0 w-[220px]" data-name="DropdownItem">
            <div className="flex flex-row items-center self-stretch">
              <Container43 />
            </div>
            <Container44 />
            <div className="content-stretch flex gap-[8px] items-center overflow-clip p-px relative shrink-0" data-name="style=regular, keywords=-">
              <div className="relative shrink-0 size-[14px]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path clipRule="evenodd" d={svgPaths.p8c97d00} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dedee0] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start justify-center min-w-px relative">
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full" data-name="Section">
      <Frame7 />
      <Frame18 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#18181b] text-[24px] tracking-[-0.12px] whitespace-nowrap">Examples</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#18181b] text-[16px] tracking-[-0.08px] w-full">Preview the Dropdown’s appearance across light and dark themes.</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[4px] pt-[10px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#71717a] text-[12px] whitespace-nowrap">Actions</p>
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=add new">
          <div className="absolute inset-[9.37%_9.38%_9.38%_9.37%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path clipRule="evenodd" d={svgPaths.p3e1bc500} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#18181b] text-[14px] w-full">New file</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#71717a] text-[12px] w-full">Create a new file</p>
    </div>
  );
}

function Abbr13() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard13() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr13 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">N</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=duplicate">
          <div className="absolute inset-[6.25%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path clipRule="evenodd" d={svgPaths.pda60c80} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#18181b] text-[14px] w-full">Copy link</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#71717a] text-[12px] w-full">Copy the file link</p>
    </div>
  );
}

function Abbr14() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard14() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr14 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">L</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=edit write">
          <div className="absolute inset-[6.25%_6.25%_11.09%_11.09%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2258 13.2258">
              <path clipRule="evenodd" d={svgPaths.p2cecc580} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#18181b] text-[14px] w-full">Edit file</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#71717a] text-[12px] w-full">Make changes</p>
    </div>
  );
}

function Abbr15() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard15() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr15 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">E</p>
      </div>
    </div>
  );
}

function Slot4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container47 />
            </div>
            <Container48 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard13 />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_02">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container49 />
            </div>
            <Container50 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard14 />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_03">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container51 />
            </div>
            <Container52 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard15 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="content-stretch flex h-px items-center justify-center max-h-[12px] relative rounded-[4px] shrink-0 w-full" data-name="Separator">
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-0.5px_-0.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 1">
                <path d="M0.5 0.5H112.5" id="Line" stroke="var(--stroke-0, #E4E4E7)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-0.5px_-0.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 1">
                <path d="M0.5 0.5H112.5" id="Line" stroke="var(--stroke-0, #E4E4E7)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[4px] pt-[10px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#71717a] text-[12px] whitespace-nowrap">Danger zone</p>
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=delete remove trash can recycle bin">
          <div className="absolute inset-[3.13%_9.37%_6.25%_9.38%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14.5">
              <path clipRule="evenodd" d={svgPaths.p24446940} fill="var(--fill-0, #FF383C)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#ff383c] text-[14px] w-full">Delete file</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#71717a] text-[12px] w-full">Move to trash</p>
    </div>
  );
}

function Abbr16() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘⇧</p>
      </div>
    </div>
  );
}

function Keyboard16() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr16 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">K</p>
      </div>
    </div>
  );
}

function Slot5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container55 />
            </div>
            <Container56 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard16 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[257px]" data-name="container">
      <div className="backdrop-blur-[0px] bg-[#ebebec] content-stretch flex gap-[8px] h-[36px] items-center justify-center max-h-[36px] min-h-[36px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0485f7] text-[14px] whitespace-nowrap">Actions</p>
      </div>
      <div className="relative rounded-[24px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06),0px_-6px_12px_0px_rgba(0,0,0,0.03),0px_14px_28px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Dropdown">
        <div aria-hidden="true" className="absolute backdrop-blur-[20px] bg-white inset-0 pointer-events-none rounded-[24px]" />
        <div className="content-stretch flex flex-col gap-[2px] items-start p-[4px] relative size-full">
          <Container46 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox">
            <Slot4 />
          </div>
          <Container53 />
          <Container54 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox2">
            <Slot5 />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_1px_0px_rgba(0,0,0,0)]" />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[4px] pt-[10px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#71717a] text-[12px] whitespace-nowrap">Text Style</p>
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=done">
          <div className="absolute inset-[20.31%_14.06%_26.56%_17.19%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8.50001">
              <path clipRule="evenodd" d={svgPaths.p16e13d00} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Bold</p>
    </div>
  );
}

function Abbr17() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard17() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr17 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">B</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=done">
          <div className="absolute inset-[20.31%_14.06%_26.56%_17.19%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8.50001">
              <path clipRule="evenodd" d={svgPaths.p16e13d00} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Italic</p>
    </div>
  );
}

function Abbr18() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard18() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr18 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">I</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="opacity-0 overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=done">
          <div className="absolute inset-[20.31%_14.06%_26.56%_17.19%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8.50001">
              <path clipRule="evenodd" d={svgPaths.p16e13d00} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Underline</p>
    </div>
  );
}

function Abbr19() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard19() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr19 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">U</p>
      </div>
    </div>
  );
}

function Slot6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container59 />
            </div>
            <Container60 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard17 />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_02">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container61 />
            </div>
            <Container62 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard18 />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_03">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container63 />
            </div>
            <Container64 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard19 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="content-stretch flex h-px items-center justify-center max-h-[12px] relative rounded-[4px] shrink-0 w-full" data-name="Separator">
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-0.5px_-0.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 1">
                <path d="M0.5 0.5H112.5" id="Line" stroke="var(--stroke-0, #E4E4E7)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-0.5px_-0.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 1">
                <path d="M0.5 0.5H112.5" id="Line" stroke="var(--stroke-0, #E4E4E7)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[4px] pt-[10px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#71717a] text-[12px] whitespace-nowrap">Text Alignment</p>
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=fill, keywords=-">
          <div className="absolute inset-1/4" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <path clipRule="evenodd" d={svgPaths.p65069f0} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Left</p>
    </div>
  );
}

function Abbr20() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌥</p>
      </div>
    </div>
  );
}

function Keyboard20() {
  return (
    <div className="content-stretch flex gap-[1.41px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr20 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">A</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="opacity-0 overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=duplicate">
          <div className="absolute inset-[6.25%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path clipRule="evenodd" d={svgPaths.pda60c80} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Center</p>
    </div>
  );
}

function Abbr21() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌥</p>
      </div>
    </div>
  );
}

function Keyboard21() {
  return (
    <div className="content-stretch flex gap-[1.41px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr21 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">H</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="opacity-0 overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=edit write">
          <div className="absolute inset-[6.25%_6.25%_11.09%_11.09%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2258 13.2258">
              <path clipRule="evenodd" d={svgPaths.p2cecc580} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Right</p>
    </div>
  );
}

function Abbr22() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌥</p>
      </div>
    </div>
  );
}

function Keyboard22() {
  return (
    <div className="content-stretch flex gap-[1.41px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr22 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">D</p>
      </div>
    </div>
  );
}

function Slot7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container67 />
            </div>
            <Container68 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=option">
              <Keyboard20 />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_02">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container69 />
            </div>
            <Container70 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=option">
              <Keyboard21 />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_03">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container71 />
            </div>
            <Container72 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=option">
              <Keyboard22 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[257px]" data-name="container">
      <div className="backdrop-blur-[0px] bg-[#ebebec] content-stretch flex gap-[8px] h-[36px] items-center justify-center max-h-[36px] min-h-[36px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0485f7] text-[14px] whitespace-nowrap">Styles</p>
      </div>
      <div className="relative rounded-[24px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06),0px_-6px_12px_0px_rgba(0,0,0,0.03),0px_14px_28px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Dropdown">
        <div aria-hidden="true" className="absolute backdrop-blur-[20px] bg-white inset-0 pointer-events-none rounded-[24px]" />
        <div className="content-stretch flex flex-col gap-[2px] items-start p-[4px] relative size-full">
          <Container58 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox">
            <Slot6 />
          </div>
          <Container65 />
          <Container66 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox2">
            <Slot7 />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_1px_0px_rgba(0,0,0,0)]" />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[4px] pt-[10px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#71717a] text-[12px] whitespace-nowrap">Left Panel</p>
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=done">
          <div className="absolute inset-[20.31%_14.06%_26.56%_17.19%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8.50001">
              <path clipRule="evenodd" d={svgPaths.p16e13d00} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Final Copy (1)</p>
    </div>
  );
}

function Slot8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container75 />
            </div>
            <Container76 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="content-stretch flex h-px items-center justify-center max-h-[12px] relative rounded-[4px] shrink-0 w-full" data-name="Separator">
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-0.5px_-0.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 1">
                <path d="M0.5 0.5H112.5" id="Line" stroke="var(--stroke-0, #E4E4E7)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-0.5px_-0.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 1">
                <path d="M0.5 0.5H112.5" id="Line" stroke="var(--stroke-0, #E4E4E7)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[4px] pt-[10px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#71717a] text-[12px] whitespace-nowrap">Right Panel</p>
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=done">
          <div className="absolute inset-[20.31%_14.06%_26.56%_17.19%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8.50001">
              <path clipRule="evenodd" d={svgPaths.p16e13d00} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">index.ts</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=done">
          <div className="absolute inset-[20.31%_14.06%_26.56%_17.19%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8.50001">
              <path clipRule="evenodd" d={svgPaths.p16e13d00} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">package.json</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=attention warning">
          <div className="absolute inset-[9.37%_9.38%_9.38%_9.37%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path clipRule="evenodd" d={svgPaths.p26907000} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">license.text</p>
    </div>
  );
}

function Slot9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container79 />
            </div>
            <Container80 />
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_02">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container81 />
            </div>
            <Container82 />
          </div>
        </div>
      </div>
      <div className="min-h-[36px] opacity-50 relative rounded-[20px] shrink-0 w-full" data-name="list-item_03">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container83 />
            </div>
            <Container84 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[257px]" data-name="container">
      <div className="backdrop-blur-[0px] bg-[#ebebec] content-stretch flex gap-[8px] h-[36px] items-center justify-center max-h-[36px] min-h-[36px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0485f7] text-[14px] whitespace-nowrap">Window</p>
      </div>
      <div className="relative rounded-[24px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06),0px_-6px_12px_0px_rgba(0,0,0,0.03),0px_14px_28px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Dropdown">
        <div aria-hidden="true" className="absolute backdrop-blur-[20px] bg-white inset-0 pointer-events-none rounded-[24px]" />
        <div className="content-stretch flex flex-col gap-[2px] items-start p-[4px] relative size-full">
          <Container74 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox">
            <Slot8 />
          </div>
          <Container77 />
          <Container78 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox2">
            <Slot9 />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_1px_0px_rgba(0,0,0,0)]" />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Copy Link</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Facebook</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">X / Twitter</p>
    </div>
  );
}

function Slot10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <Container86 />
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=chain">
              <div className="absolute inset-[9.37%_9.38%_9.38%_9.37%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                  <path clipRule="evenodd" d={svgPaths.p59a2380} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_02">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <Container87 />
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_03">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <Container88 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Other</p>
    </div>
  );
}

function Slot11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="bg-[#ebebec] min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <Container89 />
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=arrow">
              <div className="absolute flex inset-[17.19%_29.69%_17.19%_32.81%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                  <div className="relative size-full" data-name="icon">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path clipRule="evenodd" d={svgPaths.p351f9a00} fill="var(--fill-0, #71717A)" fillRule="evenodd" id="icon" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">WhatsApp</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Telegram</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Discord</p>
    </div>
  );
}

function Slot12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <Container90 />
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_02">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <Container91 />
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_03">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <Container92 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">Email</p>
    </div>
  );
}

function Slot13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <Container93 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[308px] relative shrink-0 w-[256px]" data-name="container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[0px] bg-[#ebebec] content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[calc(50%-94.75px)] max-h-[36px] min-h-[36px] overflow-clip px-[16px] py-[8px] rounded-[24px] top-[calc(50%-136px)]" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0485f7] text-[14px] whitespace-nowrap">Share</p>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[0.25px] p-[4px] rounded-[24px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06),0px_-6px_12px_0px_rgba(0,0,0,0.03),0px_14px_28px_0px_rgba(0,0,0,0.08)] top-[44px] w-[256px]" data-name="Dropdown">
        <div aria-hidden="true" className="absolute backdrop-blur-[20px] bg-white inset-0 pointer-events-none rounded-[24px]" />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox">
          <Slot10 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox2">
          <Slot11 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_1px_0px_rgba(0,0,0,0)]" />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[248.25px] p-[4px] rounded-[24px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06),0px_-6px_12px_0px_rgba(0,0,0,0.03),0px_14px_28px_0px_rgba(0,0,0,0.08)] top-[154px] w-[256px]" data-name="Dropdown">
        <div aria-hidden="true" className="absolute backdrop-blur-[20px] bg-white inset-0 pointer-events-none rounded-[24px]" />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox">
          <Slot12 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox2">
          <Slot13 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_1px_0px_rgba(0,0,0,0)]" />
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-start flex flex-wrap gap-[56px] items-start justify-center pb-[72px] pt-[96px] px-[24px] relative size-full">
          <div className="absolute backdrop-blur-[0px] content-stretch flex gap-[2px] items-center justify-center left-[16px] px-[10px] py-[6px] rounded-[16px] top-[16px]" data-name="Chip">
            <div className="absolute bg-[#ebebec] inset-0 rounded-[16px]" data-name="base" />
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="style=regular, keywords=-">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g id="cog">
                  <rect fill="var(--fill-0, #18181B)" height="2.25" id="Icon" rx="1.125" width="2.25" x="4.875" y="4.875" />
                  <path d={svgPaths.p1829bf00} fill="var(--fill-0, #18181B)" id="Star 1 (Stroke)" />
                </g>
              </svg>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">Light</p>
          </div>
          <Container45 />
          <Container57 />
          <Container73 />
          <Container85 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dedee0] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container95() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[4px] pt-[10px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] whitespace-nowrap">Actions</p>
        </div>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=add new">
          <div className="absolute inset-[9.37%_9.38%_9.38%_9.37%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path clipRule="evenodd" d={svgPaths.p3e1bc500} fill="var(--fill-0, #A1A1AA)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#fcfcfc] text-[14px] w-full">New file</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#a1a1aa] text-[12px] w-full">Create a new file</p>
    </div>
  );
}

function Abbr23() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard23() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr23 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">N</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=duplicate">
          <div className="absolute inset-[6.25%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path clipRule="evenodd" d={svgPaths.pda60c80} fill="var(--fill-0, #A1A1AA)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#fcfcfc] text-[14px] w-full">Copy link</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#a1a1aa] text-[12px] w-full">Copy the file link</p>
    </div>
  );
}

function Abbr24() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard24() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr24 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">L</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=edit write">
          <div className="absolute inset-[6.25%_6.25%_11.09%_11.09%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2258 13.2258">
              <path clipRule="evenodd" d={svgPaths.p2cecc580} fill="var(--fill-0, #A1A1AA)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#fcfcfc] text-[14px] w-full">Edit file</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#a1a1aa] text-[12px] w-full">Make changes</p>
    </div>
  );
}

function Abbr25() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard25() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr25 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">E</p>
      </div>
    </div>
  );
}

function Slot14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container96 />
            </div>
            <Container97 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard23 />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_02">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container98 />
            </div>
            <Container99 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard24 />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_03">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container100 />
            </div>
            <Container101 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard25 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="content-stretch flex h-px items-center justify-center max-h-[12px] relative rounded-[4px] shrink-0 w-full" data-name="Separator">
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-0.5px_-0.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.5 1">
                <path d="M0.5 0.5H113" id="Line" stroke="var(--stroke-0, #1A1A1D)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-0.5px_-0.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.5 1">
                <path d="M0.5 0.5H113" id="Line" stroke="var(--stroke-0, #1A1A1D)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[4px] pt-[10px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] whitespace-nowrap">Danger zone</p>
        </div>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=delete remove trash can recycle bin">
          <div className="absolute inset-[3.13%_9.37%_6.25%_9.38%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14.5">
              <path clipRule="evenodd" d={svgPaths.p24446940} fill="var(--fill-0, #DB3B3E)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#db3b3e] text-[14px] w-full">Delete file</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.34] relative shrink-0 text-[#a1a1aa] text-[12px] w-full">Move to trash</p>
    </div>
  );
}

function Abbr26() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘⇧</p>
      </div>
    </div>
  );
}

function Keyboard26() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr26 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">K</p>
      </div>
    </div>
  );
}

function Slot15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container104 />
            </div>
            <Container105 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard26 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[257px]" data-name="container">
      <div className="backdrop-blur-[0px] bg-[#27272a] content-stretch flex gap-[8px] h-[36px] items-center justify-center max-h-[36px] min-h-[36px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0485f7] text-[14px] whitespace-nowrap">Actions</p>
      </div>
      <div className="relative rounded-[24px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06),0px_-6px_12px_0px_rgba(0,0,0,0.03),0px_14px_28px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Dropdown">
        <div aria-hidden="true" className="absolute backdrop-blur-[20px] bg-[#18181b] inset-0 pointer-events-none rounded-[24px]" />
        <div className="content-stretch flex flex-col gap-[2px] items-start p-[4px] relative size-full">
          <Container95 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox">
            <Slot14 />
          </div>
          <Container102 />
          <Container103 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox2">
            <Slot15 />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_1px_0px_rgba(255,255,255,0.3)]" />
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[4px] pt-[10px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] whitespace-nowrap">Text Style</p>
        </div>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=done">
          <div className="absolute inset-[20.31%_14.06%_26.56%_17.19%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8.50001">
              <path clipRule="evenodd" d={svgPaths.p16e13d00} fill="var(--fill-0, #A1A1AA)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] w-full">Bold</p>
    </div>
  );
}

function Abbr27() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard27() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr27 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">B</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=done">
          <div className="absolute inset-[20.31%_14.06%_26.56%_17.19%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8.50001">
              <path clipRule="evenodd" d={svgPaths.p16e13d00} fill="var(--fill-0, #A1A1AA)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] w-full">Italic</p>
    </div>
  );
}

function Abbr28() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard28() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr28 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">I</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="opacity-0 overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=done">
          <div className="absolute inset-[20.31%_14.06%_26.56%_17.19%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8.50001">
              <path clipRule="evenodd" d={svgPaths.p16e13d00} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] w-full">Underline</p>
    </div>
  );
}

function Abbr29() {
  return (
    <div className="content-stretch flex items-start justify-center px-px relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌘</p>
      </div>
    </div>
  );
}

function Keyboard29() {
  return (
    <div className="content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr29 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">U</p>
      </div>
    </div>
  );
}

function Slot16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container108 />
            </div>
            <Container109 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard27 />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_02">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container110 />
            </div>
            <Container111 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard28 />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_03">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container112 />
            </div>
            <Container113 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=command">
              <Keyboard29 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="content-stretch flex h-px items-center justify-center max-h-[12px] relative rounded-[4px] shrink-0 w-full" data-name="Separator">
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-0.5px_-0.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.5 1">
                <path d="M0.5 0.5H113" id="Line" stroke="var(--stroke-0, #1A1A1D)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-0.5px_-0.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.5 1">
                <path d="M0.5 0.5H113" id="Line" stroke="var(--stroke-0, #1A1A1D)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[4px] pt-[10px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] whitespace-nowrap">Text Alignment</p>
        </div>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=fill, keywords=-">
          <div className="absolute inset-1/4" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <path clipRule="evenodd" d={svgPaths.p65069f0} fill="var(--fill-0, #A1A1AA)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] w-full">Left</p>
    </div>
  );
}

function Abbr30() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌥</p>
      </div>
    </div>
  );
}

function Keyboard30() {
  return (
    <div className="content-stretch flex gap-[1.41px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr30 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">A</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="opacity-0 overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=duplicate">
          <div className="absolute inset-[6.25%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path clipRule="evenodd" d={svgPaths.pda60c80} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] w-full">Center</p>
    </div>
  );
}

function Abbr31() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌥</p>
      </div>
    </div>
  );
}

function Keyboard31() {
  return (
    <div className="content-stretch flex gap-[1.41px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr31 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">H</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="opacity-0 overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=edit write">
          <div className="absolute inset-[6.25%_6.25%_11.09%_11.09%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2258 13.2258">
              <path clipRule="evenodd" d={svgPaths.p2cecc580} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] w-full">Right</p>
    </div>
  );
}

function Abbr32() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Abbr">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">⌥</p>
      </div>
    </div>
  );
}

function Keyboard32() {
  return (
    <div className="content-stretch flex gap-[1.41px] items-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Keyboard">
      <Abbr32 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.43]">D</p>
      </div>
    </div>
  );
}

function Slot17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container116 />
            </div>
            <Container117 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=option">
              <Keyboard30 />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_02">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container118 />
            </div>
            <Container119 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=option">
              <Keyboard31 />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_03">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container120 />
            </div>
            <Container121 />
            <div className="content-stretch flex items-start relative shrink-0" data-name="variant=light, shortcut=option">
              <Keyboard32 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[257px]" data-name="container">
      <div className="backdrop-blur-[0px] bg-[#27272a] content-stretch flex gap-[8px] h-[36px] items-center justify-center max-h-[36px] min-h-[36px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0485f7] text-[14px] whitespace-nowrap">Styles</p>
      </div>
      <div className="relative rounded-[24px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06),0px_-6px_12px_0px_rgba(0,0,0,0.03),0px_14px_28px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Dropdown">
        <div aria-hidden="true" className="absolute backdrop-blur-[20px] bg-[#18181b] inset-0 pointer-events-none rounded-[24px]" />
        <div className="content-stretch flex flex-col gap-[2px] items-start p-[4px] relative size-full">
          <Container107 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox">
            <Slot16 />
          </div>
          <Container114 />
          <Container115 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox2">
            <Slot17 />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_1px_0px_rgba(255,255,255,0.3)]" />
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[4px] pt-[10px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] whitespace-nowrap">Left Panel</p>
        </div>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=done">
          <div className="absolute inset-[20.31%_14.06%_26.56%_17.19%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8.50001">
              <path clipRule="evenodd" d={svgPaths.p16e13d00} fill="var(--fill-0, #A1A1AA)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] w-full">Final Copy (1)</p>
    </div>
  );
}

function Slot18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container124 />
            </div>
            <Container125 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="content-stretch flex h-px items-center justify-center max-h-[12px] relative rounded-[4px] shrink-0 w-full" data-name="Separator">
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-0.5px_-0.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.5 1">
                <path d="M0.5 0.5H113" id="Line" stroke="var(--stroke-0, #1A1A1D)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-0.5px_-0.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.5 1">
                <path d="M0.5 0.5H113" id="Line" stroke="var(--stroke-0, #1A1A1D)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[4px] pt-[10px] px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] whitespace-nowrap">Right Panel</p>
        </div>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=done">
          <div className="absolute inset-[20.31%_14.06%_26.56%_17.19%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8.50001">
              <path clipRule="evenodd" d={svgPaths.p16e13d00} fill="var(--fill-0, #A1A1AA)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] w-full">index.ts</p>
    </div>
  );
}

function Container130() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=done">
          <div className="absolute inset-[20.31%_14.06%_26.56%_17.19%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8.50001">
              <path clipRule="evenodd" d={svgPaths.p16e13d00} fill="var(--fill-0, #A1A1AA)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] w-full">package.json</p>
    </div>
  );
}

function Container132() {
  return (
    <div className="h-full relative shrink-0" data-name="container">
      <div className="content-stretch flex items-start pt-[3px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=attention warning">
          <div className="absolute inset-[9.37%_9.38%_9.38%_9.37%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path clipRule="evenodd" d={svgPaths.p26907000} fill="var(--fill-0, #A1A1AA)" fillRule="evenodd" id="icon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] w-full">license.text</p>
    </div>
  );
}

function Slot19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container128 />
            </div>
            <Container129 />
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_02">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container130 />
            </div>
            <Container131 />
          </div>
        </div>
      </div>
      <div className="min-h-[36px] opacity-50 relative rounded-[20px] shrink-0 w-full" data-name="list-item_03">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <Container132 />
            </div>
            <Container133 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[257px]" data-name="container">
      <div className="backdrop-blur-[0px] bg-[#27272a] content-stretch flex gap-[8px] h-[36px] items-center justify-center max-h-[36px] min-h-[36px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0485f7] text-[14px] whitespace-nowrap">Window</p>
      </div>
      <div className="relative rounded-[24px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06),0px_-6px_12px_0px_rgba(0,0,0,0.03),0px_14px_28px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Dropdown">
        <div aria-hidden="true" className="absolute backdrop-blur-[20px] bg-[#18181b] inset-0 pointer-events-none rounded-[24px]" />
        <div className="content-stretch flex flex-col gap-[2px] items-start p-[4px] relative size-full">
          <Container123 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox">
            <Slot18 />
          </div>
          <Container126 />
          <Container127 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox2">
            <Slot19 />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_1px_0px_rgba(255,255,255,0.3)]" />
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] w-full">Copy Link</p>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] w-full">Facebook</p>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] w-full">X / Twitter</p>
    </div>
  );
}

function Slot20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <Container135 />
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=chain">
              <div className="absolute inset-[9.37%_9.38%_9.38%_9.37%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                  <path clipRule="evenodd" d={svgPaths.p59a2380} fill="var(--fill-0, #A1A1AA)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_02">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <Container136 />
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_03">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <Container137 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] w-full">Other</p>
    </div>
  );
}

function Slot21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="bg-[#27272a] min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <Container138 />
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=arrow">
              <div className="absolute flex inset-[17.19%_29.69%_17.19%_32.81%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                  <div className="relative size-full" data-name="icon">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                      <path clipRule="evenodd" d={svgPaths.p351f9a00} fill="var(--fill-0, #A1A1AA)" fillRule="evenodd" id="icon" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] w-full">WhatsApp</p>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] w-full">Telegram</p>
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] w-full">Discord</p>
    </div>
  );
}

function Slot22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <Container139 />
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_02">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <Container140 />
          </div>
        </div>
      </div>
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_03">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <Container141 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] w-full">Email</p>
    </div>
  );
}

function Slot23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot">
      <div className="min-h-[36px] relative rounded-[20px] shrink-0 w-full" data-name="list-item_01">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[6px] relative size-full">
            <Container142 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="h-[308px] relative shrink-0 w-[256px]" data-name="container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[0px] bg-[#27272a] content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[calc(50%-94.75px)] max-h-[36px] min-h-[36px] overflow-clip px-[16px] py-[8px] rounded-[24px] top-[calc(50%-136px)]" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0485f7] text-[14px] whitespace-nowrap">Share</p>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[0.25px] p-[4px] rounded-[24px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06),0px_-6px_12px_0px_rgba(0,0,0,0.03),0px_14px_28px_0px_rgba(0,0,0,0.08)] top-[44px] w-[256px]" data-name="Dropdown">
        <div aria-hidden="true" className="absolute backdrop-blur-[20px] bg-[#18181b] inset-0 pointer-events-none rounded-[24px]" />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox">
          <Slot20 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox2">
          <Slot21 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_1px_0px_rgba(255,255,255,0.3)]" />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[248.25px] p-[4px] rounded-[24px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06),0px_-6px_12px_0px_rgba(0,0,0,0.03),0px_14px_28px_0px_rgba(0,0,0,0.08)] top-[154px] w-[256px]" data-name="Dropdown">
        <div aria-hidden="true" className="absolute backdrop-blur-[20px] bg-[#18181b] inset-0 pointer-events-none rounded-[24px]" />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox">
          <Slot22 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ListBox2">
          <Slot23 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_1px_0px_rgba(255,255,255,0.3)]" />
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#060607] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-start flex flex-wrap gap-[56px] items-start justify-center pb-[72px] pt-[96px] px-[24px] relative size-full">
          <div className="absolute backdrop-blur-[0px] content-stretch flex gap-[2px] items-center justify-center left-[16px] px-[10px] py-[6px] rounded-[16px] top-[16px]" data-name="Chip">
            <div className="absolute bg-[#27272a] inset-0 rounded-[16px]" data-name="base" />
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="style=regular, keywords=-">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g id="cog">
                  <rect fill="var(--fill-0, #FCFCFC)" height="2.25" id="Icon" rx="1.125" width="2.25" x="4.875" y="4.875" />
                  <path d={svgPaths.p1829bf00} fill="var(--fill-0, #FCFCFC)" id="Star 1 (Stroke)" />
                </g>
              </svg>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] whitespace-nowrap">Dark</p>
          </div>
          <Container94 />
          <Container106 />
          <Container122 />
          <Container134 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#28282c] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start justify-center min-w-px relative">
      <Frame24 />
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Section">
      <Frame23 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch cursor-pointer flex font-['Inter:Medium',sans-serif] font-medium gap-[12px] items-center leading-[1.34] not-italic relative shrink-0 text-[#52525b] text-[12px] w-[222px] whitespace-nowrap">
      <a className="block relative shrink-0" href="https://discord.gg/9b6yyZKmH4" target="_blank">
        Discord
      </a>
      <a className="block relative shrink-0" href="https://x.com/hero_ui" target="_blank">
        X
      </a>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="header">
      <Frame29 />
      <div className="h-[40px] relative shrink-0 w-[29px]" data-name="brand-iso-black">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 40">
          <path d={svgPaths.p2ddb2f80} fill="var(--fill-0, #18181B)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#52525b] text-[12px] whitespace-nowrap">© 2026 NextUI Inc. All rights reserved.</p>
    </div>
  );
}

function Information1() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex flex-col gap-[80px] items-start left-0 overflow-clip pb-[72px] pt-[56px] px-[88px] rounded-[64px] top-0 w-[1280px]" data-name="Information">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1104px]" data-name="_HeaderDocs3">
        <div className="h-[56px] relative shrink-0 w-[41px]" data-name="brand-iso-black">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 56">
            <path d={svgPaths.p13a1fa00} fill="var(--fill-0, #18181B)" id="Vector" />
          </svg>
        </div>
        <Container />
      </div>
      <Section />
      <Section1 />
      <div className="content-stretch flex h-[12px] items-center justify-center max-h-[12px] relative rounded-[4px] shrink-0 w-full" data-name="Separator">
        <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
          <div className="absolute inset-[-0.5px_-0.34%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116.5 1">
              <path d="M0.5 0.5H116" id="Line" stroke="var(--stroke-0, #E4E4E7)" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
          <div className="absolute inset-[-0.5px_-0.34%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116.5 1">
              <path d="M0.5 0.5H116" id="Line" stroke="var(--stroke-0, #E4E4E7)" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <Section2 />
      <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-[1104px]" data-name="_FooterDocs">
        <div className="content-stretch flex h-[12px] items-center justify-center max-h-[12px] relative rounded-[4px] shrink-0 w-full" data-name="Separator">
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 553 1">
                <path d="M0.5 0.5H552.5" id="Line" stroke="var(--stroke-0, #E4E4E7)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 553 1">
                <path d="M0.5 0.5H552.5" id="Line" stroke="var(--stroke-0, #E4E4E7)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
        <Header />
      </div>
    </div>
  );
}

export default function Information() {
  return (
    <div className="relative size-full" data-name="Information">
      <Information1 />
    </div>
  );
}