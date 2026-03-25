import { BaseIcon } from "../base/BaseIcon";

interface IconProps {
  size?: number;
}
// luego le preguntare a kevin como hacer el DO NOT REPEAT YOURSELF para no usar el interface en cada icono

export function TrashIcon({ size = 24 }: IconProps) {
  return (
    <BaseIcon size={size} color="currentColor">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-trash2-icon lucide-trash-2"
      >
        <path d="M10 11v6" />
        <path d="M14 11v6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
        <path d="M3 6h18" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    </BaseIcon>
  );
}
