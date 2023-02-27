// Что выведет alert (ИЛИ)?
// важность: 5
// Что выведет код ниже?

alert( null || 2 || undefined ); // 2

// Что выведет alert (ИЛИ)?
// важность: 3
// Что выведет код ниже?

alert( alert(1) || 2 || alert(3) ); // 1, потом 2

// Что выведет alert (И)?
// важность: 5
// Что выведет код ниже?

alert( 1 && null && 2 ); // null

// Что выведет alert (И)?
// важность: 3
// Что выведет код ниже?

alert( alert(1) && alert(2) ); // 1, undefined


// Что выведет этот код?
// важность: 5
// Что выведет код ниже?

alert( null || 2 && 3 || 4 ); // 3
