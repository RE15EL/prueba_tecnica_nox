"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar ";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";

export const FilterByDate = () => {
  const [date, setDate] = useState<{ init: Date; end: Date }>({
    init: new Date(new Date().setDate(new Date().getDate() - 7)),
    end: new Date(),
  });

  const transformDate = (fecha: Date) => {
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();

    return `${dia}/${mes}/${anio}`;
  };

  return (
    <div className="flex border border-[#E2E8F0] p-0 rounded-[6px]">
      <Popover>
        <PopoverTrigger asChild className="border-transparent">
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] h-10 justify-start text-left font-normal relative",
              !date && "text-muted-foreground"
            )}
          >
            {date ? transformDate(date.init) : <span></span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date.init}
            onSelect={(val) =>
              setDate((prev) => ({ ...prev, init: val as Date }))
            }
          />
        </PopoverContent>
      </Popover>
      <div className="w-[.5px] h-10 bg-[#E2E8F0]" />
      <Popover>
        <PopoverTrigger asChild className="border-transparent">
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] h-10 justify-start text-left font-normal relative",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="absolute right-2" />
            {date ? transformDate(date.end) : <span></span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date.end}
            onSelect={(val) =>
              setDate((prev) => ({ ...prev, end: val as Date }))
            }
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
