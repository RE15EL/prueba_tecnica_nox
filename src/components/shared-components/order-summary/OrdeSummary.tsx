import { Card } from "@/components/ui";
import { cn } from "@/lib/utils";
import { Title } from "../section-title/Title";

interface Props {
  classes?: string;
}

export const OrdeSummary = ({ classes }: Props) => {
  return (
    <Card classes={cn("flex flex-col", classes)}>
      <Title title="Orders" subtitle="Order Summary" />
    </Card>
  );
};
