// Какие из перечисленных ниже alert выполнятся?

// Какие конкретно значения будут результатами выражений в условиях if(...)?

if (-1 || 0) alert( 'first' );  // -1 в логическом контексте true => выполнится и выведет 'first'
if (-1 && 0) alert( 'second' );  // 0 в логическом контексте false => не выполнится
if (null || -1 && 1) alert( 'third' );  // у && приоритет выше, вернется 1. || вернет 1 => выполнится и выведет  'third'