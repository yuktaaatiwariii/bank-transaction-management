import {
  LayoutDashboard,
  Wallet,
  ArrowRightLeft,
  CreditCard,
  TrendingUp,
  Headphones,
  Settings,
  Search,
  Bell,
  User,
  PlusCircle,
  Send,
  Landmark,
} from "lucide-react";

const menu = [
  { icon: LayoutDashboard, name: "Dashboard", active: true },
  { icon: Wallet, name: "My Accounts" },
  { icon: ArrowRightLeft, name: "Transfers" },
  { icon: CreditCard, name: "Payments" },
  { icon: TrendingUp, name: "Investments" },
  { icon: Headphones, name: "Support" },
  { icon: Settings, name: "Settings" },
];

const transactions = [
  {
    title: "Starbucks Coffee",
    date: "18 Jul 2024",
    amount: "-$5.45",
    color: "text-red-500",
  },
  {
    title: "Salary Deposit",
    date: "20 Jul 2024",
    amount: "+$4,500",
    color: "text-emerald-600",
  },
  {
    title: "Transfer to Savings",
    date: "10 Jul 2024",
    amount: "-$1,000",
    color: "text-gray-500",
  },
  {
    title: "Amazon Purchase",
    date: "27 Jul 2024",
    amount: "-$89.99",
    color: "text-red-500",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto flex max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-[#021d57] to-[#03204b] p-6 text-white">

          <div className="mb-10 flex items-center gap-3">
            <div className="rounded-xl bg-cyan-500 p-2">
              <Landmark size={24} />
            </div>

            <div>
              <h2 className="font-bold leading-none">SMART</h2>
              <h2 className="font-bold leading-none">BANK</h2>
            </div>
          </div>

          <nav className="space-y-2">
            {menu.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition
                  ${
                    item.active
                      ? "bg-cyan-500/20 border border-cyan-400 text-cyan-300"
                      : "hover:bg-white/10"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 bg-[#f8f8fb]">

          {/* Top Bar */}
          <div className="flex items-center justify-between bg-[#041d58] px-6 py-4">

            <div className="flex items-center rounded-full bg-white/10 px-4 py-2 text-white">
              <Search size={18} />
              <input
                placeholder="Smart Bank"
                className="ml-2 bg-transparent outline-none placeholder:text-white/70"
              />
            </div>

            <div className="flex items-center gap-6 text-white">
              <Bell />

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500">
                <User />
              </div>

              <span>Hi, Sarah J.</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

              {/* Left */}
              <div className="lg:col-span-2">

                <h1 className="text-5xl font-bold">
                  Welcome back, Sarah!
                </h1>

                <p className="mt-2 text-lg text-teal-600">
                  Your dashboard is secure and up-to-date.
                </p>

                {/* Quick actions */}
                <div className="mt-6 grid gap-4 md:grid-cols-3">

                  <ActionCard
                    icon={<PlusCircle />}
                    title="Create Account"
                  />

                  <ActionCard
                    icon={<Send />}
                    title="Send Money"
                  />

                  <ActionCard
                    icon={<Wallet />}
                    title="Check Balance"
                  />

                </div>

                {/* Accounts */}
                <div className="mt-6 grid gap-4 md:grid-cols-3">

                  <AccountCard
                    title="Savings Account"
                    balance="$15,430.21"
                    account="....4321"
                  />

                  <AccountCard
                    title="Checking Account"
                    balance="$3,210.50"
                    account="....8765"
                  />

                  <AccountCard
                    title="Credit Card"
                    balance="$1,150.00"
                    account="Current Balance"
                  />

                </div>
              </div>

              {/* Right */}
              <div className="space-y-5">

                <div className="rounded-3xl bg-white p-6 shadow">

                  <p className="text-gray-500">
                    Total Accounts
                  </p>

                  <div className="mt-2 text-6xl font-bold text-teal-600">
                    4
                  </div>

                  <div className="mt-4 h-1 rounded bg-teal-400"></div>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow">

                  <h3 className="mb-5 text-3xl font-bold">
                    Recent Transactions
                  </h3>

                  <div className="space-y-4">

                    {transactions.map((t) => (
                      <div
                        key={t.title}
                        className="flex justify-between border-b pb-3"
                      >
                        <div>
                          <p className="font-medium">
                            {t.title}
                          </p>

                          <span className="text-sm text-gray-500">
                            {t.date}
                          </span>
                        </div>

                        <span className={`font-semibold ${t.color}`}>
                          {t.amount}
                        </span>
                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </main>

      </div>
    </div>
  );
}

function ActionCard({ icon, title }) {
  return (
    <div className="rounded-2xl bg-white p-5 text-center shadow transition hover:-translate-y-1">
      <div className="mb-3 flex justify-center text-teal-600">
        {icon}
      </div>

      <p className="font-medium">{title}</p>
    </div>
  );
}

function AccountCard({ title, balance, account }) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow">
      <h3 className="text-gray-600">{title}</h3>

      <div className="mt-3 text-4xl font-bold">
        {balance}
      </div>

      <div className="mt-6 h-12 rounded bg-gradient-to-r from-teal-100 to-transparent"></div>

      <p className="mt-4 text-sm text-gray-500">
        Account {account}
      </p>

      <button className="mt-5 rounded-full border border-teal-500 px-5 py-2 text-sm hover:bg-teal-500 hover:text-white">
        View Details
      </button>
    </div>
  );
}