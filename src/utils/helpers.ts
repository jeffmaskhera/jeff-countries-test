
export const formatNumeric = (number: number | null | undefined): string => {
    if (number == null || number < 0 || number === 0 || number % 1 !== 0) {
        return '';
    }

    const numberChain = number.toString();
    const partes = [];
    let parteActual = '';

    for (let i = numberChain.length - 1; i >= 0; i--) {
        parteActual = numberChain[i] + parteActual;

        if (parteActual.length === 3 || i === 0) {
            partes.unshift(parteActual);
            parteActual = '';
        }
    }

    return partes.join('.');
};













export const formatShortDate = date => {
    if (date !== '' && date !== undefined) {
        const clearDate =  date.split('T')
        const splitDate =  clearDate[0].split('-')
        const day = splitDate[2]
        const month = monthConverted(splitDate[1])
        const year = splitDate[0]
        return `${day}  ${month} ${year}`
    }
}

export const monthConverted = month => {
    const valueMonth = parseInt(month)
    return switchCases(valueMonth, {
        [1]: 'Ene',
        [2]: 'Feb',
        [3]: 'Mar',
        [4]: 'Abr',
        [5]: 'May',
        [6]: 'Jun',
        [7]: 'Jul',
        [8]: 'Ago',
        [9]: 'Sep',
        [10]: 'Oct',
        [11]: 'Nov',
        [12]: 'Dic',
        default: '',
    })
}

//switch cases function
export function switchCases(expression, cases) {
    return cases[expression] || cases?.default
}