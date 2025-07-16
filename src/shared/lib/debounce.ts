export function debounce(callee, timeoutMs) {
    return function perform(...args) {
        let previousCall = debounce.lastCall

        debounce.lastCall = Date.now()

        if (previousCall && debounce.lastCall - previousCall <= timeoutMs) {
            clearTimeout(debounce.lastCallTimer)
        }

        debounce.lastCallTimer = setTimeout(() => callee(...args), timeoutMs)
    }
}