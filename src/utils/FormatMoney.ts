const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export function formatMoney(amount) {
    let parts = formatter.formatToParts(amount);
    return parts.slice(0, parts.length - 2).map(part => part.value).join("")
}
