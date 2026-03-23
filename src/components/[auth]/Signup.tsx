import Link from "next/link";
import SignupForm from "@/components/[auth]/SignupForm";

export default function Signup() {
  return (
    <div className="flex w-full flex-col gap-8 sm:max-w-90">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 md:gap-3">
          <h3 className="text-2xl font-semibold text-neutral-900 md:text-3xl dark:text-neutral-50">
            Create an account
          </h3>
          <p className="text-md text-neutral-600 dark:text-neutral-400">
            Start your 30-day free trial.
          </p>
        </div>
      </div>
      <SignupForm />
      <div className="flex justify-center gap-1 text-center text-sm">
        <span className="text-neutral-600 dark:text-neutral-400">
          Already have an account?
        </span>
        <Link href="/auth/signin">Log in</Link>
      </div>
    </div>
  );
}
