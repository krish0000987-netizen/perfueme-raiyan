/**
 * Supabase Client Configuration & PostgreSQL Schema Helper
 * For RAIYAAN LUXURY E-Commerce
 */

export interface DatabaseSchema {
  products: {
    id: string;
    slug: string;
    name: string;
    category: string;
    fragrance_family: string;
    concentration: string;
    base_price: number;
    stock_quantity: number;
    is_featured: boolean;
    is_bestseller: boolean;
    created_at: string;
  };
  enquiries: {
    id: string;
    full_name: string;
    email: string;
    phone: string;
    category: string;
    message: string;
    created_at: string;
  };
  orders: {
    id: string;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    shipping_address: string;
    total_amount: number;
    payment_status: "pending" | "paid" | "failed";
    items: unknown;
    created_at: string;
  };
}

/**
 * SQL Migration Script for Supabase / PostgreSQL:
 * 
 * CREATE TABLE IF NOT EXISTS enquiries (
 *   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *   full_name TEXT NOT NULL,
 *   email TEXT NOT NULL,
 *   phone TEXT NOT NULL,
 *   category TEXT NOT NULL,
 *   message TEXT NOT NULL,
 *   created_at TIMESTAMPTZ DEFAULT NOW()
 * );
 * 
 * CREATE TABLE IF NOT EXISTS orders (
 *   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *   customer_name TEXT NOT NULL,
 *   customer_email TEXT NOT NULL,
 *   customer_phone TEXT NOT NULL,
 *   shipping_address JSONB NOT NULL,
 *   total_amount NUMERIC NOT NULL,
 *   payment_status TEXT DEFAULT 'pending',
 *   items JSONB NOT NULL,
 *   created_at TIMESTAMPTZ DEFAULT NOW()
 * );
 */

export const isSupabaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
