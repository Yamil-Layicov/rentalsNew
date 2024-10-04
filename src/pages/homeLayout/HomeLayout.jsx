import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const HomeLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
