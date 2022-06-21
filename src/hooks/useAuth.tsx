import { useCallback } from "react";
import axios from "axios";

export const useAuth = () => {
  const login = useCallback(() => {}, []);
  return { login };
};
