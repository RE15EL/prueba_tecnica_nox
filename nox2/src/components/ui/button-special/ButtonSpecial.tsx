import { cn } from "@/lib/utils";

interface Props {
  label: string;
  classes?: string;
}
export const ButtonSpecial = ({ label, classes }: Props) => {
  return (
    <button
      className={cn(
        "h-[48px] p-[12px] rounded-[18px] bg-[#C026D3] text-white border border-transparent shadow-md hover:bg-opacity-80 transition-colors duration-200 flex items-center justify-center",
        classes
      )}
    >
      <span className="text-[16px]"> {label} </span>
    </button>
  );
};
