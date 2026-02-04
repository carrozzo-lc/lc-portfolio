// Importing the font from 'next/font'
import { Alegreya_Sans } from 'next/font/google';

export const alegreyaSans = Alegreya_Sans({
  subsets: ['latin'], // Define the subsets
  weight: ['100', '300', '400', '500', '700', '800', '900'], // Specify the weight options
  display: 'swap', // Set font-display strategy
});
