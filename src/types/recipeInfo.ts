import { Ingredient } from './ingredient';
import { RecipeItem } from './recipeItem';

export class RecipeInfo extends RecipeItem {
    private _mealType: string[];
    private _cuisineType: string[];
    private _calories: number;
    private _ingredients: Ingredient[];

    constructor(
        label: string,
        image: string,
        link: string,
        mealType: string[],
        cuisineType: string[],
        calories: number,
        ingredients: Ingredient[]
    ) {
        super(label, image, link);
        this._mealType = mealType;
        this._cuisineType = cuisineType;
        this._calories = calories;
        this._ingredients = ingredients;
    }

    public get mealType(): string[] {
        return this._mealType;
    }

    public get cuisineType(): string[] {
        return this._cuisineType;
    }

    public get calories(): number {
        return this._calories;
    }

    public get ingredients(): Ingredient[] {
        return this._ingredients;
    }
}
