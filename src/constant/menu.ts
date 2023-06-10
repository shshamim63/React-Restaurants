import { MenuContext } from "../components/CardMenu";
import kebabImage from '/menu1.jpg';
import drinkImage from '/drinks.jpg';
import breadImage from '/bread.jpg';

export const listOfFoodCategory: MenuContext[] = [
    {
        title: 'Kebad Item',
        context: 'We have more than 30 variations of kebab that are familier in different countries',
        imageUrl: kebabImage,
        imageAlternative: 'Kabab'
    },
    {
        title: 'Drinks',
        context: 'Have 25 variation of drink that can take your taste a one step above',
        imageUrl: drinkImage,
        imageAlternative: 'Dring'
    },
    {
        title: 'Bread',
        context: 'Over 15 types of crunchy, yummy handmade bread are availabe',
        imageUrl: breadImage,
        imageAlternative: 'bread'
    }
]
