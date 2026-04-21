import svgPaths from "./svg-o2wmq47owj";

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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#52525b] text-[14px] whitespace-nowrap">Difficulty: Beginner</p>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="bar-low">
        <div className="absolute bg-[#18181b] bottom-0 left-0 right-3/4 rounded-[8px] top-[62.5%]" />
        <div className="absolute bg-[#18181b] inset-[31.25%_37.5%_0_37.5%] opacity-20 rounded-[8px]" />
        <div className="absolute bg-[#18181b] bottom-0 left-3/4 opacity-20 right-0 rounded-[8px] top-0" />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0" data-name="container">
      <div className="content-stretch flex gap-[2px] items-start justify-center px-[2px] relative shrink-0" data-name="Link">
        <a className="[text-decoration-skip-ink:none] block cursor-pointer decoration-[#cdcdce] decoration-[10%] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#18181b] text-[14px] underline whitespace-nowrap" href="https://v3.heroui.com/docs/react/components/button" target="_blank">
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
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#18181b] text-[56px] tracking-[-0.56px] whitespace-nowrap">Button</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[#18181b] text-[22px] tracking-[-0.11px] w-full">A clickable button component with multiple variants and states.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f5f5f5] h-[520px] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[24px] relative size-full">
          <div className="bg-[#0485f7] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Buy now</p>
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=basket food">
              <div className="absolute inset-[6.25%_6.25%_7.81%_0]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9998 13.75">
                  <path clipRule="evenodd" d={svgPaths.p37e82500} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="icon" />
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

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Section">
      <Frame1 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#18181b] text-[24px] tracking-[-0.12px] whitespace-nowrap">Composition</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#18181b] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[24px] mb-[24px]">A Button consists of:</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Label: Describes the action.</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Prefix (optional): Icon or element displayed before the label.</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[24px]">Suffix (optional): Icon or element displayed after the label.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame6 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#18181b] text-[24px] tracking-[-0.12px] whitespace-nowrap">Sizes</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#18181b] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[24px] mb-[24px]">Buttons are available in three sizes:</p>
        <ul className="list-disc mb-[24px]">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">SM</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">MD</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[24px]">LG</span>
          </li>
        </ul>
        <p className="leading-[24px]">Size controls height, padding, and text size while preserving the same structure.</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#18181b] text-[24px] tracking-[-0.12px] whitespace-nowrap">Properties</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#18181b] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[24px] mb-[24px] whitespace-pre-wrap">Button exposes the following properties:</p>
        <ul className="leading-[24px] list-disc">
          <li className="mb-0 ms-[24px]">
            <span>
              Variant
              <br aria-hidden="true" />
            </span>
            <span className="font-['Inter:Italic',sans-serif] font-normal italic text-[#c2410c]">primary | secondary | tertiary | outline | ghost | danger | dangerSoft</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span>
              State
              <br aria-hidden="true" />
            </span>
            <span className="font-['Inter:Italic',sans-serif] font-normal italic text-[#c2410c]">default | hover | pressed | focus | disabled</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span>
              Size
              <br aria-hidden="true" />
            </span>
            <span className="font-['Inter:Italic',sans-serif] font-normal italic text-[#c2410c]">sm | md | lg</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span>
              Icon only
              <br aria-hidden="true" />
            </span>
            <span className="font-['Inter:Italic',sans-serif] font-normal italic text-[#c2410c]">true | false</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span>
              Label
              <br aria-hidden="true" />
            </span>
            <span className="font-['Inter:Italic',sans-serif] font-normal italic text-[#52525b]">{` Text content`}</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span>
              Show prefix
              <br aria-hidden="true" />
            </span>
            <span className="font-['Inter:Italic',sans-serif] font-normal italic text-[#c2410c]">true | false</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span>
              Prefix
              <br aria-hidden="true" />
            </span>
            <span className="font-['Inter:Italic',sans-serif] font-normal italic text-[#52525b]">{` Slot for icon or element`}</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span>
              Show suffix
              <br aria-hidden="true" />
            </span>
            <span className="font-['Inter:Italic',sans-serif] font-normal italic text-[#c2410c]">true | false</span>
          </li>
          <li className="ms-[24px]">
            <span>
              Suffix
              <br aria-hidden="true" />
            </span>
            <span className="font-['Inter:Italic',sans-serif] font-normal italic text-[#52525b]">{` Slot for icon or element`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#18181b] text-[24px] tracking-[-0.12px] whitespace-nowrap">States</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#18181b] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[24px] mb-[24px]">Buttons support the following interaction states:</p>
        <ul className="list-disc mb-[24px]">
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
            <span className="leading-[24px]">Pressed</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[24px]">Disabled</span>
          </li>
        </ul>
        <p className="leading-[24px]">Focus state includes a visible focus ring for accessibility.</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#18181b] text-[24px] tracking-[-0.12px] whitespace-nowrap">Variants</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#18181b] text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[24px] mb-[24px]">Button supports the following variants:</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Primary: The main call to action. Use for the most important action on a screen.</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Secondary: A medium emphasis, alternative to the primary action.</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Tertiary: Minimal emphasis button, typically used alongside primary or secondary actions.</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Outline: A bordered button used when you need emphasis without a filled background.</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Ghost: A low-visibility button with no background or border, ideal for subtle actions.</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Danger: Used for destructive or irreversible actions.</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[24px]">Danger Soft: A lower-emphasis destructive action, used when caution is required but urgency is lower.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#18181b] text-[24px] tracking-[-0.12px] whitespace-nowrap">Usage Guidelines</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#18181b] text-[16px] tracking-[-0.08px] whitespace-nowrap">Do</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc not-italic relative shrink-0 text-[#18181b] text-[16px] tracking-[-0.08px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[24px]">Use Primary sparingly for the main action</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[24px]">Pair Danger variants only with destructive actions</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[24px]">Use icon-only buttons when the action is universally understood</span>
        </li>
      </ul>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#18181b] text-[16px] tracking-[-0.08px] whitespace-nowrap">Don’t</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc not-italic relative shrink-0 text-[#18181b] text-[16px] tracking-[-0.08px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[24px]">Use multiple primary buttons in the same hierarchy level</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[24px]">Hide critical actions behind ghost buttons</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[24px]">Use danger styles for non-destructive actions</span>
        </li>
      </ul>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start justify-center min-w-px relative">
      <Frame5 />
      <Frame8 />
      <Frame11 />
      <Frame14 />
      <Frame17 />
      <Frame20 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#f5f5f5] h-[240px] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[32px] items-center justify-center pb-[48px] pt-[72px] px-[24px] relative size-full">
          <div className="bg-[#0485f7] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=-">
              <div className="absolute inset-[9.37%_9.38%_9.38%_9.37%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                  <path clipRule="evenodd" d={svgPaths.p35c97780} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Call to action</p>
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=-">
              <div className="absolute inset-[9.37%_9.38%_9.38%_9.37%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                  <path clipRule="evenodd" d={svgPaths.p35c97780} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute backdrop-blur-[0px] content-stretch flex gap-[2px] items-center justify-center left-[16px] px-[10px] py-[6px] rounded-[16px] top-[16px]" data-name="Chip">
            <div className="absolute bg-[#ebebec] inset-0 rounded-[16px]" data-name="base" />
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="style=regular, keywords=-">
              <div className="absolute inset-[3.13%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
                  <path clipRule="evenodd" d={svgPaths.p16cb0400} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">Button</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dedee0] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#f5f5f5] h-[240px] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[32px] items-center justify-center pb-[48px] pt-[72px] px-[24px] relative size-full">
          <div className="bg-[#0485f7] content-stretch flex gap-[5px] h-[32px] items-center justify-center max-h-[32px] min-h-[32px] overflow-clip px-[12px] py-[6px] relative rounded-[16px] shrink-0" data-name="Button">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] whitespace-nowrap">Small</p>
          </div>
          <div className="bg-[#0485f7] content-stretch flex gap-[8px] h-[36px] items-center justify-center max-h-[36px] min-h-[36px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#fcfcfc] text-[14px] whitespace-nowrap">Medium</p>
          </div>
          <div className="bg-[#0485f7] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Large</p>
          </div>
          <div className="absolute backdrop-blur-[0px] content-stretch flex gap-[2px] items-center justify-center left-[16px] px-[10px] py-[6px] rounded-[16px] top-[16px]" data-name="Chip">
            <div className="absolute bg-[#ebebec] inset-0 rounded-[16px]" data-name="base" />
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="style=regular, keywords=-">
              <div className="absolute inset-[3.13%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
                  <path clipRule="evenodd" d={svgPaths.p16cb0400} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">Button</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dedee0] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#f5f5f5] h-[240px] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[32px] items-center justify-center pb-[48px] pt-[72px] px-[24px] relative size-full">
          <div className="bg-[#0485f7] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Upgrade to Pro</p>
          </div>
          <div className="bg-[#0485f7] content-stretch flex items-center justify-center max-h-[40px] min-h-[40px] overflow-clip p-[12px] relative rounded-[24px] shrink-0" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=add new">
              <div className="absolute inset-[10.94%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 12.5">
                  <path clipRule="evenodd" d={svgPaths.p38d67000} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute backdrop-blur-[0px] content-stretch flex gap-[2px] items-center justify-center left-[16px] px-[10px] py-[6px] rounded-[16px] top-[16px]" data-name="Chip">
            <div className="absolute bg-[#ebebec] inset-0 rounded-[16px]" data-name="base" />
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="style=regular, keywords=-">
              <div className="absolute inset-[3.13%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
                  <path clipRule="evenodd" d={svgPaths.p16cb0400} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">Button</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dedee0] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[48px] pt-[72px] px-[24px] relative size-full">
          <div className="bg-[#0485f7] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Send message</p>
          </div>
          <div className="bg-[#3592f9] content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Send message</p>
          </div>
          <div className="bg-[#3592f9] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shadow-[0px_0px_0px_2px_#f5f5f5,0px_0px_0px_4px_#0485f7] shrink-0" data-name="Button">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Send message</p>
          </div>
          <div className="bg-[#3592f9] content-stretch flex gap-[7.84px] h-[39.2px] items-center justify-center max-h-[40px] overflow-clip px-[15.68px] py-[9.8px] relative rounded-[24px] shrink-0" data-name="Button">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[23.52px] not-italic relative shrink-0 text-[#fcfcfc] text-[15.68px] tracking-[-0.3136px] whitespace-nowrap">Send message</p>
          </div>
          <div className="bg-[#0485f7] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] opacity-50 overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Send message</p>
          </div>
          <div className="absolute backdrop-blur-[0px] content-stretch flex gap-[2px] items-center justify-center left-[16px] px-[10px] py-[6px] rounded-[16px] top-[16px]" data-name="Chip">
            <div className="absolute bg-[#ebebec] inset-0 rounded-[16px]" data-name="base" />
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="style=regular, keywords=-">
              <div className="absolute inset-[3.13%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
                  <path clipRule="evenodd" d={svgPaths.p16cb0400} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">Button</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dedee0] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[48px] pt-[72px] px-[24px] relative size-full">
          <div className="bg-[#0485f7] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Primary</p>
          </div>
          <div className="backdrop-blur-[0px] bg-[#ebebec] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0485f7] text-[16px] whitespace-nowrap">Secondary</p>
          </div>
          <div className="backdrop-blur-[0px] bg-[#ebebec] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#18181b] text-[16px] whitespace-nowrap">Tertiary</p>
          </div>
          <div className="h-[40px] max-h-[40px] min-h-[40px] relative rounded-[24px] shrink-0" data-name="Button">
            <div className="content-stretch flex gap-[8px] items-center justify-center max-h-[inherit] min-h-[inherit] overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#18181b] text-[16px] whitespace-nowrap">Outline</p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#dedee0] border-solid inset-0 pointer-events-none rounded-[24px]" />
          </div>
          <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#18181b] text-[16px] whitespace-nowrap">Ghost</p>
          </div>
          <div className="bg-[#ff383c] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Danger</p>
          </div>
          <div className="backdrop-blur-[0px] bg-[rgba(255,56,60,0.15)] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#ff383c] text-[16px] whitespace-nowrap">Danger Soft</p>
          </div>
          <div className="absolute backdrop-blur-[0px] content-stretch flex gap-[2px] items-center justify-center left-[16px] px-[10px] py-[6px] rounded-[16px] top-[16px]" data-name="Chip">
            <div className="absolute bg-[#ebebec] inset-0 rounded-[16px]" data-name="base" />
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="style=regular, keywords=-">
              <div className="absolute inset-[3.13%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
                  <path clipRule="evenodd" d={svgPaths.p16cb0400} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">Button</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dedee0] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start justify-center min-w-px relative">
      <Frame27 />
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <Frame31 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full" data-name="Section">
      <Frame7 />
      <Frame26 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#18181b] text-[24px] tracking-[-0.12px] whitespace-nowrap">Examples</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#18181b] text-[16px] tracking-[-0.08px] w-full">Preview the Button’s appearance across light and dark themes.</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#f5f5f5] h-[320px] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[20px] items-center justify-center px-[24px] py-[72px] relative size-full">
          <div className="bg-[#0485f7] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=planet world language">
              <div className="absolute inset-[6.25%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path clipRule="evenodd" d={svgPaths.pa428a00} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Search</p>
          </div>
          <div className="backdrop-blur-[0px] bg-[#ebebec] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=add new">
              <div className="absolute inset-[10.94%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 12.5">
                  <path clipRule="evenodd" d={svgPaths.p38d67000} fill="var(--fill-0, #0485F7)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0485f7] text-[16px] whitespace-nowrap">Add member</p>
          </div>
          <div className="backdrop-blur-[0px] bg-[#ebebec] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=mail">
              <div className="absolute inset-[15.63%_3.13%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
                  <path clipRule="evenodd" d={svgPaths.pe0af380} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#18181b] text-[16px] whitespace-nowrap">Email</p>
          </div>
          <div className="h-[40px] max-h-[40px] min-h-[40px] relative rounded-[24px] shrink-0" data-name="Button">
            <div className="content-stretch flex gap-[8px] items-center justify-center max-h-[inherit] min-h-[inherit] overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=profile human user add">
                <div className="absolute inset-[6.25%_1.56%_6.25%_6.25%]" data-name="icon">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.75 14">
                    <path clipRule="evenodd" d={svgPaths.p3c869e00} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#18181b] text-[16px] whitespace-nowrap">Follow</p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#dedee0] border-solid inset-0 pointer-events-none rounded-[24px]" />
          </div>
          <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=-">
              <div className="absolute flex inset-[20.31%_7.81%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
                  <div className="relative size-full" data-name="icon">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 13.5">
                      <path clipRule="evenodd" d={svgPaths.pdb47080} fill="var(--fill-0, #18181B)" fillRule="evenodd" id="icon" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#18181b] text-[16px] whitespace-nowrap">Go back</p>
          </div>
          <div className="bg-[#ff383c] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=delete remove trash can recycle bin">
              <div className="absolute inset-[3.13%_9.37%_6.25%_9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14.5">
                  <path clipRule="evenodd" d={svgPaths.p24446940} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Delete</p>
          </div>
          <div className="backdrop-blur-[0px] bg-[rgba(255,56,60,0.15)] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=-">
              <div className="absolute inset-[5.93%_3.13%_9.38%_3.12%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13.5518">
                  <path clipRule="evenodd" d={svgPaths.pc1be300} fill="var(--fill-0, #FF383C)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#ff383c] text-[16px] whitespace-nowrap">Cancel</p>
          </div>
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
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dedee0] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#060607] h-[320px] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[20px] items-center justify-center px-[24px] py-[72px] relative size-full">
          <div className="bg-[#0485f7] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=planet world language">
              <div className="absolute inset-[6.25%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path clipRule="evenodd" d={svgPaths.pa428a00} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Search</p>
          </div>
          <div className="backdrop-blur-[0px] bg-[#27272a] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=add new">
              <div className="absolute inset-[10.94%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 12.5">
                  <path clipRule="evenodd" d={svgPaths.p38d67000} fill="var(--fill-0, #0485F7)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0485f7] text-[16px] whitespace-nowrap">Add member</p>
          </div>
          <div className="backdrop-blur-[0px] bg-[#27272a] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=mail">
              <div className="absolute inset-[15.63%_3.13%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
                  <path clipRule="evenodd" d={svgPaths.pe0af380} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Email</p>
          </div>
          <div className="h-[40px] max-h-[40px] min-h-[40px] relative rounded-[24px] shrink-0" data-name="Button">
            <div className="content-stretch flex gap-[8px] items-center justify-center max-h-[inherit] min-h-[inherit] overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=profile human user add">
                <div className="absolute inset-[6.25%_1.56%_6.25%_6.25%]" data-name="icon">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.75 14">
                    <path clipRule="evenodd" d={svgPaths.p3c869e00} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="icon" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Follow</p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#28282c] border-solid inset-0 pointer-events-none rounded-[24px]" />
          </div>
          <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=-">
              <div className="absolute flex inset-[20.31%_7.81%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
                  <div className="relative size-full" data-name="icon">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 13.5">
                      <path clipRule="evenodd" d={svgPaths.pdb47080} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="icon" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Go back</p>
          </div>
          <div className="bg-[#db3b3e] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=delete remove trash can recycle bin">
              <div className="absolute inset-[3.13%_9.37%_6.25%_9.38%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14.5">
                  <path clipRule="evenodd" d={svgPaths.p24446940} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Delete</p>
          </div>
          <div className="backdrop-blur-[0px] bg-[rgba(219,59,62,0.15)] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] overflow-clip px-[16px] py-[8px] relative rounded-[24px] shrink-0" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="style=regular, keywords=-">
              <div className="absolute inset-[5.93%_3.13%_9.38%_3.12%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13.5518">
                  <path clipRule="evenodd" d={svgPaths.pc1be300} fill="var(--fill-0, #DB3B3E)" fillRule="evenodd" id="icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#db3b3e] text-[16px] whitespace-nowrap">Cancel</p>
          </div>
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
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#28282c] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start justify-center min-w-px relative">
      <Frame33 />
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Section">
      <Frame32 />
    </div>
  );
}

function Frame38() {
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
      <Frame38 />
      <div className="h-[40px] relative shrink-0 w-[29px]" data-name="brand-iso-black">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 40">
          <path d={svgPaths.p2ddb2f80} fill="var(--fill-0, #18181B)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#52525b] text-[12px] whitespace-nowrap">© 2026 NextUI Inc. All rights reserved.</p>
    </div>
  );
}

export default function Information() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[80px] items-start overflow-clip pb-[72px] pt-[56px] px-[88px] relative rounded-[64px] size-full" data-name="Information">
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