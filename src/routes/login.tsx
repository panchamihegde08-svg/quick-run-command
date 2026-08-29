import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ShoppingBasket, LogIn, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { db, initDb } from "@/lib/db";
import { useAuth } from "@/store/auth";
import { useHydrated } from "@/hooks/use-hydrated";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Smart Grocery POS" },
      { name: "description", content: "Sign in to Smart Grocery POS billing software." },
      { property: "og:title", content: "Sign in — Smart Grocery POS" },
      { property: "og:description", content: "Sign in to Smart Grocery POS billing software." },
    ],
  }),
  component: LoginPage,
});

const DEMO = [
  ["Admin", "admin@shop.in", "admin123"],
  ["Shop Owner", "owner@shop.in", "owner123"],
  ["Manager", "manager@shop.in", "manager123"],
  ["Cashier", "cashier@shop.in", "cashier123"],
  ["Inventory Staff", "inventory@shop.in", "inventory123"],
  ["Accountant", "accounts@shop.in", "accounts123"],
];

function LoginPage() {
  const navigate = useNavigate();
  const hydrated = useHydrated();
  const login = useAuth((s) => s.login);
  const user = useAuth((s) => s.user);
  const [email, setEmail] = useState("admin@shop.in");
  const [password, setPassword] = useState("admin123");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    void initDb();
  }, []);
  useEffect(() => {
    if (hydrated && user) navigate({ to: "/" });
  }, [hydrated, user, navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await initDb();
      const emp = await db.employees.where("email").equals(email.trim().toLowerCase()).first();
      if (!emp || emp.password !== password) {
        toast.error("Invalid email or password");
        return;
      }
      if (!emp.active) {
        toast.error("This account is disabled");
        return;
      }
      login({ id: emp.id!, name: emp.name, email: emp.email, role: emp.role });
      await db.activity.add({
        date: new Date().toISOString(),
        user: emp.name,
        action: "Logged in",
      });
      toast.success(`Welcome back, ${emp.name}`);
      navigate({ to: "/" });
    } catch {
      toast.error("Could not sign in. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid min-h-screen bg-background lg:grid-cols-2">
      <div className="relative hidden flex-col justify-between bg-sidebar p-10 text-sidebar-foreground lg:flex">
        <div className="flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
            <ShoppingBasket className="size-6" />
          </div>
          <div>
            <p className="text-lg font-bold">Smart Grocery POS</p>
            <p className="text-xs text-sidebar-foreground/60">Billing • Inventory • GST</p>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="max-w-md text-4xl font-extrabold leading-tight">
            Bill faster. Track every rupee.
          </h2>
          <p className="mt-4 max-w-md text-sm text-sidebar-foreground/70">
            Offline-first grocery billing with GST invoices, barcode scanning, batch-wise
            inventory, loyalty points and 25+ business reports.
          </p>
        </motion.div>
        <p className="text-xs text-sidebar-foreground/50">Works offline · Data stored on device</p>
      </div>

      <div className="flex items-center justify-center p-6">
        <Card className="card-elevated w-full max-w-md p-6">
          <h1 className="text-2xl font-bold">Sign in</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Use a demo account below to explore each role.
          </p>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <LogIn className="size-4" />
              )}
              Sign in
            </Button>
          </form>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase text-muted-foreground">Demo accounts</p>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {DEMO.map(([role, mail, pass]) => (
                <button
                  key={mail}
                  type="button"
                  onClick={() => {
                    setEmail(mail!);
                    setPassword(pass!);
                  }}
                  className="rounded-lg border px-3 py-2 text-left text-xs transition-colors hover:border-primary hover:bg-primary/5"
                >
                  <span className="block font-semibold">{role}</span>
                  <span className="block text-muted-foreground">{mail}</span>
                </button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
