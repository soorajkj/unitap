import Link from "next/link";
import SigninForm from "@/components/[auth]/SigninForm";

export default function SignIn() {
  return (
    <div className="flex w-full flex-col gap-8 sm:max-w-90">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 md:gap-3">
          <h3 className="text-2xl font-semibold text-gray-900 md:text-3xl dark:text-gray-50">
            Welcome back
          </h3>
          <p className="text-md text-gray-600 dark:text-gray-400">
            Welcome back! Please enter your details.
          </p>
        </div>
      </div>
      <SigninForm />
      <div className="flex justify-center gap-1 text-center text-sm">
        <span className="text-gray-600 dark:text-gray-400">
          Don&apos;t have an account?
        </span>
        <Link href="/auth/signup">Sign up</Link>
      </div>
    </div>
  );
}
