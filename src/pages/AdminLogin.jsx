import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { supabase } from "../js/supabaseClient";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa, // If you want to extend the default styles instead of overriding it, set this to true
          extend: true,
          // Your custom classes
          className: {
            button: "bg-[#F1E7E7]",
            //..
          },
        }}
        providers={[]}
      />
    );
  } else {
    if (session.user.id === "116a3600-abf6-4345-b29f-db8017c5d8a3") {
      return navigate("/report", { state: "SUPER-ADMIN" });
    } else {
      return navigate("/report", { state: "ADMIN" });
    }
  }
};

export default AdminLogin;
