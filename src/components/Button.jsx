import React from 'react';
import { cn } from '../lib/helper/utils';

function Button({text, onClick, className}){
    return (
        <div>
            <button onClick={onClick} className={cn('w-full rounded-lg bg-primary text-white p-3 text-sm', className)}>{text}</button>
        </div>
    )
}

export default Button;