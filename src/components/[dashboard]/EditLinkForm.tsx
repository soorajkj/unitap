"use client";

import { Field } from "@base-ui/react";
import Input from "@/components/core/input";
import { useForm } from "@tanstack/react-form";
import Button from "@/components/core/button";
import { useUpdateLinkMutation } from "@/hooks/useLinksMutations";
import type { Link } from "@/types/response";
import { createLinkSchema } from "@/utils/validators/links";

interface EditLinkFormProps {
  link: Link;
  handleClose: () => void;
}

export default function EditLinkForm({ link, handleClose }: EditLinkFormProps) {
  const { mutate } = useUpdateLinkMutation();

  const form = useForm({
    defaultValues: { title: link.title, url: link.url },
    validators: { onChange: createLinkSchema.pick({ title: true, url: true }) },
    onSubmit: async ({ value }) => {
      mutate({ id: link.id, data: value });

      form.reset();
      handleClose();
    },
  });

  return (
    <form
      id="update-link-form"
      className="grid w-full grid-cols-1 gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <Field.Root className="flex w-full flex-col gap-1">
        <form.Field name="title">
          {(field) => (
            <>
              <Field.Label>Title</Field.Label>
              <Input
                id={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
              {field.state.meta.errors.length > 0 ? (
                <p className="text-sm leading-none text-red-500">
                  {field.state.meta.errors.map((e) => e?.message).join(", ")}
                </p>
              ) : null}
              {field.state.meta.isValidating ? "Validating..." : null}
            </>
          )}
        </form.Field>
      </Field.Root>
      <Field.Root className="flex w-full flex-col gap-1">
        <form.Field name="url">
          {(field) => (
            <>
              <Field.Label>URL</Field.Label>
              <Input
                id={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
              {field.state.meta.errors.length > 0 ? (
                <p className="text-sm leading-none text-red-500">
                  {field.state.meta.errors.map((e) => e?.message).join(", ")}
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
