export interface Filter {
    location?: string;
    form?: string;
    AC?: boolean;
    kitchen?: boolean;
    automatic?: boolean;
    TV?: boolean;
    bathroom?: boolean;
    [key: string]: string | boolean | undefined;
}