import {
  LayoutDashboard,
  CalendarDays,
  Martini,
  Utensils,
  Wine,
  Image,
  Tv,
  Users,
  Sparkles,
  Settings,
  X,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "events", label: "Events", icon: CalendarDays },
  { id: "specials", label: "Specials", icon: Martini },
  { id: "menu", label: "Menu", icon: Utensils },
  { id: "bourbon", label: "Bourbon", icon: Wine },
  { id: "gallery", label: "Gallery", icon: Image },
  { id: "tvs", label: "TVs", icon: Tv },
  { id: "staff", label: "Staff", icon: Users },
  { id: "ai", label: "AI Assistant", icon: Sparkles },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({
  children,
  onClose,
  activeAdminTab,
  setActiveAdminTab,
}) {
  return (
    <section className="admin-os">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <div>
            <h2>The R.O.W. OS</h2>
            <p>Management Platform</p>
          </div>

          <button className="admin-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="admin-nav">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                className={
                  activeAdminTab === item.id
                    ? "admin-nav-item active"
                    : "admin-nav-item"
                }
                onClick={() => setActiveAdminTab(item.id)}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </div>
      </aside>

      <main className="admin-main">{children}</main>
    </section>
  );
}