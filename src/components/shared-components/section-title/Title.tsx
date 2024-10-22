import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle?: string;
  titleClass?: string;
  subtitleClass?: string;
}

export const Title = ({
  title,
  subtitle,
  titleClass,
  subtitleClass,
}: Props) => {
  return (
    <div>
      <h2 className={cn("text-[#05004E] text-[20px] font-bold", titleClass)}>
        {title}
      </h2>
      <h3
        className={cn("text-[#737791] text-[12px] font-normal", subtitleClass)}
      >
        {subtitle}
      </h3>
    </div>
  );
};
