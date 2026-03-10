"use client";

import { Button } from "@base-ui/react/button";
import {
  QueryClientProvider,
  type QueryClientProviderProps,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { getQueryClient } from "@/lib/queryClient";

export default function ReactQueryProvider({
  children,
}: Omit<QueryClientProviderProps, "client">) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <div className="flex flex-col gap-4 p-4">
                <p className="text-sm">
                  An error occurred:{" "}
                  <span className="whitespace-normal font-mono">
                    {JSON.stringify(error)}
                  </span>
                </p>
                <Button onClick={resetErrorBoundary}>Try again</Button>
              </div>
            )}
            onReset={reset}
          >
            {children}
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  );
}
