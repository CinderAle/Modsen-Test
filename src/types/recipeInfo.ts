import { Ingredient } from './ingredient';
import { RecipeItem } from './recipeItem';

export class RecipeInfo extends RecipeItem {
    private _mealType: string;
    private _cuisineType: string;
    private _calories: number;
    private _ingredients: Ingredient[];
    private _link: string;

    constructor(
        label: string,
        image: string,
        mealType: string,
        cuisineType: string,
        calories: number,
        ingredients: Ingredient[],
        link: string
    ) {
        super(label, image);
        this._mealType = mealType;
        this._cuisineType = cuisineType;
        this._calories = calories;
        this._ingredients = ingredients;
        this._link = link;
    }

    public get mealType(): string {
        return this._mealType;
    }

    public get cuisineType(): string {
        return this._cuisineType;
    }

    public get calories(): number {
        return this._calories;
    }

    public get ingredients(): Ingredient[] {
        return this._ingredients;
    }

    public get link(): string {
        return this._link;
    }
}
