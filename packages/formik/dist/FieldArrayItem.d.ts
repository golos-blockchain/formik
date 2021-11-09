import React from 'react';
declare type FieldArrayItemValidator = (value: any, values: any) => string | void | Promise<string | void>;
interface FieldArrayItemProps {
    name: string;
    validate?: FieldArrayItemValidator;
}
export declare const FieldArrayItem: React.FC<FieldArrayItemProps>;
export {};
