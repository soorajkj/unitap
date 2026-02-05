"use client";

import { Button } from "@base-ui/react/button";
import { Field } from "@base-ui/react/field";
import { Form } from "@base-ui/react/form";
import { Input } from "@base-ui/react/input";
import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { toast } from "sonner";
import { authClient } from "@/lib/authClient";
import { signinSchema } from "@/utils/validators/auth";
import { FieldInfo } from "../FieldInfo";

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
    <Form
      id="signup"
      noValidate={false}
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="w-full max-w-sm"
    >
      <Field.Root className="grid gap-6">
        <Field.Item className="grid gap-1">
          <form.Field name="email">
            {(field) => (
              <Fragment>
                <Field.Label htmlFor={field.name} className="text-sm">
                  Email
                </Field.Label>
                <Input
                  id={field.name}
                  type="text"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="h-10 rounded-md border border-neutral-900"
                />
                <FieldInfo field={field} />
              </Fragment>
            )}
          </form.Field>
        </Field.Item>
        <Field.Item className="grid gap-1">
          <form.Field name="password">
            {(field) => (
              <Fragment>
                <Field.Label htmlFor={field.name} className="text-sm">
                  Password
                </Field.Label>
                <Input
                  id={field.name}
                  type="password"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="h-10 rounded-md border border-neutral-900"
                />
                <FieldInfo field={field} />
              </Fragment>
            )}
          </form.Field>
        </Field.Item>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <Fragment>
              <Button
                type="submit"
                disabled={!canSubmit}
                className="relative inline-flex w-full shrink-0 cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-lg border border-transparent px-3 py-2 font-medium text-sm leading-none transition focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:shrink-0"
              >
                {isSubmitting ? "..." : "Submit"}
              </Button>
            </Fragment>
          )}
        </form.Subscribe>
      </Field.Root>
    </Form>
  );
}
