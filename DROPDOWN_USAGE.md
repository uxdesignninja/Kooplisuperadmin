# Dropdown Component - HeroUI Implementation

## Overview
The Dropdown component follows HeroUI design system patterns with consistent typography, spacing, shadows, and interactions.

## Features
- ✅ HeroUI-compliant design (typography, spacing, shadows)
- ✅ Keyboard navigation support (Escape to close)
- ✅ Click-outside-to-close functionality
- ✅ Smooth animations (fade-in, slide, scale)
- ✅ Sectioned menu structure with dividers
- ✅ Icon + text + description + keyboard shortcut support
- ✅ Danger variant for destructive actions
- ✅ Align left or right positioning
- ✅ Focus ring accessibility
- ✅ Active state feedback

## Usage Examples

### Basic Dropdown
```tsx
import { Dropdown } from './components/Dropdown';
import { Copy, Edit } from 'lucide-react';

<Dropdown
  trigger={<button>Click me</button>}
  sections={[
    {
      items: [
        {
          icon: Copy,
          title: "Copy",
          description: "Copy to clipboard",
          onClick: () => console.log('Copied')
        },
        {
          icon: Edit,
          title: "Edit",
          onClick: () => console.log('Editing')
        }
      ]
    }
  ]}
/>
```

### Multi-Section Dropdown with Shortcuts
```tsx
<Dropdown
  align="right"
  trigger={<button>Actions</button>}
  sections={[
    {
      title: "File Actions",
      items: [
        {
          icon: Copy,
          title: "Copy",
          description: "Copy to clipboard",
          shortcut: "⌘C",
          onClick: () => {}
        }
      ]
    },
    {
      title: "Danger Zone",
      items: [
        {
          icon: Trash,
          title: "Delete",
          description: "Permanently remove",
          shortcut: "⌘⇧D",
          danger: true,
          onClick: () => {}
        }
      ]
    }
  ]}
/>
```

## Props

### Dropdown Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| trigger | ReactNode | required | Element that triggers the dropdown |
| sections | DropdownSectionProps[] | required | Array of menu sections |
| align | 'left' \| 'right' | 'left' | Dropdown alignment |

### DropdownSection Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | optional | Section header text |
| items | DropdownItemProps[] | required | Array of menu items |

### DropdownItem Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | LucideIcon | optional | Icon component |
| title | string | required | Item title |
| description | string | optional | Item description |
| shortcut | string | optional | Keyboard shortcut label |
| onClick | () => void | optional | Click handler |
| danger | boolean | false | Danger variant styling |

## Design Tokens

### Typography
- Section title: Inter Medium, 12px, slate-500
- Item title: Inter Medium, 14px, slate-900 (or red-500 for danger)
- Item description: Inter Regular, 12px, slate-500
- Keyboard shortcut: Inter Medium, 14px, slate-500

### Spacing
- Container padding: 4px (p-1)
- Section gap: 2px (gap-0.5)
- Item padding: 12px horizontal, 6px vertical
- Item gap: 12px

### Borders & Shadows
- Border radius: 24px (container), 20px (items)
- Shadow: Multi-layer shadow system
  - Top: `0px 2px 8px 0px rgba(0,0,0,0.06)`
  - Middle: `0px -6px 12px 0px rgba(0,0,0,0.03)`
  - Bottom: `0px 14px 28px 0px rgba(0,0,0,0.08)`
- Border: 1px slate-200/50
- Backdrop blur: 20px

### Colors
- Background: White with backdrop-blur
- Hover: slate-100
- Divider: slate-200
- Danger text/icon: red-500
- Default text: slate-900
- Secondary text: slate-500

## Accessibility
- ✅ Keyboard navigation (Escape key support)
- ✅ Focus management
- ✅ ARIA attributes (implicit through semantic HTML)
- ✅ Click outside to close
- ⚠️ Consider adding arrow key navigation for items

## Animation
- **Open**: Fade-in with slight scale and upward slide
- **Close**: Reverse animation
- **Duration**: 150ms
- **Easing**: Cubic bezier (0.22, 1, 0.36, 1)
- **Item hover**: Background transition 150ms

## Integration Examples

See implementation in:
- `/src/app/pages/Members.tsx` - Member actions dropdown
- `/src/app/pages/Transactions.tsx` - Transaction actions dropdown
- `/src/app/pages/Dashboard.tsx` - Export and disbursement dropdowns
- `/src/app/components/TopBar.tsx` - User profile dropdown

## Best Practices

1. **Section Usage**: Use sections to group related actions
2. **Danger Actions**: Always use `danger: true` for destructive actions
3. **Keyboard Shortcuts**: Include shortcuts for frequently used actions
4. **Descriptions**: Add descriptions for clarity, especially for complex actions
5. **Icons**: Always include icons for better visual scanning
6. **Alignment**: Use `align="right"` for dropdowns near the right edge

## Future Enhancements
- [ ] Arrow key navigation between items
- [ ] Submenu support
- [ ] Custom width control
- [ ] Disabled state for items
- [ ] Loading state
- [ ] Checkable items for selection
