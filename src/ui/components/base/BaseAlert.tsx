interface Props {
  label: string;
  variant?: "info" | "success" | "warning" | "error";
}

export function BaseAlert({ label, variant }: Readonly<Props>) {
  return (
    <div
      role="alert"
      className={`alert alert-${variant} alert-soft fixed bottom-5`}
    >
      <span>{label}</span>
    </div>
  );
}
