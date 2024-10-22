export interface IFilterStatusItem {
    label: string;
    variant:
      | "default"
      | "primary"
      | "warning"
      | "success"
      | "destructive"
      | "outline"
      | null
      | undefined;
    classes: string;
  }