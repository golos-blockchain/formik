import { useFormikContext, } from './FormikContext';
import React, { useEffect, } from 'react';

type FieldArrayItemValidator = (
  value: any,
  values: any,
) => string | void | Promise<string | void>;

interface FieldArrayItemProps {
    name: string,
    validate?: FieldArrayItemValidator,
}

export const FieldArrayItem : React.FC<FieldArrayItemProps> = ({
    name, validate,
}) => {
    const formik = useFormikContext();
    const {
        registerField,
        unregisterField,
    } = formik;
    useEffect(() => {
        registerField(name, {
            validate: value => {
                if (validate)
                    return validate(value, formik.values);
            },
         });
        return () => {
            unregisterField(name);
        };
    });
    return null;
}
