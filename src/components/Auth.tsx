import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { AuthError } from "@supabase/supabase-js";
import { Alert, AlertDescription } from "./ui/alert";

const Auth = () => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN') {
        window.location.href = '/'; // Redirect to home page after sign in
      }
      if (event === 'SIGNED_OUT') {
        setErrorMessage(""); // Clear errors on sign out
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const getErrorMessage = (error: AuthError) => {
    switch (error.message) {
      case 'Invalid login credentials':
        return 'Invalid email or password. Please check your credentials and try again.';
      case 'Email not confirmed':
        return 'Please verify your email address before signing in.';
      default:
        return error.message;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-4">
      {errorMessage && (
        <Alert variant="destructive">
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
      <SupabaseAuth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#FF9F00',
                brandAccent: '#e68f00',
              },
            },
          },
        }}
        providers={[]}
      />
    </div>
  );
};

export default Auth;