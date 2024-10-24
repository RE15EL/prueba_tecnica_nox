import { Dispatch, SetStateAction } from "react";
import { Modal } from "@/components/ui";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { lato } from "@/config/fonts";

const FormSchema = z.object({
  messenger: z.string({
    required_error: "Messenger is required.",
  }),
});

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const AssignToMessenger = ({ open, setOpen }: Props) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = ({ messenger }: z.infer<typeof FormSchema>) => {
    console.log({ messenger });
  };
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title="Assign To Messenger"
      classes="max-w-md"
    >
      <div className="space-y-4">
        <p className={`w-full text-[16px] text-[#2D3748] ${lato.className} antialiased`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full z-50"
            >
              <FormField
                control={form.control}
                name="messenger"
                render={({ field }) => (
                  <FormItem className="space-y-2.5">
                    <FormLabel>
                      Messenger <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Pedro Cruz Dominguez" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[
                          "Pedro Cruz Dominguez",
                          "Juan Correa Perez",
                          "Yamila Vida Guerra",
                        ].map((user) => (
                          <SelectItem value={user} key={user}>
                            {user}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full mt-6 flex flex-row-reverse items-center gap-2">
                <Button
                  variant="warning"
                  type="submit"
                  className="px-6 rounded-[6px] w-[80px]"
                >
                  Assign To
                </Button>
                <Button
                  type="button"
                  className="px-6 rounded-[6px] w-[80px] bg-[#EDF2F7] text-[#2D3748] hover:bg-[#2D3748] hover:text-[#EDF2F7]"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
