
export interface optionType {
    value: optionValueTypes,
    name: string,
} 

export enum optionValueInSort {
    default = '_id',
    date = 'createdAt',
    title = 'title',
}

export type optionValueTypes = optionValueInSort;
