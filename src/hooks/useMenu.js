import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

export function useMenu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMenu() {
      const [categoryResult, productResult] = await Promise.all([
        supabase
          .from("categories")
          .select("*")
          .eq("is_active", true)
          .order("sort_order"),

        supabase
          .from("products")
          .select("*")
          .eq("is_available", true)
          .order("sort_order"),
      ]);

      if (categoryResult.error || productResult.error) {
        setError(
          categoryResult.error?.message ||
          productResult.error?.message
        );
      } else {
        setCategories(categoryResult.data);
        setProducts(productResult.data);
      }

      setLoading(false);
    }

    fetchMenu();
  }, []);

  return { categories, products, loading, error };
}