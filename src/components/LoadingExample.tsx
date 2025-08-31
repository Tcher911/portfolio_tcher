"use client";

import { Button, Column, Text } from "@once-ui-system/core";
import { useLoading } from "./LoadingProvider";

export const LoadingExample: React.FC = () => {
  const { startLoading, completeLoading, isLoading } = useLoading();

  const handleShowLoading = () => {
    startLoading();
    // Simulate some async operation
    setTimeout(() => {
      completeLoading();
    }, 3000);
  };

  return (
    <Column gap="m" horizontal="center" align="center">
      <Text variant="heading-default-l">Loading Example</Text>
      <Text variant="body-default-s" onBackground="neutral-weak">
        Click the button below to show the loading screen
      </Text>
      <Button
        onClick={handleShowLoading}
        disabled={isLoading}
        variant="primary"
        size="m"
      >
        {isLoading ? "Loading..." : "Show Loading Screen"}
      </Button>
    </Column>
  );
};
