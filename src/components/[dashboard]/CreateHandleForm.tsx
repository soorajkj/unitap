"use client";

import { Field } from "@base-ui/react/field";
import { Form } from "@base-ui/react/form";
import { Input } from "@base-ui/react/input";
import { Select } from "@base-ui/react/select";
import { useForm } from "@tanstack/react-form";
import { Fragment } from "react";
import { toast } from "sonner";
import type z from "zod";
import Button from "@/components/core/button";
import { useHandlesCreateMutation } from "@/hooks/useHandlesMutation";
import { useHandlesQuery } from "@/hooks/useHandlesQuery";
import { usePlatformsQuery } from "@/hooks/usePlatformsQuery";
import { createHandleSchema } from "@/utils/validators/handles";

export default function CreateHandleForm() {
  const { data: platforms } = usePlatformsQuery();
  const { data: handles } = useHandlesQuery();
  const { mutateAsync } = useHandlesCreateMutation();

  const form = useForm({
    validators: {
      onSubmit: createHandleSchema,
    },
    defaultValues: {
      platformId: "",
      url: "",
    },
    onSubmit: async ({ value }) => {
      const result = createHandleSchema.safeParse(value);
      if (!result.success) {
        toast.error(result.error.issues[0].message);
        return;
      }
      await mutateAsync(value);
      toast.success("Handle created");
      form.reset();
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
    <Form
      id="create-handle"
      noValidate={false}
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <Field.Root className="grid gap-6">
        <Field.Item className="grid gap-1">
          <form.Field name="platformId">
            {(field) => (
              <Fragment>
                <Field.Label htmlFor={field.name} className="text-sm">
                  Platform
                </Field.Label>
                <Select.Root
                  items={items}
                  value={field.state.value}
                  onValueChange={(value) =>
                    field.handleChange(
                      value as z.infer<typeof createHandleSchema>["platformId"],
                    )
                  }
                >
                  <Select.Trigger className="focus-visible:-outline-offset-1 flex h-10 min-w-40 select-none items-center justify-between gap-3 rounded-md border border-gray-200 pr-3 pl-3.5 text-base text-gray-900 focus-visible:outline-2 focus-visible:outline-blue-800 data-popup-open:bg-gray-100">
                    <Select.Value
                      className="data-placeholder:opacity-60"
                      placeholder="Select apple"
                    />
                    <Select.Icon className="flex">i</Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Positioner
                      className="z-10 select-none outline-none"
                      sideOffset={8}
                    >
                      <Select.Popup className="group min-w-(--anchor-width) origin-(--transform-origin) rounded-md bg-stone-50 bg-clip-padding text-gray-900 shadow-gray-200 shadow-lg outline-1 outline-gray-200 transition data-[side=none]:data-starting-style:scale-100 data-[side=none]:data-starting-style:opacity-100 data-[side=none]:data-ending-style:transition-none data-[side=none]:data-starting-style:transition-none data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] data-ending-style:scale-90 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0">
                        <Select.ScrollUpArrow className="data-[side=none]:before:-top-full top-0 z-10 flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute before:left-0 before:h-full before:w-full before:content-['']" />
                        <Select.List className="relative max-h-(--available-height) scroll-py-6 overflow-y-auto py-1">
                          {items.map(({ label, value }) => (
                            <Select.Item key={value} value={value}>
                              <Select.ItemIndicator className="col-start-1">
                                C
                              </Select.ItemIndicator>
                              <Select.ItemText className="col-start-2">
                                {label}
                              </Select.ItemText>
                            </Select.Item>
                          ))}
                        </Select.List>
                        <Select.ScrollDownArrow className="data-[side=none]:before:-bottom-full bottom-0 z-10 flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute before:left-0 before:h-full before:w-full before:content-['']" />
                      </Select.Popup>
                    </Select.Positioner>
                  </Select.Portal>
                </Select.Root>
              </Fragment>
            )}
          </form.Field>
        </Field.Item>
        <Field.Item className="grid gap-1">
          <form.Field name="url">
            {(field) => (
              <Fragment>
                <Field.Label htmlFor={field.name} className="text-sm">
                  URL
                </Field.Label>
                <Input
                  id={field.name}
                  type="text"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  autoComplete="off"
                  className="h-10 rounded-md border border-stone-900"
                />
              </Fragment>
            )}
          </form.Field>
        </Field.Item>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <Fragment>
              <Button type="submit" disabled={!canSubmit}>
                {isSubmitting ? "..." : "Submit"}
              </Button>
            </Fragment>
          )}
        </form.Subscribe>
      </Field.Root>
    </Form>
  );
}
