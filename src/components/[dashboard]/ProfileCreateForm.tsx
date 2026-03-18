"use client";

import { Field } from "@base-ui/react/field";
import { Input } from "@base-ui/react/input";
import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import Button from "@/components/core/button";
import { useProfileCreateMutation } from "@/hooks/useProfilesMutation";
import { profileCreateSchema } from "@/utils/validators/profile";

export default function ProfileCreateForm() {
  const router = useRouter();
  const profileCreateMutation = useProfileCreateMutation();

  const form = useForm({
    defaultValues: {
      title: "",
      username: "",
    },
    validators: {
      onChange: profileCreateSchema,
    },
    onSubmit: async ({ value }) => {
      profileCreateMutation.mutate({ ...value });
      form.reset();
      router.push("/dashboard");
    },
  });

  return (
    <form
      id="profile-create-form"
      className="grid w-full max-w-sm grid-cols-1 gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <Field.Root className="grid gap-1">
        <form.Field name="username">
          {(field) => (
            <>
              <Field.Label>Username</Field.Label>
              <Input
                id={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className="h-9 rounded border border-stone-200"
              />
              {field.state.meta.isTouched && !field.state.meta.isValid ? (
                <p className="text-sm leading-none text-red-500">
                  {field.state.meta.errors.map((e) => e?.message)}
                </p>
              ) : null}
              {field.state.meta.isValidating ? "Validating..." : null}
            </>
          )}
        </form.Field>
      </Field.Root>
      <Field.Root className="grid gap-1">
        <form.Field name="title">
          {(field) => (
            <>
              <Field.Label>Title</Field.Label>
              <Input
                id={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className="h-9 rounded border border-stone-200"
              />
              {field.state.meta.isTouched && !field.state.meta.isValid ? (
                <p className="text-sm leading-none text-red-500">
                  {field.state.meta.errors.map((e) => e?.message)}
                </p>
              ) : null}
              {field.state.meta.isValidating ? "Validating..." : null}
            </>
          )}
        </form.Field>
      </Field.Root>
      <form.Subscribe
        selector={(state) => [
          state.canSubmit,
          state.isDirty,
          state.isDefaultValue,
        ]}
      >
        {([canSubmit, isDirty, isDefaultValue]) => (
          <Button
            type="submit"
            className="w-full"
            disabled={!canSubmit || !isDirty || isDefaultValue}
          >
            Submit
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
}
