import { BaseIcon } from "@/ui/components/base/BaseIcon";

interface ServiceFabButtonProps {
  onAdd?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  disabledDelete?: boolean;
}

export function ServiceFabButton({
  onAdd,
  onEdit,
  onDelete,
  disabledDelete = false,
}: ServiceFabButtonProps) {
  return (
    <div className="fab fab-flower">
      {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
      <div tabIndex={0} role="button" className="btn btn-circle btn-lg">
        <BaseIcon
          icon="settings"
          size={24}
          color="currentColor"
          viewBox="0 0 24 24"
        />
      </div>

      {/* Main Action button replaces the original button when FAB is open */}
      <button className="fab-main-action btn btn-circle btn-lg btn-primary">
        <BaseIcon
          icon="close"
          size={24}
          color="currentColor"
          viewBox="0 0 24 24"
        />
      </button>

      {/* buttons that show up when FAB is open */}
      <button 
        className="btn btn-circle btn-lg btn-success"
        onClick={onAdd}
      >
        <BaseIcon icon="plus" size={24} color="currentColor" />
      </button>
      <button 
        className="btn btn-circle btn-lg btn-warning"
        onClick={onEdit}
      >
        <BaseIcon icon="edit" size={24} color="currentColor" />
      </button>
      <button
        className="btn btn-circle btn-lg btn-error"
        onClick={onDelete}
        disabled={disabledDelete}
      >
        <BaseIcon
          icon="trash"
          size={24}
          color="currentColor"
          viewBox="0 0 24 24"
        />
      </button>
    </div>
  );
}
