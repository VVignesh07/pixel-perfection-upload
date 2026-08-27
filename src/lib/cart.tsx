import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Format = "soft" | "hard";

export type CartItem = {
  id: string;
  slug: string;
  title: string;
  format: Format;
  price: number;
  coverUrl?: string | null;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  count: number;
  total: number;
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (id: string, format: Format) => void;
  setQty: (id: string, format: Format, qty: number) => void;
  clear: () => void;
};

const STORAGE_KEY = "wonderlearn.cart.v1";
const CartContext = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore corrupt storage */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore quota errors */
    }
  }, [items, ready]);

  const value = useMemo<CartCtx>(() => {
    const same = (i: CartItem, id: string, format: Format) => i.id === id && i.format === format;
    return {
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      total: items.reduce((n, i) => n + i.qty * i.price, 0),
      add: (item, qty = 1) =>
        setItems((prev) => {
          const found = prev.find((i) => same(i, item.id, item.format));
          if (found) {
            return prev.map((i) =>
              same(i, item.id, item.format) ? { ...i, qty: i.qty + qty } : i,
            );
          }
          return [...prev, { ...item, qty }];
        }),
      remove: (id, format) => setItems((prev) => prev.filter((i) => !same(i, id, format))),
      setQty: (id, format, qty) =>
        setItems((prev) =>
          qty <= 0
            ? prev.filter((i) => !same(i, id, format))
            : prev.map((i) => (same(i, id, format) ? { ...i, qty } : i)),
        ),
      clear: () => setItems([]),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
