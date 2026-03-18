"use client";

import { Field } from "@base-ui/react/field";
import { Input } from "@base-ui/react/input";
import { useForm } from "@tanstack/react-form";
import { Fragment, Suspense } from "react";
import type z from "zod";
import Button from "@/components/core/button";
import Select from "@/components/core/select";
import { useHandlesCreateMutation } from "@/hooks/useHandlesMutation";
import { useHandlesQuery } from "@/hooks/useHandlesQuery";
import { usePlatformsQuery } from "@/hooks/usePlatformsQuery";
import { createHandleSchema } from "@/utils/validators/handles";

interface HandleCreateFormProps {
  handleClose: () => void;
}

export default function HandleCreateForm({
  handleClose,
}: HandleCreateFormProps) {
  const { data: platforms } = usePlatformsQuery();
  const { data: handles } = useHandlesQuery();
  const { mutate } = useHandlesCreateMutation();

  const form = useForm({
    validators: {
      onSubmit: createHandleSchema,
    },
    defaultValues: {
      platformId: "",
      url: "",
    },
    onSubmit: async ({ value }) => {
      mutate(value);
      form.reset();
      handleClose();
    },
  });

  const usedPlatformIds = new Set(handles.map((handle) => handle.platformId));

  const items = platforms
    .filter((platform) => !usedPlatformIds.has(platform.id))
    .map((platform) => ({
      label: platform.name,
      value: platform.id,
    }));

  return (
    <Suspense fallback="Loading...">
      <form
        id="create-handle-form"
        className="grid w-full grid-cols-1 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <Field.Root className="grid gap-1">
          <form.Field name="platformId">
            {(field) => (
              <>
                <Field.Label>Platform</Field.Label>
                <Select.SelectRoot
                  items={items}
                  value={field.state.value}
                  onValueChange={(value) =>
                    field.handleChange(
                      value as z.infer<typeof createHandleSchema>["platformId"],
                    )
                  }
                >
                  <Select.SelectTrigger>
                    <Select.SelectValue placeholder="Select platform" />
                  </Select.SelectTrigger>
                  <Select.SelectContent>
                    <Select.SelectGroup>
                      {items.map(({ label, value }) => (
                        <Select.SelectItem key={value} value={value}>
                          {label}
                        </Select.SelectItem>
                      ))}
                    </Select.SelectGroup>
                  </Select.SelectContent>
                </Select.SelectRoot>
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
          <form.Field name="url">
            {(field) => (
              <>
                <Field.Label>URL</Field.Label>
                <Input
                  id={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  autoComplete="off"
                  className="h-10 rounded-md border border-stone-900"
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
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <Fragment>
              <Button type="submit" disabled={!canSubmit || isSubmitting}>
                Submit
              </Button>
            </Fragment>
          )}
        </form.Subscribe>
      </form>
    </Suspense>
  );
}
