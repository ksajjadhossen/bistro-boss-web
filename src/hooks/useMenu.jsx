import { useEffect } from "react";
import { useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("menu.json").then((Response) =>
      Response.json().then((data) => {
        setMenu(data), setLoading(false);
      })
    );
  });
  console.log(menu);
  return [menu, loading];
};

export default useMenu;
