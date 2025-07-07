import AuthCard from "@/components/auth/auth-card";
import VerifyForm from "@/components/auth/verify/verify-form";

type Props = {
  params: { id: string };
};

export default async function VerifyPage({ params }: Props) {
  const { id } = await params;

  return (
    <AuthCard label="Verify account">
      <VerifyForm id={id} />
    </AuthCard>
  );
}
