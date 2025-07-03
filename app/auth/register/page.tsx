import AuthCard from "@/components/auth/auth-card";
import RegisterForm from "@/components/auth/register/register-form";

export default function RegisterPage() {
  return (
    <AuthCard label="Create an account">
      <RegisterForm />
    </AuthCard>
  );
}
