export interface Filter {
    locatio?: string;
    type?: string;
    AC?: string;
    kitchen?: boolean;
    [key: string]: string | boolean | undefined;
}