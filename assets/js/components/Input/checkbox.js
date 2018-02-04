import React from 'react';

const renderCheckboxField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
    }) => (
    <div className={error ? 'form-group is-invalid' : 'form-group'}>
        <div className="form-check">
            <input {...input} className={error ? "form-check-input is-invalid" : "form-check-input"} type="checkbox" />
            <label className="form-check-label ml-4">
                <span className="text-muted">{label}</span>
            </label>
        </div>
    </div>
    )

export default renderCheckboxField;