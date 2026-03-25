interface IconProps {
  size?: number;
}
// luego le preguntare a kevin como hacer el DO NOT REPEAT YOURSELF para no usar el interface en cada icono

export function HomeIcon({ size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      fill="none"
      stroke="currentColor"
      className="my-1.5 inline-block size-4"
    >
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
      <path d="M9 4v16"></path>
      <path d="M14 10l2 2l-2 2"></path>
    </svg>
  );
}
