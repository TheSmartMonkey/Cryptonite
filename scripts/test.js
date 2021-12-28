const d = new Date()
// const date = new Date(d.toLocaleString('fr-FR', { timeZone: 'Europe/Paris' }))

// console.log('DEBUG: ', d.getTime());
// const final = 1640021462347
// console.log('DEBUG: ', new Date(final));

const date = d.getTime() - 1
console.log('DEBUG: ', date);
