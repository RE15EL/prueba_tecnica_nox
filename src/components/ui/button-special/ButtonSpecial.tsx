import { Button } from "../button";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  classes?: string;
}

export const ButtonSpecial = ({ label, classes }: Props) => {
  return (
    <Button
      variant="warning"
      className={cn("px-4 rounded-[16px] w-[147px]", classes)}
    >
      {label}
    </Button>
  );
};
