export const LIST_VIEW = 'list'
export const CHART_VIEW = 'chart'
export const LIST_MODE = '列表模式'
export const CHART_MODE = '图表模式'
export const TYPE_OUTCOME = 'outcome'
export const TYPE_INCOME = 'income'

export const add0WhenLess10 = n => n < 10 ? '0' + n : n

export const range = (size, startAt = 0) => {
    const arr = []
    for (let i = 0; i < size; i++) {
        arr[i] = startAt + i
    }
    return arr;
}

export const parseToYearAndMonth = (str) => {
    const date = str ? new Date(str) : new Date();
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1
    }
}
