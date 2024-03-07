import { useState } from 'react';

interface FormState {
    searchText: string;
}

export const useForm = (initialForm: FormState = { searchText: '' }) => {
    const [formState, setFormState] = useState<FormState>(initialForm);

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
};
