import React from 'react';

interface CheckboxProps {
    id?: string;
    checked: boolean;

    onChange: (checked: boolean) => void;


    className?: string;
    label?: React.ReactNode;
    disabled?: boolean;
    name?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
    id,
    checked,
    onChange,
    className = '',
    label,
    disabled = false,
    name,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
    };

    return (
        <div className={`checkbox ${className}`}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                disabled={disabled}
                name={name}
                className="checkbox__input"
            />
            {label && (
                <label htmlFor={id} className="checkbox__label">
                    {label}
                </label>
            )}
        </div>
    );
};

export default Checkbox