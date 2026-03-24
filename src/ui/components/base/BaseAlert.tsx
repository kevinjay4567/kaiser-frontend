interface Props {
  label: string;
  variant?: "info" | "success" | "warning" | "error";
}

export function BaseAlert({ label, variant = "info" }: Readonly<Props>) {
  return (
    <div role="alert" className={`alert alert-${variant} alert-soft`}>
      <span>{label}</span>
    </div>
  );
}
