"use client";

import { Field } from "@base-ui/react/field";
import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/authClient";
import { signupSchema } from "@/utils/validators/auth";
import { FieldInfo } from "../FieldInfo";
import Button from "@/components/core/button";
import Input from "@/components/core/input";

export default function SignupForm() {
  const router = useRouter();
  const form = useForm({
    validators: {
      onSubmit: signupSchema,
    },
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      const result = signupSchema.safeParse(value);
      if (!result.success) {
        toast.error(result.error.issues[0].message);
        return;
      }
      await authClient.signUp.email(value, {
        onSuccess() {
          form.reset();
          toast.success("Signup success");
          router.push("/auth/signin");
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
        <form.Field name="name">
          {(field) => (
            <>
              <Field.Label className="text-sm font-medium">Name</Field.Label>
              <Input
                id={field.name}
                type="text"
                name={field.name}
                placeholder="Enter your name"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </>
          )}
        </form.Field>
      </Field.Root>
      <Field.Root className="grid gap-1">
        <form.Field name="email">
          {(field) => (
            <>
              <Field.Label className="text-sm font-medium">Email</Field.Label>
              <Input
                id={field.name}
                type="email"
                name={field.name}
                placeholder="Enter your email"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
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
                placeholder="Create a password"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
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
              Get started
            </Button>
          </>
        )}
      </form.Subscribe>
    </form>
  );
}
