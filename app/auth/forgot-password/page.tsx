import AuthCard from "@/components/auth/auth-card";
import ForgotPasswordForm from "@/components/auth/forgot-password/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <AuthCard label="Forgot your password">
      <ForgotPasswordForm />
    </AuthCard>
  );
}
