import { NavLink } from "react-router";
import { AvatarMenu } from "../components/avatarMenu";
import { BaseIcon } from "@/ui/components/base/BaseIcon";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="flex justify-between navbar w-full bg-base-300">
          <div className="flex items-center">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <BaseIcon
                icon="slide"
                size={24}
                color="currentColor"
                viewBox="0 0 24 24"
              />
            </label>
            <div className="px-4">Dashboard</div>
          </div>
          <AvatarMenu />
        </nav>
        {/* Page content here */}
        <div className="p-4">{children}</div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <div className="px-4 pt-5 is-drawer-close:hidden">Dashboard</div>
          <ul className="menu w-full grow pt-4">
            {/* List item */}
            <li>
              <NavLink
                to="/admin/employee"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <BaseIcon
                  icon="settings"
                  size={24}
                  color="currentColor"
                  viewBox="0 0 24 24"
                />
                <span className="is-drawer-close:hidden">Empleados</span>
              </NavLink>
            </li>

            {/* List item */}
            <li>
              <NavLink
                to="/admin/appointment"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}
                <BaseIcon
                  icon="slide"
                  size={24}
                  color="currentColor"
                  viewBox="0 0 24 24"
                />
                <span className="is-drawer-close:hidden">Citas</span>
              </NavLink>
            </li>
            {/* List item */}
            <li>
              <NavLink
                to="/admin/services"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Servicios"
              >
                {/* Services icon */}
                <BaseIcon
                  icon="settings"
                  size={24}
                  color="currentColor"
                  viewBox="0 0 24 24"
                />

                <span className="is-drawer-close:hidden">Servicios</span>
              </NavLink>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
