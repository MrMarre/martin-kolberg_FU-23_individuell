import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

//Här tänker jag att vi kan slänga in footer/header och exkludera dem på vissa sidor

export default Root;
