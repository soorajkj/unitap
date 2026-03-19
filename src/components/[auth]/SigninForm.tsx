"use client";

import { Field } from "@base-ui/react/field";
import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/authClient";
import { signinSchema } from "@/utils/validators/auth";
import { FieldInfo } from "../FieldInfo";
import Input from "@/components/core/input";
import Button from "@/components/core/button";

export default function SigninForm() {
  const router = useRouter();
  const form = useForm({
    validators: {
      onSubmit: signinSchema,
    },
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      const result = signinSchema.safeParse(value);
      if (!result.success) {
        toast.error(result.error.issues[0].message);
        return;
      }
      await authClient.signIn.email(value, {
        onSuccess() {
          form.reset();
          toast.success("Signin success");
          router.push("/dashboard");
        },
        onError({ error }) {
          console.log(error);
          toast.error("Error", { description: error.message });
        },
      });
    },
  });

  return (
    <form
      id="signup"
      className="grid w-full grid-cols-1 gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <Field.Root className="grid gap-1">
        <form.Field name="email">
          {(field) => (
            <>
              <Field.Label className="text-sm font-medium">Email</Field.Label>
              <Input
                id={field.name}
                type="text"
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter your email"
              />
              <FieldInfo field={field} />
            </>
          )}
        </form.Field>
      </Field.Root>
      <Field.Root className="grid gap-1">
        <form.Field name="password">
          {(field) => (
            <>
              <Field.Label className="text-sm font-medium">
                Password
              </Field.Label>
              <Input
                id={field.name}
                type="password"
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="••••••••"
              />
              <FieldInfo field={field} />
            </>
          )}
        </form.Field>
      </Field.Root>
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <>
            <Button type="submit" disabled={!canSubmit || isSubmitting}>
              Sign in
            </Button>
          </>
        )}
      </form.Subscribe>
    </form>
  );
}
