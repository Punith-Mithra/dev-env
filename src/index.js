import './index.css' // need to import css file like this to bundle
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`this is an output from indexJs ${courseValue}`);
