"use client";

import { Field } from "@base-ui/react";
import { Input } from "@base-ui/react/input";
import { useForm } from "@tanstack/react-form";
import Button from "@/components/core/button";
import { useLinksCreateMutation } from "@/hooks/useLinksMutations";
import { createLinkSchema } from "@/utils/validators/links";

interface CreateLinkFormProps {
  handleClose: () => void;
}

export default function CreateLinkForm({ handleClose }: CreateLinkFormProps) {
  const { mutate } = useLinksCreateMutation();

  const form = useForm({
    defaultValues: { title: "", url: "" },
    validators: { onChange: createLinkSchema },
    onSubmit: async ({ value }) => {
      mutate(value);
      form.reset();
      handleClose();
    },
  });

  return (
    <form
      id="create-link-form"
      className="grid w-full grid-cols-1 gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
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
                <p className="text-red-500 text-sm leading-none">
                  {field.state.meta.errors.map((e) => e?.message)}
                </p>
              ) : null}
              {field.state.meta.isValidating ? "Validating..." : null}
            </>
          )}
        </form.Field>
      </Field.Root>
      <Field.Root className="grid gap-1">
        <form.Field name="url">
          {(field) => (
            <>
              <Field.Label>URL</Field.Label>
              <Input
                id={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className="h-9 rounded border border-stone-200"
              />
              {field.state.meta.isTouched && !field.state.meta.isValid ? (
                <p className="text-red-500 text-sm leading-none">
                  {field.state.meta.errors.map((e) => e?.message)}
                </p>
              ) : null}
              {field.state.meta.isValidating ? "Validating..." : null}
            </>
          )}
        </form.Field>
      </Field.Root>
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <Button type="submit" disabled={!canSubmit || isSubmitting}>
            Submit
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
}
