import { useState, useEffect } from 'react';

function useNumberLocalstorage(key: string, initialValue: number): [number, (value: number) => void] {
        const [value, setValue] = useState<number>(() => {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) as number : initialValue;
        });

        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value));
        }, [key, value]);

        return [value, setValue];
    }

export default useNumberLocalstorage;