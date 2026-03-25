interface IconProps {
  size?: number;
}
// luego le preguntare a kevin como hacer el DO NOT REPEAT YOURSELF para no usar el interface en cada icono

export function PlusIcon({ size = 24 }: IconProps) {
  return (
    <svg
      aria-label="New"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="currentColor"
      className="size-6"
    >
      <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
    </svg>
  );
}
