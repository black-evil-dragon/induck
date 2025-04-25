export interface BaseModel {
    id: string;
    slug?: string;
}

export interface BaseAttributes {
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export interface BaseMeta {
    meta?: {
        metaTitle?: string;
        metaDescription?: string;
        metaKeywords?: string[];
    }
}