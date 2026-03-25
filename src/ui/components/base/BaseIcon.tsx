interface Props {
  size: number;
  color: string;
  children: React.ReactNode;
}

export function BaseIcon({ children }: Readonly<Props>) {
  return <>{children}</>;
}
