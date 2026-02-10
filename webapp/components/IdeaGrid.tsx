"use client";

import AddIdeaCard from "./AddIdeaCard";
import IdeaCard from "./IdeaCard";

type Props = {
  onAddClick: () => void;
};

export default function IdeaGrid({ onAddClick }: Props) {
  return (
    <div
      className="
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-6
      "
    >

      {/* Add Button */}
      <AddIdeaCard onClick={onAddClick} />

      {/* Sample Cards */}
      <IdeaCard
        title="AI Tools Explained"
        category="Tech"
        length="10 min"
      />

      <IdeaCard
        title="YouTube Growth Tips"
        category="Creator"
        length="8 min"
      />

      <IdeaCard
        title="React Basics"
        category="Coding"
        length="12 min"
      />
    </div>
  );
}
