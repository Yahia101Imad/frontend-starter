import { Outlet } from "react-router-dom";

function MarketingLayout() {
  return (
    <>
      <header>Navbar</header>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
}

export default MarketingLayout;