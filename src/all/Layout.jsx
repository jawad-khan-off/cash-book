import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { account } from "../lib/client";
import { getExistingUser, storeUserData } from "../lib/auth";

const PageLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const user = await account.get();

        if (!user?.$id) {
          navigate("/sign-in", { replace: true });
          return;
        }

        const existingUser = await getExistingUser(user.$id);

        if (!existingUser?.$id) {
          await storeUserData();
        }
      } catch (error) {
        console.error("Authentication error:", error);
        navigate("/sign-in", { replace: true });
      }
    };

    authenticateUser();
  }, [navigate]);

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default PageLayout;