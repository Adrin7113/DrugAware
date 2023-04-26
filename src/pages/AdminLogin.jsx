import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const supabase = createClient(
    "https://tbdjoduckjgzgfmbtyvs.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiZGpvZHVja2pnemdmbWJ0eXZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0ODQzMzUsImV4cCI6MTk5ODA2MDMzNX0.GVZeuwjn_UE7HYLu7e_C9CuEpez6pudx1GtMNbMgDKU"
  );
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
  }, [supabase.auth]);

  if (!session) {
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa, // If you want to extend the default styles instead of overriding it, set this to true
          extend: true,
          // Your custom classes
          className: {
            button: "bg-green-400",
            //..
          },
        }}
        providers={[]}
      />
    );
  } else {
    return navigate("/report", { state: true });
  }
};

export default AdminLogin;
