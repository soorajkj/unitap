"use client";

import { Field } from "@base-ui/react/field";
import Input from "@/components/core/input";
import { Delete01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useForm } from "@tanstack/react-form";
import { Suspense } from "react";
import Button from "@/components/core/button";
import {
  useHandleDeleteMutation,
  useHandleUpdateMutation,
} from "@/hooks/useHandlesMutation";
import { useHandlesManagerStore } from "@/store/useHandlesManagerStore";
import type { Handle } from "@/types/response";
import { createHandleSchema } from "@/utils/validators/handles";

interface HandleEditFormProps {
  handle: Handle;
  handleClose: () => void;
}

export default function HandleEditForm({
  handle,
  handleClose,
}: HandleEditFormProps) {
  const updateMutation = useHandleUpdateMutation();
  const deleteMutation = useHandleDeleteMutation();
  const close = useHandlesManagerStore((s) => s.close);

  const form = useForm({
    defaultValues: { url: handle.url },
    validators: { onChange: createHandleSchema.pick({ url: true }) },
    onSubmit: async ({ value }) => {
      updateMutation.mutate({ id: handle.id, data: value });
      form.reset();
      handleClose();
    },
  });

  return (
    <Suspense fallback="Loading...">
      <form
        id="update-handle-form"
        className="grid w-full grid-cols-1 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
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
        <Button
          variant="secondary"
          disabled={deleteMutation.isPending}
          onClick={() => {
            deleteMutation.mutate(handle.id);
            close();
          }}
        >
          <HugeiconsIcon icon={Delete01Icon} />
          Delete
        </Button>
      </form>
    </Suspense>
  );
}
