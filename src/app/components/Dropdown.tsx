import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { ReactNode, useState, useRef, useEffect } from 'react';

interface DropdownItemProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  shortcut?: string;
  onClick?: () => void;
  danger?: boolean;
}

interface DropdownSectionProps {
  title?: string;
  items: DropdownItemProps[];
}

interface DropdownProps {
  trigger: ReactNode;
  sections: DropdownSectionProps[];
  align?: 'left' | 'right';
}

function DropdownItem({ icon: Icon, title, description, shortcut, onClick, danger = false }: DropdownItemProps) {
  return (
    <button
      onClick={onClick}
      className="min-h-[36px] rounded-[20px] w-full transition-all duration-150 focus:outline-none hover:bg-slate-100 active:scale-[0.98]"
    >
      <div className="flex items-center gap-3 px-3 py-1.5">
        {Icon && (
          <div className="flex items-center pt-[3px]">
            <Icon className={`w-4 h-4 ${danger ? 'text-red-500' : 'text-slate-500'}`} />
          </div>
        )}
        <div className="flex-1 text-left min-w-0">
          <p className={`font-medium text-sm leading-[1.43] ${danger ? 'text-red-500' : 'text-slate-900'}`}>
            {title}
          </p>
          {description && (
            <p className="font-normal text-xs leading-[1.34] text-slate-500">
              {description}
            </p>
          )}
        </div>
        {shortcut && (
          <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-lg">
            <span className="font-medium text-sm text-slate-500 leading-[1.43]">
              {shortcut}
            </span>
          </div>
        )}
      </div>
    </button>
  );
}

function DropdownSection({ title, items }: DropdownSectionProps) {
  return (
    <>
      {title && (
        <div className="px-3 pt-2.5 pb-1">
          <p className="font-medium text-xs leading-[1.34] text-slate-500">
            {title}
          </p>
        </div>
      )}
      <div className="flex flex-col w-full">
        {items.map((item, index) => (
          <DropdownItem key={index} {...item} />
        ))}
      </div>
    </>
  );
}

function DropdownDivider() {
  return (
    <div className="px-3">
      <div className="h-px w-full bg-slate-200 rounded my-0.5" />
    </div>
  );
}

export function Dropdown({ trigger, sections, align = 'left' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [computedAlign, setComputedAlign] = useState(align);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);

      // Check if dropdown would overflow viewport
      if (contentRef.current && dropdownRef.current) {
        const rect = dropdownRef.current.getBoundingClientRect();
        const dropdownWidth = 240; // min-w-[240px]

        if (align === 'left' && rect.left + dropdownWidth > window.innerWidth) {
          setComputedAlign('right');
        } else if (align === 'right' && rect.right - dropdownWidth < 0) {
          setComputedAlign('left');
        } else {
          setComputedAlign(align);
        }
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, align]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute z-50 mt-2 ${computedAlign === 'right' ? 'right-0' : 'left-0'}`}
          >
            <div className="relative flex flex-col gap-0.5 p-1 rounded-3xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06),0px_-6px_12px_0px_rgba(0,0,0,0.03),0px_14px_28px_0px_rgba(0,0,0,0.08)] min-w-[240px] backdrop-blur-[20px] bg-white border border-slate-200/50">
              {sections.map((section, index) => (
                <div key={index}>
                  {index > 0 && <DropdownDivider />}
                  <DropdownSection {...section} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
