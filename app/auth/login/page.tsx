import AuthCard from "@/components/auth/auth-card";
import LoginForm from "@/components/auth/login/login-form";

export default function LoginPage() {
  return (
    <AuthCard label="Welcome 👋">
      <LoginForm />
    </AuthCard>
  );
}
