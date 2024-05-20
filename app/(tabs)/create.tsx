import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function create() {
  return (
    <ThemedView>
      <ThemedText> textInComponent </ThemedText>
    </ThemedView>
  );
}