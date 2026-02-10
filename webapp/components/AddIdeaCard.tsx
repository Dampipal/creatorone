"use client";

import { Plus } from "lucide-react";

type Props = {
  onClick: () => void;
};

export default function AddIdeaCard({ onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="
        h-40
        border-2
        border-dashed
        rounded-xl
        flex
        flex-col
        items-center
        justify-center
        cursor-pointer
        transition
        hover:border-primary
        hover:bg-muted
      "
    >
      <Plus className="h-10 w-10 text-muted-foreground" />
      <p className="mt-2 text-sm text-muted-foreground">
        Add New Idea
      </p>
    </div>
  );
}
