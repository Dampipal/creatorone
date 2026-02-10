type Props = {
  title: string;
  category: string;
  length: string;
};

export default function IdeaCard({
  title,
  category,
  length,
}: Props) {
  return (
    <div className="h-40 rounded-xl border bg-card p-4">

      <h3 className="font-semibold truncate">
        {title}
      </h3>

      <p className="text-sm text-muted-foreground mt-2">
        Category: {category}
      </p>

      <p className="text-sm text-muted-foreground">
        Length: {length}
      </p>

    </div>
  );
}
