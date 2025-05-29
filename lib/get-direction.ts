type Direction = 'rtl' | 'ltr';

export async function getDirection(locale: string): Promise<Direction> {
    const isRTL = ['ar', 'he', 'fa', 'ur', 'ckb', 'ps'].includes(locale);
    return isRTL ? 'rtl' : 'ltr';
}

