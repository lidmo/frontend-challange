export interface Task {
    id: number
    title: string
    description: string
    scheduled_at: string
}

export interface Get {
    data: task[];
    links: {
        first: string;
        last: string;
        prev: string | null;
        next: string | null;
    };
    meta: {
        current_page: number;
        from: any;
        last_page: number;
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[];
        path: string;
        per_page: number;
        to: any;
        total: number;
    };
}