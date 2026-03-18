import type { AnyFieldApi } from "@tanstack/react-form";
import { Fragment } from "react";

export function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <Fragment>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <span className="text-xs text-red-500">
          {field.state.meta.errors.map((err) => err.message).join(",")}
        </span>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </Fragment>
  );
}
