"use client";

import { Field } from "@base-ui/react/field";
import Input from "@/components/core/input";
import { useForm } from "@tanstack/react-form";
import Button from "@/components/core/button";
import { useProfileUpdateMutation } from "@/hooks/useProfilesMutation";
import type { Profile } from "@/types/response";
import { profileUpdateSchema } from "@/utils/validators/profile";

interface ProfileEditFormProps {
  profile: Profile;
  onClose: () => void;
}

export default function ProfileEditForm({
  profile,
  onClose,
}: ProfileEditFormProps) {
  const profileUpdateMutation = useProfileUpdateMutation();

  const form = useForm({
    defaultValues: {
      title: profile?.title || "",
      username: profile?.username || "",
      bio: profile?.bio || "",
      email: profile?.email || "",
      phone: profile?.phone || "",
      website: profile?.website || "",
      address: profile?.address || "",
    },
    validators: {
      onChange: profileUpdateSchema,
    },
    onSubmit: async ({ value }) => {
      profileUpdateMutation.mutate(value);
      form.reset();
      onClose();
    },
  });

  return (
    <form
      id="profile-edit-form"
      className="grid w-full grid-cols-1 gap-4"
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
              {(field.state.meta.isTouched || field.state.meta.isDirty) &&
              field.state.meta.errors.length ? (
                <p className="text-sm leading-none text-red-500">
                  {field.state.meta.errors.map((e) => e?.message).join(", ")}
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
              {(field.state.meta.isTouched || field.state.meta.isDirty) &&
              field.state.meta.errors.length ? (
                <p className="text-sm leading-none text-red-500">
                  {field.state.meta.errors.map((e) => e?.message).join(", ")}
                </p>
              ) : null}
              {field.state.meta.isValidating ? "Validating..." : null}
            </>
          )}
        </form.Field>
      </Field.Root>
      <Field.Root className="grid gap-1">
        <form.Field name="bio">
          {(field) => (
            <>
              <Field.Label>Bio</Field.Label>
              <Input
                render={<textarea />}
                id={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className="min-h-20 rounded border border-stone-200"
                multiple
              />
              {(field.state.meta.isTouched || field.state.meta.isDirty) &&
              field.state.meta.errors.length ? (
                <p className="text-sm leading-none text-red-500">
                  {field.state.meta.errors.map((e) => e?.message).join(", ")}
                </p>
              ) : null}
              {field.state.meta.isValidating ? "Validating..." : null}
            </>
          )}
        </form.Field>
      </Field.Root>
      <Field.Root className="grid gap-1">
        <form.Field name="email">
          {(field) => (
            <>
              <Field.Label>Email</Field.Label>
              <Input
                id={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className="h-9 rounded border border-stone-200"
              />
              {(field.state.meta.isTouched || field.state.meta.isDirty) &&
              field.state.meta.errors.length ? (
                <p className="text-sm leading-none text-red-500">
                  {field.state.meta.errors.map((e) => e?.message).join(", ")}
                </p>
              ) : null}
              {field.state.meta.isValidating ? "Validating..." : null}
            </>
          )}
        </form.Field>
      </Field.Root>
      <Field.Root className="grid gap-1">
        <form.Field name="phone">
          {(field) => (
            <>
              <Field.Label>Phone</Field.Label>
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
        <form.Field name="website">
          {(field) => (
            <>
              <Field.Label>Webisite</Field.Label>
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
            variant="primary"
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
