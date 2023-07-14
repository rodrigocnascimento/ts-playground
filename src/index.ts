enum Food {
	SALGADO = 'COXINHA',
	DOCE = 'SORVETE',
}

type A = 'x' | 'y';

function hello(name: string) {
	console.log('food', Food.DOCE);
	return `Hello World, ${name}`;
}

hello('world');
