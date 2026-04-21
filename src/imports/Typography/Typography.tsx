import svgPaths from "./svg-loza1a2ss3";

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[#18181b] text-[56px] tracking-[-0.56px] whitespace-nowrap">Typography</p>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Section">
      <Frame />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#18181b] text-[22px] tracking-[-0.11px] w-full">
        <p className="leading-[32px] mb-[24px]">Typography in HeroUI is based from Tailwind’s default, which is designed to be functional, neutral, and scalable. Its primary role is to support content clarity and hierarchy rather than express brand personality through decoration.</p>
        <p className="leading-[32px]">The system favors predictable scale, consistent rhythm, and strong defaults so that most text decisions can be made automatically.</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0">Inter</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px]">Extra Bold 36px</span>
        <span className="leading-[20px]">
          <br aria-hidden="true" />
        </span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Line height 112%</span>
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.12] relative shrink-0 text-[#18181b] text-[36px] w-[410px]">Heading 1</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#52525b] text-[14px] tracking-[-0.07px] w-[410px]">Used for the main screen title, should be used only once per screen. It pairs with base body.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame24 />
      <Frame19 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0">Inter</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px]">Bold 24px</span>
        <span className="leading-[20px]">
          <br aria-hidden="true" />
        </span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Line height 134%</span>
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.34] relative shrink-0 text-[#18181b] text-[24px] w-[410px]">Heading 2</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#52525b] text-[14px] tracking-[-0.07px] w-[410px]">Used for main section titles within a screen. Provides hierarchy below Heading 1 and should be used sparingly. Pairs with body base.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame25 />
      <Frame4 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0">Inter</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px]">Semi bold 20px</span>
        <span className="leading-[20px]">
          <br aria-hidden="true" />
        </span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Line height 160%</span>
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#18181b] text-[20px] w-[410px]">Heading 3</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#52525b] text-[14px] tracking-[-0.07px] w-[410px]">Used for subsection titles or important content blocks. Helps break down information within a section. Pairs with body sm or body base.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame26 />
      <Frame6 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0">Inter</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px]">
          Inter
          <br aria-hidden="true" />
          Semi bold 16px
        </span>
        <span className="leading-[20px]">
          <br aria-hidden="true" />
        </span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Line height 150%</span>
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#18181b] text-[16px] w-[410px]">Heading 4</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#52525b] text-[14px] tracking-[-0.07px] w-[410px]">Used for subsection titles or important content blocks. Helps break down information within a section. Pairs with body sm or body base.</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame27 />
      <Frame8 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0">Inter</p>
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0">
        <p className="mb-0">
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#18181b]">Regular 16px</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px]">
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#18181b]">Line height 150%</span>
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Paragraph spacing 8px</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start relative shrink-0">
      <p className="leading-[1.5] relative shrink-0 text-[#18181b] text-[16px] w-[410px]">Body base</p>
      <p className="leading-[20px] relative shrink-0 text-[#52525b] text-[14px] tracking-[-0.07px] w-[410px]">Default paragraph style for most content. Optimized for readability at medium sizes. Used across long-form text, descriptions, and details.</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame28 />
      <Frame10 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0">Inter</p>
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0">
        <p className="mb-0">
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#18181b]">Medium 16px</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px]">
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#18181b]">{`Line height `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#18181b]">150%</span>
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Paragraph spacing 8px</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#18181b] text-[16px] w-[410px]">Body base medium</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#52525b] text-[14px] tracking-[-0.07px] w-[410px]">Same as body base, but with medium font weight. Provides subtle emphasis for key points, labels, or short content blocks.</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame29 />
      <Frame12 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#18181b] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0">Inter</p>
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0">
        <p className="mb-0">
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#18181b]">Regular 14px</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px]">
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#18181b]">{`Line height `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#18181b]">143%</span>
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Paragraph spacing 8px</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start relative shrink-0">
      <p className="leading-[1.43] relative shrink-0 text-[#18181b] w-[410px]">Body sm</p>
      <p className="leading-[20px] relative shrink-0 text-[#52525b] tracking-[-0.07px] w-[410px]">Used for secondary or supporting text. Ideal for captions, metadata, and content with lower emphasis.</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[14px] w-full">
      <Frame30 />
      <Frame14 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#18181b] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0">Inter</p>
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0">
        <p className="mb-0">
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#18181b]">Medium 14px</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px]">
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#18181b]">Line height 1</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#18181b]">43%</span>
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Paragraph spacing 8px</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.43] relative shrink-0 text-[#18181b] w-[410px]">Body sm medium</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#52525b] tracking-[-0.07px] w-[410px]">Same as body small, but with medium font weight. Provides stronger emphasis for small text, such as inline labels or status indicators.</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[14px] w-full">
      <Frame31 />
      <Frame16 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0">Inter</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px]">Regular 12px</span>
        <span className="leading-[20px]">
          <br aria-hidden="true" />
        </span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Line height 134%</span>
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start relative shrink-0">
      <p className="leading-[1.34] relative shrink-0 text-[#18181b] text-[12px] w-[410px]">Body xs</p>
      <p className="leading-[20px] relative shrink-0 text-[#52525b] text-[14px] tracking-[-0.07px] w-[410px]">Used for fine print, footnotes, and dense UI elements where space is limited. Should not be overused.</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame32 />
      <Frame18 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0">Inter</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px]">Medium 12px</span>
        <span className="leading-[20px]">
          <br aria-hidden="true" />
        </span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">{`Line height `}</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">134%</span>
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] relative shrink-0 text-[#18181b] text-[12px] w-[410px]">Body xs medium</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#52525b] text-[14px] tracking-[-0.07px] w-[410px]">Same as body xs, but with medium font weight. Adds clarity and hierarchy in tight spaces like tables or input helpers.</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame33 />
      <Frame21 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0">Inter</p>
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0">
        <p className="mb-0">
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#18181b]">Medium 16px</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px]">
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#18181b]">Line height 20px</span>
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Underlined</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[20px] relative shrink-0">
      <p className="[text-decoration-skip-ink:none] decoration-[#cdcdce] decoration-solid font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#18181b] text-[16px] underline w-[410px]">Link base</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#52525b] text-[14px] tracking-[-0.07px] w-[410px]">Default link style for inline navigation or actions. Used in body content, menus, or lists.</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame34 />
      <Frame23 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#18181b] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0">Inter</p>
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0">
        <p className="mb-0">
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#18181b]">Medium 14px</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px]">
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#18181b]">Line height 18px</span>
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Underlined</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <p className="[text-decoration-skip-ink:none] decoration-[#cdcdce] decoration-[10%] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#18181b] underline w-[410px]">Link sm</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#52525b] tracking-[-0.07px] w-[410px]">Used for inline links in smaller text contexts such as captions, footnotes, or secondary actions.</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[14px] w-full">
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0">Inter</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px]">Regular 16px</span>
        <span className="leading-[20px]">
          <br aria-hidden="true" />
        </span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Line height 20px</span>
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start leading-[20px] relative shrink-0">
      <p className="relative shrink-0 text-[#18181b] text-[16px] w-[410px]">Text field base</p>
      <p className="relative shrink-0 text-[#52525b] text-[14px] tracking-[-0.07px] w-[410px]">Used for input text in standard fields. Optimized for readability at medium size with comfortable line height. Balances clarity with density for forms and interactive components.</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#18181b] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0">Inter</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px]">Regular 14px</span>
        <span className="leading-[20px]">
          <br aria-hidden="true" />
        </span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Line height 20px</span>
      </p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start leading-[20px] relative shrink-0">
      <p className="relative shrink-0 text-[#18181b] w-[410px]">Text field sm</p>
      <p className="relative shrink-0 text-[#52525b] tracking-[-0.07px] w-[410px]">Used for input text in compact fields. Ideal for dense layouts or secondary forms where space is limited. Maintains legibility at smaller sizes.</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[14px] w-full">
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#18181b] text-[14px] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0">Inter</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px]">Medium 16px</span>
        <span className="leading-[20px]">
          <br aria-hidden="true" />
        </span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Line height 22px</span>
      </p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#18181b] text-[16px] w-[410px]">Button base</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[44px] leading-[20px] overflow-hidden relative shrink-0 text-[#52525b] text-[14px] text-ellipsis tracking-[-0.07px] w-[410px]">Primary button text style. Optimized for legibility and balance within medium/large buttons.</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame45 />
      <Frame46 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[#18181b] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0">Inter</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px]">Medium 14px</span>
        <span className="leading-[20px]">
          <br aria-hidden="true" />
        </span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Line height 20px</span>
      </p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[20px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#18181b] w-[410px]">Button sm</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[44px] overflow-hidden relative shrink-0 text-[#52525b] text-ellipsis tracking-[-0.07px] w-[410px]">Button text style for compact buttons. Used where space is limited while keeping readability.</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[14px] w-full">
      <Frame48 />
      <Frame49 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start not-italic relative shrink-0 w-[800px]">
      <Frame2 />
      <Frame3 />
      <Frame5 />
      <Frame7 />
      <Frame9 />
      <Frame11 />
      <Frame13 />
      <Frame15 />
      <Frame17 />
      <Frame20 />
      <Frame22 />
      <Frame35 />
      <Frame38 />
      <Frame41 />
      <Frame44 />
      <Frame47 />
    </div>
  );
}

function Frame50() {
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
      <Frame50 />
      <div className="h-[40px] relative shrink-0 w-[29px]" data-name="brand-iso-black">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 40">
          <path d={svgPaths.p2ddb2f80} fill="var(--fill-0, #18181B)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.34] not-italic relative shrink-0 text-[#52525b] text-[12px] whitespace-nowrap">© 2026 NextUI Inc. All rights reserved.</p>
    </div>
  );
}

function Typography1() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex flex-col gap-[80px] items-start left-0 overflow-clip pb-[72px] pt-[56px] px-[88px] rounded-[64px] top-0 w-[1280px]" data-name="Typography">
      <div className="content-stretch flex items-center relative shrink-0 w-[1104px]" data-name="_HeaderDocs2">
        <div className="h-[56px] relative shrink-0 w-[41px]" data-name="brand-iso-black">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 56">
            <path d={svgPaths.p13a1fa00} fill="var(--fill-0, #18181B)" id="Vector" />
          </svg>
        </div>
      </div>
      <Section />
      <Frame1 />
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

export default function Typography() {
  return (
    <div className="relative size-full" data-name="Typography">
      <Typography1 />
    </div>
  );
}