import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export default function useMenu() {
  const axiosPublic = useAxiosPublic();

  const menuItems = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/food-items");
      return res.data;
    },
  });

  return { menuItems };
}
